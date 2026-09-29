"use client";

import React, { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const discoveryEras = [
  {
    era: "Directory & Link",
    period: "2000s",
    note: "PageRank, backlink authority, keyword density",
    status: "past",
  },
  {
    era: "Mobile-First Search",
    period: "2010s",
    note: "Local intent, voice queries, featured snippets",
    status: "past",
  },
  {
    era: "Social Discovery",
    period: "2015–2022",
    note: "Algorithmic feeds, social proof, community signals",
    status: "past",
  },
  {
    era: "AI-Assisted Discovery",
    period: "2023–Now",
    note: "LLM citations, generative answers, GEO, SGE",
    status: "current",
  },
  {
    era: "Generative Search",
    period: "Emerging",
    note: "Entity authority, structured knowledge, answer-first indexing",
    status: "future",
  },
];

export function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { threshold: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-b border-border py-24 md:py-40 overflow-hidden"
    >
      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(112,157,119,0.13) 0%, transparent 65%)",
        }}
      />

      <Container size="wide">
        {/* Header */}
        <div
          className={cn(
            "mb-16 md:mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-accent flex-shrink-0" />
            <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
              Looking Ahead
            </span>
          </div>
          <h2 className="text-display-lg font-bold text-foreground tracking-tighter max-w-2xl">
            The way people discover
            <br />
            brands is changing.
          </h2>
        </div>

        {/* Discovery evolution timeline */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          {/* Left: Context statement */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed">
              Every decade, the dominant mechanism for discovery shifts. Brands
              that adapt early earn durable advantage. Those that lag pay to
              catch up — if they can.
            </p>
            <p className="text-base text-foreground-muted leading-relaxed">
              FyrnMedia&apos;s focus is on building the kind of digital authority
              and technical infrastructure that remains relevant as the discovery
              landscape continues to evolve. We want to help our clients stay
              visible — not just today, but through whatever comes next.
            </p>
            {/* Forward-looking caveat */}
            <div className="border border-border/50 bg-background-elevated/30 rounded-sm p-4">
              <p className="text-xs text-foreground-subtle leading-relaxed font-mono">
                This is our direction of travel — a vision we&apos;re actively
                building toward, not a solved problem.
              </p>
            </div>
          </div>

          {/* Right: Era timeline */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="relative">
              {/* Vertical connector line */}
              <div
                className="absolute left-[27px] top-6 bottom-6 w-px transition-all duration-1000"
                style={{
                  background: inView
                    ? "linear-gradient(to bottom, rgba(112,157,119,0.7), rgba(24,60,46,0.08) 80%, transparent)"
                    : "transparent",
                  transitionDelay: "200ms",
                }}
                aria-hidden="true"
              />

              <div className="space-y-0">
                {discoveryEras.map((era, i) => (
                  <div
                    key={era.era}
                    className={cn(
                      "relative flex items-start gap-6 py-5 group transition-all duration-700",
                      inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                    )}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    {/* Node */}
                    <div className="relative z-10 shrink-0 mt-1">
                      {era.status === "current" ? (
                        <span className="relative flex h-[14px] w-[14px]">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                          <span className="relative inline-flex rounded-full h-[14px] w-[14px] bg-accent" />
                        </span>
                      ) : era.status === "future" ? (
                        <span className="flex h-[14px] w-[14px] rounded-full border-2 border-foreground-dim/40 bg-transparent" />
                      ) : (
                        <span className="flex h-[14px] w-[14px] rounded-full bg-foreground-dim/30" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        "flex-1 border-b border-border/40 pb-5 last:border-b-0",
                        era.status === "current" && "opacity-100",
                        era.status === "future" && "opacity-70",
                        era.status === "past" && "opacity-50"
                      )}
                    >
                      <div className="flex items-baseline justify-between gap-4 flex-wrap">
                        <h3
                          className={cn(
                            "text-base font-semibold tracking-tight",
                            era.status === "current" ? "text-accent" : "text-foreground"
                          )}
                        >
                          {era.era}
                        </h3>
                        <span
                          className={cn(
                            "text-[10px] font-mono tracking-widest uppercase shrink-0",
                            era.status === "current"
                              ? "text-accent"
                              : era.status === "future"
                              ? "text-foreground-muted"
                              : "text-foreground-subtle"
                          )}
                        >
                          {era.period}
                          {era.status === "current" && (
                            <span className="ml-2 text-accent">← Now</span>
                          )}
                        </span>
                      </div>
                      <p className="text-sm text-foreground-subtle mt-1 leading-snug">{era.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
