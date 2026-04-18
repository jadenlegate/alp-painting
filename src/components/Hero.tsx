import { ReactNode } from "react";
import { Container } from "./Container";

// Reusable hero. `variant="home"` is full-bleed with overlay text over a
// background image; `variant="inner"` is shorter, for service/about/etc.
// Background image can be a URL (placeholder stock) or later, a Sanity URL.
type Props = {
  eyebrow?: string;
  headline: ReactNode;
  subline?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  children?: ReactNode; // CTA area
  variant?: "home" | "inner";
  align?: "left" | "center";
};

export function Hero({
  eyebrow,
  headline,
  subline,
  imageUrl,
  imageAlt = "",
  children,
  variant = "inner",
  align = "left",
}: Props) {
  const isHome = variant === "home";

  // Home hero is almost-viewport-height; inner hero is contained.
  const heightClass = isHome
    ? "min-h-[88vh] pt-28 pb-20 md:pt-32 md:pb-24"
    : "pt-28 pb-12 md:pt-36 md:pb-16";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <section
      className={`relative w-full overflow-hidden ${heightClass} flex items-end`}
    >
      {/* Background image — next/image deferred to swap-in stage.
          For launch-with-placeholders we use plain <img> for simplicity. */}
      {imageUrl && (
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay so white text stays readable on any photo */}
          <div
            className={`absolute inset-0 ${
              isHome
                ? "bg-gradient-to-t from-black/60 via-black/30 to-black/40"
                : "bg-gradient-to-t from-black/55 via-black/25 to-black/35"
            }`}
          />
        </div>
      )}

      {/* If no image, use a warm tinted panel so the hero still has weight */}
      {!imageUrl && <div className="absolute inset-0 -z-10 bg-stone-light/40" />}

      <Container>
        <div className={`max-w-3xl ${alignClass}`}>
          {eyebrow && (
            <div
              className={`text-xs uppercase tracking-[0.2em] mb-5 ${
                imageUrl ? "text-background/80" : "text-navy/70"
              }`}
            >
              {eyebrow}
            </div>
          )}
          <h1
            className={`font-serif leading-[1.1] ${
              isHome
                ? "text-[2.25rem] md:text-[3.5rem]"
                : "text-[2rem] md:text-[2.75rem]"
            } ${imageUrl ? "text-background" : "text-navy"}`}
          >
            {headline}
          </h1>
          {subline && (
            <p
              className={`mt-5 md:mt-6 text-base md:text-lg max-w-xl ${
                align === "center" ? "mx-auto" : ""
              } ${imageUrl ? "text-background/90" : "text-ink"}`}
            >
              {subline}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
