import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { constructMetadata } from "@/lib/utils/seo";
import { SiteStructuredData } from "@/components/seo/StructuredData";
import { AttributionTracker } from "@/components/analytics/AttributionTracker";
import { primaryMarket } from "@/lib/markets/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={primaryMarket.locale} dir={primaryMarket.language === "ar" ? "rtl" : "ltr"} className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-white flex min-h-screen flex-col font-sans">
        <SiteStructuredData />
        <AttributionTracker />
        {/* Skip to Content for Screen Readers & Keyboard Nav */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-sm focus:outline-none"
        >
          Skip to main content
        </a>

        <Navbar />
        <ScrollProgress />

        <main id="main-content" className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
      </body>
    </html>
  );
}
