"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SearchFlow } from "./SearchFlow";
import { cn } from "@/lib/utils/cn";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function SeoHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border"
      aria-labelledby="seo-hero-heading"
    >
      {/* Radiant ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(255,70,30,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Grid pattern */}
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
          {/* Left Column: Editorial Headline & Actions */}
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
                  SEO / Search Visibility
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
                id="seo-hero-heading"
                className="text-display-2xl font-bold text-foreground leading-none tracking-tighter"
              >
                Turn search intent
                <br />
                into <span className="text-accent">sustainable</span>
                <br />
                growth.
              </h1>
            </div>

            {/* Supporting Copy */}
            <div
              className={cn(
                "transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "240ms" }}
            >
              <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-md">
                FyrnMedia helps forward-thinking brands improve organic search
                through systematic crawl architecture, semantic entity graphs, and
                high-intent search capture.
              </p>
            </div>

            {/* Dual CTAs */}
            <div
              className={cn(
                "flex flex-wrap items-center gap-4 transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "360ms" }}
            >
              <TrackedLink
                href="/contact?service=seo"
                event="service_cta_click"
                className="group relative inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-6 py-3.5 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
              >
                <span className="relative z-10">Talk About SEO</span>
                <ArrowUpRight
                  className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300" />
              </TrackedLink>

              <Link
                href="#seo-system"
                className="group inline-flex items-center gap-2 border border-border hover:border-border-hover text-foreground-muted hover:text-foreground text-sm font-medium px-5 py-3.5 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>See Our Approach</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </div>

            {/* Live Metrics Verification Bar */}
            <div
              className={cn(
                "pt-6 border-t border-border grid grid-cols-3 gap-6 transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "480ms" }}
            >
              {[
                { value: "Clear", label: "Semantic structure" },
                { value: "Lean", label: "Technical systems" },
                { value: "Defined", label: "Measurement signals" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-base font-bold font-mono text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-foreground-subtle font-mono uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: SearchFlow Pipeline Visual */}
          <div
            className={cn(
              "lg:col-span-6 xl:col-span-7 h-[420px] md:h-[480px] lg:h-[540px] relative transition-all duration-1000",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <SearchFlow />
          </div>
        </div>
      </Container>
    </section>
  );
}
