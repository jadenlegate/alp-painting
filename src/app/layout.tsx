import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Fraunces — editorial serif for headlines. Most painters use sans-serif;
// this gives us immediate visual differentiation. Keep weights lean.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Inter — body + UI. Includes tabular numerals variant for stats.
const inter = Inter({
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
