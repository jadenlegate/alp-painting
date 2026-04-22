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
};

const REVIEWS: Review[] = [
  {
    name: "Lawrence N.",
    location: "Whistler",
    date: "2025",
    rating: 5,
    body: "Jaden and his crew did a fantastic job of painting the exterior of my house at Whistler, including sanding down and staining all beams, posts and two large decks. I am very happy with the whole process and especially the end result. Jaden kept me well informed throughout the process. He and his crew are professional, reliable, trustworthy, courteous and personable. I would highly recommend them for your painting project.",
  },
  {
    name: "Cheryl W.",
    location: "Whistler",
    date: "2025",
    rating: 5,
    body: "Jaden was professional and efficient. He took the time to explain the process he would need to change colour from dark to light and varnished wood to white semi-gloss window trim. He went out to his truck and put together our quote and brought it back to us right away. Price was good. His crew were friendly and flexible and did a great job. They worked around other contractors with ease and got the job done in time and at the price quoted.",
  },
  {
    name: "Wilf G.",
    location: "Whistler",
    date: "2025",
    rating: 5,
    body: "Jaden and his team worked hard on the preparation of our house prior to the actual painting, which gives me confidence it will look great for many years to come. That's exactly why we chose Alpenglow. We also chose them partly because they pay their employees a living wage, who seemed happy and respectful in their work.",
  },
  {
    name: "Tara M.",
    location: "Whistler",
    date: "2024",
    rating: 5,
    body: "The team did a great job on so many levels with the painting of our parents' home. They were efficient with their time, provided quality service and their communication throughout the process exceeded our expectations. As a bonus, they also completed carpentry issues identified on the weathered wood that saved hiring another trade mid-stream.",
  },
  {
    name: "Robyn A.",
    location: "Whistler",
    date: "2024",
    rating: 5,
    body: "I hired the team to undertake an evaluation of my house trim condition and to sand and stain the areas that had been weathered so as to prevent more expensive maintenance down the road. From start to finish I was impressed with the attention to detail, the professionalism of Jaden Legate the owner, the quality of work and price.",
  },
  {
    name: "Nico G.",
    location: "Whistler",
    date: "2024",
    rating: 5,
    body: "Jaden did two painting jobs for us. Both were done with great attention to detail and the end product was great. He's professional in his work and communication throughout. His team also did a good job cleaning up after themselves. We strongly recommend him.",
  },
  {
    name: "David R.",
    location: "Whistler",
    date: "2024",
    rating: 5,
    body: "Jaden and his crew did a great job painting our home's exterior, siding, fascia and windows. What really stood out for us was the communications — we were always informed of when they were coming to work and when they were not due to weather. We would recommend Jaden and his team for any residential painting job.",
  },
  {
    name: "Susie W.",
    location: "Whistler",
    date: "2023",
    rating: 5,
    body: "Jaden and his crew were professional and polite the entire time they were on site. They arrived when they said they would. They completed the job on time. They always left the job site tidy and clean. Jaden promptly answered any questions and concerns we had. We found him great to work with.",
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
                <div className="mt-5">
                  <div className="font-medium text-navy text-sm">{r.name}</div>
                  <div className="text-xs text-muted mt-0.5">{r.location} · {r.date}</div>
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
