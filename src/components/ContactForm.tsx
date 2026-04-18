"use client";

import { useState, FormEvent } from "react";
import { Button } from "./Button";
import { Check, AlertCircle } from "lucide-react";

// Quote request form. Posts JSON to /api/quote which forwards to a Zapier
// Catch Hook (so Jaden can route leads into his CRM + automated texts).
// Keep the field count minimal per brief §7.7 — every added field
// measurably drops conversion.
const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Wood Restoration / Staining",
  "Cabinet Refinishing",
  "Commercial / Strata / Hotel",
  "Not sure yet",
];

const LOCATIONS = ["Whistler", "Pemberton", "Squamish", "Other"];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      location: data.get("location"),
      services: data.getAll("services"),
      project: data.get("project"),
      contactMethod: data.get("contactMethod"),
      submittedAt: new Date().toISOString(),
      source: "alpenglowpainting.ca",
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-border rounded-sm bg-surface p-8 md:p-10">
        <div className="flex items-center gap-3 text-navy mb-3">
          <Check size={22} />
          <h3 className="font-serif text-2xl">Thanks — we got it.</h3>
        </div>
        <p className="text-ink leading-relaxed">
          We&rsquo;ll be in touch within 24 hours on weekdays. Most quotes are
          delivered same day. If it&rsquo;s urgent, call us at{" "}
          <a href="tel:+16049384037" className="text-navy underline">
            (604) 938-4037
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <div>
          <Label>Project location</Label>
          <select
            name="location"
            required
            defaultValue=""
            className="mt-1.5 w-full border border-border rounded-sm bg-surface px-3 py-2.5 text-sm focus:outline-none focus:border-navy"
          >
            <option value="" disabled>
              Select a location
            </option>
            {LOCATIONS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label>What are you thinking about?</Label>
        <div className="mt-2 grid sm:grid-cols-2 gap-2">
          {SERVICES.map((s) => (
            <label
              key={s}
              className="flex items-center gap-2 text-sm text-ink cursor-pointer"
            >
              <input
                type="checkbox"
                name="services"
                value={s}
                className="accent-navy"
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label>Tell us about your project</Label>
        <textarea
          name="project"
          rows={4}
          className="mt-1.5 w-full border border-border rounded-sm bg-surface px-3 py-2.5 text-sm focus:outline-none focus:border-navy"
          placeholder="Size of the space, timing you're targeting, anything we should know…"
        />
      </div>

      <div>
        <Label>Preferred contact method</Label>
        <div className="mt-2 flex flex-wrap gap-5">
          {(["Email", "Phone", "Text"] as const).map((m) => (
            <label
              key={m}
              className="flex items-center gap-2 text-sm text-ink cursor-pointer"
            >
              <input
                type="radio"
                name="contactMethod"
                value={m}
                defaultChecked={m === "Email"}
                className="accent-navy"
              />
              {m}
            </label>
          ))}
        </div>
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm p-3">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <div>
            Something went wrong sending the form. Please try again or email{" "}
            <a href="mailto:hello@alpenglowpainting.ca" className="underline">
              hello@alpenglowpainting.ca
            </a>
            .
            {errorMsg && <div className="text-red-600 mt-1 text-xs">{errorMsg}</div>}
          </div>
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a Quote"}
      </Button>

      <p className="text-xs text-muted">
        We respond within 24 hours on weekdays. Most quotes are delivered the
        same day.
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs uppercase tracking-widest text-navy font-medium">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full border border-border rounded-sm bg-surface px-3 py-2.5 text-sm focus:outline-none focus:border-navy"
      />
    </div>
  );
}
