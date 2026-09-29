"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

export function ServicesVisual() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  const dx = (mousePos.x - 0.5) * 12;
  const dy = (mousePos.y - 0.5) * 12;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none"
      aria-hidden="true"
    >
      {/* Background blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,60,46,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,60,46,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Subtle radial ambient spotlight */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(ellipse 55% 50% at ${50 + dx * 0.4}% ${50 + dy * 0.4}%, rgba(112,157,119,0.2) 0%, transparent 70%)`,
        }}
      />

      {/* SVG Multi-layer Architecture Visual */}
      <svg
        viewBox="0 0 160 140"
        className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translate(${dx * 0.25}px, ${dy * 0.25}px)` }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Core Coordinate Axes */}
        <line x1="20" y1="120" x2="145" y2="120" stroke="rgba(24,60,46,0.18)" strokeWidth="0.75" />
        <line x1="20" y1="20" x2="20" y2="120" stroke="rgba(24,60,46,0.18)" strokeWidth="0.75" />

        {/* Growth Curves (Organic Search Compounding Curve) */}
        <path
          d="M 20 115 Q 60 110, 85 85 T 140 25"
          fill="none"
          stroke="#709D77"
          strokeWidth="1.75"
          strokeDasharray="200"
          strokeDashoffset={mounted ? "0" : "200"}
          style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s" }}
        />
        {/* Secondary comparison path (Linear / Stagnant) */}
        <path
          d="M 20 115 Q 70 105, 140 95"
          fill="none"
          stroke="rgba(24,60,46,0.12)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Area fill under compounding curve */}
        <path
          d="M 20 115 Q 60 110, 85 85 T 140 25 L 140 120 L 20 120 Z"
          fill="url(#curveGlow)"
          opacity={mounted ? 0.35 : 0}
          style={{ transition: "opacity 1.5s ease 0.6s" }}
        />

        <defs>
          <linearGradient id="curveGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#709D77" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#709D77" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Milestone Nodes along the curve */}
        {[
          { cx: 20, cy: 115, label: "FOUNDATION", delay: "0.4s" },
          { cx: 60, cy: 104, label: "INDEXATION", delay: "0.7s" },
          { cx: 85, cy: 85, label: "AUTHORITY", delay: "1.0s" },
          { cx: 112, cy: 53, label: "VELOCITY", delay: "1.3s" },
          { cx: 140, cy: 25, label: "MARKET CAPTURE", delay: "1.6s", highlight: true },
        ].map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.highlight ? 3.5 : 2.2}
              fill={node.highlight ? "#709D77" : "#183C2E"}
              opacity={mounted ? 1 : 0}
              style={{
                transition: `opacity 0.6s ease ${node.delay}`,
                animation: node.highlight ? "pulse-slow 2.5s ease-in-out infinite" : "none",
              }}
            />
            {node.highlight && (
              <circle
                cx={node.cx}
                cy={node.cy}
                r="7"
                fill="none"
                stroke="rgba(112,157,119,0.6)"
                strokeWidth="0.8"
              />
            )}
            <line
              x1={node.cx}
              y1={node.cy}
              x2={node.cx}
              y2="120"
              stroke="rgba(24,60,46,0.08)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          </g>
        ))}

        {/* Traveling Signal Pulse along the curve */}
        {mounted && (
          <circle r="2" fill="#709D77">
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              path="M 20 115 Q 60 110, 85 85 T 140 25"
            />
          </circle>
        )}
      </svg>

      {/* Dynamic Telemetry Labels */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${dx * 0.4}px, ${dy * 0.4}px)` }}
      >
        <div className="absolute top-6 right-6 bg-background-elevated/90 backdrop-blur-md border border-border px-3 py-1.5 rounded-sm">
          <div className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            Organic Compounding Vector
          </div>
        </div>

        <div className="absolute bottom-6 left-6 text-[10px] font-mono text-foreground-subtle tracking-wider uppercase">
          Signal: Sustained Yield
        </div>
      </div>

      {/* Architectural Corner Notches */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-foreground-dim/30" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-foreground-dim/30" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-foreground-dim/30" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-foreground-dim/30" />
    </div>
  );
}
