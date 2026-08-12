import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@opinly/shared";
import { opinlyConfig } from "@opinly/next";
import { opinly } from "@/clients/opinly";
import { IS_FULL } from "@/lib/flags";

const BASE_URL = "https://www.alpenglowpainting.ca";

// Routes hidden in MVP mode (main branch) — they 404 there, so keep them
// out of the production sitemap. See @/lib/flags.
const FULL_ONLY_ROUTES = new Set([
  "/services/cabinet-refinishing",
  "/services/log-restoration",
  "/services/new-construction",
  "/services/commercial",
]);

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  for (const slug of LOCATION_SLUGS) {
    entries.push({
      url: `${BASE_URL}/painters/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Opinly blog content (posts, categories, authors, tags). A failed fetch —
  // e.g. missing OPINLY_API_KEY at build time — degrades to a sitemap without
  // blog entries rather than a failed build.
  try {
    const routes = await opinly.routes();
    for (const entry of buildSitemapEntries(routes, opinlyConfig)) {
      // Skip the blog home — already in STATIC_ROUTES.
      if (entry.url === `${BASE_URL}/blog`) continue;
      entries.push({
        url: entry.url,
        lastModified: new Date(entry.lastModified),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  } catch (err) {
    console.error("[sitemap] Opinly routes fetch failed:", err);
  }

  return entries;
}
