import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "customerName", title: "Customer name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location (city)", type: "string" }),
    defineField({ name: "rating", title: "Rating (1–5)", type: "number", validation: (r) => r.min(1).max(5) }),
    defineField({ name: "text", title: "Review text", type: "text", validation: (r) => r.required() }),
    defineField({ name: "featured", title: "Show on home page?", type: "boolean", initialValue: false }),
    defineField({ name: "projectRef", title: "Related project (optional)", type: "reference", to: [{ type: "project" }] }),
  ],
  preview: { select: { title: "customerName", subtitle: "location" } },
});
