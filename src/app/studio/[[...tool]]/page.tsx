"use client";

// Embedded Sanity Studio — runs entirely client-side (CMS is browser-only).
// Access at /studio in dev or in production after Vercel deploy.
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
