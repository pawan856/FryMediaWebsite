import { siteConfig } from "@/lib/constants/site";
import { CaseStudy } from "@/data/caseStudies";
import { Article } from "@/content/insights/articles";
import { IndustryEvent } from "@/data/events";

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
      {/* Block 1: Organization + WebSite + WebPage */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteConfig.url}/#org`,
              name: "Fyrn Media",
              alternateName: "FyrnMedia",
              url: siteConfig.url,
              email: siteConfig.contactEmail,
              slogan: "AI for Everyday Life",
              description:
                "Fyrn Media helps ambitious brands get found across search engines and AI answer systems through AI search visibility, SEO, content, web development and analytics.",
              knowsAbout: [
                "AI search visibility",
                "Answer engine optimization",
                "Generative engine optimization",
                "Technical SEO",
                "Entity SEO",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${siteConfig.url}/#website`,
              url: siteConfig.url,
              name: "Fyrn Media",
              publisher: { "@id": `${siteConfig.url}/#org` },
            },
            {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/#webpage`,
              url: siteConfig.url,
              name: "Fyrn Media | AI Search Visibility, SEO & Web Growth Agency",
              isPartOf: { "@id": `${siteConfig.url}/#website` },
              about: { "@id": `${siteConfig.url}/#org` },
              dateModified: "2026-10-18",
            },
          ],
        }}
      />
      {/* Block 2: FAQPage */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does Fyrn Media do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Fyrn Media is a digital growth partner that helps brands get found and chosen in search and AI answers. Our seven services cover AI search visibility, SEO, content and social, performance marketing, AI automation, web development, and analytics and strategy, delivered as one connected plan.",
              },
            },
            {
              "@type": "Question",
              name: "What is AI search visibility?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI search visibility is how clearly search engines and AI assistants can find, understand and cite your brand when people ask questions. It combines answer engine optimization (AEO), generative engine optimization (GEO), entity SEO and credible third-party sources, on top of sound technical SEO.",
              },
            },
            {
              "@type": "Question",
              name: "What\'s the difference between SEO and GEO?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO helps your pages rank in traditional search results. GEO helps your brand be understood and referenced in AI-generated answers. They share the same foundations (technical health, useful content, trustworthy sources), so we treat them as one program rather than two.",
              },
            },
            {
              "@type": "Question",
              name: "Can you guarantee rankings or AI citations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, and be cautious of anyone who does. Search engines and AI systems make their own decisions. We improve the signals you can control, such as technical health, content quality, entity clarity and credibility, and we report on observable results against goals agreed up front.",
              },
            },
            {
              "@type": "Question",
              name: "Who is Fyrn Media best suited for?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ambitious businesses that already have a website and want more qualified enquiries, better visibility or clarity on how AI is changing discovery. That is typically B2B and SaaS companies, e-commerce brands and service businesses.",
              },
            },
            {
              "@type": "Question",
              name: "How does the free AI Visibility Audit work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Share your website and what you want to improve. We review how search engines and AI assistants currently surface your brand and send you a plain-English summary of strengths, gaps and next steps. There is no obligation to continue.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to see results?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Some technical fixes show up within weeks. Content, authority and AI-answer visibility usually build over several months. We set realistic milestones during discovery and report progress against them, so you\'re never guessing.",
              },
            },
            {
              "@type": "Question",
              name: "How do we get started?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Request the free audit or use Let\'s Talk. We\'ll learn about your goals, share what we see and recommend a sensible first step, which may be a single service rather than a full program. We have teams in London, New York and Singapore.",
              },
            },
          ],
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

export function EventStructuredData({ event }: { event: IndustryEvent }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Event",
        name: event.name,
        description: event.description,
        startDate: event.date || `${event.year}-01-01`,
        location: {
          "@type": "Place",
          name: event.location,
          address: {
            "@type": "PostalAddress",
            addressLocality: event.location,
          },
        },
        image: event.photos.map((p) => `${siteConfig.url}${p.src}`),
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        organizer: event.organizer
          ? {
              "@type": "Organization",
              name: event.organizer,
            }
          : undefined,
      }}
    />
  );
}