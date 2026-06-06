import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Beckomberga Entreprenad AB — Måleri, Microcement & Snickeri i Bromma",
    template: "%s | Beckomberga Entreprenad",
  },
  description:
    "Din hantverkspartner i Bromma & Stockholm. Vi utför måleri, microcement och snickeri med toppenservice och snabba ledtider. Reco 4.9 ★ — 61+ omdömen.",
  keywords: ["måleri", "microcement", "snickeri", "hantverkare", "Bromma", "Hässelby", "Stockholm"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${interTight.variable}`}>
      <body className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
