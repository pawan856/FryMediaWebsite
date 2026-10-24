import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function QuickAnswer() {
  return (
    <section className="relative w-full border-b border-border bg-background-elevated/40 py-16 md:py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="block w-6 h-px bg-accent" />
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-muted">
                Quick Answer
              </span>
            </div>
            <h2 className="text-display-md font-bold tracking-tight text-foreground">
              What is Fyrn Media?
            </h2>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed">
              Fyrn Media is a digital growth partner with teams in London, New York and Singapore. We help ambitious brands get found and chosen across search engines and AI answer systems through AI search visibility, SEO, content, performance marketing, AI automation, web development and analytics. Our aim is simple: make AI and digital useful in everyday life.
            </p>
          </div>

          <div className="lg:col-span-5 bg-background border border-border rounded-sm p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                At a glance
              </h3>
              <span className="text-[11px] font-mono text-foreground-subtle">
                Reviewed: Oct 2026
              </span>
            </div>
            
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs font-mono text-foreground-subtle uppercase tracking-wider">What we do</dt>
                <dd className="mt-1 text-foreground font-medium">AI search visibility, SEO, content, paid media, automation, web builds, analytics</dd>
              </div>
              <div className="border-t border-border/60 pt-3">
                <dt className="text-xs font-mono text-foreground-subtle uppercase tracking-wider">Who it’s for</dt>
                <dd className="mt-1 text-foreground">Ambitious brands that want more qualified enquiries and clearer discovery</dd>
              </div>
              <div className="border-t border-border/60 pt-3">
                <dt className="text-xs font-mono text-foreground-subtle uppercase tracking-wider">Where we work</dt>
                <dd className="mt-1 text-foreground">London · New York · Singapore</dd>
              </div>
              <div className="border-t border-border/60 pt-3 flex items-center justify-between">
                <div>
                  <dt className="text-xs font-mono text-foreground-subtle uppercase tracking-wider">Best first step</dt>
                  <dd className="mt-1 text-foreground font-medium">A free AI Visibility Audit</dd>
                </div>
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-accent hover:text-accent-hover font-semibold"
                >
                  <span>Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
