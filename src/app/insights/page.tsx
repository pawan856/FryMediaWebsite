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
    <section className="py-16 md:py-28"><Container size="wide">
      {publishedArticles.length ? <div><FeaturedArticle article={publishedArticles[0]} />{publishedArticles.length > 1 && <div className="pt-16"><p className="mb-6 text-xs font-mono uppercase tracking-widest text-foreground-subtle">More thinking</p><ArticleList articles={publishedArticles.slice(1)} /></div>}</div> : <EmptyInsightsState />}
    </Container></section>
  </>;
}