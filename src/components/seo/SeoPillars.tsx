"use client";

import React, { useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { ChevronDown, CheckCircle2 } from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Technical SEO Architecture",
    tagline: "The invisible foundation of organic discovery.",
    description:
      "Search engines must discover, render, and index your website without friction. We eliminate crawl waste, configure complex edge headers, and optimize rendering physics.",
    capabilities: [
      "Crawl Budget & Server Log Governance",
      "Dynamic Rendering & Edge Hydration",
      "Canonical Loop & Redirect Chain Elimination",
      "Comprehensive JSON-LD Schema & Entity Graphing",
      "Core Web Vitals Engineering (LCP, INP, CLS)",
    ],
  },
  {
    number: "02",
    title: "Search Strategy & Intent Modeling",
    tagline: "Prioritizing high-margin commercial queries.",
    description:
      "We replace speculative keyword targeting with quantitative query mapping that connects high-intent search demand directly to your highest-margin offerings.",
    capabilities: [
      "Commercial & Transactional Intent Mapping",
      "Competitor SERP Displacement Modeling",
      "SERP Feature & AI Overview Real Estate Analysis",
      "Total Addressable Organic Market Sizing",
    ],
  },
  {
    number: "03",
    title: "On-Page Semantic Optimization",
    tagline: "Structuring pages for human trust and algorithmic clarity.",
    description:
      "Every heading, paragraph, and internal link is engineered to clearly signal topical authority and satisfy algorithmic natural language processing (NLP) models.",
    capabilities: [
      "Information Hierarchy & Semantic Tagging",
      "Entity Relevance & Salience Optimization",
      "Strategic Dynamic Internal Link Topology",
      "Metadata Architecture with Microdata Parity",
    ],
  },
  {
    number: "04",
    title: "Content Architecture & Topic Clusters",
    tagline: "Comprehensive coverage of your domain's core topics.",
    description:
      "We build interlinked topic clusters that answer buyer dilemmas from initial research through final procurement, demonstrating undeniable authority to search systems.",
    capabilities: [
      "Hub-and-Spoke Pillar Page Architecture",
      "Topical Gap & Cannibalization Resolution",
      "Expert-Level Technical Content Blueprints",
      "Evergreen Decay Prevention & Rerank Protocols",
    ],
  },
  {
    number: "05",
    title: "Authority Engineering & Digital PR",
    tagline: "Earning undeniable trust across the wider web.",
    description:
      "High-value organic visibility requires trusted third-party verification. We build sustainable authority through digital PR, industry citations, and unassailable brand signals.",
    capabilities: [
      "Editorial Digital PR & Data Storytelling",
      "Tier-1 Industry Media Placements",
      "Entity & Unlinked Brand Mention Reclamation",
      "Algorithmic Risk & Negative SEO Mitigation",
    ],
  },
  {
    number: "06",
    title: "Measurement, Telemetry & Attribution",
    tagline: "Connecting organic visibility to commercial revenue.",
    description:
      "We connect search impressions to qualified pipeline and customer acquisition. You receive transparent weekly telemetry rather than vanity rank screenshots.",
    capabilities: [
      "Multi-Touch Organic Attribution Modeling",
      "Algorithmic Volatility & Core Update Telemetry",
      "Qualified Pipeline & Lead Conversion Tracking",
      "Executive Growth Dashboards & Live Telemetry",
    ],
  },
];

export function SeoPillars() {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.05 });

  const togglePillar = (idx: number) => {
    setExpandedPillar((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={sectionRef}
      id="seo-system"
      className="relative w-full py-24 md:py-36 border-b border-border overflow-hidden"
    >
      <Container size="wide">
        {/* Section Heading */}
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
                The FyrnMedia SEO System
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Six pillars of
              <br />
              <span className="text-accent">sustainable dominance.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              Our organic search framework addresses every vector evaluated by modern
              search engines. Click any pillar to examine its underlying technical capabilities.
            </p>
          </div>
        </div>

        {/* 6 Interactive Pillar Accordions */}
        <div className="space-y-4">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedPillar === idx;

            return (
              <div
                key={pillar.number}
                className={cn(
                  "border rounded-sm transition-all duration-300 overflow-hidden",
                  isExpanded
                    ? "bg-background-elevated/70 border-accent/50 shadow-md"
                    : "bg-background border-border hover:border-border-hover hover:bg-background-elevated/30"
                )}
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => togglePillar(idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-xs font-mono text-accent font-bold">
                      PILLAR {"//"} {pillar.number}
                    </span>
                    <h3 className="text-heading-md font-bold text-foreground tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-mono text-foreground-subtle">
                      {isExpanded ? "Collapse" : "Inspect"}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-sm border border-border flex items-center justify-center transition-transform duration-300",
                        isExpanded ? "rotate-180 border-accent text-accent" : "text-foreground-muted"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Content Panel */}
                {isExpanded && (
                  <div className="px-6 pb-8 md:px-8 pt-2 border-t border-border/60 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
                    <div className="lg:col-span-5 space-y-3">
                      <p className="text-xs font-mono uppercase tracking-widest text-accent">
                        Strategic Thesis
                      </p>
                      <p className="text-sm text-foreground leading-relaxed font-medium">
                        {pillar.tagline}
                      </p>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="lg:col-span-7 bg-background border border-border/80 p-6 rounded-sm space-y-3">
                      <p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">
                        Core Technical Capabilities
                      </p>
                      <ul className="space-y-2.5">
                        {pillar.capabilities.map((cap, cIdx) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-2.5 text-xs text-foreground-muted"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
