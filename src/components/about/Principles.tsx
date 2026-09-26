"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const principles = [
  {
    index: "01",
    title: "Clarity over complexity.",
    description:
      "The best digital strategies are ones that everyone in the room understands. We resist jargon and over-engineering in favour of clear thinking and focused execution.",
  },
  {
    index: "02",
    title: "Strategy before execution.",
    description:
      "Every deliverable — a page, a schema graph, a content architecture — flows from a defined strategy. Work without direction is effort without return.",
  },
  {
    index: "03",
    title: "Evidence over assumptions.",
    description:
      "We make decisions based on data: search behaviour, crawl signals, competitive benchmarks, conversion patterns. When we don't know, we say so and find out.",
  },
  {
    index: "04",
    title: "Quality over quantity.",
    description:
      "Fifty pages of thin content will not outperform ten pages of genuine authority. We prioritise depth, precision, and relevance over volume for its own sake.",
  },
  {
    index: "05",
    title: "Long-term thinking.",
    description:
      "Organic growth compounds. The choices made today shape the search position of tomorrow. We build for durability, not just for the next reporting cycle.",
  },
];

export function Principles() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.07 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-36 overflow-hidden bg-background-elevated/20"
    >
      <Container size="wide">
        {/* Header — split layout */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Principles
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Five principles
              <br />
              guide the work.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-md">
              These aren&apos;t values on a wall. They&apos;re working rules that
              shape every strategy, every recommendation, and every line of code
              we produce.
            </p>
          </div>
        </div>

        {/* Principles — large numbered list */}
        <div className="space-y-0">
          {principles.map((principle, i) => (
            <div
              key={principle.index}
              className={cn(
                "group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-border transition-all duration-700",
                "hover:bg-background-elevated/30 cursor-default",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              {/* Top sweep line */}
              <div
                className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              {/* Index */}
              <div className="md:col-span-1 flex items-start pt-1">
                <span className="text-xs font-mono text-foreground-subtle group-hover:text-accent transition-colors duration-300">
                  {principle.index}
                </span>
              </div>

              {/* Title — large editorial weight */}
              <div className="md:col-span-5">
                <h3 className="text-heading-xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                  {principle.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5 md:col-start-8">
                <p className="text-base text-foreground-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
