import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Alpenglow Painting Inc.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24">
      <Container size="prose">
        <div className="text-xs uppercase tracking-widest text-navy mb-4">Legal</div>
        <h1 className="font-serif text-navy text-[2rem] md:text-[2.5rem] leading-[1.1] mb-10">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-ink leading-relaxed">
          <p className="text-muted text-sm">Last updated: January 2025</p>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Information we collect</h2>
            <p>
              When you submit a quote request or contact form on this website, we collect the information you provide: your name, email address, phone number, and project details. We use this information to respond to your inquiry and, if you become a client, to manage your project.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">How we use your information</h2>
            <p>
              We use the information you submit to respond to your inquiry, provide a quote, and follow up about your project. We may also send occasional updates about Alpenglow Painting if you opt in. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Third-party services</h2>
            <p>
              We use Zapier to route form submissions into our CRM. Form data submitted through our contact form is processed through Zapier&rsquo;s infrastructure. We use Sanity as a content management system. Neither service stores your personal data beyond what is needed to operate our systems.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Cookies and analytics</h2>
            <p>
              This website may use basic analytics to understand traffic. We do not use advertising cookies or cross-site tracking.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Contact</h2>
            <p>
              If you have questions about this policy or want to request deletion of your data, contact us at{" "}
              <a href="mailto:hello@alpenglowpainting.ca" className="text-navy underline underline-offset-4">
                hello@alpenglowpainting.ca
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
