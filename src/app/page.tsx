import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import { MessageSquare, UserCheck, ShieldCheck, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const SERVICES = [
  {
    title: "Interior Painting",
    href: "/services/interior-painting",
    blurb: "Walls, trim, ceilings, doors. Clean lines and a process that respects your home.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exterior Painting",
    href: "/services/exterior-painting",
    blurb: "Weather-tough finishes built for Whistler winters. Sikkens, Benjamin Moore, Sherwin-Williams.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wood Restoration & Staining",
    href: "/services/wood-restoration",
    blurb: "Cedar siding, decks, timber-frame beams. Restored, stained, sealed to last.",
    imageUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cabinet Refinishing",
    href: "/services/cabinet-refinishing",
    blurb: "Factory-grade finishes without replacing the boxes. Spray-booth precision in your kitchen.",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial, Strata & Hotels",
    href: "/services/commercial",
    blurb: "Flexible scheduling around operations and residents. Clear communication, no drama.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
];

const FEATURED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-exterior",
    title: "Kadenwood chalet — full exterior",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pemberton-farmhouse-interior",
    title: "Pemberton farmhouse interior",
    location: "Pemberton",
    serviceTags: ["Interior"],
    coverUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "squamish-modern-cabinets",
    title: "Squamish modern — kitchen cabinets",
    location: "Squamish",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Whistler",
    rating: 5,
    text: "The crew showed up when they said they would, protected everything in the house, and the walkthrough at the end was something I've never had from a trades company. I knew exactly what had been done and how to take care of it.",
  },
  {
    name: "David K.",
    location: "Pemberton",
    rating: 5,
    text: "Got a quote the same day. The proposal was the clearest I've seen — every line item explained. The finish on our cedar siding is better than the day the house was built.",
  },
  {
    name: "Renata S.",
    location: "Whistler",
    rating: 5,
    text: "We've used three painters over the last decade. Alpenglow is the only one I'd hire again without thinking twice. Professional from first email to final handshake.",
  },
];

const VALUE_PROPS = [
  {
    icon: MessageSquare,
    title: "Clear communication",
    body: "You'll know what's happening every step of the way — from the first quote to the final walkthrough.",
  },
  {
    icon: UserCheck,
    title: "Professional crews",
    body: "Uniformed, on time, respectful of your home. The kind of trades experience you wish was standard.",
  },
  {
    icon: ShieldCheck,
    title: "Work that lasts",
    body: "Up to 10 years of warranty protection. Standard 3-year coverage on most projects, at no extra cost.",
  },
];

const PROCESS_STEPS = [
  { n: "01", label: "Request a quote" },
  { n: "02", label: "Proposal & walkthrough" },
  { n: "03", label: "Paint — with your home protected" },
  { n: "04", label: "Final report & warranty" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
        imageAlt="Mountain home exterior in Whistler at golden hour"
        headline={SITE.tagline}
        subline={SITE.subline}
      >
        <Button href="/contact" size="lg" className="bg-background !text-navy hover:bg-stone-light">
          Get a Quote
        </Button>
        <Button href="/work" variant="text" className="!text-background">
          See our work →
        </Button>
      </Hero>

      <TrustBar />

      {/* Why Alpenglow */}
      <Section>
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-navy mb-4">Why Alpenglow</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                We&rsquo;re not the biggest painter in the Sea to Sky. We&rsquo;re the one that takes the experience seriously.
              </h2>
              <p className="mt-5 text-ink text-lg leading-relaxed">
                Everyone can put paint on a wall. What makes a project worth paying for is everything around that — how we communicate, how the crew shows up, how the job closes out. That&rsquo;s what we&rsquo;re built around.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 md:mt-16 grid gap-6 md:grid-cols-3">
            {VALUE_PROPS.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="border border-border rounded-sm bg-surface p-6 md:p-7 h-full">
                  <v.icon size={22} className="text-navy" />
                  <h3 className="mt-4 font-serif text-xl text-navy">{v.title}</h3>
                  <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section>
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <div className="text-xs uppercase tracking-widest text-navy mb-3">Services</div>
                <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] max-w-xl">
                  Residential, commercial, and everything in between.
                </h2>
              </div>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.href} delay={i * 0.07}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured work */}
      <Section>
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <div className="text-xs uppercase tracking-widest text-navy mb-3">Recent work</div>
                <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] max-w-xl">
                  Projects across the Sea to Sky.
                </h2>
              </div>
              <Button href="/work" variant="text">See all work →</Button>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED_PROJECTS.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.1}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process teaser */}
      <Section className="bg-stone-light/30">
        <Container>
          <FadeIn>
            <div className="max-w-xl mb-10">
              <div className="text-xs uppercase tracking-widest text-navy mb-3">Our process</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                From first call to final walkthrough.
              </h2>
              <p className="mt-4 text-ink text-lg leading-relaxed">
                Four stages, documented at every step. No surprises, no improvising.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <div className="border-t border-navy/30 pt-4">
                  <div className="font-serif text-navy text-sm tabular-nums">{s.n}</div>
                  <div className="mt-2 text-ink font-medium">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Button href="/process" variant="secondary">See how it works</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Reviews */}
      <Section>
        <Container>
          <FadeIn>
            <div className="max-w-xl mb-10 md:mb-14">
              <div className="text-xs uppercase tracking-widest text-navy mb-3">What clients say</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                5.0 on Google — reviewed by people across the Sea to Sky.
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <TestimonialCard t={t} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Button href="/reviews" variant="text">See all reviews →</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Service area */}
      <Section className="bg-stone-light/30">
        <Container>
          <FadeIn>
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-widest text-navy mb-3">Service area</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                Based in Whistler. Serving the corridor.
              </h2>
              <p className="mt-4 text-ink text-lg leading-relaxed">
                From Britannia Beach to Pemberton, and everywhere between. If you&rsquo;re along the Sea to Sky, we work there.
              </p>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {SITE.serviceAreas.map((area, i) => (
              <FadeIn key={area} delay={i * 0.07}>
                <div className="flex items-center gap-2 border border-border rounded-sm bg-surface p-4">
                  <MapPin size={16} className="text-navy" />
                  <span className="text-ink">{area}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBlock
        heading="Ready to start?"
        subline="Most quotes are delivered same day."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
      />
    </>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`py-16 md:py-24 ${className}`}>{children}</section>;
}
