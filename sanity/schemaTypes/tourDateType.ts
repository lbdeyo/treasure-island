import { defineField, defineType } from "sanity";

export const tourDateType = defineType({
  name: "tourDate",
  title: "Tour Date",
  type: "document",
  fields: [
    defineField({
      name: "dateLabel",
      title: "Date",
      type: "string",
      description:
        'How the date appears on the site (e.g. "October 3, 2026" or "Sept 18–20").',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortDate",
      title: "Sort date",
      type: "date",
      description: "Used to order rows chronologically. Not shown on the site.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ticketStatus",
      title: "Ticket status",
      type: "string",
      options: {
        list: [
          { title: "On sale", value: "onSale" },
          { title: "Sold out", value: "soldOut" },
        ],
        layout: "radio",
      },
      initialValue: "onSale",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ticketUrl",
      title: "Ticketing link",
      type: "url",
      description: "Shown as a Buy Tickets button when the show is on sale.",
      hidden: ({ parent }) => parent?.ticketStatus === "soldOut",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
  orderings: [
    {
      title: "Date, oldest first",
      name: "sortDateAsc",
      by: [{ field: "sortDate", direction: "asc" }],
    },
    {
      title: "Date, newest first",
      name: "sortDateDesc",
      by: [{ field: "sortDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "dateLabel",
      city: "city",
      venue: "venue",
      ticketStatus: "ticketStatus",
    },
    prepare({ title, city, venue, ticketStatus }) {
      const status = ticketStatus === "soldOut" ? "Sold out" : "On sale";
      return {
        title: title || "Untitled date",
        subtitle: [city, venue, status].filter(Boolean).join(" · "),
      };
    },
  },
});
