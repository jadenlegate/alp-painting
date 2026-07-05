import { ReactNode } from "react";
import { Hero } from "./Hero";
import { Container } from "./Container";
import { IS_FULL } from "@/lib/flags";

type Props = {
  eyebrow?: string;
  headline: ReactNode;
  subline?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  /** Passed through to the full-mode Hero (ignored in the flat MVP header). */
  overlayClass?: string;
  children?: ReactNode;
};

// Service-page hero. Full mode renders the photo Hero as before. MVP mode
// (temporarily, until real hero photos are chosen) renders the flat editorial
// header used on the Portfolio and Testimonials pages — no background image,
// no hero CTA (the navbar Get a Quote is always visible).
export function ServiceHero({ eyebrow = "Services", headline, subline, imageUrl, imageAlt, overlayClass, children }: Props) {
  if (IS_FULL) {
    return (
      <Hero eyebrow={eyebrow} headline={headline} subline={subline} imageUrl={imageUrl} imageAlt={imageAlt} overlayClass={overlayClass}>
        {children}
      </Hero>
    );
  }
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16">
      <Container>
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">
            {eyebrow}
          </div>
          <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">{headline}</h1>
          {subline && <p className="mt-5 text-ink text-lg leading-relaxed">{subline}</p>}
        </div>
      </Container>
    </section>
  );
}
