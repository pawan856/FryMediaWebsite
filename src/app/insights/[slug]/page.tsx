import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/utils/seo";
import { ArticleStructuredData } from "@/components/seo/StructuredData";
import { ArticleDetail } from "@/components/insights/ArticleDetail";
import { articles, getArticle } from "@/content/insights/articles";
import { isPublishableArticle } from "@/lib/insights/articles";

export function generateStaticParams() {
  return articles.filter(isPublishableArticle).map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || !isPublishableArticle(article)) return constructMetadata({ title: "Insights — FyrnMedia", path: `/insights/${slug}`, noIndex: true });
  return constructMetadata({ title: article.seo?.title || `${article.title} — FyrnMedia`, description: article.seo?.description || article.excerpt, path: `/insights/${article.slug}` });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || !isPublishableArticle(article)) notFound();
  return <><ArticleStructuredData article={article} /><ArticleDetail article={article} allArticles={articles} /></>;
}