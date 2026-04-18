import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Blog — Painting Tips and Advice",
  description:
    "Practical advice on painting, wood restoration, and home maintenance for Sea to Sky homeowners.",
};

// Blog index. Once Sanity is populated, replace POSTS with a GROQ fetch.
// blogPost schema fields: title, slug, publishedAt, excerpt, coverImage, author.

type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  coverUrl?: string;
  category?: string;
};

const POSTS: Post[] = [
  {
    slug: "how-long-does-exterior-paint-last-whistler",
    title: "How long does exterior paint last in Whistler? (And what shortens it)",
    publishedAt: "2024-09-15",
    excerpt: "UV exposure, freeze-thaw cycles, and late-season moisture are the main enemies of an exterior paint job in the Sea to Sky. Here's what to expect, and what to watch for.",
    coverUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
    category: "Exterior",
  },
  {
    slug: "cedar-oil-vs-stain-which-is-right",
    title: "Cedar oil or stain: which is right for your home?",
    publishedAt: "2024-08-20",
    excerpt: "Both protect cedar — but they work differently, look different, and require different maintenance schedules. What you choose now will affect your next refinishing job.",
    coverUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80",
    category: "Wood restoration",
  },
  {
    slug: "cabinet-painting-vs-replacement",
    title: "Painting your cabinets vs. replacing them: an honest comparison",
    publishedAt: "2024-07-10",
    excerpt: "A cabinet refinish done right costs roughly 20–30% of a full replacement. Here's what the quality ceiling looks like, what it can't fix, and when replacement is the better call.",
    coverUrl: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=900&q=80",
    category: "Cabinet refinishing",
  },
  {
    slug: "what-to-ask-a-painting-contractor",
    title: "6 questions to ask any painting contractor before you hire them",
    publishedAt: "2024-06-05",
    excerpt: "Most people ask for a price. The price is almost never the right question. Here's what to ask instead — and what the answers tell you.",
    coverUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    category: "Advice",
  },
  {
    slug: "how-to-read-a-paint-quote",
    title: "How to read a painting quote (and spot the ones that will go sideways)",
    publishedAt: "2024-05-12",
    excerpt: "A low quote is easy to find. A quote that reflects what you'll actually pay — and what you'll actually get — is rarer. Here's what to look at.",
    coverUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    category: "Advice",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-navy mb-4">Blog</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Practical advice for Sea to Sky homeowners.
            </h1>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-[3/2] overflow-hidden rounded-sm bg-stone-light/40 mb-4">
                  {post.coverUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.coverUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  )}
                </div>
                {post.category && (
                  <div className="text-xs uppercase tracking-widest text-navy mb-2">{post.category}</div>
                )}
                <h2 className="font-serif text-navy text-xl leading-[1.3] group-hover:underline underline-offset-4 decoration-[0.5px]">
                  {post.title}
                </h2>
                <p className="mt-2 text-ink text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-3 text-xs text-muted">{formatDate(post.publishedAt)}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
