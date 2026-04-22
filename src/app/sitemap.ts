import type { MetadataRoute } from "next";

const BASE_URL = "https://alpenglowpainting.ca";

const STATIC_ROUTES = [
  "",
  "/about",
  "/contact",
  "/process",
  "/work",
  "/reviews",
  "/faq",
  "/blog",
  "/careers",
  "/giving-back",
  "/privacy",
  "/terms",
  "/services/interior-painting",
  "/services/exterior-painting",
  "/services/wood-restoration",
  "/services/cabinet-refinishing",
  "/services/commercial",
];

const PROJECT_SLUGS = [
  "whistler-chalet-exterior",
  "pemberton-farmhouse-interior",
  "squamish-modern-cabinets",
  "whistler-log-home-restoration",
  "pemberton-farmhouse-exterior",
  "whistler-family-home-repaint",
  "squamish-contemporary-exterior",
  "whistler-chalet-kitchen",
  "pemberton-deck-staining",
];

const BLOG_SLUGS = [
  "how-long-does-exterior-paint-last-whistler",
  "cedar-oil-vs-stain-which-is-right",
  "cabinet-painting-vs-replacement",
  "what-to-ask-a-painting-contractor",
  "how-to-read-a-paint-quote",
];

const LOCATION_SLUGS = ["whistler", "pemberton", "squamish", "squamish-valley"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_ROUTES) {
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/services/") ? 0.9 : 0.7,
    });
  }

  for (const slug of PROJECT_SLUGS) {
    entries.push({
      url: `${BASE_URL}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const slug of BLOG_SLUGS) {
    entries.push({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  for (const slug of LOCATION_SLUGS) {
    entries.push({
      url: `${BASE_URL}/painters/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
