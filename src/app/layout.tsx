import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
