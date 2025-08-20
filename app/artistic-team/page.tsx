import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react'
import { getPageTextContent } from '@/lib/sanityQueries'
import { artisticTeamPortableTextComponents } from '@/lib/portableTextComponents'

export default async function ArtisticTeam() {
    // Fetch text content from Sanity
    const textContent = await getPageTextContent('artistic-team')

    // Use Sanity title if available, otherwise fallback
    const pageTitle = textContent?.title || "Artistic Team"

    // Get paragraphs from Sanity, sorted by order
    const paragraphs = textContent?.paragraphs || []
    return (
        <div className=" bg-[url('/img/art/long-john-parchment-burn.jpg')] bg-cover bg-top bg-[min-height:100vh]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5  ">
                <div className="max-w-3xl bg-[#D4D6AD] p-5 mb-6 border-3 border-black">
                    {paragraphs.length > 0 ? (
                        // Find and render the production credits paragraph
                        paragraphs
                            .filter((paragraph) => {
                                // Find paragraphs that contain production credits
                                const hasProductionCredits = paragraph.content?.some((block: any) =>
                                    block._type === 'block' &&
                                    block.children?.some((child: any) =>
                                        child.text?.includes('Chemistry Laboratories') ||
                                        child.text?.includes('Shaw Entertainment Group') ||
                                        child.text?.includes('Jason Neulander Production') ||
                                        child.text?.includes('Executive Producers')
                                    )
                                );
                                return hasProductionCredits;
                            })
                            .slice(0, 1) // Only take the first production credits paragraph
                            .map((paragraph, index) => (
                                <div key={index} className="text-lg md:text-xl text-black leading-tight text-center">
                                    <PortableText
                                        value={paragraph.content}
                                        components={{
                                            block: {
                                                normal: ({ children }: any) => (
                                                    <p className="text-lg md:text-xl text-black leading-tight text-center">{children}</p>
                                                ),
                                            },
                                            marks: {
                                                strong: ({ children }: any) => <strong>{children}</strong>,
                                            },
                                        }}
                                    />
                                </div>
                            ))
                    ) : (
                        // Fallback production credits
                        <p className="text-lg md:text-xl text-black leading-tight text-center">
                            Chemistry Laboratories and Shaw Entertainment Group Present<br />
                            A Jason Neulander Production<br />
                            TREASURE ISLAND REIMAGINED: JANE HAWKINS AND THE PIRATE'S GOLD<br />
                            Produced by Jason Neulander and Simon Shaw<br />
                            Executive Producers - Peggy O'Shaughnessy, Jill Wilkinson, Michael Breen & Stephanie Hunter
                        </p>
                    )}
                </div>
                <div className="relative max-w-3xl p-5 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">

                    <div className="relative z-20">

                        <div className="space-y-8 max-w-3xl p-5">
                            {/* Page Header */}
                            <div className="max-w-2xl mt-3">
                                <h1>{pageTitle}</h1>
                            </div>

                            {paragraphs.length > 0 ? (
                                // Render Sanity content with team member images, filtering out production credits
                                paragraphs
                                    .filter((paragraph) => {
                                        // Filter out paragraphs that contain production credits
                                        const hasProductionCredits = paragraph.content?.some((block: any) =>
                                            block._type === 'block' &&
                                            block.children?.some((child: any) =>
                                                child.text?.includes('Chemistry Laboratories') ||
                                                child.text?.includes('Shaw Entertainment Group') ||
                                                child.text?.includes('Jason Neulander Production') ||
                                                child.text?.includes('Executive Producers')
                                            )
                                        );
                                        return !hasProductionCredits;
                                    })
                                    .map((paragraph, index) => (
                                        <div key={index}>
                                            {/* Insert team member images at specific positions */}
                                            {index === 0 && (
                                                // Jason Neulander
                                                <div className="max-w-2xl mb-16">
                                                    <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                                        <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                                            <Image
                                                                src="/img/jason-neulander.jpg"
                                                                alt="Jason Neulander"
                                                                width={200}
                                                                height={200}
                                                                className="object-cover mt-3"
                                                            />
                                                        </div>
                                                        <div>
                                                            <PortableText
                                                                value={paragraph.content}
                                                                components={artisticTeamPortableTextComponents}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {index === 1 && (
                                                // Johnny Dombrowski
                                                <div className="max-w-2xl my-16">
                                                    <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                                        <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                                            <Image
                                                                src="/img/johnny-dombrowski.jpg"
                                                                alt="Johnny Dombrowski"
                                                                width={200}
                                                                height={200}
                                                                className="object-cover mt-3"
                                                            />
                                                        </div>
                                                        <div>
                                                            <PortableText
                                                                value={paragraph.content}
                                                                components={artisticTeamPortableTextComponents}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {index === 2 && (
                                                // Sam Lipman
                                                <div className="max-w-3xl my-16">
                                                    <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                                        <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                                            <Image
                                                                src="/img/sam-lipman.jpg"
                                                                alt="Sam Lipman"
                                                                width={200}
                                                                height={200}
                                                                className="object-cover mt-3"
                                                            />
                                                        </div>
                                                        <div>
                                                            <PortableText
                                                                value={paragraph.content}
                                                                components={artisticTeamPortableTextComponents}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {index === 3 && (
                                                // Lee Duhig
                                                <div className="max-w-3xl my-16">
                                                    <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                                        <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                                            <Image
                                                                src="/img/lee-duhig.jpg"
                                                                alt="Lee Duhig"
                                                                width={200}
                                                                height={200}
                                                                className="object-cover mt-3"
                                                            />
                                                        </div>
                                                        <div>
                                                            <PortableText
                                                                value={paragraph.content}
                                                                components={artisticTeamPortableTextComponents}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {index === 4 && (
                                                // Buzz Moran
                                                <div className="max-w-3xl my-16">
                                                    <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                                        <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                                            <Image
                                                                src="/img/buzz-moran.jpg"
                                                                alt="Buzz Moran"
                                                                width={200}
                                                                height={200}
                                                                className="object-cover mt-3"
                                                            />
                                                        </div>
                                                        <div>
                                                            <PortableText
                                                                value={paragraph.content}
                                                                components={artisticTeamPortableTextComponents}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {/* For any additional paragraphs without specific team member images */}
                                            {index > 4 && (
                                                <div className="max-w-3xl my-16">
                                                    <PortableText
                                                        value={paragraph.content}
                                                        components={artisticTeamPortableTextComponents}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))
                            ) : (
                                // Fallback content if no Sanity content
                                <>
                                    {/* Jason Neulander */}
                                    <div className="max-w-2xl mb-16">
                                        <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                            <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                                <Image
                                                    src="/img/jason-neulander.jpg"
                                                    alt="Jason Neulander"
                                                    width={200}
                                                    height={200}
                                                    className="object-cover mt-3"
                                                />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-bold">Jason Neulander</h2>
                                                <h2 className="text-2xl font-bold mb-4">Writer, director, producer</h2>
                                                <p className="text-lg leading-relaxed">
                                                    Content is being loaded from Sanity Studio. Please check back soon.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div >
        </div>

    );
}
