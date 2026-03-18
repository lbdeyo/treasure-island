export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-08-19'

// Defaults match `lib/sanity.ts` so local Studio can run without requiring
// env vars (you can still override these via .env.local).
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'jupljhqb'
