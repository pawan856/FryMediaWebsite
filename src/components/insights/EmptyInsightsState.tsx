import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function EmptyInsightsState() {
  return (
    <div className="relative overflow-hidden border border-border bg-background-elevated/30 px-6 py-16 md:px-12 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-50" aria-hidden="true" />
      <div className="relative max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-widest text-accent">Editorial desk</p>
        <h2 className="mt-6 text-display-lg font-bold tracking-tighter text-foreground">Good thinking takes time.</h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground-muted">We&apos;re preparing the first collection of FyrnMedia insights. The archive will open when there is something worth reading.</p>
        <TrackedLink href="/contact" event="insight_cta_click" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Discuss Your Search Challenge <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></TrackedLink>
      </div>
    </div>
  );
}