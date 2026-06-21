import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Painting FAQ — Whistler Painters Answer Your Questions",
  description:
    "Answers to common questions about painting quotes, scheduling, products, warranties, and working with Alpenglow Painting in Whistler, Pemberton, and Squamish.",
  alternates: { canonical: "/faq" },
};

const FAQ_SECTIONS = [
  {
    category: "Getting a quote",
    items: [
      {
        q: "How do I get a quote?",
        a: "Fill out the form on our contact page, call/text us at (604) 938-4037, or email us at hello@alpenglowpainting.ca. Tell us the rough scope and timing, and we'll get in touch to discuss it and schedule a quote.",
      },
      {
        q: "Do you charge for quotes?",
        a: "No. The site visit and written proposal are free.",
      },
      {
        q: "What's the difference between a quote and an estimate?",
        a: "A quote is a fixed price — the number we give you is the number you pay, as long as the scope doesn't change. An estimate is our best projection for work that can't be fully measured upfront. We provide fixed-price quotes for almost everything we do. Occasionally a project has genuine unknowns — hidden rot behind siding, the condition of a surface under old finish, or log work that can't be assessed until it's blasted — and only those portions are handled on an estimated basis. We'll always tell you which parts (if any) are estimated and why, before any work begins.",
      },
      {
        q: "How quickly can you start a project?",
        a: "It depends on our current schedule. Typical lead time is 2–6 weeks, though we can sometimes accommodate urgent jobs. Reach out to us, and we can discuss your timing. We always do our best to accommodate your schedule.",
      },
      {
        q: "What areas do you serve?",
        a: "We are based in Whistler but also work in Pemberton and Squamish. We occasionally take on projects further out when the timing and scope are right.",
      },
      {
        q: "Do you do work any time of year?",
        a: "Yes. We're happy to help with projects any time of year. Most exterior work is completed between May and September. Interior work can be completed year-round.",
      },
    ],
  },
  {
    category: "Products and quality",
    items: [
      {
        q: "What products do you use?",
        a: "We specify the best products to use to ensure a great finish, your desired look, and the best longevity. We use the highest quality products from Sherwin-Williams, Benjamin Moore, Sico ProLuxe (formerly Sikkens), and Sansin, among other select brands. We'll tell you exactly what we're using, why, and what the expected lifespan is.",
      },
      {
        q: "Can I choose my own colour?",
        a: "Of course! If you have a general idea or specific colour in mind, we can work with that or help refine if needed. If you're not sure what looks good, we're happy to provide advice for what looks best. Before starting the project, we test the colours for you to make sure you're 100% happy with it before proceeding with the work. We also offer complimentary AI colour visualisation so you can envision what it will look like beforehand.",
      },
      {
        q: "Are your painters professionals?",
        a: "Yes. All of our painters are vetted and trained to a professional standard, and every project is run under the eye of an experienced crew lead who holds the team to it. We take real pride in our workmanship and stand behind every job we do.",
      },
      {
        q: "What's the difference between the paint brands?",
        a: "We'll walk through that on the site visit. The best product to use is surface and context dependent. We use premium-tier products on everything we do.",
      },
      {
        q: "Do you spray or brush and roll?",
        a: "We use all three methods, depending on the surface. Exteriors use a combination of brushing, rolling, and spraying, and interiors are usually brush and rolled. Cabinets are almost always sprayed for finish quality. We'll tell you which we're using and why.",
      },
    ],
  },
  {
    category: "Scheduling and the job",
    items: [
      {
        q: "How long does a project take?",
        a: "Project duration depends on the scope and type of project. Projects can last anywhere from one day to several weeks, depending on the scope, amount of prep required, and access requirements, among other factors. We'll give you an approximate timeline with your written proposal.",
      },
      {
        q: "What do I need to do to prep?",
        a: "We'll let you know what we need from you to prep before we arrive. We aim to provide a full service so there's minimal work on your end.",
      },
      {
        q: "Do I need to be home during the project?",
        a: "No. Most clients give us an access code and we work independently. We will provide regular updates with photos and contact you immediately if anything needs a decision. Once the project is completed, we conduct an in-person walkthrough with you to make sure you're fully happy with things before we pack up.",
      },
      {
        q: "What if something unexpected comes up?",
        a: "We tell you immediately, before doing anything. Hidden rot, unforeseen repairs, a surface that needs extra prep, a change in weather, etc. — you'll hear from us before it affects timeline or cost. Any change to scope gets a written and approved change order first.",
      },
      {
        q: "What happens if it rains?",
        a: "We do not apply any paint if it is raining or if the surface is still wet. We watch the weather very closely during the exterior season — including temperature, precipitation, humidity, and dew point — to ensure we never have an issue.",
      },
      {
        q: "How do you protect my landscaping and plants?",
        a: "We take care to protect your property throughout the project. Plants, gardens, and other landscaping near the work area are covered and protected with drop cloths, and we keep the site clean as we go. Anything that can't be covered, we work around carefully.",
      },
      {
        q: "What happens with my furniture when the house is being painted?",
        a: "We move all furniture to the centre of the room and cover it with plastic sheeting to protect it.",
      },
      {
        q: "When should I hire a professional painter vs doing it myself?",
        a: "DIY painting can work for small, simple projects like freshening up a single room if you have the tools, time, and patience. But for large areas, high ceilings, tricky prep work, specialty finishes, or when you want a long-lasting, flawless result, hiring a professional is the smarter choice. A pro saves you time, ensures quality, and handles safety concerns.",
        link: { href: "/blog/diy-vs-hiring-a-professional-painter", label: "Read this article to learn more" },
      },
      {
        q: "Do you clean up at the end of each day?",
        a: "Yes. Daily cleanup is standard.",
      },
    ],
  },
  {
    category: "Warranty",
    items: [
      {
        q: "What warranty do you offer?",
        a: "We provide a written warranty on every project, matched to the service: 5 years on interior painting, 5 years on exterior solid finishes, and 2 years on exterior semi-transparent and translucent stains. There are a few exceptions to our warranty, which we will discuss with you if they apply to your project. All in writing, included at no extra cost.",
        link: { href: "/warranty", label: "Learn more about our warranty" },
      },
      {
        q: "What does the warranty cover?",
        a: "Our warranty covers workmanship errors on our part, including peeling, flaking, and premature finish failure under normal use.",
        link: { href: "/warranty", label: "Learn more about our warranty" },
      },
      {
        q: "What happens if something fails under warranty?",
        a: "Contact us and we'll conduct a site visit to inspect the area and schedule a time for a repair.",
      },
    ],
  },
  {
    category: "The project report",
    items: [
      {
        q: "What is the Alpenglow Project Report?",
        a: "A written document we leave at the end of every project. It records the exact products used (manufacturer, product line, colour name, sheen level), areas covered, and care instructions.",
      },
      {
        q: "Why does the project report matter?",
        a: "Years from now, when you need a touch-up or want to match a colour for a renovation, you'll know exactly what was used. It also acts as a helpful reference for staying on top of regular maintenance.",
      },
    ],
  },
  {
    category: "Insurance",
    items: [
      {
        q: "Are you insured?",
        a: "Yes. We carry $5M commercial general liability insurance. Certificates are available on request.",
      },
      {
        q: "Do you have workers' compensation?",
        a: "Yes. All of our workers are covered by WorkSafeBC. Certificates are available on request.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container size="prose">
          <div>
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">FAQ</div>
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
        eyebrow="Still curious"
        heading="Still have questions?"
        subline="Fill out the contact form and we'll get in touch soon to discuss your project."
        primaryLabel="Get in Touch"
      />
    </>
  );
}
