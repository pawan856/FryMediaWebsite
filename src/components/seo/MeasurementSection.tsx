"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";

const successVectors = [
  {
    category: "Search Visibility",
    metric: "Target Category Share of Voice",
    focus: "Tracking top-3 ranking positions and presence across Google AI Overviews for your most valuable commercial queries.",
  },
  {
    category: "Qualified Traffic",
    metric: "High-Intent Organic Sessions",
    focus: "Filtering out non-converting informational traffic to isolate prospects who match your ideal client profile (ICP).",
  },
  {
    category: "User Engagement",
    metric: "Scroll Depth & Interaction Rate",
    focus: "Measuring how effectively landing pages answer user dilemmas, satisfy search intent, and retain attention.",
  },
  {
    category: "Lead Acquisition",
    metric: "Direct Qualified Inquiries",
    focus: "Attribute form submissions, schedule requests, and demo bookings directly to specific organic topic clusters.",
  },
  {
    category: "Conversion Rate",
    metric: "Search-to-Opportunity Velocity",
    focus: "Continuously improving page-level conversion architecture so that traffic increases translate to pipeline expansion.",
  },
  {
    category: "Revenue Contribution",
    metric: "Closed Won ARR / Pipeline Value",
    focus: "Connecting multi-touch organic attribution models directly to your CRM to prove return on SEO investment.",
  },
];

export function MeasurementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border bg-background-elevated/20 overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Commercial Accountability
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              What does success
              <br />
              <span className="text-accent">actually look like?</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              We hold search engine optimization accountable to commercial business
              yield. Rankings are merely the mechanism; the ultimate goal is durable,
              compounding revenue expansion.
            </p>
          </div>
        </div>

        {/* 6 Measurement Vector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {successVectors.map((item, idx) => (
            <div
              key={item.category}
              className={cn(
                "p-6 border border-border bg-background rounded-sm space-y-3 hover:border-accent/40 transition-colors group",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-xs font-mono text-accent font-semibold">
                  0{idx + 1} {"//"} {item.category}
                </span>
              </div>
              <h3 className="text-sm font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
                {item.metric}
              </h3>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
