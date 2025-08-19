import Image from "next/image";

export default function Store() {

    return (
        <div className="bg-[url('/img/art/p18.jpg')] bg-cover bg-top bg-repeat min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="pt-5 mb-8">Ye Olde Treasure Store</h1>
                    </div>

                    {/* Book and Content Layout */}
                    <div className="flex flex-col lg:flex-row gap-6 items-start">
                        {/* Book Cover Image */}
                        <div className="flex-shrink-0">
                            <Image src="/img/art/cover-art.jpg" alt="Treasure Island Reimagined Book Cover" width={300} height={375} className="max-w-full h-auto  shadow-lg" />
                        </div>

                        {/* Body Text */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4">Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold</h2>
                            <p className="text-xl leading-relaxed">Coming soon! The graphic novel goes on sale spring 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
