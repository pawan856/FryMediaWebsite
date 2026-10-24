"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    index: "01",
    title: "Strategy before execution.",
    description:
      "We start with your market, your audience’s intent and what winning looks like for your business, before any design or code.",
  },
  {
    index: "02",
    title: "Data over assumptions.",
    description:
      "Decisions rest on search data, crawl analysis and performance signals, not gut feel or inherited best guesses.",
  },
  {
    index: "03",
    title: "Clear thinking, shared openly.",
    description:
      "We publish guides, a glossary and practical tools so you can check our reasoning before you ever speak to us.",
  },
  {
    index: "04",
    title: "Growth that’s measured honestly.",
    description:
      "We agree success metrics at the start, report against them, and don’t sell vanity metrics or guaranteed rankings.",
  },
];

export function WhyFyrnMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-20 md:py-32 overflow-hidden"
    >
      <Container size="wide">
        {/* Section label */}
        <div
          className={cn(
            "flex items-center gap-3 mb-12 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="block w-6 h-px bg-accent flex-shrink-0" />
          <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
            Why Fyrn Media
          </span>
        </div>

        <h2 className="text-display-lg font-bold text-foreground tracking-tighter mb-12">
          Why teams choose Fyrn Media
        </h2>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 divide-border">
          {principles.map((p, i) => (
            <div
              key={p.index}
              className={cn(
                "group relative p-8 md:p-10 border-b border-border transition-all duration-700",
                i % 2 === 0 ? "md:border-r md:border-border" : "",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-xs font-mono text-accent mb-4 tracking-widest font-semibold">
                {p.index}
              </div>

              <h3 className="text-display-md font-bold text-foreground tracking-tight mb-4">
                {p.title}
              </h3>

              <p className="text-base text-foreground-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature strip */}
        <div className="mt-12 py-6 border-y border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-foreground-muted">
          <span>AI-assisted, human-reviewed</span>
          <span className="hidden sm:inline">·</span>
          <span>Transparent reporting</span>
          <span className="hidden sm:inline">·</span>
          <span>No black-box tactics</span>
        </div>

        {/* People behind the work */}
        <div className="mt-12 p-8 border border-border bg-background-elevated/30 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              The people behind the work
            </h3>
            <p className="mt-2 text-sm text-foreground-muted max-w-xl">
              Every engagement is run by our senior team, so you always know who is accountable for the work and the results.
            </p>
          </div>
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors shrink-0"
          >
            <span>Meet the team</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
