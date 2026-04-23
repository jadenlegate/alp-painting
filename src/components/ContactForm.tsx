"use client";

import { useState, FormEvent } from "react";
import { Button } from "./Button";
import { Check, AlertCircle } from "lucide-react";

const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Wood Restoration / Staining",
  "Cabinet Refinishing",
  "Light Carpentry / Repair",
  "Commercial / Strata / Hotel",
  "Not sure yet",
];

const LOCATIONS = ["Whistler", "Pemberton", "Squamish", "Other"];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "location" | "project", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [submitErrorMsg, setSubmitErrorMsg] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (payload: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    project: string;
  }): Errors => {
    const e: Errors = {};
    if (!payload.firstName.trim()) e.firstName = "Please tell us your first name.";
    if (!payload.lastName.trim()) e.lastName = "Please tell us your last name.";
    if (!payload.email.trim()) e.email = "We need an email to get back to you.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim()))
      e.email = "That doesn't look like a valid email.";
    if (!payload.phone.trim()) e.phone = "A phone number helps us reach you quickly.";
    if (!payload.location) e.location = "Select the project location.";
    if (!payload.project.trim()) e.project = "Tell us a bit about the project.";
    return e;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") ?? "");
    const lastName = String(data.get("lastName") ?? "");
    const payload = {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      location: String(data.get("location") ?? ""),
      services: data.getAll("services"),
      project: String(data.get("project") ?? ""),
      contactMethod: String(data.get("contactMethod") ?? ""),
      submittedAt: new Date().toISOString(),
      source: "alpenglowpainting.ca",
    };

    const validationErrors = validate(payload);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      // scroll to first invalid field
      const firstKey = Object.keys(validationErrors)[0];
      document.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    setSubmitErrorMsg("");

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
      setSubmitErrorMsg(err instanceof Error ? err.message : "Unknown error");
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
          We&rsquo;ll be in touch within 24 hours on weekdays to book your free site visit — most quotes are delivered the day of that visit. If it&rsquo;s urgent, call us at{" "}
          <a href="tel:+16049384037" className="text-navy underline">
            (604) 938-4037
          </a>
          .
        </p>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {errorCount > 0 && (
        <div
          role="alert"
          className="flex items-start gap-3 border border-red-200 bg-red-50 rounded-sm p-4"
        >
          <AlertCircle size={18} className="text-red-700 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-red-900">
            <div className="font-medium mb-0.5">
              {errorCount === 1 ? "One field needs attention." : `${errorCount} fields need attention.`}
            </div>
            <div className="text-red-800">
              Please review the highlighted fields below and try again.
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="First name" name="firstName" required error={errors.firstName} autoComplete="given-name" />
        <Field label="Last name" name="lastName" required error={errors.lastName} autoComplete="family-name" />
        <Field label="Email" name="email" type="email" required error={errors.email} autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" required error={errors.phone} autoComplete="tel" />
        <div>
          <Label required>Project location</Label>
          <select
            name="location"
            defaultValue=""
            aria-invalid={!!errors.location}
            className={`mt-1.5 w-full border rounded-sm bg-surface px-3 py-2.5 text-sm focus:outline-none ${
              errors.location
                ? "border-red-400 focus:border-red-500"
                : "border-border focus:border-navy"
            }`}
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
          {errors.location && <ErrorText>{errors.location}</ErrorText>}
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
        <Label required>Tell us about your project</Label>
        <textarea
          name="project"
          rows={4}
          aria-invalid={!!errors.project}
          className={`mt-1.5 w-full border rounded-sm bg-surface px-3 py-2.5 text-sm focus:outline-none ${
            errors.project
              ? "border-red-400 focus:border-red-500"
              : "border-border focus:border-navy"
          }`}
          placeholder="Size of the space, timing you're targeting, anything we should know…"
        />
        {errors.project && <ErrorText>{errors.project}</ErrorText>}
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
        <div className="flex items-start gap-3 border border-red-200 bg-red-50 rounded-sm p-4">
          <AlertCircle size={18} className="text-red-700 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-red-900">
            <div className="font-medium mb-0.5">We couldn&rsquo;t send that.</div>
            <div className="text-red-800">
              Please try again, or email{" "}
              <a href="mailto:hello@alpenglowpainting.ca" className="underline">
                hello@alpenglowpainting.ca
              </a>{" "}
              directly.
            </div>
            {submitErrorMsg && <div className="text-red-700/70 mt-1.5 text-xs">{submitErrorMsg}</div>}
          </div>
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a Quote"}
      </Button>

      <p className="text-xs text-muted">
        We respond within 24 hours on weekdays to book a free site visit. Most quotes are delivered the day of that visit.
      </p>
    </form>
  );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="text-xs uppercase tracking-widest text-navy font-medium">
      {children}
      {required && <span className="text-alpine ml-1" aria-hidden="true">*</span>}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
      <AlertCircle size={12} className="flex-shrink-0" />
      <span>{children}</span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={`mt-1.5 w-full border rounded-sm bg-surface px-3 py-2.5 text-sm focus:outline-none ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-border focus:border-navy"
        }`}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
