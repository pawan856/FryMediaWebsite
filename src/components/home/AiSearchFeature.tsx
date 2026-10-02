import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const capabilities = ["Answer Engine Optimization", "Generative Engine Optimization", "AI Overviews", "Entity SEO", "Credible citations"];

export function AiSearchFeature() {
  return <section className="border-b border-border bg-background-elevated/35 py-16 md:py-24">
    <Container size="wide" className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-7">
        <p className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-accent"><span className="h-px w-6 bg-accent" />Flagship / AI Search Visibility</p>
        <h2 className="mt-5 max-w-4xl text-display-lg font-bold tracking-tighter text-foreground">Be understood wherever people search.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted">Connect technical foundations, useful answers, clear entities and credible sources into a system for discovery across search engines and AI answer experiences. No promised placements; just clear work and observable signals.</p>
      </div>
      <div className="lg:col-span-5 lg:justify-self-end">
        <ul className="grid gap-x-6 sm:grid-cols-2">
          {capabilities.map((capability) => <li key={capability} className="border-t border-border py-3 text-sm text-foreground-muted">{capability}</li>)}
        </ul>
        <TrackedLink href="/services/ai-search-visibility" event="ai_search_visibility_click" className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Explore AI Search Visibility <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></TrackedLink>
      </div>
    </Container>
  </section>;
}