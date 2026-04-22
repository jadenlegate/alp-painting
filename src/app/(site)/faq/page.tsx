import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to common questions about quoting, scheduling, products, warranties, and what it's like to work with Alpenglow Painting.",
};

const FAQ_SECTIONS = [
  {
    category: "Getting a quote",
    items: [
      {
        q: "How do I get a quote?",
        a: "Fill out the form on our contact page or call us at (604) 938-4037. Tell us the rough scope, location, and timing. We respond within 24 hours on weekdays — usually the same day.",
      },
      {
        q: "Do you charge for quotes?",
        a: "No. The site visit and written proposal are free.",
      },
      {
        q: "How quickly can you start a project?",
        a: "It depends on our current schedule. Typical lead time is a few weeks, though we can sometimes accommodate urgent jobs. Ask on the call.",
      },
      {
        q: "What areas do you serve?",
        a: "Based in Whistler. Most of our work is in the valley — we occasionally take on projects further out when the timing and scope are right.",
      },
      {
        q: "Do you do work any time of year?",
        a: "Yes. We're happy to help with projects any time of year. Exterior timing depends on weather and surface conditions, which we'll discuss at the site visit.",
      },
    ],
  },
  {
    category: "Products and quality",
    items: [
      {
        q: "What products do you use?",
        a: "We specify products to the project. Typical brands include Sherwin-Williams (Duration, Emerald), Benjamin Moore (Aura, Advance), Cabot, Sikkens, and Armstrong Clark. We'll tell you exactly what we're using, why, and what the expected lifespan is — before you sign anything.",
      },
      {
        q: "Can I choose my own color?",
        a: "Yes. Most clients come with a color direction or a specific swatch; we help refine from there. If you want color consultation as a service, we offer that too.",
      },
      {
        q: "What's the difference between the paint brands?",
        a: "We'll walk through that on the site visit — it's surface and context dependent. In short: Sherwin-Williams Duration and Benjamin Moore Aura are our go-to exterior workhorses. Advance is our preferred cabinet finish. We use premium-tier products on everything we do.",
      },
      {
        q: "Do you spray or brush and roll?",
        a: "Both, depending on the surface. Cabinets are almost always sprayed for finish quality. Interiors are typically rolled. Exteriors are brush-and-rolled on most surfaces, sprayed on some. We'll tell you which we're using and why.",
      },
    ],
  },
  {
    category: "Scheduling and the job",
    items: [
      {
        q: "How long does an exterior project take?",
        a: "A typical single-family exterior takes 3–5 days of active work. We build weather buffer days into the schedule — you'll know the realistic range upfront, not just a start date that slips.",
      },
      {
        q: "What do I need to do to prep?",
        a: "We'll tell you exactly what to do after you book. Typically: move furniture away from walls for interior work, clear the area around the exterior for outdoor work, and give us access codes if you won't be home. We handle everything else.",
      },
      {
        q: "Do I need to be home during the project?",
        a: "No. Most clients give us an access code and we work independently. The crew lead will text you if anything needs a decision. You'll meet us on day one and at the final walkthrough — the rest is up to you.",
      },
      {
        q: "What if something unexpected comes up?",
        a: "We tell you immediately, before doing anything. Hidden rot, a surface that needs extra prep, a change in weather — you hear from us before it affects timeline or cost. Any change to scope gets a written change order first.",
      },
      {
        q: "Do you clean up at the end of each day?",
        a: "Yes. Daily cleanup is standard. You shouldn't feel like your home has been taken over.",
      },
    ],
  },
  {
    category: "Warranty",
    items: [
      {
        q: "What warranty do you offer?",
        a: "Standard 3-year warranty on all projects, included at no extra cost. Extended 7-year and 10-year options are available on select projects where surface conditions and product choice support it. Nobody else in the Sea to Sky offers a 10-year warranty.",
      },
      {
        q: "What does the warranty cover?",
        a: "Peeling, flaking, and premature finish failure under normal use. It doesn't cover damage from impact, flooding, or structural movement.",
      },
      {
        q: "What happens if something fails under warranty?",
        a: "Contact us. We respond within 5 business days and schedule the repair promptly. The warranty isn't a legal escape hatch — it's a commitment that the work holds up.",
      },
    ],
  },
  {
    category: "The project report",
    items: [
      {
        q: "What is the Alpenglow Project Report?",
        a: "A written document we leave at the end of every project. It records the exact products used (manufacturer, product line, color name, sheen level), areas covered, and care instructions. It's meant to live with the house.",
      },
      {
        q: "Why does the project report matter?",
        a: "Years from now, when you need a touch-up or want to match a color for a renovation, you'll know exactly what was used. The next owner will too. Most painters hand you nothing when the job is done — we give you a record.",
      },
    ],
  },
  {
    category: "Insurance and licensing",
    items: [
      {
        q: "Are you insured?",
        a: "Yes. We carry $5M commercial general liability insurance and full WorkSafeBC coverage for all workers. Certificates are available on request.",
      },
      {
        q: "Are you a licensed contractor?",
        a: "Yes. We're a member of the Whistler Chamber of Commerce and the Painting Contractors Association (PCA).",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container size="prose">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">FAQ</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Common questions.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Answers to what people usually ask before hiring us. If you don't see what you're looking for, just call.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="prose">
          <div className="space-y-16">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.category}>
                <h2 className="font-serif font-bold text-navy text-2xl md:text-3xl pb-3 mb-6 border-b-2 border-alpine inline-block">
                  {section.category}
                </h2>
                <FAQAccordion items={section.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="Still have questions?"
        subline="Call us at (604) 938-4037 or fill out the contact form. We respond same day."
        primaryLabel="Get in Touch"
      />
    </>
  );
}
