"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    index: "01",
    title: "Strategy",
    description:
      "Every engagement begins with rigorous discovery. We map your competitive landscape, search demand, and audience intent before a single line of code is written.",
    link: "/about",
    linkLabel: "Our Approach",
  },
  {
    index: "02",
    title: "Visibility",
    description:
      "We build the technical and content infrastructure that earns sustained organic positions — semantic entity graphs, crawl-optimized architecture, and intent-matched content.",
    link: "/services/seo",
    linkLabel: "SEO Engineering",
  },
  {
    index: "03",
    title: "Experience",
    description:
      "Search engines reward fast, accessible, well-structured digital experiences. We engineer websites that satisfy both algorithms and the humans behind the queries.",
    link: "/services",
    linkLabel: "Web Systems",
  },
  {
    index: "04",
    title: "Growth",
    description:
      "Visibility without conversion is noise. We design growth systems that connect organic traffic to real business outcomes — qualified leads, revenue, market share.",
    link: "/services",
    linkLabel: "Growth Model",
  },
];

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-36 overflow-hidden"
    >
      {/* Background accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Editorial header */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                What We Do
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Digital isn&apos;t the
              <br />
              destination.{" "}
              <span className="text-foreground-muted font-normal">Growth is.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 xl:col-span-5 xl:col-start-8 self-end">
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-md">
              We combine strategy, SEO, technology, and data into a unified
              growth system — built around what your business actually needs to
              win online.
            </p>
          </div>
        </div>

        {/* Capability blocks — editorial horizontal rule layout */}
        <div className="space-y-0 divide-y divide-border">
          {capabilities.map((cap, i) => (
            <CapabilityRow key={cap.index} item={cap} index={i} inView={inView} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function CapabilityRow({
  item,
  index,
  inView,
}: {
  item: (typeof capabilities)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={cn(
        "group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 transition-all duration-700 cursor-default",
        "hover:bg-background-elevated/30",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Index */}
      <div className="md:col-span-1 flex items-start pt-1">
        <span className="text-xs font-mono text-foreground-subtle group-hover:text-accent transition-colors duration-300">
          {item.index}
        </span>
      </div>

      {/* Title */}
      <div className="md:col-span-3">
        <h3 className="text-heading-xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
          {item.title}
        </h3>
      </div>

      {/* Description */}
      <div className="md:col-span-6">
        <p className="text-base text-foreground-muted leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Link */}
      <div className="md:col-span-2 flex items-center justify-start md:justify-end">
        <Link
          href={item.link}
          className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-foreground-subtle hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          <span>{item.linkLabel}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
