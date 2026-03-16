import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      type: "string",
      description: 'Small label above the name on the hero, e.g. "Film Director & Cinematographer"',
    }),
    defineField({
      name: "statement",
      title: "Personal Statement",
      type: "text",
      rows: 3,
      description: "Short personal statement shown in large type. Keep to 1–2 sentences.",
    }),
    defineField({
      name: "bio",
      title: "Bio Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      description: "Each item is one paragraph.",
    }),
    defineField({
      name: "portraitImage",
      title: "Portrait Image",
      type: "image",
      description: "Full-bleed portrait (~1200×1600px, face centred or in upper half)",
      options: { hotspot: true },
    }),
    defineField({
      name: "portraitAlt",
      title: "Portrait Alt Text",
      type: "string",
    }),
    defineField({
      name: "awards",
      title: "Awards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "category", title: "Category", type: "string" }),
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: { select: { title: "category" } },
        },
      ],
    }),
    defineField({
      name: "cvUrl",
      title: "CV Download URL",
      type: "string",
      description: 'Path to PDF in /public, e.g. "/downloads/henry-aguiar-cv.pdf". Leave blank to hide the button.',
    }),
    defineField({
      name: "cvLabel",
      title: "CV Button Label",
      type: "string",
      initialValue: "Download CV",
    }),
  ],
  preview: {
    select: { title: "eyebrow", media: "portraitImage" },
    prepare({ title }: { title: string }) {
      return { title: "About", subtitle: title };
    },
  },
});
