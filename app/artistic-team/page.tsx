import Image from "next/image";

export default function ArtisticTeam() {
    return (
        <div className=" bg-[url('/img/art/long-john-parchment-burn.jpg')] bg-cover bg-top">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5  ">
                <div className="relative max-w-3xl p-5">
                    <div aria-hidden className="absolute inset-0 z-0 pointer-events-none bg-[url('/img/torn-paper-mask-2.png')] [background-size:100%_100%] bg-no-repeat opacity-50 [filter:blur(28px)_brightness(0.2)] transform translate-y-[5px] scale-[1.015]"></div>
                    <div aria-hidden className="absolute inset-0 z-10 pointer-events-none bg-[url('/img/art/paper-light.jpg')] bg-top bg-repeat bg-[length:1000px_auto] [mask-image:url('/img/torn-paper-mask-2.png')] [mask-size:100%_100%] [-webkit-mask-image:url('/img/torn-paper-mask-2.png')] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]"></div>
                    <div className="relative z-20">

                        <div className="space-y-8 max-w-3xl p-5">
                            {/* Page Header */}
                            <div className="max-w-2xl mt-6">
                                <h1>Artistic Team</h1>
                            </div>

                            {/* Jason Neulander */}
                            <div className="max-w-2xl mb-16 ">
                                <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                    <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                        <Image
                                            src="/img/jason-neulander.jpg"
                                            alt="Jason Neulander"
                                            width={200}
                                            height={200}
                                            className="border-5 border-black object-cover mt-3"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold ">Jason Neulander</h2>
                                        <h2 className="text-2xl font-bold mb-4">Writer, director, producer</h2>

                                        <p className="text-lg leading-relaxed">
                                            Jason Neulander is an award-winning author, filmmaker, and theater artist based in Austin, Texas. He has directed and produced more than 50 projects. His play <i> The Intergalactic Nemesis</i> toured to more than 200 venues around the world between 2010 and 2017, including runs on Broadway and sold-out performances at the Kennedy Center, was featured on CONAN, and was adapted for television by PBS. His debut feature film <i>Fugitive Dreams</i> (2024) (100% Fresh on Rotten Tomatoes) is available to stream across all platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Johnny Dombrowski */}
                            <div className="max-w-2xl my-16 ">
                                <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                    <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                        <Image
                                            src="/img/johnny-dombrowski.jpg"
                                            alt="Johnny Dombrowski"
                                            width={200}
                                            height={200}
                                            className="border-5 border-black object-cover mt-3"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold">Johnny Dombrowski</h2>
                                        <h2 className="text-2xl font-bold mb-4">Art director and illustrator</h2>
                                        <p className="text-lg leading-relaxed">
                                            Johnny Dombrowski is an award winning illustrator living in Brooklyn, NY, creating comics and illustrations older than he is. He's worked for clients including Activision, Universal Pictures, StudioCanal, Mutant, Mondo, Jack White, Phish, New York Times, The New Yorker, Epic Games, and many more. You can find more of his work at <a href="mailto:johnnydombrowski@gmail.com" className="text-blue-500 hover:text-blue-600">johnnydombrowski@gmail.com</a> or <a href="https://www.instagram.com/jdombrowski/" className="text-blue-500 hover:text-blue-600">@jdombrowski</a> on all social media platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Sam Lipman */}
                            <div className="max-w-3xl my-16 ">
                                <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                    <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                        <Image
                                            src="/img/sam-lipman.jpg"
                                            alt="Sam Lipman"
                                            width={200}
                                            height={200}
                                            className="border-5 border-black object-cover mt-3"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold ">Sam Lipman</h2>
                                        <h2 className="text-2xl font-bold mb-4">Composer</h2>

                                        <p className="text-lg leading-relaxed">
                                            Sam Lipman is an award-winning composer whose works have been performed by the New Jersey Symphony Orchestra, at Carnegie Hall, and Lincoln Center. His recent <i>Unbroken Call</i>—the first-ever commission by the Austin Symphony Orchestra—premiered with featured soloist Giveton Gelin of Jon Batiste's group, earning multiple standing ovations. His orchestral ballet <i>MoonFall</i> sold out its two-week premiere and earned 12 award nominations. Lipman has composed for film, including Terrence Malick and Richard Linklater, and teaches Film Scoring at the University of Texas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Lee Duhig */}
                            <div className="max-w-3xl my-16     ">
                                <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                    <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                        <Image
                                            src="/img/lee-duhig.jpg"
                                            alt="Lee Duhig"
                                            width={200}
                                            height={200}
                                            className="border-5 border-black object-cover mt-3"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold">Lee Duhig</h2>
                                        <h2 className="text-2xl font-bold mb-4">Colorist</h2>

                                        <p className="text-lg leading-relaxed">
                                            Lee Duhig is a prolifically-humble digital color artist who has worked with seemingly every comic book publisher you can name in less than a minute. His longest stint is certainly with Marvel, where he (under the name "GURU-eFX") has colored hundreds of titles and thousands of pages for two and a half decades and to this day. He enjoys collecting more physical media than one safely or reasonably should. Like all great nerds, he reside in the Lonestar state.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Buzz Moran */}
                            <div className="max-w-3xl my-16     ">
                                <div className="flex flex-col md:flex-row md:gap-6 mb-8">
                                    <div className="mb-4 md:mb-0 md:flex-shrink-0">
                                        <Image
                                            src="/img/buzz-moran.jpg"
                                            alt="Buzz Moran"
                                            width={200}
                                            height={200}
                                            className="border-5 border-black object-cover mt-3"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold">Buzz Moran</h2>
                                        <h2 className="text-2xl font-bold mb-4">Sound Designer</h2>

                                        <p className="text-lg leading-relaxed">
                                            Buzz Moran works mainly in the field of sound, including theatrical sound design, recorded music, performing live sound effects, and recording the sound of fields. Buzz has worked as Music Editor on numerous films, including <i>Hit Man</i>, <i>A Scanner Darkly</i>, and <i>Before Midnight</i>. He has worked extensively with Jason Neulander since the mid-90s, including creating the sound effects for the <i>Intergalactic Nemesis</i> trilogy. The guy we're talking about, Buzz Moran, also hosted a PBS web series called <i>What's That, Buzz?</i>, which is accessible on the internet thanks to technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div>

    );
}
