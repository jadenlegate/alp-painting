import { NextRequest, NextResponse } from "next/server";

// Receives quote-request submissions from <ContactForm /> and forwards the
// payload to a Zapier "Catch Hook" URL. Jaden uses the Zap to:
//   - create a lead in his CRM
//   - fire automated texts / email to the prospect
//
// The webhook URL is set via env var ZAPIER_QUOTE_WEBHOOK_URL so it doesn't
// get committed to the repo. If the env var is missing we log locally and
// still return 200 — better to capture the lead in server logs than to
// silently drop it.

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const webhookUrl = process.env.ZAPIER_QUOTE_WEBHOOK_URL;

  if (!webhookUrl) {
    // Dev-mode fallback: log the payload so nothing is lost while the Zap
    // isn't wired up yet.
    console.warn(
      "[quote] ZAPIER_QUOTE_WEBHOOK_URL is not set. Lead payload:",
      body
    );
    return NextResponse.json({ ok: true, mode: "log-only" });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`Zapier responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    // Log full payload so a failed Zapier forward can be recovered manually.
    console.error("[quote] Failed to forward to Zapier:", err, body);
    return NextResponse.json(
      { error: "Failed to deliver lead" },
      { status: 502 }
    );
  }
}
