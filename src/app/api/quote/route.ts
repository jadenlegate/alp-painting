import { NextRequest, NextResponse } from "next/server";
import { opinly } from "@/clients/opinly";

// Fire-and-forget Opinly conversion: a quote request is this business's
// "purchase" — record it as the standard generate_lead event. email (and the
// pixel's anonId when the form provides it) attribute the lead back to the
// campaign/content that brought the visitor. externalEventId dedupes retries.
function trackLead(body: Record<string, unknown>) {
  try {
    const email = typeof body.email === "string" ? body.email : undefined;
    const anonId = typeof body.anonId === "string" ? body.anonId : undefined;
    if (!email && !anonId) return;
    opinly
      .track(
        "generate_lead",
        { source: "quote-form" },
        {
          email,
          anonId,
          externalEventId: `quote:${email ?? anonId}:${typeof body.submittedAt === "string" ? body.submittedAt : ""}`,
        },
      )
      .catch((err) => console.warn("[quote] Opinly generate_lead failed:", err));
  } catch (err) {
    // Analytics must never break lead capture (e.g. missing OPINLY_API_KEY).
    console.warn("[quote] Opinly client unavailable:", err);
  }
}

// Receives quote-request submissions from <ContactForm /> and sends them on:
//   - to FirstLight (Alpenglow's own CRM): its lead-intake function creates the
//     customer, the project in New lead, a "call them" task and the thanks
//     text, and it lands in the Communication Centre. Env: FL_LEAD_INTAKE_KEY
//     (the same key the Meta lead Zap uses; FL's LEAD_ZAP_KEY secret), and
//     optionally FL_LEAD_INTAKE_URL.
//   - to the Zapier "Catch Hook" that feeds DripJobs (ZAPIER_QUOTE_WEBHOOK_URL),
//     while both run side by side.
// Either one taking the lead is a success; only if neither does is it an error
// (and the payload is logged so it can be recovered).
const FL_URL = process.env.FL_LEAD_INTAKE_URL || "https://rinxaiejyrhnrzsjnxjd.supabase.co/functions/v1/lead-intake";

async function toFirstLight(body: Record<string, unknown>, page: string) {
  const key = process.env.FL_LEAD_INTAKE_KEY;
  if (!key) return "off" as const;
  const s = (v: unknown) => (typeof v === "string" ? v : "");
  const res = await fetch(FL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-intake-key": key },
    body: JSON.stringify({
      first_name: s(body.firstName),
      last_name: s(body.lastName),
      name: s(body.name) || `${s(body.firstName)} ${s(body.lastName)}`.trim(),
      email: s(body.email),
      phone: s(body.phone),
      message: s(body.project),
      source: "Website",
      page,
    }),
  });
  if (!res.ok) throw new Error(`FirstLight responded ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return "ok" as const;
}

async function toZapier(body: unknown) {
  const webhookUrl = process.env.ZAPIER_QUOTE_WEBHOOK_URL;
  if (!webhookUrl) return "off" as const;
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Zapier responded ${res.status}`);
  return "ok" as const;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const lead = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const page = (req.headers.get("referer") || "").slice(0, 200);

  const [fl, zap] = await Promise.allSettled([toFirstLight(lead, page), toZapier(body)]);
  if (fl.status === "rejected") console.error("[quote] FirstLight didn't take the lead:", fl.reason, body);
  if (zap.status === "rejected") console.error("[quote] Zapier didn't take the lead:", zap.reason, body);
  const delivered = [fl, zap].some((r) => r.status === "fulfilled" && r.value === "ok");

  if (!delivered) {
    const nowhere = [fl, zap].every((r) => r.status === "fulfilled" && r.value === "off");
    if (nowhere) {
      // Dev-mode fallback: log the payload so nothing is lost while nothing is wired up.
      console.warn("[quote] No FL_LEAD_INTAKE_KEY or ZAPIER_QUOTE_WEBHOOK_URL set. Lead payload:", body);
      return NextResponse.json({ ok: true, mode: "log-only" });
    }
    return NextResponse.json({ error: "Failed to deliver lead" }, { status: 502 });
  }
  trackLead(lead);
  return NextResponse.json({ ok: true });
}
