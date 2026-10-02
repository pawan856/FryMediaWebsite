import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { ToolsInterface } from "@/components/tools/ToolsInterface";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = constructMetadata({
  title: "Search Tools — FyrnMedia",
  description: "Use FyrnMedia's AI search visibility and robots.txt tools, with scan limitations clearly explained.",
  path: "/tools",
});

export default function ToolsPage() {
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />
    <section className="border-b border-border py-16 md:py-24">
      <Container size="wide">
        <p className="mb-6 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground-muted"><span className="h-px w-6 bg-accent" />Tools / Search and discovery</p>
        <h1 className="max-w-5xl text-display-xl font-bold leading-[1.02] tracking-tighter text-foreground">Small tools for clearer decisions.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground-muted">These tools make their boundaries visible. The robots.txt helper opens a published file; the AI visibility checker does not report a score until reliable search-source integrations are available.</p>
      </Container>
    </section>
    <section className="border-b border-border py-10 md:py-14"><Container size="wide"><ToolsInterface /></Container></section>
    <section className="py-12 md:py-16"><Container size="wide" className="flex flex-col gap-4 border-l-2 border-accent pl-6 md:flex-row md:items-center md:justify-between"><div><h2 className="text-heading-lg font-semibold text-foreground">Need a documented visibility baseline?</h2><p className="mt-2 text-sm text-foreground-muted">Request a human-reviewed audit with scope and methodology.</p></div><Link href="/audit" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Free AI Visibility Audit <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></Link></Container></section>
  </>;
}