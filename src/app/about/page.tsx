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
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "About FyrnMedia — Digital Growth Studio",
  description:
    "FyrnMedia is a digital growth studio focused on helping businesses become more visible, more relevant, and more effective online — through strategy, technical SEO, and high-performance web technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
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

      <section className="border-y border-border py-14 md:py-20">
        <Container size="wide" className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7"><p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">People and opportunities</p><h2 className="mt-3 text-heading-xl font-semibold text-foreground">Interested in working with or alongside FyrnMedia?</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground-muted">Team information and open roles will be shared here when they are ready. For a collaboration or career enquiry, start a conversation with context.</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-accent md:col-span-5 md:justify-end"><Link href="/contact?topic=team" className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Team and collaboration</Link><Link href="/contact?topic=careers" className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Career enquiries</Link></div>
        </Container>
      </section>

      {/* 8. CTA */}
      <AboutCTA />
    </>
  );
}
