import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blogPosts";
import { IS_FULL } from "@/lib/flags";

// Routes hidden in MVP mode (main branch) — they 404 there, so keep them
// out of the production sitemap. See @/lib/flags.
const FULL_ONLY_ROUTES = new Set([
  "/blog",
  "/services/cabinet-refinishing",
  "/services/log-restoration",
  "/services/new-construction",
  "/services/commercial",
]);

const BASE_URL = "https://alpenglowpainting.ca";

const STATIC_ROUTES = [
  "",
  "/about",
  "/contact",
  "/process",
  "/portfolio",
  "/testimonials",
  "/faq",
  "/warranty",
  "/blog",
  "/careers",
  "/giving-back",
  "/privacy",
  "/terms",
  "/services/interior-painting",
  "/services/exterior-painting",
  "/services/wood-restoration",
  "/services/log-restoration",
  "/services/deck-fence-staining",
  "/services/cabinet-refinishing",
  "/services/light-carpentry",
  "/services/new-construction",
  "/services/commercial",
];

const LOCATION_SLUGS = ["whistler", "pemberton", "squamish", "squamish-valley"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_ROUTES) {
    if (!IS_FULL && FULL_ONLY_ROUTES.has(path)) continue;
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/services/") ? 0.9 : 0.7,
    });
  }

  for (const post of POSTS) {
    if (!IS_FULL) break;
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
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
