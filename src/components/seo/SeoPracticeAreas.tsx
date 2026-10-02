import { Container } from "@/components/ui/Container";

const practiceAreas = [
  { id: "technical-seo", title: "Technical SEO", description: "Crawlability, rendering, indexation, performance and migration foundations." },
  { id: "semantic-seo", title: "On-page and semantic SEO", description: "Page intent, entity clarity, internal relationships and structured information." },
  { id: "topical-authority", title: "Content and topical authority", description: "Useful topic coverage organized around audience needs and subject expertise." },
  { id: "digital-pr", title: "Link building and digital PR", description: "Relevant editorial references earned through credible, useful contribution." },
  { id: "local-seo", title: "Local SEO", description: "Location signals, local pages and business information consistency." },
  { id: "ecommerce-seo", title: "E-commerce SEO", description: "Product and category architecture, faceted navigation and catalog discovery." },
  { id: "saas-seo", title: "SaaS and B2B SEO", description: "Technical product content and discovery mapped to complex buying journeys." },
  { id: "international-seo", title: "International SEO", description: "Market, language and URL structures that make regional intent explicit." },
];

export function SeoPracticeAreas() {
  return <section className="border-b border-border py-16 md:py-24" aria-labelledby="seo-practice-heading">
    <Container size="wide">
      <div className="mb-10 max-w-2xl"><p className="text-xs font-mono uppercase tracking-widest text-accent">SEO scope</p><h2 id="seo-practice-heading" className="mt-3 text-heading-xl font-semibold text-foreground">One discipline, across the full search journey.</h2><p className="mt-4 text-sm leading-relaxed text-foreground-muted">The work depends on your site, market and goals. These are the connected areas an engagement can cover.</p></div>
      <div className="grid gap-x-10 md:grid-cols-2">
        {practiceAreas.map((area, index) => <article key={area.id} id={area.id} className="scroll-mt-28 border-t border-border py-5"><div className="flex gap-4"><span className="pt-1 text-[10px] font-mono text-foreground-subtle">0{index + 1}</span><div><h3 className="text-base font-semibold text-foreground">{area.title}</h3><p className="mt-2 text-sm leading-relaxed text-foreground-muted">{area.description}</p></div></div></article>)}
      </div>
    </Container>
  </section>;
}