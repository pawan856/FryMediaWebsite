"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { XCircle } from "lucide-react";

const forbiddenPractices = [
  {
    heading: "No Guaranteed #1 Rankings",
    detail: "Anyone promising guaranteed Google positions is either violating Google Search Essentials or targeting zero-volume queries that yield zero revenue.",
  },
  {
    heading: "No Spam Backlinks or PBNs",
    detail: "We never buy links from private blog networks or link farms that expose your core domain to algorithmic manual penalties.",
  },
  {
    heading: "No Automated Low-Quality Content",
    detail: "We reject mass-generated AI content mills. Every piece of content published under our guidance is verified for genuine topical depth.",
  },
  {
    heading: "No Mechanical Keyword Stuffing",
    detail: "Unnatural keyword repetition degrades readability and signals low quality to modern neural matching algorithms. We write for humans first.",
  },
  {
    heading: "No Vanity Metric Reporting",
    detail: "We do not celebrate impressions for queries that will never convert. Success is defined exclusively by qualified traffic and revenue contribution.",
  },
];

export function WhatWeDontDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border overflow-hidden"
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
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Integrity Standards
              </span>
            </div>

            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              SEO without
              <br />
              <span className="text-accent">the shortcuts.</span>
            </h2>

            <p className="text-base text-foreground-muted leading-relaxed">
              Shortcuts in SEO create fragile visibility that collapses during the
              next core algorithm update. FyrnMedia builds durable, compliant organic
              assets engineered for decade-long algorithmic resilience.
            </p>

            <div className="p-4 border border-border bg-background-elevated rounded-sm text-xs font-mono text-foreground-subtle leading-relaxed">
              &ldquo;Sustainable search visibility is built through compounding technical excellence,
              not speculative loopholes.&rdquo;
            </div>
          </div>

          {/* Right Column: Forbidden Practices List */}
          <div
            className={cn(
              "lg:col-span-7 space-y-4 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="divide-y divide-border border-t border-b border-border">
              {forbiddenPractices.map((item, idx) => (
                <div
                  key={item.heading}
                  className="py-6 flex items-start gap-4 group hover:bg-background-elevated/30 transition-colors"
                >
                  <XCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                      {item.heading}
                    </h3>
                    <p className="text-xs text-foreground-muted leading-relaxed">
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
