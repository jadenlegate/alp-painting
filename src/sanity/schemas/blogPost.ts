import { defineType, defineField } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true }, fields: [
      defineField({ name: "alt", title: "Alt text", type: "string" }),
    ]}),
    defineField({ name: "excerpt", title: "Excerpt (for cards + meta description)", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "author", title: "Author", type: "string", initialValue: "Jaden Legate" }),
    defineField({ name: "publishedAt", title: "Published", type: "datetime" }),
    defineField({ name: "categories", title: "Categories", type: "array", of: [{ type: "string" }],
      options: { list: ["Tips", "Whistler", "Exterior", "Interior", "Wood & Staining", "Commercial", "Seasonal"] } }),
    defineField({ name: "seoTitle", title: "SEO title override", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO description override", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "coverImage" } },
});
