"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";

const principles = [
  {
    step: "01",
    label: "Understand the business",
    detail: "We inspect your economics, margins, and customer acquisition costs before writing a strategy.",
  },
  {
    step: "02",
    label: "Identify true opportunities",
    detail: "We prioritize gaps where search demand aligns with commercial margin, filtering out vanity traffic.",
  },
  {
    step: "03",
    label: "Select the right channel",
    detail: "Rather than spreading thin across five platforms, we concentrate firepower where your buyers actually search.",
  },
  {
    step: "04",
    label: "Execute with purpose",
    detail: "Every schema graph, technical remediation, and content cluster serves a defined commercial hypothesis.",
  },
  {
    step: "05",
    label: "Measure real outcomes",
    detail: "We hold organic performance accountable to revenue contribution, pipeline, and qualified customer inquiry.",
  },
];

export function WhyTheseServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-background-elevated/25 border-b border-border overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Thesis */}
          <div
            className={cn(
              "lg:col-span-5 space-y-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="block w-6 h-px bg-accent" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Our Rationale
              </span>
            </div>

            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Most businesses don&apos;t need more marketing.
              <br />
              <span className="text-accent font-normal">They need clearer direction.</span>
            </h2>

            <p className="text-base text-foreground-muted leading-relaxed">
              The digital landscape is inundated with disconnected tactics: random blogs,
              generic backlinks, and cosmetic redesigns. FyrnMedia eliminates the noise
              by treating digital discovery as an integrated systems problem.
            </p>

            <div className="p-4 border border-border bg-background rounded-sm text-xs font-mono text-foreground-subtle leading-relaxed">
              Focus is our highest leverage tool. That is why we are building depth in
              one discipline before expanding our commercial spectrum.
            </div>
          </div>

          {/* Right Column: 5-Stage Discipline Matrix */}
          <div
            className={cn(
              "lg:col-span-7 transition-all duration-700 border-t border-border lg:border-t-0",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="divide-y divide-border border-b border-border">
              {principles.map((item, idx) => (
                <div
                  key={item.step}
                  className="group py-6 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 hover:bg-background-elevated/30 transition-colors"
                >
                  <span className="text-xs font-mono text-accent font-bold shrink-0">
                    {item.step}
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
