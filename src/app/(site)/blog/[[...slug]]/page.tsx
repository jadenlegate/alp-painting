import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  OpinlyJsonLd,
  buildBlogPostingJsonLd,
  buildFaqJsonLd,
  formatDate,
  generateOpinlyMetadata,
  opinlyConfig,
} from "@opinly/next";
import { OpinlyContent } from "@opinly/react";
import { imageUrl, type SeoResolved } from "@opinly/shared";
import type { FullPost, Post } from "@opinly/backend";
import { opinly } from "@/clients/opinly";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";

// Opinly-powered blog. Content is authored in Opinly and fetched at request
// time (cached + tagged 'opinly'; the publish webhook drops the cache).
// Route shapes: /blog, /blog/<post>, /blog/category/<slug>, /blog/authors[/<slug>].
export const revalidate = 3600;

const CATEGORY_PREFIX = opinlyConfig.categoryPrefix ?? "category";
const AUTHOR_PREFIX = opinlyConfig.authorPrefix ?? "authors";

type Route =
  | { type: "home"; data: Post[] }
  | { type: "post"; data: FullPost }
  | { type: "category"; data: { slug: string; name: string; description: string }; posts: Post[] }
  | { type: "author"; data: { name: string; slug: string; bio: string | null }; posts: Post[] }
  | { type: "authors"; data: { name: string; slug: string; bio: string | null; posts: Post[] }[] };

