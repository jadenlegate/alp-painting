import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { POSTS } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Painting Blog — Whistler Home Maintenance Advice",
  description:
    "Practical advice on painting, wood restoration, and home maintenance written for Whistler, Pemberton, and Squamish homeowners.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Blog</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Practical advice for Sea to Sky homeowners.
            </h1>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-[3/2] overflow-hidden rounded-sm bg-stone-light/40 mb-4 relative">
                  <Image
                    src={post.coverUrl}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    quality={85}
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-2">{post.category}</div>
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
