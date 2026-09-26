"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function AboutCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-40 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 50%, rgba(255,70,30,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container size="tight" className="relative z-10">
        <div className="text-center space-y-10">
          {/* Label */}
          <div
            className={cn(
              "flex items-center justify-center gap-3 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
              Let&apos;s Build
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
              Let&apos;s build what
              <br />
              comes next.
            </h2>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-lg mx-auto">
              Have a challenge, an idea, or a growth goal? Tell us where you
              are today. We&apos;ll help you figure out where to go next.
            </p>
          </div>

          {/* CTAs */}
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
              <span className="relative z-10">Start a Conversation</span>
              <ArrowUpRight
                className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 border border-border hover:border-border-hover text-foreground-muted hover:text-foreground text-base font-medium px-8 py-4 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>Explore Services</span>
              <ArrowRight
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2.5 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>See our work</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Contact footer */}
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
              London · New York · Singapore
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
