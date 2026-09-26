import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { Breadcrumbs, GeoServiceStructuredData } from "@/components/seo/StructuredData";
import { GeoHero } from "@/components/geo/GeoHero";
import { GeoSections } from "@/components/geo/GeoSections";

export const metadata: Metadata = constructMetadata({
  title: "AI Search & GEO — FyrnMedia",
  description: "Explore FyrnMedia's emerging approach to AI-assisted discovery, entity clarity, source quality, and structured digital signals.",
  path: "/services/geo",
});

export default function GeoServicePage() {
  return <>
    <GeoServiceStructuredData />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "AI Search / GEO" }]} />
    <GeoHero />
    <GeoSections />
  </>;
}