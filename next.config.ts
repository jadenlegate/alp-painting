import type { NextConfig } from "next";
import { withOpinlyConfig } from "@opinly/next";

// Pin Turbopack's workspace root to this directory so Next doesn't
// pick up lockfiles from a parent directory.
const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },

  // 301s from old Wix-site URLs to canonical Next.js routes. The Wix-era
  // inventory was pulled from the Wayback Machine (2026-07) — every real
  // public page and blog post is mapped to its closest live equivalent.
  // NOTE for V2: several old /post/* articles have close matches in the new
  // blog (gated in MVP) — remap those to /blog/<slug> when the blog ships.
  async redirects() {
    // Old Wix blog posts → closest live page (topic-matched).
    const WIX_POSTS: Record<string, string> = {
      "all-about-sherwin-williams-2024-colour-of-the-year-upward": "/",
      "choosing-exterior-paint-and-colours-for-maximum-curb-appeal": "/services/exterior-painting",
      "choosing-interior-paint-and-colours-for-the-most-pleasing-paint-job": "/services/interior-painting",
      "choosing-the-best-exterior-paint-and-stain-types-of-exterior-house-paint-and-stain-for-your-home": "/services/exterior-painting",
      "choosing-the-best-interior-paint-types-of-interior-house-paint-for-your-home": "/services/interior-painting",
      "how-long-does-exterior-paint-last": "/services/exterior-painting",
      "how-often-should-i-paint-my-house-and-why-part-1-the-exterior": "/services/exterior-painting",
      "how-often-should-i-paint-my-house-and-why-part-2-the-interior": "/services/interior-painting",
      "how-often-should-i-paint-my-house-and-why-part-3-staining-the-deck": "/services/deck-fence-staining",
      "how-painting-increases-property-value": "/",
      "how-to-paint-the-exterior-of-your-house-a-comprehensive-guide": "/services/exterior-painting",
      "how-to-paint-the-interior-of-your-house-a-comprehensive-guide": "/services/interior-painting",
      "how-to-paint-your-commercial-strata-or-industrial-building": "/",
      "how-to-pressure-wash-a-deck-a-step-by-step-guide": "/services/deck-fence-staining",
      "how-to-pressure-wash-a-driveway-a-step-by-step-guide": "/services/exterior-painting",
      "how-to-pressure-wash-a-house": "/services/exterior-painting",
      "reasons-to-hire-a-professional-painting-company": "/faq",
      "spring-is-the-best-time-to-hire-painters-in-whistler": "/",
      "the-best-paint-colours-for-homes-in-2024-a-sherwin-williams-selection": "/",
      "the-importance-of-prep-work-for-a-successful-painting-job": "/process",
      "the-ultimate-guide-to-painting-in-whistler": "/",
      "why-you-should-get-a-quote-instead-of-an-estimate-for-your-next-painting-project": "/faq",
    };

    return [
      // — Wix-era main pages (from the Wayback inventory) —
      { source: "/home", destination: "/", permanent: true },
      { source: "/interior", destination: "/services/interior-painting", permanent: true },
      { source: "/exterior", destination: "/services/exterior-painting", permanent: true },
      { source: "/services/exterior", destination: "/services/exterior-painting", permanent: true },
      { source: "/services/deck-&-fence-staining", destination: "/services/deck-fence-staining", permanent: true },
      // Same URL as requested by browsers/crawlers with the ampersand percent-encoded.
      { source: "/services/deck-%26-fence-staining", destination: "/services/deck-fence-staining", permanent: true },
      { source: "/pressurewashing", destination: "/services/exterior-painting", permanent: true },
      { source: "/our-story", destination: "/about", permanent: true },
      { source: "/join-our-team", destination: "/careers", permanent: true },
      { source: "/questions", destination: "/faq", permanent: true },
      { source: "/work", destination: "/portfolio", permanent: true },

      // — Wix blog: posts topic-mapped, pagination/tags to the blog root —
      ...Object.entries(WIX_POSTS).map(([slug, destination]) => ({
        source: `/post/${slug}`,
        destination,
        permanent: true,
      })),
      { source: "/post/:slug*", destination: "/", permanent: true },
      { source: "/blog/page/:rest*", destination: "/blog", permanent: true },
      { source: "/blog/tags/:rest*", destination: "/blog", permanent: true },

      // — Older guesses kept as harmless safety nets —
      { source: "/our-work", destination: "/portfolio", permanent: true },
      { source: "/gallery", destination: "/portfolio", permanent: true },
      { source: "/our-services", destination: "/services/interior-painting", permanent: true },
      { source: "/services", destination: "/services/interior-painting", permanent: true },
      { source: "/interior-painting", destination: "/services/interior-painting", permanent: true },
      { source: "/exterior-painting", destination: "/services/exterior-painting", permanent: true },
      { source: "/wood-restoration", destination: "/services/wood-restoration", permanent: true },
      { source: "/cabinet-painting", destination: "/services/cabinet-refinishing", permanent: true },
      { source: "/reviews", destination: "/testimonials", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/careers-1", destination: "/careers", permanent: true },
      { source: "/join-us", destination: "/careers", permanent: true },
      { source: "/blog-1", destination: "/blog", permanent: true },
    ];
  },
};

// Opinly blog SDK — injects image rewrites (CDN namespace) and the public
// config env vars read by opinlyConfig at runtime.
export default withOpinlyConfig({
  blogPath: "/blog",
  imagesPath: "/images",
  companyName: "Alpenglow Painting",
  cdnNamespace: "Lmb9EVfujyhL_kYw_Vkvt",
  siteUrl: "https://www.alpenglowpainting.ca",
})(nextConfig);
