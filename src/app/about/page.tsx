import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { AboutHero } from "@/components/about/AboutHero";
import { PointOfView } from "@/components/about/PointOfView";
import { Beliefs } from "@/components/about/Beliefs";
import { HowWeThink } from "@/components/about/HowWeThink";
import { Approach } from "@/components/about/Approach";
import { Principles } from "@/components/about/Principles";
import { Vision } from "@/components/about/Vision";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = constructMetadata({
  title: "About FyrnMedia — Digital Growth Studio",
  description:
    "FyrnMedia is a digital growth studio focused on helping businesses become more visible, more relevant, and more effective online — through strategy, technical SEO, and high-performance web technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Our Point of View */}
      <PointOfView />

      {/* 3. What We Believe */}
      <Beliefs />

      {/* 4. How We Think */}
      <HowWeThink />

      {/* 5. Our Approach */}
      <Approach />

      {/* 6. Principles */}
      <Principles />

      {/* 7. Vision */}
      <Vision />

      {/* 8. CTA */}
      <AboutCTA />
    </>
  );
}
