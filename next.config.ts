import type { NextConfig } from "next";

// Pin Turbopack's workspace root to this directory so Next doesn't
// pick up lockfiles from a parent directory.
const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  // Allow <img src="https://images.unsplash.com/..."> in placeholders until
  // we swap to Sanity-hosted images. Next 16 requires explicit allowlisting
  // even for plain <img> through next/image's optimizer.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
