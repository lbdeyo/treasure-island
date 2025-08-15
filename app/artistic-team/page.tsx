import Image from "next/image";

export default function ArtisticTeam() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">Artistic Team</h1>
                </div>

                {/* Jason Neulander */}
                <div className="max-w-3xl">
                    <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                        <div className="mb-4 md:mb-0 md:flex-shrink-0">
                            <Image
                                src="/img/jason-neulander.jpg"
                                alt="Jason Neulander"
                                width={200}
                                height={200}
                                className="border-5 border-black object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Jason Neulander</h2>
                            <p className="text-lg leading-relaxed">
                                Jason Neulander is an award-winning author, filmmaker, and theater artist based in Austin, Texas. He has directed and produced more than 50 projects. His play <i> The Intergalactic Nemesis</i> toured to more than 200 venues around the world between 2010 and 2017, including runs on Broadway and sold-out performances at the Kennedy Center, was featured on CONAN, and was adapted for television by PBS. His debut feature film <i>Fugitive Dreams</i> (2024) (100% Fresh on Rotten Tomatoes) is available to stream across all platforms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Johnny Dombrowski */}
                <div className="max-w-3xl">
                    <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                        <div className="mb-4 md:mb-0 md:flex-shrink-0">
                            <Image
                                src="/img/johnny-dombrowski.jpg"
                                alt="Johnny Dombrowski"
                                width={200}
                                height={200}
                                className="border-5 border-black object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Johnny Dombrowski</h2>
                            <p className="text-lg leading-relaxed">
                                Johnny Dombrowski is an award winning illustrator living in Brooklyn, NY, creating comics and illustrations older than he is. He's worked for clients including Activision, Universal Pictures, StudioCanal, Mutant, Mondo, Jack White, Phish, New York Times, The New Yorker, Epic Games, and many more. You can find more of his work at <a href="mailto:johnnydombrowski@gmail.com" className="text-blue-500 hover:text-blue-600">johnnydombrowski@gmail.com</a> or <a href="https://www.instagram.com/jdombrowski/" className="text-blue-500 hover:text-blue-600">@jdombrowski</a> on all social media platforms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sam Lipman */}
                <div className="max-w-3xl">
                    <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                        <div className="mb-4 md:mb-0 md:flex-shrink-0">
                            <Image
                                src="/img/sam-lipman.jpg"
                                alt="Sam Lipman"
                                width={200}
                                height={200}
                                className="border-5 border-black object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Sam Lipman</h2>
                            <p className="text-lg leading-relaxed">
                                Sam Lipman is an award-winning composer whose works have been performed by the New Jersey Symphony Orchestra, at Carnegie Hall, and Lincoln Center. His recent Unbroken Call—the first-ever commission by the Austin Symphony Orchestra—premiered with featured soloist Giveton Gelin of Jon Batiste's group, earning multiple standing ovations. His orchestral ballet MoonFall sold out its two-week premiere and earned 12 award nominations. Lipman has composed for film, including Terrence Malick and Richard Linklater, and teaches Film Scoring at the University of Texas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
