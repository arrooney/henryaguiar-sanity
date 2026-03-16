import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: 'e.g. "Director" or "Director & Cinematographer"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "synopsis",
      title: "Synopsis",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "posterImage",
      title: "Poster Image",
      type: "image",
      description: "Portrait format shown in the work grid (~600×800px)",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Wide image shown at the top of the project detail page (~1600×900px)",
      options: { hotspot: true },
    }),
    defineField({
      name: "stills",
      title: "Production Stills",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "trailerUrl",
      title: "Trailer URL",
      type: "url",
      description: "YouTube or Vimeo URL — leave blank if no trailer",
    }),
    defineField({
      name: "awards",
      title: "Awards & Selections",
      type: "array",
      of: [{ type: "string" }],
      description: 'e.g. "Sundance Film Festival — Grand Jury Prize, 2023"',
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first. The first project is featured full-width.",
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
    select: { title: "title", subtitle: "year", media: "posterImage" },
  },
});
