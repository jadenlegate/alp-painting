import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a quote from Alpenglow Painting. Most quotes delivered same day for projects across Whistler, Pemberton, and Squamish.",
};

// Contact page — two columns on desktop: form on the left, direct-contact
// details on the right. Keep both visible above the fold on desktop so
// high-intent users can call immediately without scrolling.
export default function ContactPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">
              Get a Quote
            </div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Let&rsquo;s talk about your project.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Most quotes are delivered same day. Tell us a bit about the
              project and we&rsquo;ll get back to you within 24 hours on
              weekdays.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <ContactForm />
            </div>

            <aside className="space-y-8">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">
                  Or reach us directly
                </div>
                <div className="space-y-4 text-ink">
                  <DirectContact
                    icon={Phone}
                    label="Call or text"
                    value={SITE.phone}
                    href={`tel:${SITE.phoneRaw}`}
                  />
                  <DirectContact
                    icon={Mail}
                    label="Email"
                    value={SITE.email}
                    href={`mailto:${SITE.email}`}
                  />
                  <DirectContact
                    icon={MapPin}
                    label="Based in"
                    value={`${SITE.address.city}, ${SITE.address.region}`}
                  />
                  <DirectContact
                    icon={Clock}
                    label="Business hours"
                    value={SITE.hours}
                  />
                </div>
              </div>

              <div className="border border-border rounded-sm bg-stone-light/30 p-6">
                <h3 className="font-serif text-xl text-navy">
                  Not sure what you need?
                </h3>
                <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">
                  That&rsquo;s fine. Describe what you&rsquo;re thinking in the
                  form — we&rsquo;ll talk through options at the walkthrough.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function DirectContact({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <Icon size={18} className="text-navy mt-0.5 flex-shrink-0" />
      <div>
        <div className="text-xs uppercase tracking-widest text-muted">
          {label}
        </div>
        <div className="text-ink">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-navy transition-colors">
      {content}
    </a>
  ) : (
    content
  );
}
