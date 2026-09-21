import Image from "next/image";
import { PortableText } from "@portabletext/react";
import {
  getPageTextContent,
  getTourDates,
  type Paragraph,
} from "@/lib/sanityQueries";
import { performanceDatesPremierePortableTextComponents } from "@/lib/portableTextComponents";
import TourDatesTable from "@/app/components/TourDatesTable";

function portableTextHasText(blocks: unknown): boolean {
  if (!Array.isArray(blocks) || blocks.length === 0) return false;

  return blocks.some((block) => {
    if (!block || typeof block !== "object") return false;
    const node = block as { _type?: string; children?: Array<{ text?: string }> };
    if (node._type !== "block" || !Array.isArray(node.children)) return false;
    return node.children.some(
      (child) => typeof child.text === "string" && child.text.trim() !== "",
    );
  });
}

function featuredPerformanceParagraphs(paragraphs: Paragraph[]): Paragraph[] {
  return paragraphs.filter((paragraph) => portableTextHasText(paragraph.content));
}

export default async function PerformanceDates() {
  const [primaryText, fallbackText, tourDates] = await Promise.all([
    getPageTextContent("performance-dates"),
    getPageTextContent("tour-dates"),
    getTourDates(),
  ]);
  const textContent = primaryText ?? fallbackText;

  const pageTitle = textContent?.title || "Performance Dates";
  const featuredParagraphs = featuredPerformanceParagraphs(
    textContent?.paragraphs ?? [],
  );
  const showFeaturedPerformance = featuredParagraphs.length > 0;

  return (
    <div className="bg-[url('/img/art/tour-dates-bg.jpg')] bg-cover bg-top bg-repeat min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <Image
            src="/img/treasure-island-paramount-stage.jpg"
            alt="Jason Neulander, Cheyenne Gibbs, and Dane Parker performing Treasure Island Reimagined"
            width={3080}
            height={1380}
            priority
            className="w-full max-w-3xl h-auto border-3 border-black"
          />
          <div className="relative max-w-3xl p-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">
            <div className="relative z-20">
              <h1 className="mb-8 pt-5 whitespace-pre-line">{pageTitle}</h1>

              {showFeaturedPerformance && (
                <section aria-label="Featured performance">
                  {featuredParagraphs.map((paragraph, index) => (
                    <div
                      key={paragraph.order ?? index}
                      className="mb-8 text-center text-lg sm:text-xl leading-snug"
                    >
                      <PortableText
                        value={paragraph.content}
                        components={
                          performanceDatesPremierePortableTextComponents
                        }
                      />
                    </div>
                  ))}
                </section>
              )}

              <TourDatesTable dates={tourDates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
