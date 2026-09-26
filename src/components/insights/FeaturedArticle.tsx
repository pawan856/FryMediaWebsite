import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Article } from "@/content/insights/articles";
import { formatArticleDate } from "@/lib/insights/articles";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group grid gap-8 border-y border-border py-8 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:grid-cols-2 md:gap-12 md:py-12"
    >
      {article.coverImage ? (
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.alt}
          width={article.coverImage.width}
          height={article.coverImage.height}
          className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          priority
        />
      ) : (
        <div className="aspect-[16/10] bg-grid-subtle" aria-hidden="true" />
      )}
      <div className="flex flex-col justify-center">
        <span className="text-xs font-mono uppercase tracking-widest text-accent">Featured · {article.category}</span>
        <h2 className="mt-5 text-display-lg font-bold tracking-tighter text-foreground">{article.title}</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted">{article.excerpt}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-foreground-subtle">
          <span>{article.author?.name || "FyrnMedia"}</span>
          {article.publishedAt && <span>{formatArticleDate(article.publishedAt)}</span>}
          {article.readingTime && <span>{article.readingTime}</span>}
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">Read the insight <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></span>
      </div>
    </Link>
  );
}