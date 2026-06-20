import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

// "Call us" button — opens the dialer (tel:) with the business number.
export function CallUsButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold border border-navy text-navy hover:bg-navy hover:text-background transition-colors ${className}`}
    >
      <Phone size={16} />
      Call us
    </a>
  );
}
