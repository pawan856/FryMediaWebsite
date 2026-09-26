"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

// Abstract geometric FyrnMedia "F" monogram built from SVG lines + nodes
function FMonogram() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
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

  const dx = (mousePos.x - 0.5) * 10;
  const dy = (mousePos.y - 0.5) * 10;

  return (
    <div ref={containerRef} className="relative w-full h-full select-none" aria-hidden="true">
      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow follows mouse */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(ellipse 50% 50% at ${50 + dx * 0.5}% ${50 + dy * 0.5}%, rgba(255,70,30,0.10) 0%, transparent 70%)`,
        }}
      />

      {/* Main monogram SVG */}
      <svg
        viewBox="0 0 120 140"
        className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translate(${dx * 0.2}px, ${dy * 0.2}px)` }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Outer bounding rectangle — skeleton of the F */}
        <rect
          x="28" y="20" width="64" height="100"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.5"
        />

        {/* Structural skeleton lines of F */}
        {/* Vertical bar of the F */}
        <line x1="28" y1="20" x2="28" y2="120" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="44" y1="20" x2="44" y2="120" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

        {/* Top horizontal bar */}
        <line x1="28" y1="20" x2="92" y2="20" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="28" y1="36" x2="92" y2="36" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

        {/* Middle cross bar */}
        <line x1="28" y1="72" x2="72" y2="72" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="28" y1="60" x2="72" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

        {/* Accent lines — vermilion, drawn on entrance */}
        <line
          x1="28" y1="20" x2="92" y2="20"
          stroke="#FF461E" strokeWidth="1.5" opacity="0.8"
          strokeDasharray="64"
          strokeDashoffset={mounted ? "0" : "64"}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s" }}
        />
        <line
          x1="28" y1="20" x2="28" y2="120"
          stroke="#FF461E" strokeWidth="1.5" opacity="0.8"
          strokeDasharray="100"
          strokeDashoffset={mounted ? "0" : "100"}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.5s" }}
        />
        <line
          x1="28" y1="72" x2="72" y2="72"
          stroke="#FF461E" strokeWidth="1.5" opacity="0.8"
          strokeDasharray="44"
          strokeDashoffset={mounted ? "0" : "44"}
          style={{ transition: "stroke-dashoffset 1.0s cubic-bezier(0.16,1,0.3,1) 0.9s" }}
        />

        {/* Intersection nodes */}
        {[
          { cx: 28, cy: 20, r: 2.5, delay: "0.3s", accent: true },
          { cx: 92, cy: 20, r: 1.8, delay: "0.5s", accent: false },
          { cx: 28, cy: 72, r: 2.5, delay: "0.9s", accent: true },
          { cx: 72, cy: 72, r: 1.8, delay: "1.0s", accent: false },
          { cx: 28, cy: 120, r: 2.5, delay: "0.7s", accent: true },
          { cx: 44, cy: 20, r: 1.5, delay: "0.6s", accent: false },
          { cx: 44, cy: 72, r: 1.5, delay: "1.1s", accent: false },
          { cx: 44, cy: 120, r: 1.5, delay: "0.8s", accent: false },
          { cx: 60, cy: 20, r: 1.5, delay: "0.4s", accent: false },
          { cx: 60, cy: 72, r: 1.5, delay: "1.2s", accent: false },
        ].map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={node.accent ? "#FF461E" : "rgba(255,255,255,0.3)"}
            opacity={mounted ? 1 : 0}
            style={{
              transition: `opacity 0.5s ease ${node.delay}`,
              animation: node.accent ? `pulse-slow 3s ease-in-out infinite ${node.delay}` : "none",
            }}
          />
        ))}

        {/* Traveling signal dot along the F strokes */}
        {mounted && (
          <circle r="1.5" fill="#FF461E" opacity="0.9">
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M28,20 L92,20 L92,20 L28,20 L28,72 L72,72 L72,72 L28,72 L28,120"
            />
          </circle>
        )}

        {/* Corner ticks — engineering feel */}
        <line x1="24" y1="16" x2="32" y2="16" stroke="rgba(255,70,30,0.3)" strokeWidth="0.8" />
        <line x1="24" y1="16" x2="24" y2="24" stroke="rgba(255,70,30,0.3)" strokeWidth="0.8" />
        <line x1="88" y1="16" x2="96" y2="16" stroke="rgba(255,70,30,0.3)" strokeWidth="0.8" />
        <line x1="96" y1="16" x2="96" y2="24" stroke="rgba(255,70,30,0.3)" strokeWidth="0.8" />
        <line x1="24" y1="124" x2="32" y2="124" stroke="rgba(255,70,30,0.3)" strokeWidth="0.8" />
        <line x1="24" y1="116" x2="24" y2="124" stroke="rgba(255,70,30,0.3)" strokeWidth="0.8" />
      </svg>

      {/* Floating label overlays */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${dx * 0.4}px, ${dy * 0.4}px)` }}
      >
        {[
          { top: "8%", right: "8%", label: "GROWTH" },
          { bottom: "10%", right: "10%", label: "STRATEGY" },
          { top: "50%", right: "5%", label: "SEO" },
          { top: "12%", left: "5%", label: "FYRN" },
        ].map((item, i) => (
          <div
            key={i}
            className="absolute text-[9px] font-mono text-foreground-dim tracking-widest uppercase opacity-50"
            style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Corner bracket decorations */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-foreground-dim/20" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-foreground-dim/20" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-foreground-dim/20" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-foreground-dim/20" />
    </div>
  );
}

export function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      aria-labelledby="about-heading"
    >
      {/* Atmospheric backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 55% -5%, rgba(255,70,30,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Structural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-8">
            {/* Eyebrow */}
            <div
              className={cn(
                "transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="inline-flex items-center gap-2">
                <span className="block w-6 h-px bg-accent" />
                <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                  About FyrnMedia
                </span>
              </div>
            </div>

            {/* Headline */}
            <div
              className={cn(
                "transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "120ms" }}
            >
              <h1
                id="about-heading"
                className="text-display-2xl font-bold text-foreground leading-none tracking-tighter"
              >
                We build digital
                <br />
                presence with{" "}
                <span className="text-accent">purpose.</span>
              </h1>
            </div>

            {/* Supporting copy */}
            <div
              className={cn(
                "transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "240ms" }}
            >
              <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-md">
                FyrnMedia is a digital growth studio focused on helping businesses
                become more visible, more relevant, and more effective online — through
                strategy, search, and technology that actually moves the needle.
              </p>
            </div>

            {/* Metadata strip */}
            <div
              className={cn(
                "pt-4 border-t border-border grid grid-cols-2 gap-6 transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "360ms" }}
            >
              {[
                { label: "Discipline", value: "Digital Growth" },
                { label: "Focus", value: "SEO · Strategy · Web" },
                { label: "Operating Model", value: "Senior-led Studio" },
                { label: "Markets", value: "Global · Remote-first" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Monogram Visual */}
          <div
            className={cn(
              "lg:col-span-6 xl:col-span-7 h-[360px] md:h-[460px] lg:h-[520px] relative transition-all duration-1000",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute inset-0 border border-border rounded-sm overflow-hidden">
              <FMonogram />
            </div>

            {/* Studio label floating badge */}
            <div className="absolute top-4 left-4 z-10 bg-background-elevated/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-sm">
              <span className="text-[10px] font-mono text-foreground-muted tracking-widest uppercase">
                Digital Growth Studio
              </span>
            </div>

            {/* Identity tag bottom right */}
            <div className="absolute bottom-4 right-4 z-10 bg-background-elevated/80 backdrop-blur-sm border border-border px-3 py-2 rounded-sm text-right">
              <div className="text-xs font-bold font-mono text-foreground tracking-tight">
                FyrnMedia
              </div>
              <div className="text-[10px] font-mono text-foreground-subtle uppercase tracking-wider mt-0.5">
                Est. Digital · Global
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
