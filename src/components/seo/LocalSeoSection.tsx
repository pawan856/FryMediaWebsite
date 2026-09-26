"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils/cn";
import { MapPin, Building, Star, Search } from "lucide-react";

const localVectors = [
  {
    icon: <Building className="w-5 h-5 text-accent" />,
    title: "Google Business Profile Architecture",
    description: "Rigorous verification, category taxonomy selection, and attribute completeness to trigger map-pack priority.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    title: "Location-Specific Landing Infrastructure",
    description: "Sub-second geo-targeted pages with authentic local schema, geographic coordinates, and localized proof points.",
  },
  {
    icon: <Star className="w-5 h-5 text-accent" />,
    title: "Reputation & Review Signals",
    description: "Structured workflows to capture authentic customer reviews, structured review schema, and local brand sentiment.",
  },
  {
    icon: <Search className="w-5 h-5 text-accent" />,
    title: "Local Intent & Prominence Calibration",
    description: "Aligning NAP (Name, Address, Phone) consistency across verified regional directories and business registries.",
  },
];

export function LocalSeoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 border-b border-border overflow-hidden"
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
                Geographic Presence
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Capture high-intent
              <br />
              <span className="text-accent">local search demand.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base text-foreground-muted leading-relaxed">
              When buyers search with geographic intent (&ldquo;near me&rdquo; or city-specific terms),
              search engines prioritize proximity, prominence, and verified local relevance.
              We build the infrastructure that captures local search intent.
            </p>
          </div>
        </div>

        {/* 4 Local Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localVectors.map((item, idx) => (
            <div
              key={item.title}
              className={cn(
                "p-6 border border-border bg-background-elevated/40 rounded-sm space-y-3 hover:border-accent/40 transition-colors group",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
