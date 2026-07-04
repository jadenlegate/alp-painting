import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { IS_FULL } from "@/lib/flags";
import { getServiceGroups } from "@/lib/services";

// Server layout resolves the site mode (branch-based, see @/lib/flags) and
// passes mode-filtered nav data into the client Navbar/Footer — the env var
// behind IS_FULL only exists server-side, so the filtering must happen here.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const serviceGroups = getServiceGroups(IS_FULL);
  return (
    <>
      <Navbar serviceGroups={serviceGroups} showBlog={IS_FULL} />
      <main className="flex-1">{children}</main>
      <Footer serviceGroups={serviceGroups} showBlog={IS_FULL} />
      <MobileCtaBar />
    </>
  );
}
