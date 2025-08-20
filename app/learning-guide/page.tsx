import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react'
import { getPageTextContent } from '@/lib/sanityQueries'
import { basePortableTextComponents } from '@/lib/portableTextComponents'

// Learning guide specific components (with large title support)
const learningGuidePortableTextComponents = {
    ...basePortableTextComponents,
    block: {
        ...basePortableTextComponents.block,
        h1: ({ children }: any) => (
            <h1 className="mb-6 pt-5" style={{ fontSize: '5rem' }}>{children}</h1>
        ),
    },
}

export default async function LearningGuide() {
    // Fetch text content from Sanity
    const textContent = await getPageTextContent('learning-guide')

    // Use Sanity title if available, otherwise fallback
    const pageTitle = textContent?.title || "Complete Learning Guide"

    // Get paragraphs from Sanity, sorted by order
    const paragraphs = textContent?.paragraphs || []

    return (
        <div className="bg-[url('/img/art/p18-burn.jpg')] bg-cover bg-top bg-repeat min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="bg-[url('/img/art/paper-light.jpg')] bg-cover bg-top bg-repeat min-h-screen max-w-3xl border-3 border-black">
                    <div className="space-y-8">
                        {/* Complete Learning Guide */}
                        <div className="max-w-3xl bg-opacity-100 p-7">
                            <h1 className="mb-6 pt-5" style={{ fontSize: '5rem' }}>{pageTitle}</h1>
                            <p className="text-lg leading-relaxed mb-8">
                                <Image src="/img/art/select-13.jpg" alt="learning eye" width={300} height={300} className="border-1 border-black mb-5 md:float-right md:ml-5" />
                                <a href="#" className="font-semibold">Download</a> the guide as a pdf.
                            </p>

                            {paragraphs.length > 0 ? (
                                // Render Sanity content
                                paragraphs.map((paragraph, index) => (
                                    <div key={index}>
                                        <PortableText
                                            value={paragraph.content}
                                            components={learningGuidePortableTextComponents}
                                        />
                                        {/* Insert images at specific positions based on content flow */}
                                        {index === 2 && (
                                            <Image src="/img/art/long-john-silver-char-sheet.jpg" alt="Long John Silver Character Sheet" width={1000} height={1000} className="border-3 border-black mb-5" />
                                        )}
                                        {index === 8 && (
                                            <Image src="/img/art/p17-insert.jpg" alt="Performance Scene" width={300} height={300} className="border-3 border-black mb-5 md:float-right md:ml-5" />
                                        )}
                                        {index === 15 && (
                                            <Image src="/img/art/select-11.jpg" alt="Scene from Performance" width={1000} height={1000} className="border-3 border-black mb-5" />
                                        )}
                                        {index === 20 && (
                                            <Image src="/img/art/still-1.jpg" alt="Historical Context" width={1000} height={1000} className="border-3 border-black mb-5" />
                                        )}
                                        {index === 24 && (
                                            <Image src="/img/art/still-4.jpg" alt="Nautical Scene" width={1000} height={1000} className="border-3 border-black mb-5" />
                                        )}
                                    </div>
                                ))
                            ) : (
                                // Fallback content if no Sanity content
                                <>


                                    <h3 id="overview" className="text-2xl font-bold mb-4">Educational Programming and Learning Guide</h3>

                                    <p className="text-lg leading-relaxed mb-6">
                                        Jane Hawkins and the Pirate's Gold is Jason Neulander's newest "live-action graphic novel." Adapted from Robert Louis Stevenson's classic pirate story Treasure Island, this production features live voices, sound effects, and cinematic score as more than 1,200 comic-book images play out sequentially, projected on a huge screen, to tell the story in a multimedia spectacle like none other.
                                    </p>

                                    <Image src="/img/art/long-john-silver-char-sheet.jpg" alt="Learning Guide Cover" width={1000} height={1000} className="border-3 border-black mb-5" />

                                    <p className="text-lg leading-relaxed mb-4">
                                        <strong>Recommended ages:</strong> Grades 3 and up, including middle- and high-school. Contact us for the graphic novel to use in the classroom before or after seeing the show.
                                    </p>

                                    <p className="text-lg leading-relaxed mb-4">
                                        Matinee performances for schools are available in the full-length, two-act version of the show (2 hours including intermission) or an abridged version (55 minutes).
                                    </p>

                                    <p className="text-lg leading-relaxed mb-6">
                                        This study guide is modeled on a program at the Kennedy Center.
                                    </p>

                                    <p className="text-lg leading-relaxed mb-6 italic">
                                        The year is 1754. The place, the western shores of Scotland. Jane Hawkins, twelve years old, works at a sleepy seaside inn. When a sinister vagabond arrives with a mysterious trunk, Jane's humdrum life swerves towards adventure…
                                    </p>

                                    <p className="text-lg leading-relaxed mb-6">
                                        Content is being loaded from Sanity Studio. Please check back soon or{' '}
                                        <Link href="/contact" className="text-blue-600 hover:underline">
                                            contact us
                                        </Link>{' '}
                                        if you continue to see this message.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

