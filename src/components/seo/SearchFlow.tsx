"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";
import { Search, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { useInView } from "@/lib/hooks/useInView";

export function SearchFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const flowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(flowRef, { threshold: 0.2 });

  const steps = [
    {
      id: "query",
      label: "Search Query",
      meta: "User Intent Captured",
      detail: "\"enterprise b2b cloud security architecture\"",
      badge: "INPUT",
    },
    {
      id: "intent",
      label: "Intent Classification",
      meta: "Commercial / Solution Discovery",
      detail: "Evaluation stage · High decision-making authority",
      badge: "ANALYSIS",
    },
    {
      id: "tech",
      label: "Technical Foundation",
      meta: "Technical foundation",
      detail: "Clean crawl graph · Valid schema · Accessible experience",
      badge: "SYSTEM",
    },
    {
      id: "content",
      label: "Semantic Authority",
      meta: "Entity Match & Topic Depth",
      detail: "Comprehensive topic cluster covering technical vectors",
      badge: "CONTENT",
    },
    {
      id: "visibility",
      label: "Relevant visibility",
      meta: "Search and AI-assisted discovery",
      detail: "Representation depends on many changing signals and is never guaranteed",
      badge: "SERP",
    },
    {
      id: "growth",
      label: "Qualified Pipeline",
      meta: "Revenue Contribution",
      detail: "Informed buyer inquiry with high conversion intent",
      badge: "OUTCOME",
    },
  ];

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [inView, steps.length]);

  return (
    <div
      ref={flowRef}
      className="relative w-full h-full bg-background border border-border rounded-sm p-6 flex flex-col justify-between overflow-hidden select-none font-sans"
      aria-hidden="true"
    >
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-foreground">
            Search Flow Engine
          </span>
        </div>
        <div className="text-[10px] font-mono text-foreground-subtle">
          PROTOCOL: FYRN-ORGANIC-V4
        </div>
      </div>

      {/* Simulated Search Bar */}
      <div className="my-4 p-3 bg-background-elevated border border-border rounded-sm flex items-center gap-3">
        <Search className="w-4 h-4 text-accent shrink-0" />
        <span className="text-xs font-mono text-foreground truncate">
          enterprise b2b cloud security architecture
        </span>
        <span className="ml-auto text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-sm shrink-0">
          Example query / High intent
        </span>
      </div>

      {/* Multi-Step Sequential Pipeline Flow */}
      <div className="space-y-2.5 my-auto">
        {steps.map((step, idx) => {
          const isCurrent = idx === activeStep;
          const isPast = idx < activeStep;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "group cursor-pointer p-2.5 rounded-sm border transition-all duration-300 flex items-center justify-between gap-4",
                isCurrent
                  ? "bg-background-surface border-accent shadow-sm translate-x-1"
                  : isPast
                  ? "bg-background-elevated/40 border-border/80 text-foreground-muted"
                  : "bg-background/40 border-border/40 text-foreground-subtle"
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={cn(
                    "text-[10px] font-mono px-1.5 py-0.5 rounded-sm shrink-0",
                    isCurrent
                      ? "bg-accent text-white font-bold"
                      : "bg-background border border-border text-foreground-subtle"
                  )}
                >
                  {step.badge}
                </span>

                <div className="min-w-0">
                  <div
                    className={cn(
                      "text-xs font-semibold truncate",
                      isCurrent ? "text-foreground" : "text-foreground-muted"
                    )}
                  >
                    {step.label}
                  </div>
                  <div className="text-[10px] text-foreground-subtle truncate">
                    {step.meta}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {isCurrent && (
                  <span className="text-[10px] font-mono text-accent flex items-center gap-1">
                    <span>Active Vector</span>
                    <ArrowRight className="w-3 h-3 animate-pulse" />
                  </span>
                )}
                {isPast && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent/70" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Status Feed */}
      <div className="pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-foreground-subtle">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-accent" />
          <span>Conceptual organic pathway</span>
        </span>
        <span>STEP {activeStep + 1} OF {steps.length}</span>
      </div>
    </div>
  );
}
