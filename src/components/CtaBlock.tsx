import { ReactNode } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

type Props = {
  heading: ReactNode;
  subline?: ReactNode;
  eyebrow?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "stone";
};

export function CtaBlock({
  heading,
  subline,
  eyebrow,
  primaryLabel = "Get a Quote",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: Props) {
  const isNavy = variant === "navy";
  return (
    <section className={isNavy ? "bg-navy" : "bg-surface"}>
      <Container>
        <div className="py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            {eyebrow && (
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">{eyebrow}</div>
            )}
            <h2
              className={`font-serif font-bold text-[2rem] md:text-[2.75rem] leading-[1.05] tracking-tight ${
                isNavy ? "text-background" : "text-navy"
              }`}
            >
              {heading}
            </h2>
            {subline && (
              <p className={`mt-4 text-lg leading-relaxed ${isNavy ? "text-background/70" : "text-ink"}`}>
                {subline}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button
              href={primaryHref}
              size="lg"
              className={isNavy ? "!bg-background !text-navy hover:!bg-surface" : ""}
            >
              {primaryLabel} <ArrowRight size={16} />
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                size="lg"
                className={
                  isNavy
                    ? "border !border-background/25 !bg-transparent !text-background hover:!bg-background/10"
                    : "border border-navy !text-navy hover:!bg-navy hover:!text-background"
                }
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
