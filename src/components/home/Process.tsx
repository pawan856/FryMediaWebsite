"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Discover",
    description:
      "We audit where you stand today, map competitors and search demand, and learn how your customers actually search.",
  },
  {
    number: "2",
    title: "Strategize",
    description:
      "You get a focused plan: the channels, content model and technical fixes that match your goals.",
  },
  {
    number: "3",
    title: "Execute",
    description:
      "Our senior team ships the work (site architecture, content, performance) with clear milestones.",
  },
  {
    number: "4",
    title: "Measure",
    description:
      "We track visibility, qualified traffic, conversions and revenue, not just rankings.",
  },
  {
    number: "5",
    title: "Scale",
    description:
      "We double down on what works and reinvest in the channels earning the strongest return.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-20 md:py-32 bg-background-elevated/20 overflow-hidden"
    >
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                How We Work
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              From first conversation to measurable growth.
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground-muted leading-relaxed">
              A clear process that removes guesswork and ties every action to a business outcome.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              <span>See how an engagement starts</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Ordered list semantics as requested */}
        <ol className="divide-y divide-border border-y border-border list-none p-0 m-0">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className={cn(
                "grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 transition-all duration-700 items-start",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="md:col-span-1">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border font-mono text-sm font-semibold text-accent bg-background">
                  {step.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-base text-foreground-muted leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
