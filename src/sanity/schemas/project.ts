import { defineType, defineField } from "sanity";

// Portfolio project. Displayed on /work and referenced on service pages.
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "featured", title: "Featured on home page?", type: "boolean", initialValue: false }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true }, fields: [
      defineField({ name: "alt", title: "Alt text", type: "string" }),
    ]}),
    defineField({ name: "gallery", title: "Gallery images", type: "array", of: [{ type: "image", options: { hotspot: true }, fields: [
      defineField({ name: "alt", title: "Alt text", type: "string" }),
      defineField({ name: "caption", title: "Caption", type: "string" }),
    ]}]}),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "services", title: "Service tags", type: "array", of: [{ type: "string" }],
      options: { list: ["Interior", "Exterior", "Wood Restoration", "Cabinet Refinishing", "Commercial"] } }),
    defineField({ name: "location", title: "Location", type: "string",
      options: { list: ["Whistler", "Pemberton", "Squamish", "Other"] } }),
    defineField({ name: "duration", title: "Duration (e.g. 4 days)", type: "string" }),
    defineField({ name: "products", title: "Products used", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "testimonial", title: "Client testimonial", type: "reference", to: [{ type: "testimonial" }] }),
    defineField({ name: "publishedAt", title: "Published", type: "datetime" }),
  ],
  preview: { select: { title: "title", subtitle: "location", media: "coverImage" } },
});
