import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { EmptyInsightsState } from "@/components/insights/EmptyInsightsState";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { FeaturedArticle } from "@/components/insights/FeaturedArticle";
import { ArticleList } from "@/components/insights/ArticleList";
import { articles } from "@/content/insights/articles";
import { getPublishedArticles } from "@/lib/insights/articles";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Insights — FyrnMedia",
  description: "Practical thinking from FyrnMedia on SEO, search, digital growth, AI discovery, technology, and strategy.",
  path: "/insights",
});

export default function InsightsPage() {
  const publishedArticles = getPublishedArticles(articles);
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
    <InsightsHero />
    <nav aria-label="Insight categories" className="border-b border-border">
      <Container size="wide" className="flex flex-wrap items-center gap-x-7 gap-y-3 py-4 text-xs font-mono uppercase tracking-widest text-foreground-muted">
        <Link href="#guides" className="min-h-9 inline-flex items-center hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Guides</Link>
        <Link href="#research" className="min-h-9 inline-flex items-center hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Research & Benchmarks</Link>
        <Link href="/glossary" className="min-h-9 inline-flex items-center hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Glossary</Link>
      </Container>
    </nav>
    <section className="py-16 md:py-28"><Container size="wide">
      {publishedArticles.length ? <div><FeaturedArticle article={publishedArticles[0]} />{publishedArticles.length > 1 && <div className="pt-16"><p className="mb-6 text-xs font-mono uppercase tracking-widest text-foreground-subtle">More thinking</p><ArticleList articles={publishedArticles.slice(1)} /></div>}</div> : <EmptyInsightsState />}
      {!publishedArticles.length && <div className="mt-12 grid gap-x-10 md:grid-cols-2"><section id="guides" className="scroll-mt-28 border-t border-border py-5"><h2 className="text-base font-semibold text-foreground">Guides</h2><p className="mt-2 text-sm leading-relaxed text-foreground-muted">Guides will appear after editorial review. No draft articles are published as filler.</p></section><section id="research" className="scroll-mt-28 border-t border-border py-5"><h2 className="text-base font-semibold text-foreground">Research & benchmarks</h2><p className="mt-2 text-sm leading-relaxed text-foreground-muted">Original research and benchmark findings will be published when their methods and evidence are ready to share.</p></section></div>}
    </Container></section>
  </>;
}