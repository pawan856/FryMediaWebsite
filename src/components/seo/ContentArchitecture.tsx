"use client";

import React from "react";
import { Layers, FileText, ArrowRight, Network } from "lucide-react";

export function ContentArchitecture() {
  return (
    <div
      className="relative w-full h-full bg-background border border-border rounded-sm p-6 flex flex-col justify-between select-none"
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="text-[10px] font-mono uppercase tracking-widest text-accent flex items-center gap-1.5">
          <Network className="w-3.5 h-3.5 text-accent" />
          Hub & Spoke Cluster Topology
        </span>
        <span className="text-[10px] font-mono text-foreground-subtle">
          TOPICAL GRAPH v3
        </span>
      </div>

      {/* Architecture Graphic */}
      <div className="my-auto space-y-4 py-3">
        {/* Core Pillar Hub */}
        <div className="p-4 bg-background-elevated border border-accent/60 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 px-2 py-0.5 bg-accent text-[9px] font-mono text-white uppercase font-bold">
            Pillar Core
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-foreground">
              Master Topical Pillar {"//"} High Authority
            </span>
          </div>
          <p className="text-[11px] text-foreground-muted">
            Exhaustive, definitive authority resource targeting broad category commercial intent.
          </p>
        </div>

        {/* Bi-directional Flow Link */}
        <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-foreground-subtle">
          <div className="h-px w-12 bg-border" />
          <span>Internal Semantic Equity Links</span>
          <div className="h-px w-12 bg-border" />
        </div>

        {/* Supporting Spoke Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {[
            { tag: "SUBTOPIC 01", title: "Diagnostic Specs", intent: "Commercial" },
            { tag: "SUBTOPIC 02", title: "Implementation Guide", intent: "Informational" },
            { tag: "SUBTOPIC 03", title: "Framework Audit", intent: "Transactional" },
          ].map((spoke, i) => (
            <div
              key={spoke.tag}
              className="p-3 bg-background-surface/80 border border-border rounded-sm hover:border-border-hover transition-colors"
            >
              <div className="flex items-center justify-between text-[9px] font-mono text-foreground-subtle mb-1">
                <span>{spoke.tag}</span>
                <span className="text-accent">{spoke.intent}</span>
              </div>
              <div className="text-xs font-semibold text-foreground truncate">
                {spoke.title}
              </div>
              <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-foreground-subtle">
                <FileText className="w-3 h-3 text-accent" />
                <span>Interlinked to Core</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-foreground-subtle">
          <span>TOPICAL COVERAGE: Intent-led</span>
        <span className="text-accent flex items-center gap-1">
          Zero Thin Pages <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}
