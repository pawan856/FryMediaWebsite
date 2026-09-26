"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";

const processSteps = [
  {
    step: "01",
    name: "Comprehensive Diagnostic Audit",
    lead: "Inspect the baseline reality.",
    detail: "We review crawl logs, index coverage, schema validity, page experience, and backlink safety.",
  },
  {
    step: "02",
    name: "Market & Demand Research",
    lead: "Map user queries to real commercial intent.",
    detail: "We analyze competitor SERP footholds, identify underserved query clusters, and quantify revenue opportunities.",
  },
  {
    step: "03",
    name: "Prioritized Architecture Strategy",
    lead: "Focus effort on high-leverage bottlenecks.",
    detail: "We construct a phased 90-day sprint roadmap that attacks technical barriers first before deploying content expansions.",
  },
  {
    step: "04",
    name: "Systemic Engineering & Optimization",
    lead: "Execute with zero compromise.",
    detail: "We implement schema graphs, rewrite internal links, resolve Core Web Vitals issues, and launch authoritative content assets.",
  },
  {
    step: "05",
    name: "Measurement & Attribution",
    lead: "Hold organic growth accountable to pipeline.",
    detail: "We monitor rank displacement, organic session quality, click-through rates, and downstream revenue conversions.",
  },
  {
    step: "06",
    name: "Continuous Iterative Refinement",
    lead: "Compound gains across algorithm shifts.",
    detail: "Search engines update constantly. We inspect performance signals and refine the system as the landscape changes.",
  },
];

export function SeoProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border overflow-hidden"
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
                Execution Methodology
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Six stages from
              <br />
              <span className="text-accent">diagnostic to refinement.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              Every engagement follows a structured, milestone-driven progression
              designed to remove uncertainty and compound search engine authority over time.
            </p>
          </div>
        </div>

        {/* Process Steps List with Connected Timeline */}
        <div className="space-y-0 divide-y divide-border border-t border-b border-border">
          {processSteps.map((item, idx) => (
            <div
              key={item.step}
              className={cn(
                "group py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start hover:bg-background-elevated/40 transition-colors duration-300 relative",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              {/* Step Hover Sweep */}
              <div className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" aria-hidden="true" />

              {/* Number Box */}
              <div className="lg:col-span-2 flex items-center gap-3">
                <span className="text-sm font-mono text-accent font-bold">
                  STAGE {"//"} {item.step}
                </span>
              </div>

              {/* Title & Lead */}
              <div className="lg:col-span-4 space-y-1">
                <h3 className="text-heading-md font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-mono text-foreground-subtle uppercase">
                  {item.lead}
                </p>
              </div>

              {/* Detailed Breakdown */}
              <div className="lg:col-span-6">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
