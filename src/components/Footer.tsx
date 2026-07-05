"use client";
import Link from "next/link";
import { Star } from "lucide-react";
import { Container } from "./Container";
import { TextUsButton } from "./TextUsButton";
import { CallUsButton } from "./CallUsButton";
import { SITE } from "@/lib/site";
import { SERVICE_GROUPS, type ServiceGroup } from "@/lib/services";

// Four-column footer per brief §6: Brand / Services / Company / Contact.
// Bottom bar holds legal + association logos. Service links come from
// @/lib/services so the footer always matches the nav dropdown.
// serviceGroups/showBlog come pre-filtered from the server layout (site-mode
// gating — the flag env var isn't available in client bundles).

const ALL_COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Warranty", href: "/warranty" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

type Props = {
  serviceGroups?: ServiceGroup[];
  showBlog?: boolean;
};

export function Footer({ serviceGroups = SERVICE_GROUPS, showBlog = true }: Props) {
  const COMPANY_LINKS = showBlog
    ? ALL_COMPANY_LINKS
    : ALL_COMPANY_LINKS.filter((l) => l.href !== "/blog");
  return (
    <footer className="mt-12 md:mt-16 border-t border-border bg-stone-light/20">
      <Container>
        <div className="py-12 md:py-16 grid gap-8 md:gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand column — full-width row on tablet, first column on desktop */}
          <div className="space-y-4 min-w-0 md:col-span-3 lg:col-span-1">
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

          <div className="min-w-0">
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">
              Services
            </div>
            <div className="space-y-4 md:space-y-5">
              {serviceGroups.map((group) => (
                <div key={group.heading}>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-alpine font-semibold mb-1.5 md:mb-2.5">
                    {group.heading}
                  </div>
                  <ul className="space-y-1.5 md:space-y-2.5">
                    {group.items.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm text-ink hover:text-navy">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">
              Explore
            </div>
            <ul className="space-y-1.5 md:space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">
              Contact
            </div>
            <ul className="space-y-1.5 md:space-y-2.5 text-sm text-ink">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-navy">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-navy break-words">
                  {SITE.email}
                </a>
              </li>
              <li className="text-muted">
                Based in Whistler, BC
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <CallUsButton />
              <TextUsButton />
            </div>
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
