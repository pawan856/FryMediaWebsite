"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ServicesVisual } from "./ServicesVisual";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function ServiceHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border"
      aria-labelledby="services-hero-heading"
    >
      {/* Subtle backdrop radiance */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% -5%, rgba(112,157,119,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Grid line texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,60,46,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,60,46,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Statement */}
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
                  Services
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
                id="services-hero-heading"
                className="text-display-2xl font-bold text-foreground leading-none tracking-tighter"
              >
                Digital growth,
                <br />
                built around
                <br />
                <span className="text-accent">the problem.</span>
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
                FyrnMedia combines strategy, search engineering, and performance
                web systems to help businesses become more discoverable, more
                authoritative, and measurably more effective online.
              </p>
            </div>

            {/* Architecture meta */}
            <div
              className={cn(
                "pt-4 border-t border-border flex flex-wrap items-center gap-6 text-xs font-mono text-foreground-subtle transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "360ms" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>01 Active Discipline</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground-dim" />
                <span>05 Future Horizons</span>
              </div>
              <Link
                href="#service-index"
                className="text-foreground hover:text-accent transition-colors flex items-center gap-1.5 ml-auto"
              >
                <span>Jump to Index</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Abstract Growth Visual */}
          <div
            className={cn(
              "lg:col-span-6 xl:col-span-7 h-[360px] md:h-[460px] lg:h-[500px] relative transition-all duration-1000",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute inset-0 border border-border rounded-sm overflow-hidden bg-background">
              <ServicesVisual />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
