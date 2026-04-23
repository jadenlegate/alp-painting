import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Alpenglow Painting Inc.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24">
      <Container size="prose">
        <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Legal</div>
        <h1 className="font-serif text-navy text-[2rem] md:text-[2.5rem] leading-[1.1] mb-10">
          Terms of Service
        </h1>
        <div className="space-y-6 text-ink leading-relaxed">
          <p className="text-muted text-sm">Last updated: January 2025</p>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Website use</h2>
            <p>
              This website is operated by Alpenglow Painting Inc. By accessing or using this site, you agree to these terms. The content on this site is for informational purposes and does not constitute a binding quote or contract.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Quote requests</h2>
            <p>
              Submitting a quote request through this website does not create a contract between you and Alpenglow Painting Inc. A binding agreement requires a written proposal accepted by both parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Intellectual property</h2>
            <p>
              The content on this site — including text, images, and design — is the property of Alpenglow Painting Inc. or is used with permission. You may not reproduce or distribute content from this site without written permission.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Limitation of liability</h2>
            <p>
              Alpenglow Painting Inc. makes no warranties about the accuracy of information on this site. We are not liable for any damages arising from your use of the site or reliance on its content.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Governing law</h2>
            <p>
              These terms are governed by the laws of British Columbia, Canada. Any disputes will be resolved in the courts of British Columbia.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy text-xl mb-3">Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href="mailto:hello@alpenglowpainting.ca" className="text-navy underline underline-offset-4">
                hello@alpenglowpainting.ca
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
