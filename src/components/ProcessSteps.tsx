import Image from "next/image";
import { Camera } from "lucide-react";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { IS_FULL } from "@/lib/flags";

export type ProcessStep = {
  /** Step number, e.g. "01". */
  n: string;
  title: string;
  body: string;
  /** Optional photo of the crew doing the task. Falls back to a placeholder. */
  image?: string;
  imageAlt?: string;
};

type Props = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: ProcessStep[];
  /** Section background — use "white" when the preceding section is already stone. */
  bg?: "stone" | "white";
};

// Step-by-step service process. Each step is a card with a photo of the crew
// doing the task: a vertical image on the left at md+, collapsing to a
// horizontal image stacked above the text on mobile. Drop a real photo in by
// setting `image` (+ `imageAlt`) on the step — until then a clean placeholder
// shows so nothing looks broken.
// MVP mode (see @/lib/flags) hides the photo column entirely until enough
// real step photos exist — the layout below is unchanged and returns in V2.
export function ProcessSteps({ eyebrow = "Our process", heading, intro, steps, bg = "stone" }: Props) {
  return (
    <section className={`py-16 md:py-28 ${bg === "stone" ? "bg-stone-light/50" : ""}`}>
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
            {heading}
          </h2>
          {intro && (
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">{intro}</p>
          )}
        </div>

        <div className="space-y-5 md:space-y-6">
          {steps.map((step) => (
            <article
              key={step.n}
              className={`border border-navy/15 bg-background rounded-sm overflow-hidden ${
                IS_FULL ? "grid md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]" : ""
              }`}
            >
              {/* Photo — horizontal on mobile (top), vertical on desktop (left).
                  Hidden in MVP mode until real step photos exist. */}
              {IS_FULL && (
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] bg-stone-light">
                  {step.image ? (
                    <Image
                      src={step.image}
                      alt={step.imageAlt ?? step.title}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-navy/25">
                      <Camera size={28} strokeWidth={1.5} />
                      <span className="mt-2 text-[0.65rem] uppercase tracking-[0.2em]">Photo coming</span>
                    </div>
                  )}
                </div>
              )}

              {/* Text */}
              <div className="p-7 md:p-9 lg:p-10 flex flex-col justify-center">
                <div className="text-sm uppercase tracking-[0.16em] text-alpine font-semibold tabular-nums">
                  Step {step.n}
                </div>
                <h3 className="mt-3 font-serif text-navy text-[1.5rem] md:text-[1.75rem] leading-[1.15] tracking-tight font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-ink leading-relaxed text-[0.95rem] md:text-base">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
