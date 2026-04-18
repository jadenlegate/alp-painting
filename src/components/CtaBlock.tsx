import { ReactNode } from "react";
import { Container } from "./Container";
import { Button } from "./Button";

// Full-width CTA strip used at the bottom of most pages. Keep heading and
// one subline short — this is the "one last ask" after the reader has
// scrolled the page.
type Props = {
  heading: ReactNode;
  subline?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "stone";
};

export function CtaBlock({
  heading,
  subline,
  primaryLabel = "Get a Quote",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: Props) {
  const isNavy = variant === "navy";
  return (
    <section className={isNavy ? "bg-navy text-background" : "bg-stone-light/50"}>
      <Container>
        <div className="py-16 md:py-20 text-center max-w-2xl mx-auto">
          <h2
            className={`font-serif text-3xl md:text-[2.5rem] leading-[1.15] ${
              isNavy ? "text-background" : "text-navy"
            }`}
          >
            {heading}
          </h2>
          {subline && (
            <p
              className={`mt-4 md:mt-5 text-base md:text-lg ${
                isNavy ? "text-background/80" : "text-ink"
              }`}
            >
              {subline}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={primaryHref}
              size="lg"
              className={
                isNavy
                  ? "bg-background !text-navy hover:bg-stone-light"
                  : ""
              }
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="text"
                className={isNavy ? "!text-background" : ""}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
