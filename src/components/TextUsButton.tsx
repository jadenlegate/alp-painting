import { MessageSquare } from "lucide-react";
import { SITE } from "@/lib/site";

// "Text us" button — opens the visitor's SMS / iMessage app pre-addressed
// to the business number. Plain <a> with the sms: protocol so the OS handles it.
export function TextUsButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`sms:${SITE.phoneRaw}`}
      className={`inline-flex items-center justify-center gap-2 min-w-[120px] rounded-sm px-5 py-2.5 text-sm font-semibold border border-navy text-navy hover:bg-navy hover:text-background transition-colors ${className}`}
    >
      <MessageSquare size={16} />
      Text us
    </a>
  );
}
