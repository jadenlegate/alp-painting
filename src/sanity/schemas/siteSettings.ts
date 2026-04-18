import { defineType, defineField } from "sanity";

// Singleton document — one per project. Holds values that appear site-wide
// so non-devs can update phone, email, hours, etc. without touching code.
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "phone", title: "Phone number", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "hours", title: "Business hours", type: "string" }),
    defineField({ name: "serviceAreas", title: "Service areas", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "googleReviewsUrl", title: "Google Reviews URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "tiktokUrl", title: "TikTok URL", type: "url" }),
    defineField({ name: "footerTagline", title: "Footer tagline", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
