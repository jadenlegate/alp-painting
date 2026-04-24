import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { ArrowLeft } from "lucide-react";
import { POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blogPosts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [post.coverUrl],
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverUrl],
    },
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
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: `https://alpenglowpainting.ca${post.coverUrl}`,
    url: `https://alpenglowpainting.ca/blog/${post.slug}`,
    mainEntityOfPage: `https://alpenglowpainting.ca/blog/${post.slug}`,
    author: { "@type": "Organization", name: "Alpenglow Painting" },
    publisher: { "@type": "Organization", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
    articleSection: post.category,
    inLanguage: "en-CA",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] min-h-[280px] overflow-hidden">
        <Image
          src={post.coverUrl}
          alt={post.title}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <section className="pt-12 md:pt-16 pb-16 md:pb-24">
        <Container size="prose">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-navy mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">{post.category}</div>
          <h1 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
            {post.title}
          </h1>
          <div className="mt-3 text-sm text-muted">
            {formatDate(post.publishedAt)} · Alpenglow Painting
          </div>

          <article className="mt-10 prose-post">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="font-serif text-navy text-2xl md:text-3xl leading-[1.2] mt-12 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-serif text-navy text-xl mt-8 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-ink leading-relaxed mb-5">{children}</p>
                ),
                a: ({ href, children }) => (
                  <Link
                    href={href ?? "#"}
                    className="text-navy underline underline-offset-4 decoration-[0.5px] hover:decoration-2"
                  >
                    {children}
                  </Link>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-navy">{children}</strong>
                ),
                ul: ({ children }) => (
                  <ul className="my-5 space-y-2 list-disc pl-5 marker:text-alpine text-ink">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-5 space-y-2 list-decimal pl-5 marker:text-alpine text-ink">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-alpine pl-5 my-6 text-ink/80 italic">
                    {children}
                  </blockquote>
                ),
                hr: () => <hr className="my-10 border-border" />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

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

      {/* Related reading */}
      {related.length > 0 && (
        <section className="pb-16 md:pb-24 border-t border-border pt-16 md:pt-20">
          <Container>
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Related reading</div>
            <h2 className="font-serif text-navy text-[1.5rem] md:text-[2rem] leading-[1.15] mb-10">
              More from the blog.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="aspect-[3/2] overflow-hidden rounded-sm bg-stone-light/40 mb-4 relative">
                    <Image
                      src={p.coverUrl}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      quality={85}
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-2">{p.category}</div>
                  <h3 className="font-serif text-navy text-lg leading-[1.3] group-hover:underline underline-offset-4 decoration-[0.5px]">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to get started?"
        subline="Most quotes are delivered the day of your site visit. The site visit is free."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
      />
    </>
  );
}
