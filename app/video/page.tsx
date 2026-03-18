import { PortableText } from "@portabletext/react";
import { getPageTextContent } from "@/lib/sanityQueries";
import { basePortableTextComponents } from "@/lib/portableTextComponents";

type VideoEntry = {
  _key?: string;
  title?: string;
  youtubeIdOrUrl: string;
  order: number;
};

// Ensure this page always re-renders on the server so Sanity edits show immediately.
export const dynamic = "force-dynamic";
export const revalidate = 0;

const fallbackVideos: VideoEntry[] = [
  { youtubeIdOrUrl: "sx6UV1vzOJs", title: "Animatic Teaser 1", order: 1 },
  { youtubeIdOrUrl: "Pokwi7ATjTc", title: "Animatic Teaser 2", order: 2 },
  { youtubeIdOrUrl: "S_VHgD2c7iI", title: "Live Teaser 1", order: 3 },
  {
    youtubeIdOrUrl: "F6QrT-B_Xok",
    title: "Official Teaser Trailer",
    order: 4,
  },
];

function extractYouTubeId(input: string): string | null {
  const trimmed = input?.trim();
  if (!trimmed) return null;

  // Raw ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  // Common URL formats
  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match?.[1] ?? null;
}

export default async function VideoPage() {
  const textContent = await getPageTextContent("video");

  const videosFromSanity = (textContent?.videos ?? []) as VideoEntry[];
  // Only show fallback content when the Sanity document doesn't exist at all.
  // If the document exists but the videos array is empty, we should respect "remove all".
  const videos = textContent ? videosFromSanity : fallbackVideos;

  const pageTitle = textContent?.title || "Video";
  const paragraphs = textContent?.paragraphs ?? [];

  return (
    <div className="bg-[url('/img/art/p19-insert.jpg')] bg-cover bg-top bg-repeat min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-8">
          <div className="relative max-w-3xl p-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">
            <div className="relative z-20">
              <h1 className="pt-5 whitespace-pre-line">{pageTitle}</h1>
              {paragraphs.length > 0 ? (
                <div className="pt-3 pb-6">
                  {paragraphs.map((paragraph, index) => (
                    <div key={index}>
                      <PortableText
                        value={paragraph.content}
                        components={basePortableTextComponents}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xl text-black pt-3 pb-6">
                  Land ho! Glimpse through the spy-glass into dangerous and
                  uncharted terrain.
                </p>
              )}

              <div className="grid gap-8 md:grid-cols-2">
                {videos
                  .map((video) => {
                    const youTubeId = extractYouTubeId(video.youtubeIdOrUrl);
                    if (!youTubeId) return null;

                    return (
                      <div
                        key={
                          video._key ??
                          `${video.order}:${video.youtubeIdOrUrl}`
                        }
                        className="w-full"
                      >
                        <div className="relative w-full aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${youTubeId}`}
                            title={video.title || "YouTube video"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <p className="mt-3 text-lg text-center text-black">
                          {video.title || "YouTube video"}
                        </p>
                      </div>
                    );
                  })
                  .filter(Boolean)}
              </div>

              {videos.length === 0 && (
                <p className="pt-6 text-lg text-black">
                  No videos have been added yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
