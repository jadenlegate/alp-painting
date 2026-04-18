"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { SITE } from "@/lib/site";

// Sticky top navigation. Transparent while at the top of the hero on the
// home page, solid elsewhere or after scroll. Mobile uses a full-screen
// overlay menu — simpler and more on-brand than a cramped dropdown.
const SERVICES = [
  { label: "Interior Painting", href: "/services/interior-painting" },
  { label: "Exterior Painting", href: "/services/exterior-painting" },
  { label: "Wood Restoration & Staining", href: "/services/wood-restoration" },
  { label: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
  { label: "Commercial, Strata & Hotels", href: "/services/commercial" },
];

const NAV_LINKS = [
  { label: "Our Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Home page uses transparent-over-hero; elsewhere nav stays solid.
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={solid ? "/Alpenglow Logo Blue.svg" : "/Alpenglow Logo White.svg"}
              alt="Alpenglow Painting"
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 text-sm transition-colors ${solid ? "text-ink hover:text-navy" : "text-background/90 hover:text-background"}`}>
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-surface border border-border rounded-sm shadow-sm py-2">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-ink hover:bg-stone-light/40 hover:text-navy transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${solid ? "text-ink hover:text-navy" : "text-background/90 hover:text-background"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right-side utility: phone + primary CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className={`flex items-center gap-1.5 text-sm transition-colors ${solid ? "text-ink hover:text-navy" : "text-background/90 hover:text-background"}`}
            >
              <Phone size={14} /> {SITE.phone}
            </a>
            <Button href="/contact" size="md">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            className={`lg:hidden p-2 -mr-2 cursor-pointer ${solid ? "text-navy" : "text-background"}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background overflow-y-auto">
          <Container className="py-8">
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted mb-3">
                  Services
                </div>
                <div className="space-y-3">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-serif text-xl text-navy"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-border space-y-3">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-serif text-xl text-navy"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="pt-6 border-t border-border space-y-4">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2 text-ink"
                >
                  <Phone size={16} /> {SITE.phone}
                </a>
                <Button href="/contact" size="lg" className="w-full">
                  Get a Quote
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
