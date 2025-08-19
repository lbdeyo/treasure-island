import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react'
import { getPageTextContent } from '@/lib/sanityQueries'

// Custom components for rendering rich text
const portableTextComponents = {
    block: {
        normal: ({ children }: any) => (
            <p className="text-lg leading-relaxed mb-6">{children}</p>
        ),
    },
    marks: {
        em: ({ children }: any) => <em>{children}</em>,
        strong: ({ children }: any) => <strong>{children}</strong>,
        link: ({ children, value }: any) => (
            <Link href={value.href} className="text-blue-600 hover:underline">
                {children}
            </Link>
        ),
    },
}

export default async function About() {
    // Fetch text content from Sanity
    const textContent = await getPageTextContent('about')

    // Use Sanity title if available, otherwise fallback
    const pageTitle = textContent?.title || "About the Play"

    // Get paragraphs from Sanity, sorted by order
    const paragraphs = textContent?.paragraphs || []

    return (
        <div className="bg-[url('/img/art/janey.jpg')] bg-cover bg-top bg- ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="space-y-8">
                    {/* Page Header */}
                    <div className="relative max-w-3xl p-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">
                        <div className="relative z-20">
                            <h1 className="mb-8 pt-8">{pageTitle}</h1>

                            {/* Main Description */}
                            <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
                                <div className="max-w-3xl flex-1">
                                    {paragraphs.length > 0 ? (
                                        // Render Sanity content
                                        paragraphs.map((paragraph, index) => (
                                            <div key={index}>
                                                <PortableText
                                                    value={paragraph.content}
                                                    components={portableTextComponents}
                                                />
                                                {/* Insert images at specific positions */}
                                                {index === 1 && (
                                                    <Image
                                                        src="/img/art/ghost-1.png"
                                                        alt="Ghost illustration"
                                                        width={400}
                                                        height={500}
                                                        className="object-contain float-right"
                                                    />
                                                )}
                                                {index === 6 && (
                                                    <div className="lg:flex-shrink-0 mt-8 mb-6 lg:mt-0 flex justify-center lg:justify-start float-left">
                                                        <Image
                                                            src="/img/art/ghost-2.png"
                                                            alt="Ghost illustration"
                                                            width={400}
                                                            height={500}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        // Fallback content if no Sanity content
                                        <>
                                            <p className="text-lg leading-relaxed mb-6">
                                                When his daughter Scarlett was nine years old, Jason Neulander read <i>Treasure Island</i> aloud to her. He was surprised to discover that he was as caught up in the story as she was. Flash forward several years.</p>

                                            <p className="text-lg leading-relaxed mb-6">Summer, 2024, Jason and Simon Shaw were biking together in the Berkshires and Simon asked Jason if he'd ever consider putting a new live show together along the lines of <i>The Intergalactic Nemesis</i>. The timing of the discussion was perfect because Jason was looking for his next project. His immediate thought: adapt <i>Treasure Island</i>.</p>

                                            <Image
                                                src="/img/art/ghost-1.png"
                                                alt="Ghost illustration"
                                                width={400}
                                                height={500}
                                                className="object-contain float-right"
                                            />

                                            <p className="text-lg leading-relaxed mb-6">But Jason wanted the show to be different from <i>The Intergalactic Nemesis</i> in a few ways. First, he wanted the art to have a decidedly retro look. Second, he wanted the performers to not only voice all the character, but also, and simultaneously, perform the sound effects and music.</p>

                                            <p className="text-lg leading-relaxed mb-6">At a dinner with his friend Jeff Pinsker, Jason mentioned the new project. Jeff immediately contacted Rob Jones at Mondo who put Jason in touch with Johnny Dombrowski. Jason took one look at Johnny's Instagram feed and knew this was the guy.</p>

                                            <p className="text-lg leading-relaxed mb-6">With an artist secured, Jason contacted his old friend Sam Lipman to ask if he could compose the music. Sam said yes immediately. Jason then asked Buzz Moran, the genius behind the sound effects for <i>The Intergalactic Nemesis</i> , if he'd come on board as sound designer. A few months later, Lee Duhig joined as colorist and David Hutchison as letterer for the book version.</p>

                                            <p className="text-lg leading-relaxed mb-6">The only thing left to do was secure a premiere. Jason called the programmer for Austin's Paramount Theater, Lietza Brass, and before he could finish describing the show, she committed to a date. September 26, 2026.</p>

                                            <p className="text-lg leading-relaxed mb-6">A show was born.</p>

                                            <div className="lg:flex-shrink-0 mt-8 mb-6 lg:mt-0 flex justify-center lg:justify-start float-left">
                                                <Image
                                                    src="/img/art/ghost-2.png"
                                                    alt="Ghost illustration"
                                                    width={400}
                                                    height={500}
                                                    className="object-contain"
                                                />
                                            </div>

                                            <p className="text-lg leading-relaxed mb-6">The purpose of this website is to serve both venues who might book the tour and audience members who might want to take a deeper dive. Don't hesitate to explore! And by all means, <Link href="/contact">contact us</Link> if you have any questions or simply want to get in touch.</p>

                                            <p className="text-lg leading-relaxed mb-12">See you at the theater.</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
}
