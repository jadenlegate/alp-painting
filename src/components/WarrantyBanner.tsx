import { ShieldCheck } from "lucide-react";
import { Container } from "./Container";

type Props = {
  /** The dominant figure — e.g. "10". Renders huge. */
  years: string;
  /** Heading next to the figure, e.g. "Years on interior painting, in writing." */
  heading: string;
  /** Body paragraph. */
  body: string;
};

export function WarrantyBanner({ years, heading, body }: Props) {
  return (
    <section className="py-16 md:py-24 bg-stone-light/40">
      <Container>
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative eyebrow rule */}
          <div className="flex items-center gap-4 mb-8 justify-center">
            <span className="h-px w-12 bg-alpine/50" aria-hidden />
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
              The Alpenglow Guarantee
            </span>
            <span className="h-px w-12 bg-alpine/50" aria-hidden />
          </div>

          <div className="bg-navy rounded-sm p-10 md:p-14 lg:p-16 relative overflow-hidden">
            {/* Subtle alpine glow in corner — depth without noise */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-alpine/10 blur-3xl pointer-events-none"
              aria-hidden
            />

            <div className="relative grid gap-8 md:gap-12 md:grid-cols-[auto_1fr] md:items-center">
              {/* Big number + icon */}
              <div className="flex md:flex-col items-center md:items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-alpine/15 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={26} className="text-alpine" strokeWidth={1.5} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-background text-[5rem] md:text-[6.5rem] leading-none tracking-tight tabular-nums">
                    {years}
                  </span>
                  <span className="text-background/60 text-sm uppercase tracking-[0.2em] mb-2">
                    {parseFloat(years) === 1 ? "year" : "years"}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-serif font-medium text-background text-[1.5rem] md:text-[1.875rem] leading-[1.2] tracking-tight max-w-xl">
                  {heading}
                </h3>
                <p className="mt-5 text-background/70 text-[1rem] md:text-[1.0625rem] leading-relaxed max-w-2xl">
                  {body}
                </p>
                <div className="mt-7">
                  <a
                    href="/warranty"
                    className="inline-flex items-center gap-2 text-alpine text-sm font-medium underline underline-offset-[6px] decoration-alpine/40 hover:decoration-alpine transition-all"
                  >
                    See the full warranty terms
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
