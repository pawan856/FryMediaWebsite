"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const startingPoints = [
  "The business — its model, its margin, its real ambitions.",
  "The audience — who they are, what they search for, why they convert.",
  "The competition — where gaps exist, where dominance is possible.",
  "The technology — what is slowing the site, what is blocking the crawl.",
  "The content — what exists, what is missing, what is misaligned.",
  "The goal — not vanity metrics, but the outcomes that actually matter.",
];

export function HowWeThink() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-40 overflow-hidden bg-background-elevated/25"
    >
      {/* Right-side accent glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 100% 40%, rgba(255,70,30,0.04) 0%, transparent 70%)",
        }}
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: Core statement */}
          <div
            className={cn(
              "lg:col-span-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                How We Think
              </span>
            </div>

            {/* Large statement */}
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter mb-10">
              We don&apos;t start
              <br />
              with channels.
              <br />
              <span className="text-foreground-muted font-normal">
                We start with
                <br />
                the problem.
              </span>
            </h2>

            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-md mb-10">
              Most agencies open a playbook. We open a conversation. Every
              engagement begins with a genuine attempt to understand your
              situation before we recommend anything.
            </p>

            <p className="text-base text-foreground-muted leading-relaxed max-w-md">
              This is what separates a strategic partner from a service vendor.
              We don&apos;t sell SEO packages or website templates. We diagnose,
              then we prescribe.
            </p>
          </div>

          {/* Right: Starting point list */}
          <div
            className={cn(
              "lg:col-span-5 lg:col-start-8 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="border border-border bg-background rounded-sm overflow-hidden">
              {/* Card header */}
              <div className="px-6 py-4 border-b border-border bg-background-elevated/40">
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">
                  Before we recommend anything, we understand
                </span>
              </div>

              {/* List items */}
              <ul className="divide-y divide-border">
                {startingPoints.map((point, i) => (
                  <li
                    key={i}
                    className={cn(
                      "group flex items-start gap-4 px-6 py-4 transition-all duration-300 hover:bg-background-elevated/40",
                      inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    )}
                    style={{ transitionDelay: `${200 + i * 70}ms` }}
                  >
                    {/* Index */}
                    <span className="text-[10px] font-mono text-foreground-subtle pt-1 shrink-0 group-hover:text-accent transition-colors duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Point */}
                    <span className="text-sm text-foreground-muted leading-relaxed group-hover:text-foreground transition-colors duration-200">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Card footer accent */}
              <div className="px-6 py-3 border-t border-border bg-background-elevated/30 flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                <span className="text-[10px] font-mono text-foreground-subtle uppercase tracking-widest">
                  Strategic diagnostic active
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
