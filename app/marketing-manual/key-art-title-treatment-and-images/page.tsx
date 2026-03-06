import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getPageTextContent } from "@/lib/sanityQueries";
import { basePortableTextComponents } from "@/lib/portableTextComponents";

export default async function KeyArtTitleTreatmentAndImagesPage() {
  const textContent = await getPageTextContent(
    "marketing-key-art-title-treatment-and-images",
  );

  const pageTitle =
    textContent?.title || "Key Art, Title Treatment, and Images";
  const paragraphs = textContent?.paragraphs || [];

  return (
    <div className="bg-[url('/img/art/skeletons.jpg')] bg-cover bg-top bg-repeat min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-3xl bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5">
          <div className="space-y-8">
            <div className="max-w-3xl relative">
              <Link
                href="/marketing-manual"
                className="block mb-3 text-base text-[#8f181c] hover:underline relative z-20"
              >
                &larr; Back to Marketing Materials
              </Link>
              <h1 className="pt-5 mt-4 whitespace-pre-line relative z-10">
                {pageTitle}
              </h1>
            </div>

            <div className="max-w-3xl">
              {paragraphs.length > 0 ? (
                paragraphs.map((paragraph, index) => (
                  <div key={index}>
                    <PortableText
                      value={paragraph.content}
                      components={basePortableTextComponents}
                    />
                  </div>
                ))
              ) : (
                <p className="text-lg leading-relaxed">Coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
