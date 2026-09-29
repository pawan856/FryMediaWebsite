"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const seoFacets = [
  { label: "Technical SEO", desc: "Crawl architecture, indexing, Core Web Vitals" },
  { label: "On-Page SEO", desc: "Semantic structure, keyword intent, entity optimization" },
  { label: "Content Strategy", desc: "Topical authority, information architecture" },
  { label: "Local SEO", desc: "Map-pack visibility, geo-targeted signals" },
  { label: "AI-Era Search", desc: "GEO, LLM retrieval, answer engine optimization" },
  { label: "Search Analytics", desc: "Click-through modeling, rank tracking, intent analysis" },
];

// CSS-based search funnel visualization
function SearchFunnel() {
  const steps = [
    { label: "Search Query", sub: "\"best digital agency london\"", width: "100%", opacity: 1 },
    { label: "Search Results", sub: "Relevant visibility", width: "82%", opacity: 0.9 },
    { label: "Qualified Clicks", sub: "Intent-matched visits", width: "65%", opacity: 0.8 },
    { label: "Qualified Traffic", sub: "Right audience, right moment", width: "48%", opacity: 0.7 },
    { label: "Business Outcomes", sub: "Leads · Enquiries · Growth", width: "36%", opacity: 1 },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-3 p-6 md:p-8" aria-hidden="true">
      {/* Header label */}
      <div className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle mb-2">
        Search Funnel Model
      </div>

      {steps.map((step, i) => (
        <div key={i} className="relative group/step">
          {/* Bar */}
          <div
            className="relative h-11 bg-background-surface border border-border rounded-sm flex items-center px-3 gap-3 transition-all duration-500 group-hover/step:border-border-hover"
            style={{
              width: step.width,
              minWidth: "180px",
              opacity: step.opacity,
            }}
          >
            {/* Accent fill bar */}
            <div
              className={cn(
                "absolute left-0 top-0 bottom-0 rounded-sm transition-all duration-700",
                i === steps.length - 1
                  ? "bg-accent/15 border-r border-accent/30"
                  : "bg-accent/[0.04]"
              )}
              style={{ width: i === 0 ? "100%" : `${(5 - i) * 18}%` }}
            />

            {/* Index */}
            <span className="relative text-[10px] font-mono text-foreground-subtle shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Label */}
            <div className="relative flex-1 min-w-0">
              <div className="text-xs font-medium text-foreground truncate">{step.label}</div>
              <div className="text-[10px] text-foreground-subtle truncate">{step.sub}</div>
            </div>

            {/* Last step accent dot */}
            {i === steps.length - 1 && (
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
            )}
          </div>

          {/* Connector line */}
          {i < steps.length - 1 && (
            <div className="absolute left-4 top-full w-px h-3 bg-border" aria-hidden="true" />
          )}
        </div>
      ))}

      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-foreground-dim/20" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-foreground-dim/20" />
    </div>
  );
}

export function SeoSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-36 overflow-hidden bg-background-elevated/25"
    >
      {/* Background accent glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 w-1/2 h-full"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 85% 30%, rgba(112,157,119,0.13) 0%, transparent 70%)",
        }}
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text Column */}
          <div
            className={cn(
              "lg:col-span-6 space-y-8 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-6 h-px bg-accent flex-shrink-0" />
                <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                  Core Capability · SEO
                </span>
              </div>
              <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
                Be found where
                <br />
                your customers
                <br />
                <span className="text-accent">actually search.</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-lg">
              Modern search is no longer just keywords and backlinks. FyrnMedia
              builds a stronger search foundation through entity modeling, semantic
              architecture, and AI-era search preparation — so your digital presence
              can remain useful as discovery evolves.
            </p>

            {/* Facets list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {seoFacets.map((f) => (
                <li key={f.label} className="flex items-start gap-2.5 group/item">
                  <CheckCircle2
                    className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="text-sm font-medium text-foreground">{f.label}</span>
                    <span className="block text-xs text-foreground-subtle leading-snug mt-0.5">
                      {f.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <Link
                href="/services/seo"
                className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>Explore SEO Engineering</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right: Visual Column */}
          <div
            className={cn(
              "lg:col-span-6 h-[420px] md:h-[500px] border border-border bg-background rounded-sm relative overflow-hidden transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <SearchFunnel />
          </div>
        </div>
      </Container>
    </section>
  );
}
