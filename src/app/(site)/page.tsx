import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import { MessageSquare, UserCheck, ShieldCheck, MapPin, Ruler, CalendarCheck, Paintbrush, BookOpen, type LucideIcon } from "lucide-react";
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
    body: "We respond fast, show up when we say we will, and tell you if something changes. No surprises, no chasing us down.",
  },
  {
    icon: UserCheck,
    title: "Professional crews",
    body: "On time, in uniform, and careful with your home. Trades work the way it should be — but rarely is.",
  },
  {
    icon: ShieldCheck,
    title: "Work that lasts",
    body: "Three years standard on every job. Up to ten on select projects. In writing — not just a handshake.",
  },
];

const PROCESS_STEPS: { n: string; label: string; icon: LucideIcon }[] = [
  { n: "01", icon: MessageSquare,  label: "Request a quote" },
  { n: "02", icon: Ruler,          label: "Proposal & walkthrough" },
  { n: "03", icon: Paintbrush,     label: "Paint — with your home protected" },
  { n: "04", icon: BookOpen,       label: "Final report & warranty" },
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
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
        <Button href="/work" variant="text" className="!text-background/90 hover:!text-background">
          See our work →
        </Button>
      </Hero>

      <TrustBar />

      {/* Why Alpenglow — navy background */}
      <Section className="bg-navy">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Why Alpenglow</div>
              <h2 className="font-serif text-background text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                We&rsquo;re not the biggest painter in the Sea to Sky. We&rsquo;re the one that takes the experience seriously.
              </h2>
              <p className="mt-5 text-background/70 text-lg leading-relaxed">
                Any painter can roll paint on walls. What separates a good job from a bad one is everything else — showing up when you said you would, keeping the site clean, and actually following through on what was promised.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 md:mt-16 grid gap-5 md:grid-cols-3">
            {VALUE_PROPS.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="border border-background/10 rounded-sm bg-background/5 p-6 md:p-8 h-full">
                  <v.icon size={22} className="text-alpine" />
                  <h3 className="mt-4 font-serif text-xl text-background">{v.title}</h3>
                  <p className="mt-2 text-background/65 leading-relaxed text-[0.95rem]">{v.body}</p>
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
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Services</div>
                <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1] max-w-xl">
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
      <Section className="bg-surface">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Recent work</div>
                <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1] max-w-xl">
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

      {/* Process teaser — navy background */}
      <Section className="bg-navy">
        <Container>
          <FadeIn>
            <div className="max-w-xl mb-12">
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Our process</div>
              <h2 className="font-serif text-background text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                From first call to final walkthrough.
              </h2>
              <p className="mt-4 text-background/70 text-lg leading-relaxed">
                Four stages, documented at every step. No surprises, no improvising.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <div className="border-t border-background/20 pt-5">
                  <div className="w-10 h-10 rounded-sm bg-background/10 flex items-center justify-center mb-4">
                    <s.icon size={20} className="text-background" />
                  </div>
                  <div className="text-background/40 text-xs tabular-nums mb-1">{s.n}</div>
                  <div className="text-background font-medium">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-12">
              <Button href="/process" size="lg" className="border !border-background/25 !bg-transparent !text-background hover:!bg-background/10">See how it works</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Reviews */}
      <Section>
        <Container>
          <FadeIn>
            <div className="max-w-xl mb-10 md:mb-14">
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">What clients say</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                5.0 on Google — across the Sea to Sky.
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
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
      <Section className="bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Service area</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                Based in Whistler.
              </h2>
              <p className="mt-4 text-ink text-lg leading-relaxed">
                We&rsquo;re a Whistler operation. Most of our work is in the valley — occasionally we take on something further out when the project is the right fit.
              </p>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {SITE.serviceAreas.map((area, i) => (
              <FadeIn key={area} delay={i * 0.07}>
                <div className="flex items-center gap-2.5 bg-background border border-border rounded-sm p-4">
                  <MapPin size={15} className="text-alpine flex-shrink-0" />
                  <span className="text-ink text-sm font-medium">{area}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBlock
        heading="Ready to start?"
        subline="Most quotes are delivered the day of your site visit."
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
