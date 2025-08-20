import Image from "next/image";
import { PortableText } from '@portabletext/react'
import { getPageTextContent } from '@/lib/sanityQueries'
import { storePortableTextComponents } from '@/lib/portableTextComponents'

export default async function Store() {
    // Fetch text content from Sanity
    const textContent = await getPageTextContent('store')

    // Use Sanity title if available, otherwise fallback
    const pageTitle = textContent?.title || "Ye Olde Treasure Store"

    // Get paragraphs from Sanity, sorted by order
    const paragraphs = textContent?.paragraphs || []

    return (
        <div className="bg-[url('/img/art/p18.jpg')] bg-cover bg-top bg-repeat min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-3xl bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5">
                    {/* Page Header - Full Width */}
                    <div className="mb-8">
                        <h1 className="pt-5 mb-8">{pageTitle}</h1>
                    </div>

                    {/* Book and Content Layout */}
                    <div className="flex flex-col lg:flex-row gap-6 items-start">
                        {/* Book Cover Image */}
                        <div className="flex-shrink-0">
                            <Image src="/img/art/cover-art.jpg" alt="Treasure Island Reimagined Book Cover" width={300} height={375} className="max-w-full h-auto shadow-lg" />
                        </div>

                        {/* Body Text */}
                        <div className="flex-1">

                            {paragraphs.length > 0 ? (
                                // Render Sanity content, filtering out the main header
                                paragraphs.map((paragraph, index) => {
                                    // Check if this paragraph contains the main header text
                                    const hasMainHeader = paragraph.content?.some((block: any) =>
                                        block._type === 'block' &&
                                        block.children?.some((child: any) =>
                                            child.text?.includes(pageTitle)
                                        )
                                    );

                                    // Skip rendering if it contains the main header
                                    if (hasMainHeader) return null;

                                    return (
                                        <div key={index}>
                                            <PortableText
                                                value={paragraph.content}
                                                components={storePortableTextComponents}
                                            />
                                        </div>
                                    );
                                })
                            ) : (
                                // Fallback content if no Sanity content
                                <>
                                    <h2 className="text-2xl font-bold mb-4">Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold</h2>
                                    <p className="text-xl leading-relaxed">Coming soon! The graphic novel goes on sale spring 2026</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
