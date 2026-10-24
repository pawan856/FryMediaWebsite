"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "AI Search Visibility (Flagship)",
    description: "Get discovered across search engines and AI answer systems.",
    link: "/services/ai-search-visibility",
    flagship: true,
  },
  {
    title: "SEO",
    description: "Technical, semantic and content systems for durable organic visibility.",
    link: "/services/seo",
  },
  {
    title: "Content & Social",
    description: "Useful content and audience programs built around clear goals.",
    link: "/services/content-marketing",
  },
  {
    title: "Performance Marketing",
    description: "Measurable paid search, paid social and conversion work.",
    link: "/services/performance-marketing",
  },
  {
    title: "AI Automation",
    description: "Practical workflows, agents and reporting that keep people in control.",
    link: "/services/ai-automation",
  },
  {
    title: "Web & Technical Build",
    description: "Fast, accessible, AI-ready websites built for how discovery is changing.",
    link: "/services/web-development",
  },
  {
    title: "Analytics & Strategy",
    description: "GA4, attribution and growth strategy tied to business outcomes.",
    link: "/services/analytics-strategy",
  },
];

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-20 md:py-32 overflow-hidden"
    >
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Services
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Everything you need to grow, as one connected system.
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground-muted leading-relaxed">
              Seven services, one plan. Start with a single service, or let us connect them.
            </p>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              <span>View all services</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.title}
              href={s.link}
              className={cn(
                "group relative p-7 rounded-sm border border-border bg-background transition-all duration-300 hover:border-accent/70 hover:shadow-sm flex flex-col justify-between",
                s.flagship && "sm:col-span-2 lg:col-span-3 border-accent/40 bg-accent/[0.02]"
              )}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-foreground-subtle">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-foreground-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono">
                <span className="text-foreground-subtle">Link</span>
                <span className="text-accent group-hover:underline">
                  → {s.link}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
