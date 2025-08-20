import { PortableText } from '@portabletext/react'
import { getPageTextContent } from '@/lib/sanityQueries'
import { sampleVideoPortableTextComponents } from '@/lib/portableTextComponents'

export default async function SampleVideo() {
    // Fetch text content from Sanity
    const textContent = await getPageTextContent('sample-video')

    // Use Sanity title if available, otherwise fallback
    const pageTitle = textContent?.title || "Sample Video"

    // Get paragraphs from Sanity, sorted by order
    const paragraphs = textContent?.paragraphs || []
    return (
        <div className="bg-[url('/img/art/p19-insert.jpg')] bg-cover bg-top bg-repeat min-h-screen">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-8">
                    {/* Page Header */}
                    <div className="relative max-w-3xl p-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">

                        <div className="relative z-20">
                            <h1 className=" pt-5 " style={{ fontSize: '5rem' }}>{pageTitle}</h1>

                            {/* Sanity Content or Fallback */}
                            {paragraphs.length > 0 ? (
                                // Render Sanity content
                                <div>
                                    {paragraphs.map((paragraph, index) => {
                                        // Insert video after first paragraph (password info)
                                        if (index === 0) {
                                            return (
                                                <div key={index}>
                                                    <PortableText
                                                        value={paragraph.content}
                                                        components={sampleVideoPortableTextComponents}
                                                    />

                                                    {/* Video Embed */}
                                                    <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
                                                        <iframe
                                                            src="https://player.vimeo.com/video/1111353884?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                                            frameBorder="0"
                                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                            title="TIR Demo video v3"
                                                        />
                                                    </div>
                                                    <script src="https://player.vimeo.com/api/player.js" async />
                                                </div>
                                            )
                                        } else {
                                            // Use special credits styling for the last paragraph
                                            const isLastParagraph = index === paragraphs.length - 1;
                                            const creditsComponents = {
                                                ...sampleVideoPortableTextComponents,
                                                block: {
                                                    ...sampleVideoPortableTextComponents.block,
                                                    normal: ({ children }: any) => (
                                                        <p className="text-xl text-center text-black p-5">{children}</p>
                                                    ),
                                                },
                                            };

                                            return (
                                                <div key={index}>
                                                    <PortableText
                                                        value={paragraph.content}
                                                        components={isLastParagraph ? creditsComponents : sampleVideoPortableTextComponents}
                                                    />
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            ) : (
                                // Fallback content if no Sanity content
                                <>
                                    <p className="text-2xl text-black pt-3 pb-5">
                                        Password: Janey
                                    </p>

                                    {/* Video Embed */}
                                    <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
                                        <iframe
                                            src="https://player.vimeo.com/video/1111353884?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                            title="TIR Demo video v3"
                                        />
                                    </div>
                                    <script src="https://player.vimeo.com/api/player.js" async />

                                    <p className="text-xl text-center text-black p-5">
                                        Matthew Armbruster -  voice and cello •
                                        Danu Mara - voices and sound effects<br />
                                        Jason Neulander - voices and keyboards •
                                        Marc Pouhé - voices and sound effects<br />
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
