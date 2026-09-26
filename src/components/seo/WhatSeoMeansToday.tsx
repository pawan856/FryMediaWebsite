"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";

const facets = [
  {
    num: "01",
    title: "Search Intent Over Keyword Density",
    body: "Search engines evaluate user satisfaction vectors. If your page fails to answer the searcher's core dilemma within 3 seconds, high rankings evaporate.",
  },
  {
    num: "02",
    title: "Technical Foundation as a Prerequisite",
    body: "Crawl latency, edge rendering, clean DOM hierarchy, and Core Web Vitals are baseline requirements. Slow architectures are de-prioritized by crawlers.",
  },
  {
    num: "03",
    title: "Topical Authority & Knowledge Graphs",
    body: "Isolated articles no longer build durable visibility. Search systems require interlinked semantic entity models that establish undeniable domain expertise.",
  },
  {
    num: "04",
    title: "The Multi-Interface Horizon",
    body: "Discovery now spans classic organic results, Google AI Overviews, localized map packs, and LLM citations. Your brand must be structured for every surface.",
  },
];

export function WhatSeoMeansToday() {
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
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Modern Search Landscape
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              SEO is no longer just about
              <br />
              <span className="text-accent">arbitrary rankings.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              The era of manipulative backlink schemes and mechanical keyword stuffing
              is finished. Search engines have evolved into sophisticated semantic reasoning
              engines that evaluate technical excellence and genuine authority.
            </p>
          </div>
        </div>

        {/* 4 Editorial Facet Rows */}
        <div className="divide-y divide-border border-t border-b border-border">
          {facets.map((item, idx) => (
            <div
              key={item.num}
              className={cn(
                "group py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline transition-all duration-500 hover:bg-background-elevated/40",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="md:col-span-1 text-xs font-mono text-accent font-semibold">
                {item.num}
              </div>
              <div className="md:col-span-5">
                <h3 className="text-heading-md font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
