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

const SITE_URL = "https://alpenglowpainting.ca";
const OG_IMAGE = `${SITE_URL}/stock-images/I_Blackcomb_Dusk_1-scaled.jpg`;

export const metadata: Metadata = {
  title: {
    default: "Whistler Painters | Alpenglow Painting — Sea to Sky, BC",
    template: "%s | Alpenglow Painting",
  },
  description:
    "Premium residential and commercial painting across Whistler, Pemberton, and Squamish. Interior, exterior, wood restoration, and cabinet refinishing with up to a 10-year warranty.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  keywords: [
    "Whistler painters",
    "painters in Whistler",
    "Whistler painting contractor",
    "Pemberton painters",
    "Squamish painters",
    "Sea to Sky painters",
    "interior painting Whistler",
    "exterior painting Whistler",
    "cabinet refinishing Whistler",
    "wood restoration Whistler",
    "commercial painting Whistler",
    "strata painting Whistler",
  ],
  authors: [{ name: "Alpenglow Painting" }],
  creator: "Alpenglow Painting Inc.",
  publisher: "Alpenglow Painting Inc.",
  category: "Painting Contractor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Alpenglow Painting",
    url: SITE_URL,
    title: "Whistler Painters | Alpenglow Painting — Sea to Sky, BC",
    description:
      "Premium residential and commercial painting across Whistler, Pemberton, and Squamish. Up to a 10-year warranty.",
    images: [{ url: OG_IMAGE, width: 2048, height: 1024, alt: "Alpenglow Painting — Whistler, BC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whistler Painters | Alpenglow Painting",
    description:
      "Premium painting across Whistler, Pemberton, and Squamish. Up to a 10-year warranty.",
    images: [OG_IMAGE],
  },
  icons: { icon: "/favicon.ico" },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": ["HousePainter", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/Alpenglow Logo Blue.svg`,
  image: OG_IMAGE,
  telephone: SITE.phoneRaw,
  email: SITE.email,
  description:
    "Premium residential and commercial painting in Whistler and the Sea to Sky corridor. Interior, exterior, wood restoration, cabinet refinishing, and light carpentry with up to a 10-year warranty.",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.1163,
    longitude: -122.9574,
  },
  areaServed: [
    { "@type": "City", name: "Whistler", "@id": "https://www.wikidata.org/wiki/Q180825" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
    { "@type": "AdministrativeArea", name: "Sea to Sky, British Columbia" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.1163, longitude: -122.9574 },
    geoRadius: 80000,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting", url: `${SITE_URL}/services/interior-painting` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting", url: `${SITE_URL}/services/exterior-painting` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Restoration & Staining", url: `${SITE_URL}/services/wood-restoration` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet Refinishing", url: `${SITE_URL}/services/cabinet-refinishing` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Light Carpentry & Repair", url: `${SITE_URL}/services/light-carpentry` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial, Strata & Hotel Painting", url: `${SITE_URL}/services/commercial` } },
    ],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$$",
  sameAs: [SITE.social.google, SITE.social.instagram, SITE.social.facebook, SITE.social.tiktok],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE.name,
  publisher: { "@id": `${SITE_URL}/#business` },
  inLanguage: "en-CA",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
