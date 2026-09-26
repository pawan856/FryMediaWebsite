"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const beliefs = [
  {
    index: "01",
    title: "Visibility matters.",
    description:
      "Being good isn't enough if the right people cannot find you. The best product, the best service, the best team — none of it reaches its potential if it's invisible online.",
  },
  {
    index: "02",
    title: "Strategy comes first.",
    description:
      "Execution without direction creates noise. We believe in thinking before building, mapping before writing, understanding before optimising.",
  },
  {
    index: "03",
    title: "Data informs decisions.",
    description:
      "We use evidence — search data, crawl telemetry, user signals — to understand what is working and what isn't. Assumptions are a starting point, not a conclusion.",
  },
  {
    index: "04",
    title: "Growth is a process.",
    description:
      "Sustainable digital growth isn't a single campaign or a one-time fix. It's built through continuous improvement, consistent execution, and long-term investment.",
  },
];

export function Beliefs() {
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
              What We Believe
            </span>
          </div>
          <h2 className="text-display-lg font-bold text-foreground tracking-tighter max-w-xl">
            Four beliefs that
            <br />
            shape our work.
          </h2>
        </div>

        {/* Beliefs grid — 2×2 with shared borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-border">
          {beliefs.map((belief, i) => (
            <div
              key={belief.index}
              className={cn(
                "group relative p-8 md:p-10 lg:p-12 border-r border-b border-border",
                "transition-all duration-700 hover:bg-background-elevated/40 cursor-default",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Top accent sweep */}
              <div
                className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              {/* Index — large, faint */}
              <div className="text-[3.5rem] font-bold font-mono text-foreground-dim/30 leading-none mb-6 select-none group-hover:text-accent/20 transition-colors duration-300">
                {belief.index}
              </div>

              {/* Belief title */}
              <h3 className="text-heading-xl font-semibold text-foreground tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
                {belief.title}
              </h3>

              {/* Description */}
              <p className="text-base text-foreground-muted leading-relaxed max-w-sm">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
