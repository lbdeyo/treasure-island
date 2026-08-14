import type { TourDate } from "@/lib/sanityQueries";

/** Local-only sample rows for previewing the tour table. Not used in production. */
export const dummyTourDates: TourDate[] = [
  {
    _id: "dummy-tour-date-1",
    dateLabel: "October 12, 2026",
    city: "Houston, TX",
    venue: "The Hobby Center",
    ticketStatus: "onSale",
    ticketUrl: "https://example.com/tickets/houston",
  },
  {
    _id: "dummy-tour-date-2",
    dateLabel: "November 7–8, 2026",
    city: "Chicago, IL",
    venue: "Steppenwolf Theatre",
    ticketStatus: "soldOut",
  },
  {
    _id: "dummy-tour-date-3",
    dateLabel: "January 15, 2027",
    city: "Seattle, WA",
    venue: "Seattle Rep",
    ticketStatus: "comingSoon",
  },
];
