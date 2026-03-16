import { defineType, defineField } from "sanity";

export const pressQuote = defineType({
  name: "pressQuote",
  title: "Press Quote",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 3,
      description: "Keep to 1–2 sentences for best impact",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publication",
      title: "Publication",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      description: "Reviewer or author name — leave blank if unknown",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      description: 'e.g. "February 2023"',
    }),
    defineField({
      name: "url",
      title: "Article URL",
      type: "url",
      description: "Link to original article — leave blank if not available",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first. The first quote is displayed largest.",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "publication", subtitle: "quote" },
  },
});

export const pressMention = defineType({
  name: "pressMention",
  title: "Press Mention",
  type: "document",
  fields: [
    defineField({
      name: "publication",
      title: "Publication",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      description: 'e.g. "March 2023"',
    }),
    defineField({
      name: "url",
      title: "Article URL",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "publication", subtitle: "headline" },
  },
});
