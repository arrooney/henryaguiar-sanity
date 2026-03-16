import { defineType, defineField } from "sanity";

export const darling = defineType({
  name: "darling",
  title: "Darling — Fundraiser",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Film Title",
      type: "string",
      initialValue: "Darling",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short line shown on the home page promo strip and page hero",
      initialValue: "A story told in silence and sound",
    }),
    defineField({
      name: "status",
      title: "Production Status",
      type: "string",
      initialValue: "Post-Production",
      description: 'e.g. "Post-Production", "In Production", "Coming Soon"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Full description shown on the fundraiser page",
    }),
    defineField({
      name: "fundingPurpose",
      title: "Funding Purpose",
      type: "string",
      initialValue: "Composer / Score",
      description: 'What the money is for, e.g. "Composer / Score", "Post-Production"',
    }),
    defineField({
      name: "fundingGoal",
      title: "Funding Goal ($)",
      type: "number",
      initialValue: 400,
    }),
    defineField({
      name: "fundingRaised",
      title: "Amount Raised ($)",
      type: "number",
      initialValue: 20,
      description: "Update this as donations come in",
    }),
    defineField({
      name: "donateUrl",
      title: "Donate URL",
      type: "url",
      description: "Link to your PayPal, Venmo, GoFundMe, or other donation page",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      description: "Moody still shown as the page hero background (wide format)",
      options: { hotspot: true },
    }),
    defineField({
      name: "stills",
      title: "Production Stills",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
          ],
        },
      ],
      description: "Production photos shown in the gallery section",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "status" },
    prepare({ title, subtitle }) {
      return { title: title ?? "Darling", subtitle: subtitle ?? "Fundraiser" };
    },
  },
});
