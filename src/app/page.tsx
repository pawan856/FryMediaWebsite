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
import { AiSearchFeature } from "@/components/home/AiSearchFeature";
import { PlatformIndex } from "@/components/home/PlatformIndex";

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
      {/* 1. Hero */}
      <Hero />
      <TrustStrip />

      {/* 2. Positioning strip */}
      <PositioningStrip />

      {/* 3. What FyrnMedia does */}
      <WhatWeDo />
      <AiSearchFeature />
      <ProblemSolution />

      {/* 4. SEO Spotlight */}
      <SeoSpotlight />

      {/* 5. Why FyrnMedia */}
      <WhyFyrnMedia />

      {/* 6. Process */}
      <Process />

      {/* 7. Proof / Results */}
      <ProofSection />
      <PlatformIndex />

      {/* 8. Closing CTA */}
      <FinalCTA />
    </>
  );
}
