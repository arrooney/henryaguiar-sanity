import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "navSubtitle",
      title: "Nav Subtitle",
      type: "string",
      description: 'Small text shown under the name in the home page header, e.g. "Film Director & Cinematographer"',
    }),
    defineField({
      name: "heroVideo",
      title: "Hero Video",
      type: "file",
      description: "Upload the reel video shown full-screen on the home page (MP4, ideally h.264)",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "heroVideoPoster",
      title: "Hero Video Poster",
      type: "image",
      description: "Still frame shown while the video loads",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroQuote",
      title: "Home Page Quote",
      type: "text",
      rows: 3,
      description: "The pull quote shown below the hero on the home page",
    }),
    defineField({
      name: "heroQuoteAttribution",
      title: "Quote Attribution",
      type: "string",
      description: 'e.g. "— The Guardian"',
    }),
    defineField({
      name: "recognitionItems",
      title: "Recognition Strip",
      type: "array",
      of: [{ type: "string" }],
      description: "Short items shown in the dark strip at the bottom of the home page",
    }),
    defineField({
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description: "Image shown when this site is shared on social media (Twitter, iMessage, Slack, etc.) — recommended 1200×630px",
      options: { hotspot: true },
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      description: "Email address shown on the contact page and used to receive form submissions",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "platform", title: "Platform", type: "string", description: 'e.g. "Instagram", "Vimeo", "YouTube", "IMDb"' }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
