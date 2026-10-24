import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const signals = [
  {
    title: "Clear entities",
    desc: "Consistent, well-structured information that tells machines exactly who you are, what you offer and where you operate.",
  },
  {
    title: "Credible sources",
    desc: "Trusted mentions, citations and profiles that back up what your own site says.",
  },
  {
    title: "Useful answers",
    desc: "Content that answers real questions directly, in a format people and AI can both use.",
  },
];

const included = [
  {
    title: "Answer Engine Optimization",
    desc: "Structure content so it can be chosen as the answer",
    link: "/aeo",
  },
  {
    title: "Generative Engine Optimization",
    desc: "Improve how AI systems understand and reference you",
    link: "/geo",
  },
  {
    title: "Google AI Overviews",
    desc: "Earn visibility in Google’s AI-generated summaries",
    link: "/ai-overviews-optimization",
  },
  {
    title: "Entity SEO",
    desc: "Define your brand, people and offerings clearly across the web",
    link: "/entity-seo",
  },
  {
    title: "AI Citation & Digital PR",
    desc: "Build the credible mentions AI systems rely on",
    link: "/ai-citation-building",
  },
  {
    title: "AI Visibility Audit",
    desc: "See where you stand today",
    link: "/ai-visibility-audit",
  },
];

export function AiSearchFeature() {
  return (
    <section className="relative w-full border-b border-border bg-background-elevated/35 py-20 md:py-32">
      <Container size="wide">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            <span className="h-px w-6 bg-accent" />
            FLAGSHIP SERVICE
          </p>
          <h2 className="mt-4 text-display-lg font-bold tracking-tighter text-foreground">
            AI search visibility: be understood wherever people search.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground-muted">
            People now ask questions in Google, in AI Overviews and in AI assistants, and often get one synthesized answer instead of ten links. Whether your brand appears in that answer depends on how clearly your website, your entities and your credible sources explain who you are and what you do.
          </p>
          <p className="mt-2 text-base md:text-lg font-semibold text-foreground">
            We build that foundation.
          </p>
        </div>

        {/* Three signals we work on */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-8">
            Three signals we work on
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {signals.map((signal) => (
              <div key={signal.title} className="border border-border p-6 rounded-sm bg-background">
                <h4 className="text-base font-semibold text-foreground">
                  {signal.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {signal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-6">
            What’s included
          </h3>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="group border border-border p-4 rounded-sm bg-background hover:border-accent/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-foreground-subtle group-hover:text-accent transition-colors shrink-0" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                    {item.desc}
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-mono text-accent">
                  → {item.link}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer & Actions */}
        <div className="mt-12 p-6 border border-border bg-background rounded-sm">
          <p className="text-sm text-foreground-muted leading-relaxed">
            <strong className="text-foreground">What we won’t promise:</strong> guaranteed placements or control over what any AI says.{" "}
            <strong className="text-foreground">What we will do:</strong> clear work, observable signals and reporting you can verify.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <TrackedLink
              href="/services/ai-search-visibility"
              event="ai_search_visibility_click"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              <span>Explore AI Search Visibility</span>
              <ArrowUpRight className="h-4 w-4" />
            </TrackedLink>
            <Link
              href="/audit"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground-muted hover:text-foreground transition-colors px-4 py-3"
            >
              <span>Get the free audit</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
