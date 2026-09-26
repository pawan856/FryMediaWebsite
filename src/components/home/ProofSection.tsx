"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import { EmptyWorkState } from "@/components/work/EmptyWorkState";

const metricCategories = [
  {
    index: "01",
    category: "Organic Visibility",
    description: "SERP position tracking, impression growth, and search market share capture.",
    label: "Case Study Incoming",
  },
  {
    index: "02",
    category: "Search Performance",
    description: "Click-through rates, rank velocity, featured snippet acquisition.",
    label: "Case Study Incoming",
  },
  {
    index: "03",
    category: "Qualified Traffic",
    description: "Session quality, audience intent match, time-on-site and scroll depth.",
    label: "Case Study Incoming",
  },
  {
    index: "04",
    category: "Conversion Growth",
    description: "Lead volume, revenue attribution, and organic channel contribution.",
    label: "Case Study Incoming",
  },
];

export function ProofSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-36 overflow-hidden"
    >
      <Container size="wide">
        {/* Header */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Results & Proof
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Growth should be
              <br />
              <span className="text-foreground-muted font-normal">measurable.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed">
              We measure what matters — not just rankings, but real business
              outcomes across organic visibility, qualified traffic, and revenue.
            </p>
          </div>
        </div>

        {/* Metric Framework */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          {metricCategories.map((m, i) => (
            <div
              key={m.index}
              className={cn(
                "group relative p-6 border-border transition-all duration-300 hover:bg-background-elevated/40",
                i < 3 ? "border-r border-border" : "",
                "border-b sm:border-b-0"
              )}
            >
              <div className="text-[10px] font-mono text-foreground-subtle tracking-widest mb-3">
                {m.index}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {m.category}
              </h3>
              <p className="text-xs text-foreground-subtle leading-relaxed">{m.description}</p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-[10px] font-mono text-foreground-dim tracking-widest uppercase">
                  {m.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Work */}
        <div
          className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">
              Selected Work
            </h3>
          </div>
          <EmptyWorkState showArchiveLink />
        </div>
      </Container>
    </section>
  );
}
