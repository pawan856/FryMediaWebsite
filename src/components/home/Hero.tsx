"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { TrackedLink } from "@/components/analytics/TrackedLink";

// Lightweight CSS-based signal visualization — no canvas / heavy libs
function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reducedMotion.matches || coarsePointer.matches) return;

    let frame = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;
    const handlePointerMove = (event: PointerEvent) => {
      if (
        event.pointerType !== "mouse" ||
        reducedMotion.matches ||
        coarsePointer.matches
      ) {
        return;
      }
      const rect = el.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width;
      pointerY = (event.clientY - rect.top) / rect.height;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const offsetX = (pointerX - 0.5) * 4;
        const offsetY = (pointerY - 0.5) * 4;
        const distanceFromCenter = Math.hypot(pointerX - 0.5, pointerY - 0.5);
        el.style.setProperty("--parallax-x", `${offsetX}px`);
        el.style.setProperty("--parallax-y", `${offsetY}px`);
        el.style.setProperty("--grid-x", `${offsetX * 0.2}px`);
        el.style.setProperty("--grid-y", `${offsetY * 0.2}px`);
        el.style.setProperty("--network-x", `${offsetX * 0.55}px`);
        el.style.setProperty("--network-y", `${offsetY * 0.55}px`);
        el.style.setProperty("--labels-x", `${offsetX * 0.9}px`);
        el.style.setProperty("--labels-y", `${offsetY * 0.9}px`);
        el.dataset.hovering = "true";
        el.dataset.nearCenter = String(distanceFromCenter < 0.22);
        el.closest("[data-hero-section]")?.setAttribute("data-visual-active", "true");
      });
    };
    const resetPointer = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      el.style.removeProperty("--parallax-x");
      el.style.removeProperty("--parallax-y");
      el.style.removeProperty("--grid-x");
      el.style.removeProperty("--grid-y");
      el.style.removeProperty("--network-x");
      el.style.removeProperty("--network-y");
      el.style.removeProperty("--labels-x");
      el.style.removeProperty("--labels-y");
      el.dataset.hovering = "false";
      el.dataset.nearCenter = "false";
      el.closest("[data-hero-section]")?.removeAttribute("data-visual-active");
    };
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", resetPointer);
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", resetPointer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Node positions for the network visualization
  const nodes = [
    { cx: 50, cy: 50, r: 3, delay: "0s", label: "Brand" },
    { cx: 78, cy: 22, r: 2, delay: "0.3s", label: "" },
    { cx: 82, cy: 58, r: 2.5, delay: "0.5s", label: "" },
    { cx: 62, cy: 78, r: 2, delay: "0.8s", label: "" },
    { cx: 30, cy: 68, r: 1.5, delay: "0.2s", label: "" },
    { cx: 20, cy: 35, r: 2, delay: "0.6s", label: "" },
    { cx: 90, cy: 38, r: 1.5, delay: "0.9s", label: "" },
    { cx: 42, cy: 18, r: 1.5, delay: "0.4s", label: "" },
    { cx: 70, cy: 90, r: 2, delay: "0.7s", label: "" },
    { cx: 10, cy: 55, r: 1.5, delay: "1.0s", label: "" },
    { cx: 55, cy: 35, r: 1.5, delay: "0.1s", label: "" },
    { cx: 88, cy: 80, r: 1.5, delay: "1.2s", label: "" },
  ];

  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 7], [1, 6], [2, 6], [2, 8],
    [3, 8], [4, 9], [5, 9], [10, 0], [11, 2],
  ];

  return (
    <div
      ref={containerRef}
      className="hero-network relative w-full h-full select-none"
      data-hovering="false"
      data-near-center="false"
      aria-hidden="true"
    >
      {/* Background grid */}
      <div
        className="hero-visual-grid absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,60,46,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,60,46,0.045) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Accent radial glow — follows mouse subtly */}
      <div
        className="hero-visual-glow absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at calc(50% + var(--parallax-x, 0px)) calc(50% + var(--parallax-y, 0px)), rgba(112,157,119,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Network SVG */}
      <svg
        viewBox="0 0 100 100"
        className="hero-visual-lines absolute inset-0 w-full h-full"
        style={{
          transform:
            "translate3d(var(--network-x, 0px), var(--network-y, 0px), 0)",
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Edges */}
        {edges.map(([from, to], i) => (
          <line
            key={i}
            className="hero-network-edge"
            x1={nodes[from].cx}
            y1={nodes[from].cy}
            x2={nodes[to].cx}
            y2={nodes[to].cy}
            stroke="rgba(24,60,46,0.12)"
            strokeWidth="0.4"
          />
        ))}

        {/* Highlight edges emanating from center */}
        {[0, 1, 2].map((i) => (
          <line
            key={`accent-${i}`}
            className="hero-network-highlight-edge"
            x1={nodes[0].cx}
            y1={nodes[0].cy}
            x2={nodes[edges[i][1]].cx}
            y2={nodes[edges[i][1]].cy}
            stroke="rgba(112,157,119,0.5)"
            strokeWidth="0.5"
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i} className={i === 0 ? "hero-network-center" : undefined}>
            {/* Pulse ring on center node */}
            {i === 0 && (
              <>
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r="8"
                  fill="none"
                  stroke="rgba(112,157,119,0.28)"
                  strokeWidth="0.5"
                  className="hero-network-pulse"
                  style={{
                    animation: "pulse-ring 3s ease-out infinite",
                  }}
                />
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r="5.5"
                  fill="none"
                  stroke="rgba(112,157,119,0.38)"
                  strokeWidth="0.5"
                />
              </>
            )}
            {/* Node circle */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={i === 0 ? "#709D77" : i < 3 ? "rgba(112,157,119,0.75)" : "rgba(24,60,46,0.28)"}
              style={{
                animation: `pulse-slow ${2 + (i * 0.3)}s ease-in-out infinite`,
                animationDelay: node.delay,
              }}
            />
          </g>
        ))}

        {/* Moving signal dot on primary path */}
        <circle r="1" fill="#709D77" opacity="0.9">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path={`M${nodes[0].cx},${nodes[0].cy} L${nodes[1].cx},${nodes[1].cy} L${nodes[6].cx},${nodes[6].cy} L${nodes[2].cx},${nodes[2].cy} L${nodes[0].cx},${nodes[0].cy}`}
          />
        </circle>

        {/* Second moving signal dot */}
        <circle r="0.8" fill="rgba(112,157,119,0.8)" opacity="0.7">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path={`M${nodes[0].cx},${nodes[0].cy} L${nodes[4].cx},${nodes[4].cy} L${nodes[9].cx},${nodes[9].cy} L${nodes[5].cx},${nodes[5].cy} L${nodes[0].cx},${nodes[0].cy}`}
          />
        </circle>
      </svg>

      {/* Data labels — floating, subtle */}
      <div
        className="hero-visual-labels absolute inset-0"
        style={{
          transform:
            "translate3d(var(--labels-x, 0px), var(--labels-y, 0px), 0)",
        }}
      >
        {[
          { top: "14%", left: "60%", text: "SERP SIGNAL" },
          { top: "53%", left: "76%", text: "AUTHORITY" },
          { top: "76%", left: "55%", text: "VELOCITY" },
          { top: "28%", left: "12%", text: "INTENT" },
          { top: "68%", left: "18%", text: "REACH" },
        ].map((label, i) => (
          <div
            key={i}
            className="absolute text-[9px] font-mono text-foreground-dim tracking-widest uppercase opacity-60"
            style={{ top: label.top, left: label.left }}
          >
            {label.text}
          </div>
        ))}
      </div>

      {/* Corner bracket decorations */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-foreground-dim/30" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-foreground-dim/30" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-foreground-dim/30" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-foreground-dim/30" />
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to let the page fully paint before triggering entrance
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      data-hero-section
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Atmospheric radial backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(112,157,119,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,60,46,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,60,46,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content Column */}
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
                  Fyrn Media · AI for Everyday Life
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
                id="hero-heading"
                className="text-display-2xl font-bold text-foreground leading-none tracking-tighter"
              >
                Making everyday
                <br />
                life better
                <br />
                <span className="hero-highlight text-accent">with AI.</span>
              </h1>
            </div>

            {/* Supporting paragraph */}
            <div
              className={cn(
                "transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "240ms" }}
            >
              <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-md">
                We make AI useful in the real world. Through thoughtful digital
                strategy, search, and web experiences, we help ambitious brands
                connect technology with the people and everyday moments that
                matter.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-wrap items-center gap-4 transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "360ms" }}
            >
              {/* Primary CTA */}
              <TrackedLink
                href="/contact"
                event="hero_cta_click"
                className="group relative inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover hover:-translate-y-px hover:shadow-md hover:shadow-accent/20 text-white font-semibold text-sm px-6 py-3.5 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <ArrowUpRight
                  className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                {/* Subtle shine on hover */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300" />
              </TrackedLink>

              {/* Secondary CTA */}
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 border border-border hover:border-border-hover text-foreground-muted hover:text-foreground text-sm font-medium px-6 py-3.5 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>Explore Services</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Micro stat bar */}
            <div
              className={cn(
                "pt-4 border-t border-border transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "480ms" }}
            >
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "SEO", label: "Engineering" },
                  { value: "Web", label: "Performance" },
                  { value: "Growth", label: "Strategy" },
                ].map((stat) => (
                  <div key={stat.value}>
                    <div className="text-base font-semibold font-mono text-foreground tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground-subtle font-mono uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual Column */}
          <div
            className={cn(
              "lg:col-span-6 xl:col-span-7 h-[380px] md:h-[480px] lg:h-[560px] relative transition-all duration-1000",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Outer border frame */}
            <div className="hero-visual-frame absolute inset-0 border border-border rounded-sm overflow-hidden">
              <HeroVisual />
            </div>

            {/* Floating badge overlay — top left of visual */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-background-elevated/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              <span className="text-[10px] font-mono text-foreground-muted tracking-widest uppercase">
                  Human-first AI
              </span>
            </div>

            {/* Capability marker — bottom right of visual */}
            <div className="absolute bottom-4 right-4 z-10 bg-background-elevated/80 backdrop-blur-sm border border-border px-4 py-3 rounded-sm text-right">
              <div className="text-lg font-bold font-mono text-foreground tracking-tight">IDEAS → EVERYDAY</div>
              <div className="text-[10px] font-mono text-foreground-subtle uppercase tracking-widest">
                People · Technology · Possibility
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700",
            mounted ? "opacity-40" : "opacity-0"
          )}
          style={{ transitionDelay: "800ms" }}
          aria-hidden="true"
        >
          <div className="w-px h-8 bg-gradient-to-b from-foreground-subtle to-transparent" />
          <span className="text-[9px] font-mono tracking-widest uppercase text-foreground-subtle">
            Scroll
          </span>
        </div>
      </Container>
    </section>
  );
}
