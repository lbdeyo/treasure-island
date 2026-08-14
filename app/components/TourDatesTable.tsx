import type { TourDate } from "@/lib/sanityQueries";

function SoldOutIcon() {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M9 9 L23 23 M23 9 L9 23"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span>Sold out</span>
    </span>
  );
}

type TourDatesTableProps = {
  dates: TourDate[];
};

export default function TourDatesTable({ dates }: TourDatesTableProps) {
  if (dates.length === 0) return null;

  return (
    <section aria-label="Tour dates" className="mt-10">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-base sm:text-lg">
          <thead>
            <tr className="border-b-2 border-black">
              <th scope="col" className="py-3 pr-4 font-semibold">
                Date
              </th>
              <th scope="col" className="py-3 pr-4 font-semibold">
                City
              </th>
              <th scope="col" className="py-3 pr-4 font-semibold">
                Venue
              </th>
              <th scope="col" className="py-3 font-semibold">
                <span className="sr-only">Tickets</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {dates.map((show) => {
              const isSoldOut = show.ticketStatus === "soldOut";
              const ticketUrl = show.ticketUrl?.trim();

              return (
                <tr key={show._id} className="border-b border-black/20">
                  <td className="py-4 pr-4 align-middle whitespace-nowrap">
                    {show.dateLabel}
                  </td>
                  <td className="py-4 pr-4 align-middle">{show.city}</td>
                  <td className="py-4 pr-4 align-middle">{show.venue}</td>
                  <td className="py-4 align-middle">
                    {isSoldOut ? (
                      <SoldOutIcon />
                    ) : ticketUrl ? (
                      <a
                        href={ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border-3 border-black bg-amber-100/90 hover:bg-amber-200/95 text-sm font-semibold tracking-wide shadow-sm transition-colors no-underline hover:no-underline"
                      >
                        Buy Tickets
                      </a>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
