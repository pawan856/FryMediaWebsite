"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const principles = [
  {
    index: "01",
    title: "Strategy before execution.",
    description:
      "We don't open Figma or a code editor until we understand your market, your audience's intent, and what winning actually looks like for your business.",
  },
  {
    index: "02",
    title: "Data over assumptions.",
    description:
      "Decisions are grounded in search data, crawl telemetry, and performance signals — not gut feel, agency conventions, or inherited best guesses.",
  },
  {
    index: "03",
    title: "Design with purpose.",
    description:
      "Every visual and structural choice serves a functional goal: faster rendering, better indexing, higher trust, or clearer conversion pathways.",
  },
  {
    index: "04",
    title: "Growth that can be measured.",
    description:
      "We define success metrics at the start of every engagement and hold ourselves accountable to them. Vanity metrics don't ship with our work.",
  },
];

export function WhyFyrnMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-36 overflow-hidden"
    >
      <Container size="wide">
        {/* Section label */}
        <div
          className={cn(
            "flex items-center gap-3 mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="block w-6 h-px bg-accent flex-shrink-0" />
          <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
            Why FyrnMedia
          </span>
        </div>

        {/* Principles grid — large editorial type treatment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 divide-border">
          {principles.map((p, i) => (
            <div
              key={p.index}
              className={cn(
                "group relative p-8 md:p-10 border-b border-border transition-all duration-700",
                // Left column items get right border on md+
                i % 2 === 0 ? "md:border-r md:border-border" : "",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" aria-hidden="true" />

              {/* Index */}
              <div className="text-xs font-mono text-foreground-subtle mb-6 tracking-widest">
                {p.index}
              </div>

              {/* Large title */}
              <h3 className="text-display-lg font-bold text-foreground tracking-tighter mb-6 transition-colors duration-300 group-hover:text-foreground">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-base text-foreground-muted leading-relaxed max-w-sm">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
