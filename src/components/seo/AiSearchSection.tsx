"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { Sparkles, Bot, ShieldCheck } from "lucide-react";

export function AiSearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border bg-background-elevated/30 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 85% 50%, rgba(255,70,30,0.06) 0%, transparent 70%)",
        }}
      />

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
                Next-Generation Search
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Search is becoming
              <br />
              <span className="text-accent">an answer.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              Google AI Overviews, Perplexity, and conversational LLMs are shifting discovery
              from ten blue links to synthesized, zero-click answers. We help forward-thinking
              brands prepare for this transformation without falling for speculative hype.
            </p>
          </div>
        </div>

        {/* Comparison: Traditional SEO vs Generative Engine Optimization (GEO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Traditional SEO Box */}
          <div className="p-8 border border-border bg-background rounded-sm space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">
                Classic Paradigm
              </span>
              <span className="text-xs font-mono text-foreground-subtle">
                SERP INDEXING
              </span>
            </div>
            <h3 className="text-heading-md font-bold text-foreground">
              Traditional Search Optimization
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Optimizing for crawler discovery, document ranking algorithms, and user click-through
              rates on traditional search engine results pages.
            </p>
            <ul className="space-y-2 text-xs text-foreground-subtle font-mono pt-2">
              <li>• SERP Snippets & Title Tag Optimization</li>
              <li>• Crawl Budget & Indexation Paths</li>
              <li>• Backlink PageRank Distributions</li>
            </ul>
          </div>

          {/* GEO Box */}
          <div className="p-8 border border-accent/40 bg-background-elevated rounded-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-accent/20 border-b border-l border-accent/30 text-[9px] font-mono text-accent uppercase font-bold">
              Emerging Frontier
            </div>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-accent flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                GEO Paradigm
              </span>
              <span className="text-xs font-mono text-accent">
                RETRIEVAL & CITATION
              </span>
            </div>
            <h3 className="text-heading-md font-bold text-foreground">
              Generative Engine Optimization (GEO)
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Structuring your brand&apos;s digital entities, schema graphs, and verified citations
              so emerging AI reasoning engines reliably retrieve and accurately cite your solutions.
            </p>
            <ul className="space-y-2 text-xs text-foreground-muted font-mono pt-2">
              <li>• Knowledge Graph Entity Disambiguation</li>
              <li>• LLM Retrieval-Augmented Generation (RAG) Alignment</li>
              <li>• Third-Party Citation Authority Verification</li>
            </ul>
          </div>
        </div>

        {/* Ethical Grounding Callout */}
        <div className="p-6 border border-border bg-background rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
            <p className="text-xs font-mono text-foreground-muted">
              <strong className="text-foreground">Honest Engineering:</strong> We do not make unsupported claims such as &ldquo;guaranteed #1 ChatGPT ranking.&rdquo; We focus on rigorous structured data and brand authority that search engines and AI models can verify.
            </p>
          </div>
          <span className="text-[10px] font-mono text-foreground-subtle uppercase tracking-widest shrink-0">
            FyrnMedia Principle {"//"} 05
          </span>
        </div>
      </Container>
    </section>
  );
}
