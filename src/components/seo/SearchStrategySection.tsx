"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { IntentMap } from "./IntentMap";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";

export function SearchStrategySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Thesis */}
          <div
            className={cn(
              "lg:col-span-5 space-y-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Search Strategy
              </span>
            </div>

            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Don&apos;t chase keywords.
              <br />
              <span className="text-accent">Understand intent.</span>
            </h2>

            <p className="text-base text-foreground-muted leading-relaxed">
              Ranking for 1,000 irrelevant informational queries produces vanity traffic
              that never converts. We focus on search intent segmentation — engineering
              visibility where buyers research solutions, compare vendors, and commit budget.
            </p>

            <div className="space-y-3 pt-2 text-sm text-foreground-muted">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Commercial query qualification before content production</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>SERP landscape analysis to target high-CTR real estate</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Eliminating keyword cannibalization between overlapping URLs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intent Map Interactive Component */}
          <div
            className={cn(
              "lg:col-span-7 h-[440px] md:h-[480px] transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <IntentMap />
          </div>
        </div>
      </Container>
    </section>
  );
}
