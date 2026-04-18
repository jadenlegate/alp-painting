import type { NextConfig } from "next";

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

  // Redirects from old Wix site URLs to canonical Next.js routes.
  async redirects() {
    return [
      // Common Wix URL patterns — update if Jaden shares actual Wix URLs
      { source: "/home", destination: "/", permanent: true },
      { source: "/our-work", destination: "/work", permanent: true },
      { source: "/gallery", destination: "/work", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/our-services", destination: "/services/interior", permanent: true },
      { source: "/services", destination: "/services/interior", permanent: true },
      { source: "/interior-painting", destination: "/services/interior", permanent: true },
      { source: "/exterior-painting", destination: "/services/exterior", permanent: true },
      { source: "/wood-restoration", destination: "/services/wood-restoration", permanent: true },
      { source: "/cabinet-painting", destination: "/services/cabinet-refinishing", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/careers-1", destination: "/careers", permanent: true },
      { source: "/join-us", destination: "/careers", permanent: true },
      { source: "/blog-1", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
