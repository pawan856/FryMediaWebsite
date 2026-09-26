"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { ContentArchitecture } from "./ContentArchitecture";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { CheckCircle2 } from "lucide-react";

export function ContentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border bg-background-elevated/20 overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Architecture */}
          <div
            className={cn(
              "lg:col-span-7 h-[420px] md:h-[460px] order-2 lg:order-1 transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <ContentArchitecture />
          </div>

          {/* Right Column: Thesis */}
          <div
            className={cn(
              "lg:col-span-5 space-y-6 order-1 lg:order-2 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Content Strategy
              </span>
            </div>

            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Content should
              <br />
              <span className="text-accent">earn attention.</span>
            </h2>

            <p className="text-base text-foreground-muted leading-relaxed">
              We do not believe in publishing content simply to increase page count or
              tick arbitrary publishing calendars. Search engines reward genuine domain
              authority, structured depth, and high user retention.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-foreground-muted">
              {[
                "Answers real questions searched by high-intent prospects",
                "Comprehensively satisfies search intent on the initial visit",
                "Demonstrates authentic technical expertise and proprietary data",
                "Guides prospects naturally through the decision-making cycle",
                "Contributes directly to commercial lead volume and revenue",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
