import { ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";

type Props = {
  heading: string;
  body?: string;
};

export function WarrantyBanner({ heading, body }: Props) {
  return (
    <section className="py-12 md:py-16 bg-stone-light/40">
      <Container>
        <div className="max-w-5xl mx-auto bg-navy rounded-sm p-8 md:p-10 lg:p-12 grid gap-6 md:gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="w-14 h-14 rounded-sm bg-alpine/15 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={26} className="text-alpine" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-2">
              Written warranty
            </div>
            <h3 className="font-serif text-background text-xl md:text-2xl leading-tight">
              {heading}
            </h3>
            {body && (
              <p className="mt-3 text-background/70 text-sm md:text-[0.95rem] leading-relaxed">
                {body}
              </p>
            )}
          </div>
          <Button
            href="/warranty"
            variant="text"
            className="!text-background underline-offset-4 hover:!text-alpine whitespace-nowrap md:justify-self-end"
          >
            Read the terms →
          </Button>
        </div>
      </Container>
    </section>
  );
}
