import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getPageTextContent } from "@/lib/sanityQueries";
import { basePortableTextComponents } from "@/lib/portableTextComponents";
import NewsletterSignup from "@/app/components/NewsletterSignup";

export default async function Contact() {
  // Fetch text content from Sanity
  const textContent = await getPageTextContent("contact");

  // Use Sanity title if available, otherwise fallback
  const pageTitle = textContent?.title || "Contact";

  // Get paragraphs from Sanity, sorted by order
  const paragraphs = textContent?.paragraphs || [];
  return (
    <div className="bg-[url('/img/art/contact-bg.jpg')] bg-cover bg-top bg-repeat min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Content Paper */}
          <div className="max-w-3xl bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5">
            {/* Page Header */}
            <div>
              <h1 className="mb-5 pt-5">{pageTitle}</h1>
            </div>

            {/* Content */}
            <div>
              {paragraphs.length > 0 ? (
                // Render Sanity content
                paragraphs.map((paragraph, index) => (
                  <div key={index}>
                    <PortableText
                      value={paragraph.content}
                      components={basePortableTextComponents}
                    />
                  </div>
                ))
              ) : (
                // Fallback content if no Sanity content
                <>
                  {/* Production Information */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">
                      For information about the production:
                    </h2>
                    <p className="text-lg leading-relaxed">
                      Jason Neulander |{" "}
                      <a href="tel:+15127399769">512-739-9769</a> |{" "}
                      <a href="mailto:jason@theplanetzygon.com">
                        jason@theplanetzygon.com
                      </a>
                    </p>
                  </div>

                  {/* Tour Bookings */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                      For tour bookings:
                    </h2>
                    <div className="space-y-2">
                      <p className="text-lg leading-relaxed">
                        Simon Shaw |{" "}
                        <a href="tel:+19173926739">(917) 392-6739</a> |{" "}
                        <a href="mailto:simon@shawentertainment.com">
                          simon@shawentertainment.com
                        </a>
                      </p>
                      <p className="text-lg leading-relaxed">
                        Sherri Leathers |{" "}
                        <a href="tel:+16155006922">(615) 500-6922</a> |{" "}
                        <a href="mailto:sherri@shawentertainment.com">
                          sherri@shawentertainment.com
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              )}
              <NewsletterSignup />
            </div>
          </div>

          {/* Image Container - Outside the paper */}
          <div className="flex-shrink-0">
            <Image
              src="/img/art/janey-insert.jpg"
              alt="Janey"
              width={350}
              height={350}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
