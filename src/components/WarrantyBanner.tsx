import { ShieldCheck } from "lucide-react";
import { Container } from "./Container";

type Props = {
  /** Single-line warranty title, e.g. "10-Year Interior Painting Warranty". */
  title: string;
  /** Supporting paragraph. */
  body: string;
};

// Centered warranty card: badge on top, one-line title, body below —
// in the Alpenglow navy/serif aesthetic.
export function WarrantyBanner({ title, body }: Props) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto bg-navy rounded-sm p-10 md:p-14 lg:p-16 text-center relative overflow-hidden">
          {/* Subtle alpine glow for depth */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-alpine/10 blur-3xl pointer-events-none"
            aria-hidden
          />
          <div className="relative">
            <div className="mx-auto w-16 h-16 rounded-full bg-alpine/15 flex items-center justify-center mb-7">
              <ShieldCheck size={30} className="text-alpine" strokeWidth={1.5} />
            </div>
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">
              The Alpenglow Guarantee
            </div>
            <h3 className="font-serif font-medium text-background text-[1.75rem] md:text-[2.5rem] leading-[1.1] tracking-tight max-w-2xl mx-auto">
              {title}
            </h3>
            <p className="mt-5 text-background/70 text-[1rem] md:text-[1.0625rem] leading-relaxed max-w-2xl mx-auto">
              {body}
            </p>
            <div className="mt-7">
              <a
                href="/warranty"
                className="inline-flex items-center gap-2 text-alpine text-sm font-semibold underline underline-offset-[6px] decoration-alpine/40 hover:decoration-alpine transition-all"
              >
                See the full warranty terms
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
