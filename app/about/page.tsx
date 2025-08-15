import Image from "next/image";

export default function About() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="max-w-3xl">
                    <h1 className=" mb-8">About the Play</h1>
                </div>




                {/* Main Description */}
                <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
                    <div className="max-w-3xl flex-1">
                        <p className="text-lg leading-relaxed mb-6">
                            When his daughter Scarlett was nine years old, Jason Neulander read <i>Treasure Island</i> aloud to her. He was surprised to discover that he was as caught up in the story as she was. Flash forward several years.</p>

                        <p className="text-lg leading-relaxed mb-6">Summer, 2024, Jason and Simon Shaw were biking together in the Berkshires and Simon asked Jason if he'd ever consider putting a new live show together along the lines of <i>The Intergalactic Nemesis</i>. The timing of the discussion was perfect because Jason was looking for his next project. His immediate thought: adapt <i>Treasure Island</i>.</p>

                        <p className="text-lg leading-relaxed mb-6">But Jason wanted the show to be different from <i>The Intergalactic Nemesis</i> in a few ways. First, he wanted the art to have a decidedly retro look. Second, he wanted the performers to not only voice all the character, but also, and simultaneously, perform the sound effects and music.</p>

                        <p className="text-lg leading-relaxed mb-6">At a dinner with his friend Jeff Pinsker, Jason mentioned the new project. Jeff immediately contacted Rob Jones at Mondo who put Jason in touch with Johnny Dombrowski. Jason took one look at Johnny's Instagram feed and knew this was the guy.</p>

                        <p className="text-lg leading-relaxed mb-6">With an artist secured, Jason contacted his old friend Sam Lipman to ask if he could compose the music. Sam said yes immediately. Jason then asked Buzz Moran, the genius behind the sound effects for <i>The Intergalactic Nemesis</i> , if he'd come on board as sound designer. A few months later, Lee Duhig joined as colorist and David Hutchison as letterer for the book version.</p>

                        <p className="text-lg leading-relaxed mb-6">The only thing left to do was secure a premiere. Jason called the programmer for Austin's Paramount Theater, Lietza Brass, and before he could finish describing the show, she committed to a date. September 26, 2026.</p>

                        <p className="text-lg leading-relaxed mb-6">A show was born.</p>

                        <p className="text-lg leading-relaxed mb-6">The purpose of this website is to serve both venues who might book the tour and audience members who might want to take a deeper dive. Don't hesitate to explore! And by all means, contact us if you have any questions or simply want to get in touch.</p>

                        <p className="text-lg leading-relaxed mb-6">See you at the theater.</p>
                    </div>

                    {/* Ghost Image */}
                    <div className="lg:flex-shrink-0 mt-8 lg:mt-0 flex justify-center lg:justify-start">
                        <Image
                            src="/img/art/ghost-2.png"
                            alt="Ghost illustration"
                            width={300}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}
