import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blogPosts";

const BASE_URL = "https://alpenglowpainting.ca";

const STATIC_ROUTES = [
  "",
  "/about",
  "/contact",
  "/process",
  "/work",
  "/reviews",
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
  "/services/cabinet-refinishing",
  "/services/light-carpentry",
  "/services/commercial",
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

  for (const post of POSTS) {
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
