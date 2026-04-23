"use client";
import Link from "next/link";
import { Star } from "lucide-react";
import { Container } from "./Container";
import { SITE } from "@/lib/site";

// Four-column footer per brief §6: Brand / Services / Company / Contact.
// Bottom bar holds legal + association logos.
const SERVICE_LINKS = [
  { label: "Interior Painting", href: "/services/interior-painting" },
  { label: "Exterior Painting", href: "/services/exterior-painting" },
  { label: "Wood Restoration", href: "/services/wood-restoration" },
  { label: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
  { label: "Light Carpentry", href: "/services/light-carpentry" },
  { label: "Commercial & Strata", href: "/services/commercial" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Our Work", href: "/work" },
  { label: "Reviews", href: "/reviews" },
  { label: "Warranty", href: "/warranty" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-stone-light/20">
      <Container>
        <div className="py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Alpenglow Logo Blue.svg" alt="Alpenglow Painting" className="h-8 w-auto" />
            <p className="text-sm text-muted max-w-[280px]">
              Premium painting for Whistler and the Sea to Sky corridor.
            </p>
            {/* Text-based social links. Lucide 1.x removed brand icons
                for trademark reasons; text labels match the quiet,
                editorial tone anyway. */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm">
              <a
                href={SITE.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-navy"
              >
                <Star size={14} /> Google
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-navy"
              >
                Instagram
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-navy"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-navy mb-4">
              Services
            </div>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-navy mb-4">
              Company
            </div>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-navy mb-4">
              Contact
            </div>
            <ul className="space-y-2.5 text-sm text-ink">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-navy">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-navy">
                  {SITE.email}
                </a>
              </li>
              <li className="text-muted">
                Based in Whistler, BC
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} {SITE.legalName}
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-navy">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-navy">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
