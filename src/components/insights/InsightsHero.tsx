import { Container } from "@/components/ui/Container";

export function InsightsHero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-36 pb-16 md:pt-48 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-subtle-glow opacity-50" aria-hidden="true" />
      <Container size="wide" className="relative">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3"><span className="h-px w-7 bg-accent" /><span className="text-xs font-mono uppercase tracking-widest text-foreground-muted">Insights</span></div>
          <h1 className="max-w-3xl text-display-2xl font-bold leading-none tracking-tighter text-foreground">Thinking beyond the <span className="text-accent">search box.</span></h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground-muted md:text-lg">Practical thinking from FyrnMedia on SEO, search, digital growth, AI discovery, technology, and strategy.</p>
        </div>
      </Container>
    </section>
  );
}