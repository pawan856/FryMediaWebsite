"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { useInView } from "@/lib/hooks/useInView";

export function CrawlGraph() {
  const [mounted, setMounted] = useState(false);
  const graphRef = useRef<HTMLDivElement>(null);
  const inView = useInView(graphRef, { threshold: 0.2 });

  useEffect(() => {
    if (inView && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMounted(true);
    }
  }, [inView]);

  const nodes = [
    { id: "root", cx: 25, cy: 70, label: "Origin / Root", role: "root" },
    { id: "services", cx: 65, cy: 35, label: "/services", role: "hub" },
    { id: "seo", cx: 110, cy: 25, label: "/services/seo", role: "pillar" },
    { id: "tech", cx: 145, cy: 15, label: "#technical", role: "leaf" },
    { id: "strat", cx: 145, cy: 40, label: "#strategy", role: "leaf" },
    { id: "about", cx: 65, cy: 105, label: "/about", role: "hub" },
    { id: "principles", cx: 110, cy: 115, label: "/about#principles", role: "leaf" },
    { id: "sitemap", cx: 110, cy: 80, label: "sitemap.xml", role: "spec" },
  ];

  const edges = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 0, to: 5 },
    { from: 5, to: 6 },
    { from: 0, to: 7 },
    { from: 7, to: 2 },
  ];

  return (
    <div
      ref={graphRef}
      className="relative w-full h-full bg-background border border-border rounded-sm p-6 flex flex-col justify-between select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-foreground">
            Crawler Telemetry Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-accent">
          CRAWL DEPTH: MAX 2 HOPS
        </span>
      </div>

      {/* SVG Crawl Network */}
      <div className="relative flex-1 my-2 min-h-[220px]">
        <svg
          viewBox="0 0 170 140"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Edges */}
          {edges.map((e, idx) => (
            <line
              key={idx}
              x1={nodes[e.from].cx}
              y1={nodes[e.from].cy}
              x2={nodes[e.to].cx}
              y2={nodes[e.to].cy}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.8"
            />
          ))}

          {/* Active Highlight Crawl Track */}
          <path
            d="M 25 70 L 65 35 L 110 25 L 145 15"
            fill="none"
            stroke="#FF461E"
            strokeWidth="1.2"
            opacity="0.8"
          />

          {/* Crawler Spider Simulation Dot */}
          {mounted && (
            <circle r="2.5" fill="#FF461E">
              <animateMotion
                dur="3.8s"
                repeatCount="indefinite"
                path="M 25 70 L 65 35 L 110 25 L 145 15 L 110 25 L 145 40 L 110 25 L 65 35 L 25 70 L 65 105 L 110 115 L 65 105 L 25 70"
              />
            </circle>
          )}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={node.id}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.role === "root" ? 4.5 : node.role === "pillar" ? 4 : 3}
                fill={node.role === "pillar" ? "#FF461E" : node.role === "root" ? "#EDEDEF" : "#1F222A"}
                stroke={node.role === "pillar" ? "#FF461E" : "rgba(255,255,255,0.4)"}
                strokeWidth="1"
              />
              <text
                x={node.cx}
                y={node.cy + 10}
                fill="rgba(255,255,255,0.6)"
                fontSize="6"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Footer Metrics */}
      <div className="pt-3 border-t border-border grid grid-cols-3 gap-2 text-[10px] font-mono text-foreground-subtle">
        <div>
          <span className="block text-foreground font-bold">200 OK</span>
          <span>HTTP State</span>
        </div>
        <div>
          <span className="block text-foreground font-bold">0 Orphan</span>
          <span>Clean Graph</span>
        </div>
        <div>
          <span className="block text-accent font-bold">Measured</span>
          <span>Index signals</span>
        </div>
      </div>
    </div>
  );
}
