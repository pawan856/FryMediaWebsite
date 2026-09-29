"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const shifts = [
  {
    index: "01",
    topic: "Search is changing.",
    body:
      "AI-assisted discovery, generative answers, and zero-click results are reshaping how people find brands. The rules written a decade ago no longer apply.",
  },
  {
    index: "02",
    topic: "Users are changing.",
    body:
      "Audiences are more fragmented, more sceptical, and more in control of their attention than ever. Relevance isn't optional — it's the admission fee.",
  },
  {
    index: "03",
    topic: "Technology is changing.",
    body:
      "The web is faster, smarter, and more demanding. A slow site or a bloated codebase isn't just a performance issue — it's a competitive disadvantage.",
  },
  {
    index: "04",
    topic: "Brands need to adapt.",
    body:
      "The businesses that win online in the next decade won't be the loudest. They'll be the most structured, the most visible in the right places, and the most useful.",
  },
];

export function PointOfView() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-40 overflow-hidden bg-background-elevated/20"
    >
      {/* Accent left-rail */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background: inView
            ? "linear-gradient(to bottom, transparent, rgba(112,157,119,0.55), transparent)"
            : "transparent",
          transition: "background 1.2s ease 0.3s",
        }}
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section opener */}
        <div
          className={cn(
            "mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-accent flex-shrink-0" />
            <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
              Our Point of View
            </span>
          </div>
          <h2 className="text-display-xl font-bold text-foreground tracking-tighter max-w-2xl">
            Digital is changing.
          </h2>
        </div>

        {/* Shift statements — editorial row layout */}
        <div className="space-y-0 divide-y divide-border">
          {shifts.map((item, i) => (
            <div
              key={item.index}
              className={cn(
                "grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-12 group transition-all duration-700",
                "hover:bg-background-elevated/30",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              {/* Index */}
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-foreground-subtle group-hover:text-accent transition-colors duration-300">
                  {item.index}
                </span>
              </div>

              {/* Topic — large */}
              <div className="md:col-span-4">
                <h3 className="text-heading-xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                  {item.topic}
                </h3>
              </div>

              {/* Body */}
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-base text-foreground-muted leading-relaxed">
                  {item.body}
                </p>
              </div>

              {/* Sweep line */}
              <div
                className="absolute left-0 h-px w-0 bg-gradient-to-r from-accent/40 to-transparent group-hover:w-full transition-all duration-500"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className={cn(
            "mt-20 pt-10 border-t border-border transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "450ms" }}
        >
          <p className="text-display-lg font-semibold text-foreground tracking-tighter max-w-3xl">
            FyrnMedia exists to help businesses navigate that change — and stay
            visible as it continues.
          </p>
        </div>
      </Container>
    </section>
  );
}
