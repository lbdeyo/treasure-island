import { PortableText } from '@portabletext/react'
import { getPageTextContent } from '@/lib/sanityQueries'
import { basePortableTextComponents } from '@/lib/portableTextComponents'

export default async function MarketingManual() {
    // Fetch text content from Sanity
    const textContent = await getPageTextContent('marketing-manual')

    // Use Sanity title if available, otherwise fallback
    const pageTitle = textContent?.title || "Marketing Manual"

    // Get paragraphs from Sanity, sorted by order
    const paragraphs = textContent?.paragraphs || []

    return (
        <div className="bg-[url('/img/art/marketing-manual-bg.jpg')] bg-cover bg-top bg-repeat min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-3xl bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5">
                    <div className="space-y-8">
                        {/* Page Header */}
                        <div className="max-w-3xl">
                            <h1 className="pt-5 ">{pageTitle}</h1>
                        </div>

                        {/* Content */}
                        <div className="max-w-3xl">
                            {paragraphs.length > 0 ? (
                                // Render Sanity content
                                paragraphs.map((paragraph, index) => (
                                    <div key={index}>
                                        <PortableText
                                            value={paragraph.content}
                                            components={basePortableTextComponents}
                                        />
                                    </div>
                                ))
                            ) : (
                                // Fallback content if no Sanity content
                                <p className="text-lg leading-relaxed">Coming soon.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
