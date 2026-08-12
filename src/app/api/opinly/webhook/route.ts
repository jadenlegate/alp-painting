import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

// Opinly publish webhook. Point Opinly (Settings → Developers → Webhooks) at
// POST https://www.alpenglowpainting.ca/api/opinly/webhook
//
// On content.routes-changed we do BOTH invalidations:
//  1. revalidateTag('opinly', { expire: 0 }) — drops the tagged data cache
//     immediately (every client fetch is tagged 'opinly'). On Next 16+ the
//     second argument is required; { expire: 0 } is the immediate drop — a
//     named profile like 'max' would keep serving stale posts for up to a year.
//  2. revalidatePath per changed route — revalidateTag alone doesn't reset the
//     full-route cache, and revalidatePath alone silently does nothing for
//     dynamically-rendered routes when self-hosted. Belt and suspenders.

type ChangedRoute = { type: string; slug?: string };

export async function POST(req: NextRequest) {
  let event: { type?: string; data?: { changed?: ChangedRoute[] } };
  try {
    event = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (event?.type !== "content.routes-changed") {
    return NextResponse.json({ ok: true, ignored: event?.type ?? "unknown" });
  }

  revalidateTag("opinly", { expire: 0 });

  // The blog index + sitemap reflect nearly any content change.
  const paths = new Set<string>(["/blog", "/sitemap.xml"]);
  for (const route of event.data?.changed ?? []) {
    if (!route.slug) continue;
    switch (route.type) {
      case "post":
        paths.add(`/blog/${route.slug}`);
        break;
      case "category":
        paths.add(`/blog/category/${route.slug}`);
        break;
      case "author":
        paths.add(`/blog/authors/${route.slug}`);
        break;
    }
  }
  for (const p of paths) revalidatePath(p);

  return NextResponse.json({ revalidated: true, paths: [...paths] });
}
