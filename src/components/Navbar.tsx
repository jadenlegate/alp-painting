"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { TextUsButton } from "./TextUsButton";
import { CallUsButton } from "./CallUsButton";
import { SITE } from "@/lib/site";
import { SERVICE_GROUPS } from "@/lib/services";

// Sticky top navigation. Transparent while at the top of the hero on the
// home page, solid elsewhere or after scroll. Mobile uses a full-screen
// overlay menu — simpler and more on-brand than a cramped dropdown.
// Services live in @/lib/services so the nav and footer can't drift apart.

const ABOUT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Warranty", href: "/warranty" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const MAIN_LINKS = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation — backstop for the Get a Quote CTA and
  // any link that doesn't close the menu itself.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock background scroll while the mobile menu is open, and collapse the
  // Services accordion each time the menu closes.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.body.classList.toggle("mobile-menu-open", mobileOpen);
    if (!mobileOpen) {
      setMobileServicesOpen(false);
      setMobileAboutOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileOpen]);

  const solid = !isHome || scrolled || mobileOpen;

  const linkClass = `text-sm font-medium transition-colors ${
    solid ? "text-ink hover:text-navy" : "text-background/90 hover:text-background"
  }`;

  return (
    <>
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
                className="h-9 md:h-11 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 ${linkClass}`}>
                  Services <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[680px] max-w-[calc(100vw-2rem)]">
                    <div className="bg-surface border border-border rounded-sm shadow-sm p-6 grid grid-cols-3 gap-x-6 gap-y-6">
                      {SERVICE_GROUPS.map((group) => (
                        <div key={group.heading}>
                          <div className="text-[0.65rem] uppercase tracking-[0.2em] text-alpine font-medium mb-3">
                            {group.heading}
                          </div>
                          <div className="space-y-1">
                            {group.items.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="block py-1.5 text-sm text-ink hover:text-navy transition-colors"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/portfolio" className={linkClass}>
                Portfolio
              </Link>

              <Link href="/testimonials" className={linkClass}>
                Testimonials
              </Link>

              {/* About dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className={`flex items-center gap-1 ${linkClass}`}>
                  About <ChevronDown size={14} />
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-surface border border-border rounded-sm shadow-sm py-2">
                      {ABOUT_LINKS.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="block px-4 py-2 text-sm text-ink hover:bg-stone-light/40 hover:text-navy transition-colors"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/careers" className={linkClass}>
                Careers
              </Link>

              <Link href="/contact" className={linkClass}>
                Contact
              </Link>
            </nav>

            {/* Right-side cluster: phone (xl only, so it never wraps to two lines),
                Get a Quote (visible at every width), and the hamburger (below lg).
                On smaller screens the CTA stays put to the left of the hamburger. */}
            <div className="flex items-center gap-3 lg:gap-5">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className={`hidden xl:flex items-center gap-1.5 text-sm font-medium transition-colors ${solid ? "text-ink hover:text-navy" : "text-background/90 hover:text-background"}`}
              >
                <Phone size={14} /> {SITE.phone}
              </a>
              <Button href="/contact" size="md">
                Get a Quote
              </Button>
              <button
                className={`lg:hidden p-2 -mr-2 cursor-pointer ${solid ? "text-navy" : "text-background"}`}
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background overflow-y-auto">
          <Container className="pt-3 pb-8">
            <nav className="divide-y divide-border">
              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((o) => !o)}
                  className="w-full flex items-center justify-between py-4 font-serif text-xl text-navy"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`text-muted transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pb-5 space-y-5">
                    {SERVICE_GROUPS.map((group) => (
                      <div key={group.heading}>
                        <div className="text-[0.65rem] uppercase tracking-[0.2em] text-alpine font-semibold mb-2">
                          {group.heading}
                        </div>
                        <div className="space-y-2.5 pl-1">
                          {group.items.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setMobileOpen(false)}
                              className="block font-serif text-lg text-navy"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Portfolio */}
              <Link
                href={MAIN_LINKS[0].href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 font-serif text-xl text-navy"
              >
                {MAIN_LINKS[0].label}
              </Link>

              {/* Testimonials */}
              <Link
                href="/testimonials"
                onClick={() => setMobileOpen(false)}
                className="block py-4 font-serif text-xl text-navy"
              >
                Testimonials
              </Link>

              {/* About accordion */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen((o) => !o)}
                  className="w-full flex items-center justify-between py-4 font-serif text-xl text-navy"
                  aria-expanded={mobileAboutOpen}
                >
                  About
                  <ChevronDown
                    size={20}
                    className={`text-muted transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="pb-5 space-y-2.5 pl-1">
                    {ABOUT_LINKS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="block font-serif text-lg text-navy"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Careers + Contact */}
              {MAIN_LINKS.slice(1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 font-serif text-xl text-navy"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Call / Text / Quote */}
            <div className="mt-8 pt-6 border-t border-border space-y-3">
              <div className="flex gap-3">
                <CallUsButton className="flex-1" />
                <TextUsButton className="flex-1" />
              </div>
              <Button href="/contact" size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
