import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { Hero } from "@/components/home/Hero";
import { QuickAnswer } from "@/components/home/QuickAnswer";
import { ProblemSolution } from "@/components/trust/ProblemSolution";
import { AiSearchFeature } from "@/components/home/AiSearchFeature";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyFyrnMedia } from "@/components/home/WhyFyrnMedia";
import { Process } from "@/components/home/Process";
import { ProofSection } from "@/components/home/ProofSection";
import { AuditBand } from "@/components/home/AuditBand";
import { HomeInsights } from "@/components/home/HomeInsights";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = constructMetadata({
  title: "Fyrn Media | AI Search Visibility, SEO & Web Growth Agency",
  description:
    "Fyrn Media helps ambitious brands get found across Google and AI answer engines. AI search visibility, SEO, content and web builds. Get a free audit.",
  path: "/",
  ogTitle: "Fyrn Media | AI for Everyday Life: AI Search Visibility, SEO & Web Growth",
  ogDescription:
    "Be the brand people and AI can find, understand and trust. Get a free AI Visibility Audit from Fyrn Media.",
});

export default function HomePage() {
  return (
    <>
      {/* SECTION 2 · HERO */}
      <Hero />

      {/* SECTION 3 · QUICK ANSWER */}
      <QuickAnswer />

      {/* SECTION 4 · PROBLEMS WE SOLVE */}
      <ProblemSolution />

      {/* SECTION 5 · FLAGSHIP SERVICE */}
      <AiSearchFeature />

      {/* SECTION 6 · SERVICES */}
      <WhatWeDo />

      {/* SECTION 7 · WHY FYRN MEDIA */}
      <WhyFyrnMedia />

      {/* SECTION 8 · HOW WE WORK */}
      <Process />

      {/* SECTION 9 · RESULTS AND MEASUREMENT */}
      <ProofSection />

      {/* SECTION 10 · FREE AI VISIBILITY AUDIT */}
      <AuditBand />

      {/* SECTION 11 · INSIGHTS */}
      <HomeInsights />

      {/* SECTION 12 · FAQ */}
      <FAQ />

      {/* SECTION 13 · FINAL CALL TO ACTION */}
      <FinalCTA />
    </>
  );
}
