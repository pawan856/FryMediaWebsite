"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const metrics = [
  {
    category: "Organic visibility",
    description: "Impressions, share of search and how often your brand appears in AI answers.",
  },
  {
    category: "Search performance",
    description: "Click-through rate, ranking movement and featured-snippet or AI Overview appearances.",
  },
  {
    category: "Qualified traffic",
    description: "Engaged sessions, intent match and how far visitors read.",
  },
  {
    category: "Conversion growth",
    description: "Leads, pipeline and revenue attributed to organic and AI-driven discovery.",
  },
];

export function ProofSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-20 md:py-32 overflow-hidden"
    >
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Results and Measurement
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Growth you can measure, and check.
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground-muted leading-relaxed">
              We agree success metrics before work begins and report against them throughout. Here is what we track.
            </p>
          </div>
          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              <span>See our work</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Metric tiles replacing Case Study Incoming */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div
              key={m.category}
              className={cn(
                "p-7 rounded-sm border border-border bg-background transition-all duration-300 hover:border-accent/60 flex flex-col justify-between",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div>
                <span className="text-xs font-mono text-accent font-semibold tracking-wider">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {m.category}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding case studies */}
        <div className="mt-12 p-6 border border-border bg-background-elevated/30 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-foreground-muted">
            Case studies go live only once the client has approved the numbers. Until then, ask us for a walkthrough of our method and sample reporting.
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-accent font-semibold shrink-0"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
