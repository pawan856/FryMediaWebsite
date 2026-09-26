import { Article } from "@/content/insights/articles";

export function isPublishableArticle(article: Article) {
  return Boolean(
    article.status === "published" &&
      article.slug.trim() &&
      article.title.trim() &&
      article.excerpt.trim() &&
      article.publishedAt
  );
}

export function getPublishedArticles(source: Article[]) {
  return source.filter(isPublishableArticle).sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

export function formatArticleDate(date?: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date));
}

export function getRelatedArticles(article: Article, source: Article[]) {
  return getPublishedArticles(source).filter((candidate) => candidate.slug !== article.slug && candidate.category === article.category).slice(0, 3);
}