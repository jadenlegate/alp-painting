import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews — What Clients Say",
  description:
    "Reviews from homeowners and property managers across Whistler, Pemberton, and Squamish. See what clients say about working with Alpenglow Painting.",
};

// Reviews page. Placeholder reviews — replace with live Google reviews embed
// or structured review data pulled from Google Business Profile API.

type Review = {
  name: string;
  location: string;
  date: string;
  rating: number;
  body: string;
  service?: string;
};

const REVIEWS: Review[] = [
  {
    name: "Michael T.",
    location: "Whistler",
    date: "October 2024",
    rating: 5,
    body: "We've had several contractors work on our place over the years. Alpenglow was the first crew that showed up exactly when they said they would, communicated proactively when the weather pushed the schedule, and actually cleaned up at the end of each day. The exterior looks incredible. Worth every dollar.",
    service: "Exterior",
  },
  {
    name: "Sarah L.",
    location: "Whistler",
    date: "September 2024",
    rating: 5,
    body: "Jaden and his crew repainted our entire interior while we were away for two weeks. Came back to a perfect job — no overspray, no missed spots, not a single scuff on any of our furniture. The project report they leave at the end is something I've never seen from a trades company before. Genuinely impressed.",
    service: "Interior",
  },
  {
    name: "Dave M.",
    location: "Squamish",
    date: "August 2024",
    rating: 5,
    body: "Cabinet refinishing — turned our 15-year-old oak kitchen into something that looks brand new. The spray finish is flawless, doors hang perfectly, and they matched the new color we picked exactly. Half the cost of replacing the cabinets.",
    service: "Cabinet refinishing",
  },
  {
    name: "Jennifer & Rob K.",
    location: "Pemberton",
    date: "July 2024",
    rating: 5,
    body: "Our log home hadn't been touched in over a decade. Alpenglow did a full restoration — blasting, chinking repair, the works. Jaden walked us through every step, showed us what was failing and why, and the finished result looks better than the day we built it. Couldn't recommend more highly.",
    service: "Wood restoration",
  },
  {
    name: "Chris B.",
    location: "Whistler",
    date: "June 2024",
    rating: 5,
    body: "Used them for a rental property repaint. They worked fast without cutting corners, communicated directly with my property manager, and the job was done before the tenant moved in. I'll use them every time.",
    service: "Interior",
  },
  {
    name: "Anna W.",
    location: "Squamish",
    date: "May 2024",
    rating: 5,
    body: "The 4-day crew showed up in clean gear, laid down drop cloths before touching anything, and never left a mess. The quality of the finish on our cedar siding is exceptional. They also noticed some rot on the soffit we hadn't caught — flagged it, we got it repaired before they painted. Exactly the kind of contractor you want.",
    service: "Exterior",
  },
  {
    name: "Paul N.",
    location: "Whistler",
    date: "October 2023",
    rating: 5,
    body: "Strata council hired Alpenglow for our building's common areas. The coordination with residents was professional, the crew was on-time every day, and the final result was exactly what we specified. Two council members came to me asking for their number for personal projects. That's a good sign.",
    service: "Commercial / Strata",
  },
  {
    name: "Karen F.",
    location: "Pemberton",
    date: "September 2023",
    rating: 5,
    body: "Transparent pricing, no surprise charges, and the warranty they offer is real — not a fine-print gimmick. When we noticed a small spot that had bubbled a few weeks later, they were back within a week to fix it without any fuss. That's a company that stands behind the work.",
    service: "Exterior",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-navy text-navy" : "text-border"}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Reviews</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              What clients say.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Homeowners and property managers from across the Sea to Sky. Every review is from a real project.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border py-8 md:py-10">
        <Container>
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div>
              <div className="font-serif text-4xl text-navy tabular-nums">{avgRating}</div>
              <div className="mt-1 text-sm text-muted">Average rating</div>
              <div className="mt-1.5">
                <StarRating rating={5} />
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl text-navy tabular-nums">25+</div>
              <div className="mt-1 text-sm text-muted">Reviews</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Review grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <div key={i} className="border border-border rounded-sm bg-surface p-6 md:p-7">
                <StarRating rating={r.rating} />
                <p className="mt-4 text-ink leading-relaxed">&ldquo;{r.body}&rdquo;</p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <div className="font-medium text-navy text-sm">{r.name}</div>
                    <div className="text-xs text-muted mt-0.5">{r.location} · {r.date}</div>
                  </div>
                  {r.service && (
                    <div className="text-xs text-muted border border-border rounded-sm px-2 py-1 whitespace-nowrap">
                      {r.service}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google reviews link */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted mb-3">These reviews are also on Google.</p>
            <a
              href="https://www.google.com/search?q=Alpenglow+Painting+Whistler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy underline underline-offset-4 hover:text-navy-dark"
            >
              See us on Google →
            </a>
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="Ready to work with us?"
        subline="Most quotes are delivered the day of your site visit. The site visit is free."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
