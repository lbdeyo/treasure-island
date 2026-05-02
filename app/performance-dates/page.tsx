import Image from "next/image";
import { alamoSerialShows } from "@/lib/alamoSerialShows";
import { getPageTextContent } from "@/lib/sanityQueries";

const alamoSerialIntro =
  "This summer, leading up to the premiere of the full show, we are rolling out the Jane Hawkins live-action graphic novel in serialized form, performing short chapters before classic adventure movies at the Alamo Drafthouse Cinema Mueller Location in Austin. Click on the movie poster images below for tickets!";

export default async function PerformanceDates() {
  const textContent =
    (await getPageTextContent("performance-dates")) ??
    (await getPageTextContent("tour-dates"));

  const pageTitle = textContent?.title || "Performance Dates";

  return (
    <div className="bg-[url('/img/art/tour-dates-bg.jpg')] bg-cover bg-top bg-repeat min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-8">
          <div className="relative max-w-3xl p-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">
            <div className="relative z-20">
              <h1 className="mb-8 pt-5 whitespace-pre-line">{pageTitle}</h1>

              <p className="mb-8 max-w-xl text-left text-lg sm:text-xl leading-tight">
                <span className="text-xl sm:text-2xl font-semibold tracking-tight">
                  World Premiere
                </span>
                <br />
                September 18–20
                <br />
                State Theatre
                <br />
                Austin, Texas
                <br />
                <span className="font-medium">Tickets available in June!</span>
              </p>

              <section aria-label="Alamo Drafthouse serial chapter screenings">
                <h2 className="sr-only">Alamo Drafthouse screenings</h2>
                <p className="text-lg leading-relaxed mb-8 sm:mb-10">
                  {alamoSerialIntro}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 list-none p-0 m-0">
                  {alamoSerialShows.map((show) => (
                    <li
                      key={show.ticketUrl}
                      className="flex flex-col items-center text-center"
                    >
                      <p className="text-base sm:text-lg font-medium mb-4 max-w-sm">
                        {show.dateLine}
                      </p>
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-[280px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-sm"
                      >
                        <span className="sr-only">
                          {show.posterAlt} — open tickets
                        </span>
                        <div className="relative aspect-[2/3] w-full shadow-md border border-black/10">
                          <Image
                            src={show.posterSrc}
                            alt={show.posterAlt}
                            fill
                            className="object-contain bg-black/5"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      </a>
                      <p className="text-base sm:text-lg mt-4 mb-5 max-w-sm leading-snug">
                        {show.chapterLine}
                      </p>
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2.5 border-3 border-black bg-amber-100/90 hover:bg-amber-200/95 text-base font-semibold tracking-wide shadow-sm transition-colors"
                      >
                        Tickets Here
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
