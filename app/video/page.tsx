const videos = [
  {
    id: "sx6UV1vzOJs",
    title: "Animatic Teaser 1",
  },
  {
    id: "Pokwi7ATjTc",
    title: "Animatic Teaser 2",
  },
  {
    id: "S_VHgD2c7iI",
    title: "Live Teaser 1",
  },
  {
    id: "F6QrT-B_Xok",
    title: "Official Teaser Trailer",
  },
];

export default function VideoPage() {
  return (
    <div className="bg-[url('/img/art/p19-insert.jpg')] bg-cover bg-top bg-repeat min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-8">
          <div className="relative max-w-3xl p-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">
            <div className="relative z-20">
              <h1 className="pt-5 whitespace-pre-line">Video</h1>
              <p className="text-xl text-black pt-3 pb-6">
                A selection of videos from{" "}
                <strong>Treasure Island Reimagined: Jane Hawkins and the
                Pirate&apos;s Gold</strong>.
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                {videos.map((video) => (
                  <div key={video.id} className="w-full">
                    <div
                      style={{
                        position: "relative",
                        paddingTop: "56.25%", // 16:9
                      }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <p className="mt-3 text-lg text-center text-black">
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

