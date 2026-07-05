import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { TextUsButton } from "@/components/TextUsButton";
import { CallUsButton } from "@/components/CallUsButton";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Get a Painting Quote in Whistler",
  description:
    "Request a free painting quote from Alpenglow Painting. Most quotes delivered the day of the site visit for projects across Whistler, Pemberton, and Squamish.",
  alternates: { canonical: "/contact" },
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
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">
              Get a Quote
            </div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Let&rsquo;s talk about your project.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Tell us about your project and we&rsquo;ll get in touch soon to
              discuss it and schedule a quote.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-6 lg:pb-10">
        <Container>
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <ContactForm />
            </div>

            <aside className="space-y-8">
              <div>
                <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">
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
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CallUsButton />
                  <TextUsButton />
                </div>
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
