import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Article } from "@/content/insights/articles";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { ArticleBody } from "./ArticleBody";
import { ArticleShare } from "./ArticleShare";
import { TableOfContents } from "./TableOfContents";
import { formatArticleDate, getRelatedArticles } from "@/lib/insights/articles";

export function ArticleDetail({ article, allArticles }: { article: Article; allArticles: Article[] }) {
  const related = getRelatedArticles(article, allArticles);
  const headings = article.content.filter((block): block is Extract<typeof article.content[number], { type: "heading" }> => block.type === "heading").map(({ id, text }) => ({ id, text }));
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: article.title }]} />
    <article>
      <header className="border-b border-border pb-14 pt-10 md:pb-20">
        <Container size="tight">
          <p className="text-xs font-mono uppercase tracking-widest text-accent">{article.category}</p>
          <h1 className="mt-6 text-display-xl font-bold tracking-tighter text-foreground">{article.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">{article.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-foreground-subtle"><span>{article.author?.name || "FyrnMedia"}</span>{article.publishedAt && <span>{formatArticleDate(article.publishedAt)}</span>}{article.readingTime && <span>{article.readingTime}</span>}</div>
        </Container>
      </header>
      <Container size="tight">
        {article.coverImage && <Image src={article.coverImage.src} alt={article.coverImage.alt} width={article.coverImage.width} height={article.coverImage.height} className="mt-12 h-auto w-full" priority />}
        <div className="grid gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_14rem]"><ArticleBody blocks={article.content} /><TableOfContents headings={headings} /></div>
        <ArticleShare title={article.title} />
        <div className="border-t border-border py-12"><p className="text-xs font-mono uppercase tracking-widest text-accent">Keep the conversation going</p><Link href={article.category === "SEO" || article.category === "AI Search" ? "/contact?service=seo" : "/contact"} className="group mt-5 inline-flex items-center gap-2 text-heading-md font-semibold text-foreground transition-colors hover:text-accent">Start a Conversation <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></div>
        {related.length > 1 && <section className="border-t border-border py-12"><h2 className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">Related Insights</h2><div className="mt-8 grid gap-6 md:grid-cols-2">{related.map((item) => <Link key={item.slug} href={`/insights/${item.slug}`} className="border-b border-border pb-5 transition-colors hover:text-accent"><span className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">{item.category}</span><h3 className="mt-3 text-heading-md font-semibold">{item.title}</h3></Link>)}</div></section>}
      </Container>
    </article>
  </>;
}