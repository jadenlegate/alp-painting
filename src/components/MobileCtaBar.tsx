"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

// Mobile-only sticky bottom bar with phone + quote CTAs.
// Hidden on lg+ since the navbar already shows both there.
// Sits above content with a small drop shadow to read against any section.
export function MobileCtaBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy border-t border-alpine/30 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 divide-x divide-background/15">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-4 text-background text-sm font-medium active:bg-navy/80 transition-colors"
        >
          <Phone size={16} className="text-alpine" />
          Call
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center py-4 text-navy bg-alpine text-sm font-semibold active:bg-alpine/90 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
