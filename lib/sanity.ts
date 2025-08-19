import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'jupljhqb', // Your project ID from the installation command
    dataset: 'production', // Your dataset from the installation command
    useCdn: true, // Enable CDN for faster, cached responses
    apiVersion: '2024-01-01', // Use current date for API version
})

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: any) {
    return builder.image(source)
}
