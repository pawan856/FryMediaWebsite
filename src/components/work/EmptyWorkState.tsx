import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function EmptyWorkState({ showArchiveLink = false }: { showArchiveLink?: boolean }) {
  return (
    <div className="relative overflow-hidden border border-border bg-background-elevated/30 px-6 py-16 md:px-12 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-50" aria-hidden="true" />
      <div className="relative max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-widest text-accent">Archive in progress</p>
        <h2 className="mt-6 text-display-lg font-bold tracking-tighter text-foreground">Something worth showing is being built.</h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground-muted">
          We&apos;re preparing a selection of FyrnMedia work. Check back soon, or start a conversation about the challenge in front of you.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <TrackedLink href="/contact" event="work_cta_click" className="group inline-flex items-center gap-2.5 bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Start a Conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </TrackedLink>
          {showArchiveLink && <Link href="/work" className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">See the work archive</Link>}
        </div>
      </div>
    </div>
  );
}