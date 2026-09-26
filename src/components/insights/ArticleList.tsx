import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Article } from "@/content/insights/articles";
import { formatArticleDate } from "@/lib/insights/articles";

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="space-y-0">
      {articles.map((article, index) => (
        <Link key={article.slug} href={`/insights/${article.slug}`} className="group grid gap-4 border-b border-border py-8 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:grid-cols-12 md:gap-8">
          <span className="text-xs font-mono text-foreground-subtle md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
          <div className="md:col-span-8"><span className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">{article.category}</span><h2 className="mt-3 text-heading-xl font-semibold text-foreground group-hover:text-accent">{article.title}</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted">{article.excerpt}</p></div>
          <div className="flex items-start justify-between gap-4 text-xs font-mono uppercase tracking-widest text-foreground-subtle md:col-span-3 md:justify-end"><span>{article.publishedAt ? formatArticleDate(article.publishedAt) : ""}{article.readingTime ? ` · ${article.readingTime}` : ""}</span><ArrowUpRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></div>
        </Link>
      ))}
    </div>
  );
}