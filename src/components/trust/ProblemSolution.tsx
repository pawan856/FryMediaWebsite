import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const problems = [
  {
    quote: "We get traffic, but not enough enquiries.",
    service: "Search visibility and conversion.",
    solution:
      "We connect search intent, page experience and conversion paths so visits turn into conversations.",
    link: "/services/seo",
  },
  {
    quote: "Our website is hard to find.",
    service: "Technical SEO.",
    solution:
      "We fix the crawl, indexing and site-structure issues that stop search engines from understanding your pages.",
    link: "/services/seo#technical-seo",
  },
  {
    quote: "Our content is inconsistent.",
    service: "Content strategy.",
    solution:
      "We build structured, genuinely useful content around the questions your customers really ask.",
    link: "/services/content-marketing",
  },
  {
    quote: "We don’t know how AI changes discovery.",
    service: "AI search visibility.",
    solution:
      "We make your brand clearer to AI answer systems through strong entities, credible sources and useful answers, without pretending anyone can control a model.",
    link: "/services/ai-search-visibility",
  },
];

export function ProblemSolution() {
  return (
    <section className="border-b border-border py-20 md:py-32">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-widest text-accent">
              Problems We Solve
            </p>
            <h2 className="mt-4 text-display-lg font-bold tracking-tighter text-foreground">
              Does this sound familiar?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-foreground-muted">
              Most conversations with us start with a problem, not a service name. These are the four we hear most.
            </p>
            <div className="mt-8 pt-6 border-t border-border">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Not sure which one is you? Start a conversation</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="divide-y divide-border border-y border-border lg:col-span-7">
            {problems.map((p) => (
              <div key={p.quote} className="py-7 group">
                <p className="text-lg font-semibold text-foreground">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <p className="mt-2 text-xs font-mono uppercase tracking-widest text-accent font-medium">
                  {p.service}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {p.solution}
                </p>
                <div className="mt-3">
                  <Link
                    href={p.link}
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-foreground-subtle hover:text-accent transition-colors"
                  >
                    <span>Link → {p.link}</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
