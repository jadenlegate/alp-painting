import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Giving Back — Whistler Community & Environment",
  description:
    "Alpenglow Painting donates 1% of annual profits to local environmental and community organizations across Whistler and the Sea to Sky.",
  alternates: { canonical: "/giving-back" },
};

export default function GivingBackPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Giving back</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Locally owned. Locally invested.
            </h1>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="prose">
          <div className="space-y-5 text-ink leading-relaxed">
            <p>
              We live here. Our clients are our neighbors. The mountains we look at every morning are the same ones everyone in the Sea to Sky is trying to protect.
            </p>
            <p>
              We donate 1% of annual profits to local environmental and community organizations. We don&rsquo;t say it loudly — this page exists once, linked from our about section, and we don&rsquo;t put it in our sales pitch.
            </p>
            <p>
              We update the list of organizations we&rsquo;ve supported at the end of each season. For now, our focus is on organizations working on trail access, watershed protection, and community resilience in Whistler, Pemberton, and Squamish.
            </p>
            <p className="text-muted">
              If you represent an organization you think would be a good fit, reach out at hello@alpenglowpainting.ca.
            </p>
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Work together"
        heading="Want to work with a company that gives back?"
        subline="Get a quote — we're proud of the work and the community it supports."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