// Resolve a slug array to renderable content. API failures (e.g. missing
// OPINLY_API_KEY) degrade to null → 404, never a crashed build.
async function loadRoute(slug: string[]): Promise<Route | null> {
  try {
    if (slug.length === 0) {
      const posts = await opinly.posts({ limit: 24 });
      return { type: "home", data: posts.data };
    }
    if (slug[0] === CATEGORY_PREFIX && slug[1] && slug.length === 2) {
      const [categories, posts] = await Promise.all([
        opinly.categories(),
        opinly.posts({ category: slug[1], limit: 24 }),
      ]);
      const category = categories.find((c) => c.slug === slug[1]);
      if (!category) return null;
      return {
        type: "category",
        data: { slug: category.slug, name: category.title, description: category.description ?? "" },
        posts: posts.data,
      };
    }
    if (slug[0] === AUTHOR_PREFIX && slug.length === 1) {
      const authors = await opinly.authors();
      return { type: "authors", data: authors.data };
    }
    if (slug[0] === AUTHOR_PREFIX && slug[1] && slug.length === 2) {
      const author = await opinly.author(slug[1]);
      if (author.type !== "author") return null;
      return {
        type: "author",
        data: { name: author.data.name, slug: author.data.slug, bio: author.data.bio },
        posts: author.data.posts,
      };
    }
    if (slug.length === 1) {
      const post = await opinly.post(slug[0]);
      return post ? { type: "post", data: post } : null;
    }
    return null;
  } catch (err) {
    console.error("[blog] Opinly fetch failed:", err);
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug?: string[] }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const route = await loadRoute(slug ?? []);
  if (!route) return { title: "Blog" };
  return generateOpinlyMetadata(route as SeoResolved, parent);
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const route = await loadRoute(slug ?? []);
  if (!route) notFound();

  if (route.type === "post") return <PostDetail post={route.data} />;

  const heading =
    route.type === "home"
      ? { eyebrow: "Blog", title: "Notes from the field.", intro: "Painting, staining, and wood care in the Sea to Sky — written by the crew that does the work." }
      : route.type === "category"
        ? { eyebrow: "Blog", title: route.data.name, intro: route.data.description }
        : route.type === "author"
          ? { eyebrow: "Blog", title: route.data.name, intro: route.data.bio ?? "" }
          : { eyebrow: "Blog", title: "Our authors.", intro: "" };

  const posts =
    route.type === "authors" ? [] : route.type === "home" ? route.data : route.posts;

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">{heading.eyebrow}</Eyebrow>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">{heading.title}</h1>
            {heading.intro && <p className="mt-5 text-ink text-lg leading-relaxed">{heading.intro}</p>}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          {route.type === "authors" ? (
            <div className="grid gap-6 md:grid-cols-2">
              {route.data.map((a) => (
                <Link key={a.slug} href={`/blog/${AUTHOR_PREFIX}/${a.slug}`} className="border border-border rounded-sm bg-surface p-6 hover:border-navy/30 transition-colors">
                  <div className="font-serif text-navy text-xl">{a.name}</div>
                  {a.bio && <p className="mt-2 text-ink text-sm leading-relaxed">{a.bio}</p>}
                  <div className="mt-3 text-xs text-muted">{a.posts.length} article{a.posts.length === 1 ? "" : "s"}</div>
                </Link>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-muted">No articles here yet — check back soon.</p>
          ) : (
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to start your project?"
        subline="Tell us about your project and we'll get in touch soon to schedule a free site visit."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
      />
    </>
  );
}

function PostCard({ post }: { post: Post }) {
  const cover = imageUrl(post.image?.fileKey, opinlyConfig);
  return (
    <Link href={`/blog/${post.slug}`} className="group border border-border rounded-sm bg-surface overflow-hidden flex flex-col">
      {cover && (
        <div className="relative aspect-[16/10] bg-stone-light/40 overflow-hidden">
          <Image
            src={cover}
            alt={post.image?.alt ?? post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs uppercase tracking-[0.16em] text-alpine font-semibold">
          {post.category?.name ?? "Article"}
        </div>
        <h2 className="mt-2 font-serif text-navy text-xl leading-snug group-hover:underline underline-offset-4 decoration-[0.5px]">
          {post.title}
        </h2>
        <p className="mt-2 text-ink text-sm leading-relaxed line-clamp-3 flex-1">{post.description}</p>
        <div className="mt-4 text-xs text-muted">{formatDate(post.firstPublishedAt)}</div>
      </div>
    </Link>
  );
}

function PostDetail({ post }: { post: FullPost }) {
  const cover = imageUrl(post.titleFile?.fileKey, opinlyConfig);
  return (
    <>
      <OpinlyJsonLd data={buildBlogPostingJsonLd(post)} />
      {post.faqs?.length ? <OpinlyJsonLd data={buildFaqJsonLd(post.faqs)} /> : null}

      <section className="pt-32 md:pt-40 pb-10 md:pb-12">
        <Container size="prose">
          {post.category && (
            <Link href={`/blog/${CATEGORY_PREFIX}/${post.category.slug}`}>
              <Eyebrow className="mb-4">{post.category.name}</Eyebrow>
            </Link>
          )}
          <h1 className="font-serif text-navy text-[2rem] md:text-[2.75rem] leading-[1.1]">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            {post.author && (
              <>
                <Link href={`/blog/${AUTHOR_PREFIX}/${post.author.slug}`} className="text-navy font-medium hover:underline underline-offset-4">
                  {post.author.name}
                </Link>
                <span aria-hidden>·</span>
              </>
            )}
            <time dateTime={post.firstPublishedAt}>{formatDate(post.firstPublishedAt)}</time>
          </div>
        </Container>
      </section>

      {cover && (
        <section className="pb-10 md:pb-12">
          <Container size="prose">
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-stone-light/40">
              <Image
                src={cover}
                alt={post.titleFile?.altText ?? post.title}
                fill
                priority
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      <section className="pb-16 md:pb-20">
        <Container size="prose">
          <div className="opinly-content">
            <OpinlyContent content={post.content} config={opinlyConfig} />
          </div>
        </Container>
      </section>

      {post.faqs?.length ? (
        <section className="pb-16 md:pb-20">
          <Container size="prose">
            <h2 className="font-serif text-navy text-2xl md:text-3xl mb-6">Frequently asked</h2>
            <div className="space-y-5">
              {post.faqs.map((f) => (
                <div key={f.question} className="border border-border rounded-sm bg-surface p-6">
                  <div className="font-serif text-navy text-lg">{f.question}</div>
                  <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">{f.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to start your project?"
        subline="Tell us about your project and we'll get in touch soon to schedule a free site visit."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
      />
    </>
  );
}
