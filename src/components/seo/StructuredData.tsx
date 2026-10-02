import { siteConfig } from "@/lib/constants/site";
import { CaseStudy } from "@/data/caseStudies";
import { Article } from "@/content/insights/articles";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteStructuredData() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          email: siteConfig.contactEmail,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
        }}
      />
    </>
  );
}

export function SeoServiceStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Search Engine Optimization",
        serviceType: "Technical SEO and organic search strategy",
        description:
          "Technical crawl architecture, semantic search strategy, and organic visibility engineering from FyrnMedia.",
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: "Worldwide",
        url: `${siteConfig.url}/services/seo`,
      }}
    />
  );
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
  }));

  return (
    <nav aria-label="Breadcrumb" className="relative z-10 w-full pt-28 md:pt-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-foreground-subtle">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-foreground focus-visible:text-foreground">
                  {item.label}
                </a>
              ) : (
                <span aria-current="page" className="text-foreground-muted">{item.label}</span>
              )}
              {index < items.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement,
        }}
      />
    </nav>
  );
}

export function CaseStudyStructuredData({ study }: { study: CaseStudy }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: study.title,
        description: study.summary,
        url: `${siteConfig.url}/work/${study.slug}`,
        ...(study.publishedAt ? { datePublished: study.publishedAt } : {}),
        ...(study.heroImage ? { image: `${siteConfig.url}${study.heroImage.src}` } : {}),
        creator: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      }}
    />
  );
}

export function ArticleStructuredData({ article }: { article: Article }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        url: `${siteConfig.url}/insights/${article.slug}`,
        datePublished: article.publishedAt,
        ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
        author: { "@type": "Organization", name: article.author?.name || siteConfig.name },
        publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        ...(article.coverImage ? { image: `${siteConfig.url}${article.coverImage.src}` } : {}),
      }}
    />
  );
}

export function GeoServiceStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Search / Generative Engine Optimization",
        serviceType: "Emerging AI-assisted discovery strategy",
        description: "An emerging FyrnMedia capability focused on entity clarity, useful source material, and structured digital signals across changing discovery environments.",
        provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        url: `${siteConfig.url}/geo`,
      }}
    />
  );
}

export function EditorialServiceStructuredData({ name, description, path }: { name: string; description: string; path: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        areaServed: "Worldwide",
        url: `${siteConfig.url}${path}`,
      }}
    />
  );
}