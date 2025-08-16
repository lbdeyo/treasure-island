export default function SampleVideo() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="max-w-3xl">
                    <h1 className=" mb-8" style={{ fontSize: '5rem' }}>Sample Video</h1>
                </div>

                {/* Coming Soon */}
                <div className="max-w-3xl">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1108447276?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="Treasure Island Reimagined- demo video"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
