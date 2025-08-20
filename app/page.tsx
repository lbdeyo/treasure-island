import Image from "next/image";
import { PortableText } from '@portabletext/react'
import { getPageTextContent } from '@/lib/sanityQueries'

// Custom components for rendering rich text with drop cap support
const portableTextComponents = {
  block: {
    normal: ({ children, value }: any) => {
      // Check if this is marked as a drop cap paragraph
      const isDropCap = value?.markDefs?.some((mark: any) => mark._type === 'dropCap') ||
        value?.style === 'dropCap';

      if (isDropCap) {
        return <p className="mb-6 drop-cap-paragraph">{children}</p>;
      }
      return <p className="mb-6">{children}</p>;
    },
    dropCap: ({ children }: any) => (
      <p className="mb-6 drop-cap-paragraph">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    // Custom drop cap mark
    dropCapLetter: ({ children }: any) => (
      <span className="float-left text-9xl mr-2 -mt-4">{children}</span>
    ),
  },
}

export default async function Home() {
  // Fetch text content from Sanity
  const textContent = await getPageTextContent('home')

  // Get paragraphs from Sanity, sorted by order
  const paragraphs = textContent?.paragraphs || []
  return (
    <div className=" bg-[url('/img/art/home-background.jpg')] bg-cover min-h-screen min-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8  ">
        <div className="grid gap-6 md:grid-cols-12">
          {/* Title and Director */}

          <div className="md:col-span-7 flex items-start">
            <div className="w-full " >
              <Image
                src="/img/art/cover-art.jpg"
                alt="Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold"
                width={1200}
                height={1800}
                className="block w-full h-auto border-3 border-black"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 space-y-5">

            {/* Main Description */}
            <div className="max-w-2xl text-2xl bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5 mb-8 home-content">
              <h1 className="mb-6 pt-5 leading-1">{textContent?.title || "Treasure Island Reimagined"}</h1>

              {paragraphs.length > 0 ? (
                // Render Sanity content
                paragraphs.map((paragraph, index) => (
                  <div key={index}>
                    <PortableText
                      value={paragraph.content}
                      components={portableTextComponents}
                    />
                  </div>
                ))
              ) : (
                // Fallback content
                <>
                  <p className="mb-6">
                    <span className="float-left text-9xl mr-2 -mt-4">S</span>lated to begin touring in the Fall of 2026, <strong>Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold</strong> is Jason Neulander's newest "live-action graphic novel." In this adaptation of Robert Louis Stevenson's classic, four performers provide all the voices, sound effects, and cinematic score - live and in front of your eyes - in front of a huge screen to tell an on-the-edge-of-your-seat tale of danger and adventure for the kid in everyone.
                  </p>

                  <p>
                    The year is 1754. The place, the western shores of Scotland. Jane Hawkins, twelve years old, works at a sleepy seaside inn. When a sinister vagabond arrives with a mysterious trunk, Jane's humdrum life swerves towards adventure…
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
