import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceIndex } from "@/components/services/ServiceIndex";
import { WhyTheseServices } from "@/components/services/WhyTheseServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export const metadata: Metadata = constructMetadata({
  title: "FyrnMedia Services — Digital Growth & SEO",
  description:
    "FyrnMedia provides specialized digital growth disciplines engineered around organic search visibility, technical SEO, and scalable web infrastructure.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero */}
      <ServiceHero />

      {/* 2. Editorial Service Index */}
      <ServiceIndex />

      {/* 3. Why These Services */}
      <WhyTheseServices />

      {/* 4. Closing CTA */}
      <ServicesCTA />
    </>
  );
}
