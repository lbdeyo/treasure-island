import { client } from './sanity'

// Define types for our page content
export interface PageContent {
    _id: string
    pageId: string
    title: string
    backgroundImage?: {
        asset: {
            _ref: string
            _type: 'reference'
        }
        alt?: string
    }
    sections: Section[]
}

export interface Section {
    _type: 'textSection'
    content: any[] // Rich text content from Sanity
    image?: {
        asset: {
            _ref: string
            _type: 'reference'
        }
        alt?: string
        position?: 'left' | 'right' | 'center'
        width?: number
        height?: number
    }
}

// Define types for text-only page content
export interface PageTextContent {
    _id: string
    pageId: string
    title: string
    paragraphs: Paragraph[]
}

export interface Paragraph {
    content: any[] // Rich text content from Sanity
    order: number
}

// Query to get page content by pageId
const pageContentQuery = `
  *[_type == "pageContent" && pageId == $pageId][0] {
    _id,
    pageId,
    title,
    backgroundImage {
      asset,
      alt
    },
    sections[] {
      _type,
      content,
      image {
        asset,
        alt,
        position,
        width,
        height
      }
    }
  }
`

// Query to get text-only page content by pageId
const pageTextQuery = `
  *[_type == "pageText" && pageId == $pageId][0] {
    _id,
    pageId,
    title,
    paragraphs[] {
      content,
      order
    } | order(order asc)
  }
`

// Function to fetch page content
export async function getPageContent(pageId: string): Promise<PageContent | null> {
    try {
        const content = await client.fetch(pageContentQuery, { pageId })
        return content
    } catch (error) {
        console.error('Error fetching page content:', error)
        return null
    }
}

// Function to fetch text-only page content
export async function getPageTextContent(pageId: string): Promise<PageTextContent | null> {
    try {
        const content = await client.fetch(pageTextQuery, { pageId })
        return content
    } catch (error) {
        console.error('Error fetching page text content:', error)
        return null
    }
}

// Helper function to convert Sanity rich text to HTML (you can customize this)
export function richTextToHtml(richText: any[]): string {
    if (!richText) return ''

    return richText
        .map((block) => {
            if (block._type === 'block') {
                const children = block.children
                    ?.map((child: any) => {
                        let text = child.text || ''

                        // Handle text formatting
                        if (child.marks?.includes('strong')) {
                            text = `<strong>${text}</strong>`
                        }
                        if (child.marks?.includes('em')) {
                            text = `<em>${text}</em>`
                        }

                        return text
                    })
                    .join('')

                // Handle different block styles
                switch (block.style) {
                    case 'h1':
                        return `<h1>${children}</h1>`
                    case 'h2':
                        return `<h2>${children}</h2>`
                    case 'h3':
                        return `<h3>${children}</h3>`
                    default:
                        return `<p>${children}</p>`
                }
            }

            return ''
        })
        .join('')
}
