import { NextRequest, NextResponse } from 'next/server'

const INTEREST_LABELS = {
  general: 'General audience',
  venues: 'Venues/presenters',
} as const

const authHeader = (apiKey: string) =>
  `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`

// In-memory cache for interest ID mapping (persists per serverless instance)
let cachedInterestIds: Record<string, string> | null = null

async function getInterestIds(
  listId: string,
  dc: string,
  apiKey: string
): Promise<Record<string, string>> {
  if (cachedInterestIds) return cachedInterestIds

  const baseUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}`
  const headers = { Authorization: authHeader(apiKey) }

  // First get all interest categories (IDs in API can differ from embed form)
  const catRes = await fetch(`${baseUrl}/interest-categories?count=100`, { headers })
  if (!catRes.ok) {
    const errText = await catRes.text()
    const err = new Error(`Mailchimp interest-categories: ${catRes.status} ${errText}`) as Error & { status?: number; detail?: string }
    err.status = catRes.status
    err.detail = errText
    throw err
  }
  const catData = (await catRes.json()) as { categories: Array<{ id: string; title: string }> }
  const categories = catData.categories || []
  const categoryId = categories[0]?.id
  if (!categoryId) {
    throw new Error('Mailchimp: no interest categories found for this list')
  }

  const intRes = await fetch(
    `${baseUrl}/interest-categories/${categoryId}/interests?count=100`,
    { headers }
  )
  if (!intRes.ok) {
    const errText = await intRes.text()
    const err = new Error(`Mailchimp interests: ${intRes.status} ${errText}`) as Error & { status?: number; detail?: string }
    err.status = intRes.status
    err.detail = errText
    throw err
  }
  const intData = (await intRes.json()) as { interests: Array<{ id: string; name: string }> }
  const map: Record<string, string> = {}
  for (const i of intData.interests || []) {
    if (i.name === INTEREST_LABELS.general) map.general = i.id
    if (i.name === INTEREST_LABELS.venues) map.venues = i.id
  }
  cachedInterestIds = map
  return map
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const dc = process.env.MAILCHIMP_DC ?? 'us6'

  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { error: 'Newsletter signup is not configured.' },
      { status: 503 }
    )
  }

  let body: {
    email?: string
    firstName?: string
    lastName?: string
    generalAudience?: boolean
    venuesPresenters?: boolean
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
  const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : ''

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }

  if (!firstName) {
    return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
  }

  const generalAudience = Boolean(body.generalAudience)
  const venuesPresenters = Boolean(body.venuesPresenters)
  if (!generalAudience && !venuesPresenters) {
    return NextResponse.json(
      { error: 'Please choose at least one option: General audience and/or Venues/presenters.' },
      { status: 400 }
    )
  }

  let interestIds: Record<string, string>
  try {
    interestIds = await getInterestIds(audienceId, dc, apiKey)
  } catch (e) {
    const err = e as Error & { status?: number; detail?: string }
    console.error('Mailchimp getInterestIds:', err.message)
    const isDev = process.env.NODE_ENV === 'development'
    const message = isDev && err.message
      ? err.message
      : 'Could not load signup options. Please try again later.'
    return NextResponse.json(
      { error: message },
      { status: err.status && err.status >= 400 && err.status < 600 ? err.status : 502 }
    )
  }

  const interests: Record<string, boolean> = {}
  if (interestIds.general) interests[interestIds.general] = generalAudience
  if (interestIds.venues) interests[interestIds.venues] = venuesPresenters

  const doubleOptIn = process.env.MAILCHIMP_DOUBLE_OPT_IN === 'true'
  const memberPayload = {
    email_address: email,
    status: doubleOptIn ? 'pending' : 'subscribed',
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
    interests: Object.keys(interests).length ? interests : undefined,
  }

  const memberId = Buffer.from(email.toLowerCase()).toString('base64url')
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members/${memberId}`

  const putRes = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
    },
    body: JSON.stringify(memberPayload),
  })

  if (!putRes.ok) {
    const err = await putRes.json().catch(() => ({})) as { detail?: string; title?: string }
    const msg = err.detail ?? err.title ?? putRes.statusText
    if (putRes.status === 400 && String(msg).toLowerCase().includes('already')) {
      return NextResponse.json(
        { error: 'This email is already subscribed. You can update your preferences in the link we sent you.' },
        { status: 400 }
      )
    }
    console.error('Mailchimp PUT member:', putRes.status, msg)
    return NextResponse.json(
      { error: 'Could not complete signup. Please try again later.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true, doubleOptIn })
}
