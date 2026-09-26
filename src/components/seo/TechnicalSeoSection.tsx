"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { CrawlGraph } from "./CrawlGraph";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { Terminal, Shield, Zap, FileCode, GitFork, Compass } from "lucide-react";

const technicalVectors = [
  {
    icon: <Terminal className="w-4 h-4 text-accent" />,
    title: "Crawlability & Budget Governance",
    desc: "Streamlining server response cycles, eliminating 404 traps, and directing crawlers exclusively toward indexable assets.",
  },
  {
    icon: <Zap className="w-4 h-4 text-accent" />,
    title: "Core Web Vitals Engineering",
    desc: "Optimizing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) for a stronger page experience.",
  },
  {
    icon: <FileCode className="w-4 h-4 text-accent" />,
    title: "Schema & Structured Entity Graphs",
    desc: "Deploying comprehensive JSON-LD graphs linking your Organization, Services, and Knowledge Entities directly to Wikidata references.",
  },
  {
    icon: <GitFork className="w-4 h-4 text-accent" />,
    title: "Canonical & Redirect Architecture",
    desc: "Preventing self-cannibalizing duplicate content loops and managing historical link equity through 301 governance.",
  },
  {
    icon: <Shield className="w-4 h-4 text-accent" />,
    title: "Edge Caching & Header Controls",
    desc: "Improving response delivery with caching, immutable asset hashing, and clean robots directives.",
  },
  {
    icon: <Compass className="w-4 h-4 text-accent" />,
    title: "Internal Link Topology",
    desc: "Structuring hierarchical page relationships so link authority flows deliberately toward your most valuable commercial destinations.",
  },
];

export function TechnicalSeoSection() {
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
                Under The Surface
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Strong search performance starts
              <br />
              <span className="text-accent">underneath the surface.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              Before search engines evaluate your copy or authority, they must crawl
              and render your code. If your technical architecture contains bottlenecks,
              your organic growth remains artificially throttled.
            </p>
          </div>
        </div>

        {/* Content Split: 6 Technical Vectors + Interactive Crawl Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 6 Technical Vectors Grid */}
          <div
            className={cn(
              "lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {technicalVectors.map((v, idx) => (
              <div
                key={v.title}
                className="p-5 border border-border bg-background rounded-sm space-y-2.5 hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  {v.icon}
                  <h3 className="text-xs font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
                    {v.title}
                  </h3>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Crawl Graph Visual */}
          <div
            className={cn(
              "lg:col-span-6 h-[400px] md:h-[450px] transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <CrawlGraph />
          </div>
        </div>
      </Container>
    </section>
  );
}
