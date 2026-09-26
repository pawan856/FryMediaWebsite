"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { CheckCircle2 } from "lucide-react";

const deliverables = [
  {
    title: "Technical SEO Audit",
    summary: "140-point architectural analysis of crawl paths, log files, index status, and Core Web Vitals.",
  },
  {
    title: "Keyword & Intent Mapping",
    summary: "Commercial query clustering categorized by searcher intent, buying stage, and estimated yield.",
  },
  {
    title: "Competitor SERP Dissection",
    summary: "Forensic breakdown of competitor organic market share, link topology, and topical vulnerabilities.",
  },
  {
    title: "On-Page Semantic Optimization",
    summary: "Complete optimization of headings, content structure, schema markup, and metadata.",
  },
  {
    title: "Content & Topic Cluster Blueprint",
    summary: "Comprehensive hub-and-spoke content architecture designed for unquestioned domain authority.",
  },
  {
    title: "Internal Link Restructuring",
    summary: "Re-engineering link equity distribution to funnel PageRank toward high-margin conversion pages.",
  },
  {
    title: "Engineering Remediation Specs",
    summary: "Ready-to-deploy developer tickets with exact code snippets for Next.js and web frameworks.",
  },
  {
    title: "Local & Regional SEO Framework",
    summary: "Google Business Profile optimization, local directory alignment, and geo-targeted schema.",
  },
  {
    title: "Core Web Vitals Remediation",
    summary: "Concrete performance tuning reducing Time-to-First-Byte, render delays, and layout instability.",
  },
  {
    title: "Weekly Telemetry & Attribution",
    summary: "Transparent executive reports detailing search visibility, qualified traffic, and revenue pipeline.",
  },
];

export function SeoDeliverables() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border bg-background-elevated/20 overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Concrete Artifacts
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Engineering deliverables
              <br />
              <span className="text-accent">built for execution.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              We do not deliver 80-page passive PDFs that gather dust. Every artifact
              is engineered as an actionable, high-precision technical specification
              designed for immediate engineering and strategic deployment.
            </p>
          </div>
        </div>

        {/* Deliverables Grid (2 Columns on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {deliverables.map((item, idx) => (
            <div
              key={item.title}
              className={cn(
                "p-6 border border-border bg-background rounded-sm space-y-2 hover:border-accent/40 transition-colors group",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <h3 className="text-sm font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-foreground-muted leading-relaxed pl-7">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-foreground-subtle">
            * Exact deliverable scopes are customized during the diagnostic phase based on technical maturity.
          </p>
        </div>
      </Container>
    </section>
  );
}
