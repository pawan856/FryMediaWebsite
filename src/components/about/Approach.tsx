"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "Deep discovery across your business model, audience behaviour, search landscape, and competitive position. No assumptions — just evidence.",
    accent: true,
  },
  {
    number: "02",
    title: "Define",
    description:
      "We clarify what success looks like, prioritise the highest-leverage opportunities, and produce a focused strategy — not a broad set of generic recommendations.",
    accent: false,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Execution begins: technical SEO architecture, content strategy, web infrastructure, or all three. Senior-led from start to finish.",
    accent: false,
  },
  {
    number: "04",
    title: "Optimise",
    description:
      "Real data replaces planning assumptions. We track performance, identify friction, and iterate on what the evidence tells us to improve.",
    accent: false,
  },
  {
    number: "05",
    title: "Grow",
    description:
      "What works gets expanded. Channels that perform get more resource. Insights compound. We help you reinvest in the right places.",
    accent: true,
  },
];

export function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-36 overflow-hidden"
    >
      <Container size="wide">
        {/* Header */}
        <div
          className={cn(
            "mb-16 md:mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-accent flex-shrink-0" />
            <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
              Our Approach
            </span>
          </div>
          <h2 className="text-display-lg font-bold text-foreground tracking-tighter max-w-xl">
            A methodology built
            <br />
            for measurable results.
          </h2>
        </div>

        {/* Desktop: Horizontal timeline — Mobile: Vertical stack */}
        {/* Mobile vertical layout */}
        <div className="block lg:hidden space-y-0 divide-y divide-border border-t border-border">
          {stages.map((stage, i) => (
            <MobileStageCard key={stage.number} stage={stage} index={i} inView={inView} />
          ))}
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector track */}
          <div className="relative mb-0">
            {/* Timeline track bar */}
            <div className="relative flex items-stretch">
              {stages.map((stage, i) => (
                <div
                  key={stage.number}
                  className="flex-1 relative"
                >
                  {/* Connector line between stages */}
                  {i < stages.length - 1 && (
                    <div
                      className="absolute right-0 top-[28px] w-full h-px z-0 transition-all duration-1000"
                      style={{
                        background: inView
                          ? "linear-gradient(to right, rgba(112,157,119,0.65), rgba(24,60,46,0.08))"
                          : "transparent",
                        transitionDelay: `${i * 150 + 300}ms`,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Stage cards */}
            <div className="grid grid-cols-5 gap-0 mt-0">
              {stages.map((stage, i) => (
                <DesktopStageCard key={stage.number} stage={stage} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DesktopStageCard({
  stage,
  index,
  inView,
}: {
  stage: (typeof stages)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-5 px-6 pt-0 pb-8 border-l border-border first:border-l-0 transition-all duration-700 hover:bg-background-elevated/30 cursor-default",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Node circle on the timeline */}
      <div className="flex items-center gap-3 pt-5 mb-2">
        <div
          className={cn(
            "relative flex items-center justify-center w-14 h-14 border rounded-sm transition-all duration-300 shrink-0",
            stage.accent
              ? "border-accent/40 bg-accent/5 group-hover:border-accent/70"
              : "border-border bg-background group-hover:border-border-hover"
          )}
        >
          <span
            className={cn(
              "text-sm font-mono transition-colors duration-300",
              stage.accent
                ? "text-accent"
                : "text-foreground-muted group-hover:text-foreground"
            )}
          >
            {stage.number}
          </span>
          {/* Accent pulse for first/last */}
          {stage.accent && (
            <div
              className="absolute inset-0 rounded-sm border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        className={cn(
          "text-lg font-semibold tracking-tight transition-colors duration-300",
          stage.accent ? "text-accent" : "text-foreground group-hover:text-accent"
        )}
      >
        {stage.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-foreground-subtle leading-relaxed">
        {stage.description}
      </p>

      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </div>
  );
}

function MobileStageCard({
  stage,
  index,
  inView,
}: {
  stage: (typeof stages)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative grid grid-cols-12 gap-4 py-8 transition-all duration-700 hover:bg-background-elevated/20 cursor-default",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Left: number box */}
      <div className="col-span-2">
        <div
          className={cn(
            "flex items-center justify-center w-12 h-12 border rounded-sm",
            stage.accent ? "border-accent/40 bg-accent/5" : "border-border bg-background"
          )}
        >
          <span
            className={cn(
              "text-sm font-mono",
              stage.accent ? "text-accent" : "text-foreground-muted"
            )}
          >
            {stage.number}
          </span>
        </div>
      </div>
      {/* Right: content */}
      <div className="col-span-10 space-y-2">
        <h3
          className={cn(
            "text-lg font-semibold tracking-tight",
            stage.accent ? "text-accent" : "text-foreground"
          )}
        >
          {stage.title}
        </h3>
        <p className="text-sm text-foreground-subtle leading-relaxed">{stage.description}</p>
      </div>
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </div>
  );
}
