"use client";

import Link from "next/link";

// Mobile-only sticky bottom bar with a single Get a Quote CTA.
// Hidden on lg+ since the navbar already shows the CTA there.
export function MobileCtaBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy border-t border-alpine/30 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/contact"
        className="flex items-center justify-center py-4 text-navy bg-alpine text-sm font-semibold active:bg-alpine/90 transition-colors"
      >
        Get a Quote
      </Link>
    </div>
  );
}
