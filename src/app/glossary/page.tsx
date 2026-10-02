import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { glossaryTerms } from "@/lib/content/architecture";
import { constructMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = constructMetadata({
  title: "Search & AI Visibility Glossary — FyrnMedia",
  description: "Clear definitions for AI Search Visibility, AEO, GEO, Entity SEO and canonical URLs.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Glossary" }]} />
    <section className="border-b border-border py-16 md:py-24"><Container size="wide"><p className="mb-6 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground-muted"><span className="h-px w-6 bg-accent" />Glossary</p><h1 className="max-w-5xl text-display-xl font-bold leading-[1.02] tracking-tighter text-foreground">A clearer language for search.</h1><p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground-muted">Short, practical definitions for terms used across search, AI discovery and digital measurement.</p></Container></section>
    <section className="py-12 md:py-20"><Container size="wide"><dl className="divide-y divide-border border-y border-border">{glossaryTerms.map((item) => <div key={item.slug} className="grid gap-4 py-7 md:grid-cols-12 md:gap-8"><dt className="text-base font-semibold text-foreground md:col-span-4"><Link href={`/glossary/${item.slug}`} className="group inline-flex items-center gap-2 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{item.term}<ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" aria-hidden="true" /></Link></dt><dd className="text-sm leading-relaxed text-foreground-muted md:col-span-8">{item.short}</dd></div>)}</dl></Container></section>
  </>;
}