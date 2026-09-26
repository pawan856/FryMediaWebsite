import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { Hero } from "@/components/home/Hero";
import { PositioningStrip } from "@/components/home/PositioningStrip";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { SeoSpotlight } from "@/components/home/SeoSpotlight";
import { WhyFyrnMedia } from "@/components/home/WhyFyrnMedia";
import { Process } from "@/components/home/Process";
import { ProofSection } from "@/components/home/ProofSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { ProblemSolution } from "@/components/trust/ProblemSolution";

export const metadata: Metadata = constructMetadata({
  title: "FyrnMedia — Digital Growth & SEO",
  description:
    "FyrnMedia is a premium digital growth studio specialising in technical SEO, organic search engineering, and high-performance web systems. We help ambitious brands build lasting visibility and grow through data-driven strategy.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />
      <TrustStrip />

      {/* 2. Positioning strip */}
      <PositioningStrip />

      {/* 3. What FyrnMedia does */}
      <WhatWeDo />
      <ProblemSolution />

      {/* 4. SEO Spotlight */}
      <SeoSpotlight />

      {/* 5. Why FyrnMedia */}
      <WhyFyrnMedia />

      {/* 6. Process */}
      <Process />

      {/* 7. Proof / Results */}
      <ProofSection />

      {/* 8. Closing CTA */}
      <FinalCTA />
    </>
  );
}
