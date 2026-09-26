"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function GeoHero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  return <section ref={ref} className="relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-40 md:pb-24" aria-labelledby="geo-heading">
    <div className="pointer-events-none absolute inset-0 bg-subtle-glow opacity-60" aria-hidden="true" />
    <Container size="wide" className="relative z-10">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 xl:col-span-5">
          <div className={cn("transition-all duration-700", inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
            <div className="mb-7 flex items-center gap-3"><span className="h-px w-7 bg-accent" /><span className="text-xs font-mono uppercase tracking-widest text-foreground-muted">AI Search / GEO</span></div>
            <h1 id="geo-heading" className="text-display-2xl font-bold leading-none tracking-tighter text-foreground">Search is becoming an <span className="text-accent">answer.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">People increasingly discover information through conversational and generative interfaces. FyrnMedia is developing an emerging capability to help businesses prepare their digital presence for that changing environment.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><TrackedLink href="/contact?service=geo" event="service_cta_click" className="group inline-flex items-center gap-2.5 bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Talk About AI Search <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></TrackedLink><Link href="/services/seo" className="group inline-flex items-center gap-2 border border-border px-5 py-3.5 text-sm font-medium text-foreground-muted transition-colors hover:border-border-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Explore SEO <ArrowDown className="h-4 w-4 rotate-[-90deg] transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7"><GeoDiscoveryVisual /></div>
      </div>
    </Container>
  </section>;
}

function GeoDiscoveryVisual() {
  const nodes = ["User question", "AI / search system", "Sources", "Context", "Answer", "Brand visibility"];
  return <div className="border border-border bg-background-elevated/50 p-5 md:p-7" aria-label="Conceptual AI discovery flow, not a real AI response">
    <div className="flex items-center justify-between border-b border-border pb-4"><span className="text-[10px] font-mono uppercase tracking-widest text-accent">Conceptual model</span><span className="text-[10px] font-mono text-foreground-subtle">NO LIVE RESPONSE</span></div>
    <div className="mt-6 space-y-2">{nodes.map((node, index) => <div key={node} className="flex items-center gap-3"><span className={cn("flex h-8 w-8 shrink-0 items-center justify-center border text-[10px] font-mono", index === nodes.length - 1 ? "border-accent bg-accent/10 text-accent" : "border-border text-foreground-subtle")}>{String(index + 1).padStart(2, "0")}</span><div className={cn("flex-1 border px-4 py-3 text-sm", index === nodes.length - 1 ? "border-accent/40 text-foreground" : "border-border text-foreground-muted")}>{node}</div>{index < nodes.length - 1 && <span className="absolute" aria-hidden="true" />}</div>)}</div>
    <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-foreground-subtle">A visual explanation of discovery layers, not a prediction, ranking claim, or representation of any specific model.</p>
  </div>;
}