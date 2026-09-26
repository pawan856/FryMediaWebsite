"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { HelpCircle, Navigation, Layers, ShoppingCart, ArrowRight } from "lucide-react";

export function IntentMap() {
  const [selectedCategory, setSelectedCategory] = useState(2); // default to commercial

  const intentCategories = [
    {
      id: "informational",
      name: "Informational",
      icon: <HelpCircle className="w-4 h-4" />,
      intentGoal: "Discover & Learn",
      queryExample: "\"how does schema markup impact crawl budget\"",
      contentSolution: "In-depth technical guides & diagnostic checklists",
      businessValue: "Top-of-funnel authority & brand recall",
    },
    {
      id: "navigational",
      name: "Navigational",
      icon: <Navigation className="w-4 h-4" />,
      intentGoal: "Find Specific Entity",
      queryExample: "\"fyrnmedia technical seo documentation\"",
      contentSolution: "Homepage, brand hubs & login gateways",
      businessValue: "Direct engagement & client retention",
    },
    {
      id: "commercial",
      name: "Commercial Investigation",
      icon: <Layers className="w-4 h-4" />,
      intentGoal: "Evaluate & Compare",
      queryExample: "\"best enterprise technical seo agencies uk\"",
      contentSolution: "Comparison architecture, capability matrices & frameworks",
      businessValue: "High-value pipeline generation & vendor shortlisting",
    },
    {
      id: "transactional",
      name: "Transactional / Decision",
      icon: <ShoppingCart className="w-4 h-4" />,
      intentGoal: "Procure & Engage",
      queryExample: "\"hire senior organic search engineering consultancy\"",
      contentSolution: "Dedicated conversion landing pages & proposal gateways",
      businessValue: "Immediate signed contracts & retained engagements",
    },
  ];

  return (
    <div
      className="relative w-full h-full bg-background border border-border rounded-sm p-6 flex flex-col justify-between select-none"
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="text-[10px] font-mono uppercase tracking-widest text-accent flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          Intent Matrix Engine
        </span>
        <span className="text-[10px] font-mono text-foreground-subtle">
          CLICK MATRIX CATEGORY
        </span>
      </div>

      {/* Category Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
        {intentCategories.map((cat, idx) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(idx)}
            className={cn(
              "p-2.5 rounded-sm border text-left transition-all duration-200 focus:outline-none flex flex-col gap-1.5",
              selectedCategory === idx
                ? "bg-background-elevated border-accent text-foreground shadow-sm"
                : "bg-background-surface/50 border-border/80 text-foreground-subtle hover:border-border-hover hover:text-foreground-muted"
            )}
          >
            <div className="flex items-center justify-between">
              <span className={cn(selectedCategory === idx ? "text-accent" : "text-foreground-subtle")}>
                {cat.icon}
              </span>
              <span className="text-[9px] font-mono text-foreground-subtle">0{idx + 1}</span>
            </div>
            <span className="text-xs font-semibold truncate">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Selected Intent Deep Dive Card */}
      {(() => {
        const active = intentCategories[selectedCategory];
        return (
          <div key={active.id} className="p-5 border border-border bg-background-elevated rounded-sm space-y-4 my-auto animate-fade-in">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent">
                Target User Mindset: {active.intentGoal}
              </span>
              <span className="text-[10px] font-mono text-foreground-subtle">
                STAGE 0{selectedCategory + 1}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-foreground-subtle font-mono uppercase text-[10px] block mb-1">
                  Representative Search Query
                </span>
                <span className="text-foreground font-mono bg-background p-2 rounded-sm border border-border/60 block">
                  {active.queryExample}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-foreground-subtle font-mono uppercase text-[10px] block mb-1">
                    FyrnMedia Content Architecture
                  </span>
                  <span className="text-foreground-muted leading-relaxed block">
                    {active.contentSolution}
                  </span>
                </div>
                <div>
                  <span className="text-foreground-subtle font-mono uppercase text-[10px] block mb-1">
                    Commercial Business Yield
                  </span>
                  <span className="text-accent font-medium leading-relaxed block">
                    {active.businessValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Footer */}
      <div className="pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-foreground-subtle">
        <span>STRATEGY: Intent-First Content Mapping</span>
        <span className="text-foreground flex items-center gap-1">
          Zero Wasted Crawl Effort <ArrowRight className="w-3 h-3 text-accent" />
        </span>
      </div>
    </div>
  );
}
