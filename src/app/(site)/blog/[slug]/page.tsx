import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { ArrowLeft } from "lucide-react";

// /blog/[slug] — individual blog post.
// Replace POSTS and content with Sanity GROQ fetch once CMS is populated.
// generateStaticParams pulls slugs from the same data source.

type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  coverUrl?: string;
  category?: string;
  content: string;
};

const POSTS: Post[] = [
  {
    slug: "how-long-does-exterior-paint-last-whistler",
    title: "How long does exterior paint last in Whistler? (And what shortens it)",
    publishedAt: "2024-09-15",
    excerpt: "UV exposure, freeze-thaw cycles, and late-season moisture are the main enemies of an exterior paint job in the Sea to Sky. Here's what to expect, and what to watch for.",
    coverUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=85",
    category: "Exterior",
    content: `A well-done exterior paint job in the Sea to Sky should last 7–10 years under normal conditions. The range is wide because "normal conditions" varies significantly between a Pemberton valley home with full sun exposure and a north-facing Whistler property that stays wet into June.

**What shortens a paint job**

UV exposure is the primary driver of early failure. South and west-facing surfaces take the most sun and typically need attention first. Paint fades, chalks, and loses adhesion faster under sustained UV load.

Freeze-thaw cycles cause expansion and contraction in the substrate. If the paint film can't flex with it — because it was applied too thick, applied in cold weather, or the surface wasn't properly prepped — you'll see cracking and peeling within a few seasons.

Late-season application is a frequent cause of early failure that homeowners rarely hear about. Paint applied in October in Whistler often doesn't cure properly before freezing temperatures arrive. We don't do exterior work after mid-September for exactly this reason.

**What extends a paint job**

The prep is worth more than the product. Paint applied over a clean, well-primed surface will outlast premium paint applied over a chalky or dirty one every time.

Product quality matters, but you're not spending as much on paint as you think. The labour is the cost. Using Sherwin-Williams Duration or Benjamin Moore Aura over a cheaper product adds maybe $300–500 to a full exterior. Given you're already spending several thousand on prep and labour, it's not the place to save.

**What to watch for**

Check your paint yearly — look at south and west faces first. Signs of early failure include peeling (especially around windows and doors where moisture collects), chalking (a powdery residue you can wipe off), and cracking at caulk lines. Catching these early means a targeted touch-up, not a full repaint.`,
  },
  {
    slug: "cedar-oil-vs-stain-which-is-right",
    title: "Cedar oil or stain: which is right for your home?",
    publishedAt: "2024-08-20",
    excerpt: "Both protect cedar — but they work differently, look different, and require different maintenance schedules. What you choose now will affect your next refinishing job.",
    coverUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1400&q=85",
    category: "Wood restoration",
    content: `Cedar needs to be protected from UV and moisture. The question is how — and both oils and stains are legitimate answers, with different trade-offs.

**Penetrating oils (Cabot, Sikkens, Armstrong Clark)**

Penetrating oils soak into the wood rather than forming a film on top. They give cedar a rich, natural appearance and tend to age gracefully — they weather out rather than peel. Maintenance means cleaning and recoating every 2–4 years, but you're not sanding back to bare wood each time.

The downside: oils don't provide the same UV protection as a solid stain, and the appearance is warmer and more natural, not brighter or more saturated.

**Semi-transparent and solid stains**

Stains sit more on the surface. Semi-transparent lets wood grain show through; solid stains cover it. Both provide strong UV protection and longer intervals between maintenance.

The trade-off is that when they eventually fail, they peel — which means more invasive prep work at the next refinish cycle.

**Our recommendation for most Sea to Sky cedar homes**

For homes with natural cedar cladding where the grain and character of the wood are part of the look, we typically recommend a penetrating oil system. The maintenance cycle is shorter, but the product looks better and the prep cost at renewal is lower.

For homes where durability and colour consistency are the priority — decks, fencing, exposed wood that takes hard use — a semi-transparent or solid stain often makes more sense.

We'll make a specific recommendation on the site visit once we've seen the current condition of your wood and what you're trying to achieve.`,
  },
  {
    slug: "cabinet-painting-vs-replacement",
    title: "Painting your cabinets vs. replacing them: an honest comparison",
    publishedAt: "2024-07-10",
    excerpt: "A cabinet refinish done right costs roughly 20–30% of a full replacement. Here's what the quality ceiling looks like, what it can't fix, and when replacement is the better call.",
    coverUrl: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1400&q=85",
    category: "Cabinet refinishing",
    content: `Cabinet painting has gotten a bad reputation — mostly because it's been done badly. Rollers leave texture, brush strokes show, the paint chips at edges within a year. Done right, a spray-applied cabinet refinish is hard to tell from factory.

**What refinishing can do**

A proper refinish involves removing every door and drawer front, sanding or scuff-priming every surface, and applying two coats of a hardener-fortified cabinet paint (we typically use Benjamin Moore Advance, which cures to an extremely hard finish) via airless sprayer. The result is a smooth, consistent finish that's durable.

It can completely transform the look of a kitchen — turning dated oak or stained maple into a clean contemporary white or navy — at roughly 20–30% of what new cabinets would cost.

**What refinishing can't do**

It can't fix damaged box structure, poor layout, inadequate storage, or cabinets that are genuinely worn out. If your boxes are falling apart, if the hinges have stripped the wood, or if you need to reconfigure the kitchen entirely, refinishing is a patch on a real problem.

**The honest answer**

If your boxes are solid and your layout works, refinishing is almost always the right call economically. The quality ceiling is high — the limitation is the skill and equipment of the person doing it, not the process.

If you're already thinking about a full renovation, replacement makes sense. If you just want a kitchen that looks new, a proper refinish is hard to beat for the cost.`,
  },
  {
    slug: "what-to-ask-a-painting-contractor",
    title: "6 questions to ask any painting contractor before you hire them",
    publishedAt: "2024-06-05",
    excerpt: "Most people ask for a price. The price is almost never the right question. Here's what to ask instead — and what the answers tell you.",
    coverUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    category: "Advice",
    content: `Most homeowners compare painting quotes by price alone. That's how they end up with peeling exteriors, missed spots, and contractors who disappeared after the deposit.

Here's what to ask instead.

**1. What products are you specifying, and why?**

If they can't name a product and explain why it's appropriate for your surfaces, they're not thinking about your job — they're thinking about their margin.

**2. What does your prep include?**

Prep is the difference between a paint job that lasts 10 years and one that lasts 3. Ask specifically: do you sand before recoating? How do you handle peeling areas? Do you caulk all penetrations?

**3. Who is on the crew — employees or subs?**

Subcontracted crews are harder to quality-control and often disappear mid-project. Know who is actually showing up to your house.

**4. What does your warranty cover, and how does it work in practice?**

Ask directly: "If something peels in year 2, what happens?" A contractor who stands behind the work will answer simply. One who doesn't will hedge.

**5. Can I see a project report from a previous job?**

Most contractors have nothing to show. If you can review what they documented from a previous job, you'll learn a lot about how they think about their work.

**6. What's your process for changes to scope?**

On any job larger than a single room, something unexpected comes up. How do they handle it? The answer should be: they tell you before they do anything, and changes are documented in writing.

The answers to these questions tell you more than the price does.`,
  },
  {
    slug: "how-to-read-a-paint-quote",
    title: "How to read a painting quote (and spot the ones that will go sideways)",
    publishedAt: "2024-05-12",
    excerpt: "A low quote is easy to find. A quote that reflects what you'll actually pay — and what you'll actually get — is rarer. Here's what to look at.",
    coverUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    category: "Advice",
    content: `A painting quote should answer several questions before you sign anything. Most don't.

**What to look for**

Scope specificity. Does it describe exactly what surfaces are included? "Paint exterior" is not enough. You want to know: siding, trim, fascia, soffits, doors, windows — what's in, what's out, and what the surface conditions are at each.

Product names. If the quote says "2 coats exterior paint" without naming the product, you don't know what you're getting. A $40/gallon paint and a $90/gallon paint are not the same.

Prep details. What surface preparation is included? Pressure washing, scraping, sanding, priming, caulking — which of these are in the price and to what standard?

Timeline. How long will the project take? How is weather handled for exterior work? A quote with no timeline is a contract with no accountability.

Warranty terms. What's covered, for how long, and under what conditions?

**Red flags**

A very low quote that doesn't explain what it excludes. Every job has a cost floor. If someone is significantly below everyone else, something is being omitted — prep, product quality, or scope.

No written proposal. A verbal quote or a number written on a notepad is not a proposal. It has no scope, no terms, and no protection for you if the job goes sideways.

No mention of products. This usually means they'll use whatever is cheapest.

**What a good quote looks like**

A written document with itemized scope, named products, timeline, and warranty terms. It should be specific enough that if you disputed something later, the document would settle it. Ours are presented in person or on a call — we don't just email a PDF and wait.`,
  },
];

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // Convert markdown-like content to paragraphs and bold
  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <h3 key={i} className="font-serif text-navy text-xl mt-8 mb-3">
            {block.replace(/\*\*/g, "")}
          </h3>
        );
      }
      // Inline bold
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-ink leading-relaxed">
          {parts.map((part, j) =>
            part.startsWith("**") ? (
              <strong key={j} className="font-semibold text-navy">
                {part.replace(/\*\*/g, "")}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <>
      {/* Hero */}
      {post.coverUrl && (
        <div className="relative h-[40vh] md:h-[50vh] min-h-[280px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <section className="pt-12 md:pt-16 pb-16 md:pb-24">
        <Container size="prose">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-navy mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          {post.category && (
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">{post.category}</div>
          )}
          <h1 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
            {post.title}
          </h1>
          <div className="mt-3 text-sm text-muted">{formatDate(post.publishedAt)} · Alpenglow Painting</div>

          <div className="mt-10 space-y-5">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted">
              Questions about your own project?{" "}
              <Link href="/contact" className="text-navy underline underline-offset-4">
                Get a free quote.
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to get started?"
        subline="Most quotes are delivered the day of your site visit. The site visit is free."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
