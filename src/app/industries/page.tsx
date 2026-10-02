import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/utils/seo";
import { industries } from "@/lib/content/architecture";

export const metadata: Metadata = constructMetadata({
  title: "Industries — FyrnMedia",
  description: "Explore how FyrnMedia adapts search, content, technology and measurement to distinct industry contexts.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
    <section className="border-b border-border py-16 md:py-24">
      <Container size="wide">
        <p className="mb-6 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground-muted"><span className="h-px w-6 bg-accent" />Industries</p>
        <h1 className="max-w-5xl text-display-xl font-bold leading-[1.02] tracking-tighter text-foreground">Strategy shaped around your market.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground-muted">Different industries have different discovery journeys, evidence requirements and buying decisions. We begin with that context and build a practical digital growth plan around it.</p>
      </Container>
    </section>
    <section className="py-14 md:py-20">
      <Container size="wide">
        <div className="grid gap-x-12 md:grid-cols-2">
          {industries.map((industry, index) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group flex min-h-32 items-start justify-between gap-6 border-b border-border py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <div><p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">Industry / 0{index + 1}</p><h2 className="mt-3 text-heading-lg font-semibold text-foreground transition-colors group-hover:text-accent">{industry.name}</h2><p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted">{industry.description}</p></div>
              <ArrowUpRight className="mt-2 h-4 w-4 shrink-0 text-foreground-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  </>;
}