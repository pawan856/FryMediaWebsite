import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "What is Answer Engine Optimization (AEO)? A plain-English guide",
    desc: "How to be chosen as the answer, not just listed as a link.",
    link: "/aeo",
  },
  {
    title: "GEO vs SEO: what actually changes in the age of AI answers",
    desc: "Where the two overlap, where they differ and what to do first.",
    link: "/geo",
  },
  {
    title: "How to check whether AI assistants mention your brand",
    desc: "A simple, repeatable way to test the questions your customers ask.",
    link: "/ai-visibility-audit",
  },
  {
    title: "Google AI Overviews: what site owners can and can’t influence",
    desc: "Clear about the signals within your control, and the ones that aren’t.",
    link: "/ai-overviews-optimization",
  },
];

export function HomeInsights() {
  return (
    <section className="relative w-full border-b border-border py-20 md:py-32">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Insights
              </span>
            </div>
            <h2 className="text-display-lg font-bold text-foreground tracking-tighter">
              Learn it before you buy it.
            </h2>
            <p className="mt-4 text-base md:text-lg text-foreground-muted leading-relaxed">
              Straight answers on SEO and AI search, from the people doing the work.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold"
            >
              <span>Browse all insights</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <span className="text-foreground-subtle">·</span>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-1.5 text-foreground-muted hover:text-foreground"
            >
              <span>AI search glossary</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <span className="text-foreground-subtle">·</span>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-foreground-muted hover:text-foreground"
            >
              <span>Free tools</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="group p-6 rounded-sm border border-border bg-background hover:border-accent/70 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs text-foreground-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-accent">
                <span>Read article</span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
