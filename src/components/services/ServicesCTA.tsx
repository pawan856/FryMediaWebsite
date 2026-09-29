"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function ServicesCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-40 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 50%, rgba(112,157,119,0.14) 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,60,46,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,60,46,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container size="tight" className="relative z-10">
        <div className="text-center space-y-10">
          {/* Eyebrow Label */}
          <div
            className={cn(
              "flex items-center justify-center gap-3 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
              Initiate Engagement
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>

          {/* Headline */}
          <div
            className={cn(
              "space-y-4 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <h2 className="text-display-xl font-bold text-foreground tracking-tighter">
              Have a growth problem
              <br />
              <span className="text-accent">to solve?</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Whether you need to audit your crawl architecture or build an authoritative
              organic search engine, we are ready to discuss your objectives.
            </p>
          </div>

          {/* Dual CTAs */}
          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-5 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <ArrowUpRight
                className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300" />
            </Link>

            <Link
              href="/services/seo"
              className="group inline-flex items-center gap-2.5 border border-border hover:border-border-hover text-foreground-muted hover:text-foreground text-base font-medium px-8 py-4 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>Explore SEO Architecture</span>
              <ArrowRight
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Direct Line */}
          <div
            className={cn(
              "pt-4 flex items-center justify-center gap-6 transition-all duration-700",
              inView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "350ms" }}
          >
            <span className="text-xs font-mono text-foreground-dim tracking-wide">
              inquiries@fyrnmedia.com
            </span>
            <span className="h-px w-4 bg-border" aria-hidden="true" />
            <span className="text-xs font-mono text-foreground-dim tracking-wide">
              Senior Partner Consultation
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
