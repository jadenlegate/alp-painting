"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Careers application form (ClickUp).
const APPLY_URL =
  "https://forms.clickup.com/9017949262/f/8cr5z2e-737/2CCGPUOLREF04NSIZ2";

// Mobile-only sticky bottom CTA. Slides in after the user scrolls past the
// hero (the hero already has its own CTA, so the bar is redundant up top).
// Hidden on /contact (they're already in the form). On /careers it becomes
// an Apply Now button. Also hidden while the mobile menu is open — see the
// `.mobile-menu-open .mobile-cta-bar` rule in globals.css, toggled by Navbar.
export function MobileCtaBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // No bar on the contact page — they're already filling out the form.
  if (pathname === "/contact") return null;

  const isCareers = pathname === "/careers";

  const btnClass =
    "flex items-center justify-center py-4 text-navy bg-alpine text-sm font-semibold active:bg-alpine/90 transition-colors";

  return (
    <div
      className={`mobile-cta-bar lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy border-t border-alpine/30 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] transition-transform duration-300 ${
        scrolled ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {isCareers ? (
        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className={btnClass}>
          Apply Now
        </a>
      ) : (
        <Link href="/contact" className={btnClass}>
          Get a Quote
        </Link>
      )}
    </div>
  );
}
