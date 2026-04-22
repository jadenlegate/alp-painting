import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Montserrat — Argentum Sans is a Montserrat fork; this is the closest
// Google Fonts match and effectively identical in use.
const montserrat = Montserrat({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alpenglow Painting — Whistler & Sea to Sky Painters",
    template: "%s | Alpenglow Painting",
  },
  description:
    "Premium residential and commercial painting across Whistler, Pemberton, and Squamish. Clean crews, clear communication, and up to a 10-year warranty.",
  metadataBase: new URL("https://alpenglowpainting.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Alpenglow Painting",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: SITE.name,
  legalName: SITE.legalName,
  url: "https://alpenglowpainting.ca",
  logo: "https://alpenglowpainting.ca/Alpenglow Logo Blue.svg",
  image: "https://alpenglowpainting.ca/Alpenglow Logo Blue.svg",
  telephone: SITE.phoneRaw,
  email: SITE.email,
  description:
    "Premium residential and commercial painting in Whistler and the Sea to Sky corridor. Interior, exterior, wood restoration, and cabinet refinishing with up to a 10-year warranty.",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$$",
  sameAs: [SITE.social.google, SITE.social.instagram, SITE.social.facebook, SITE.social.tiktok],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
