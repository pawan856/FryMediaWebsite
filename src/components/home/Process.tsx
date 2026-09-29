"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We audit your current digital position, map competitive gaps, and deeply understand your audience's search behaviour and intent.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "A focused growth plan is built around your specific goals — the channels, content model, and technical priorities that will actually move the needle.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our senior team designs, optimizes, and implements — SEO architecture, content, web performance — with precision and measurable milestones.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "We track the metrics that matter: organic visibility, qualified traffic, conversion rate, and revenue attribution — not just rankings.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "What works gets doubled. Insights compound. We help you reinvest in the channels and content that demonstrate the highest return.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-36 bg-background-elevated/20 overflow-hidden"
    >
      <Container size="wide">
        {/* Header */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                How We Work
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              From idea
              <br />
              to impact.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed">
              A structured process that removes guesswork and connects every
              action to business outcomes.
            </p>
          </div>
        </div>

        {/* Process steps — vertical with connecting line */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="absolute left-[calc(4rem-0.5px)] top-4 bottom-4 w-px hidden lg:block transition-all duration-1000"
            style={{
              background: inView
                ? "linear-gradient(to bottom, rgba(112,157,119,0.65), rgba(24,60,46,0.08))"
                : "transparent",
            }}
            aria-hidden="true"
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={cn(
                  "relative grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 md:py-10 border-b border-border group transition-all duration-700 hover:bg-background-elevated/20",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Number with visual dot on the connector line */}
                <div className="lg:col-span-2 flex items-center gap-4 lg:gap-0 lg:block">
                  <div className="relative flex items-center justify-center w-16 h-16 border border-border bg-background rounded-sm group-hover:border-accent/40 transition-colors duration-300 flex-shrink-0">
                    {/* Active indicator */}
                    <div
                      className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-mono text-foreground-muted group-hover:text-accent transition-colors duration-300 relative">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="lg:col-span-3 lg:flex lg:items-center">
                  <h3 className="text-heading-xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-6 lg:flex lg:items-center">
                  <p className="text-base text-foreground-muted leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Step accent line — top border glow on hover */}
                <div
                  className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
