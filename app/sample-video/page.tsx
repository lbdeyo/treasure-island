export default function SampleVideo() {
    return (
        <div className="bg-[url('/img/art/p19-insert.jpg')] bg-cover bg-top bg-repeat min-h-screen">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-8">
                    {/* Page Header */}
                    <div className="relative max-w-3xl p-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">

                        <div className="relative z-20">
                            <h1 className=" pt-5 " style={{ fontSize: '5rem' }}>Sample Video</h1>
                            <p className="text-2xl text-black pt-3 pb-5">
                                Password: Janey
                            </p>

                            {/* Coming Soon */}

                            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                <iframe
                                    src="https://player.vimeo.com/video/1108447276?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    title="Treasure Island Reimagined - demo video"
                                />
                            </div>
                            <p className="text-xl text-center text-black p-5">
                                Matthew Armbruster -  voice and cello •
                                Danu Mara - voices and sound effects<br />
                                Jason Neulander - voices and keyboards •
                                Marc Pouhé - voices and sound effects<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
