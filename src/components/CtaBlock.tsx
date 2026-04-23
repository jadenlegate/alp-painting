import { ReactNode } from "react";
import { Container } from "./Container";
import { Button } from "./Button";

type Props = {
  heading: ReactNode;
  subline?: ReactNode;
  eyebrow?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBlock({
  heading,
  subline,
  eyebrow,
  primaryLabel = "Get a Quote",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="bg-navy">
      <Container>
        <div className="py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            {eyebrow && (
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">{eyebrow}</div>
            )}
            <h2 className="font-serif font-bold text-background text-[2rem] md:text-[2.75rem] leading-[1.05] tracking-tight">
              {heading}
            </h2>
            {subline && (
              <p className="mt-4 text-lg leading-relaxed text-background/70">
                {subline}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button
              href={primaryHref}
              size="lg"
              className="!bg-background !text-navy hover:!bg-surface"
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                size="lg"
                className="border !border-background/30 !bg-transparent !text-background hover:!bg-background/10"
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
