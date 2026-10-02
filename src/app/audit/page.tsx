import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/utils/seo";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export const metadata: Metadata = constructMetadata({
  title: "Free AI Visibility Audit — FyrnMedia",
  description: "Request a structured review of your brand's search visibility, AI mentions, entity signals, citations and technical discoverability.",
  path: "/audit",
});

const auditAreas = [
  { title: "Search visibility", body: "A review of priority queries, indexed pages and relevant organic discovery signals." },
  { title: "AI mentions and citations", body: "Observed references and citation context across an agreed set of AI search questions." },
  { title: "Entity signals", body: "Consistency of important brand, product and expertise information across key sources." },
  { title: "Technical discoverability", body: "Crawl access, page structure, structured data and canonical signals that support clear discovery." },
  { title: "Content signals", body: "How well useful pages answer audience questions with clear context and evidence." },
  { title: "Prioritized next steps", body: "A practical set of recommendations with evidence, scope and measurement considerations." },
];

export default function AuditPage() {
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Free AI Visibility Audit" }]} />
    <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-40" aria-hidden="true" />
      <Container size="wide" className="relative">
        <p className="mb-6 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground-muted"><span className="h-px w-6 bg-accent" />Free AI Visibility Audit</p>
        <h1 className="max-w-5xl text-display-xl font-bold leading-[1.02] tracking-tighter text-foreground">How visible is your brand in AI search?</h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground-muted">Request a grounded review of how your brand and expertise appear across search and AI answer experiences. You receive observations, context and prioritized next steps, not an invented score or promise of placement.</p>
        <TrackedLink href="#request-audit" event="audit_cta_click" className="group mt-8 inline-flex min-h-12 items-center gap-2.5 bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-accent-hover hover:shadow-md hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">Request your audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></TrackedLink>
      </Container>
    </section>
    <section className="border-b border-border py-16 md:py-24">
      <Container size="wide">
        <div className="mb-10 max-w-2xl"><p className="text-xs font-mono uppercase tracking-widest text-accent">What we check</p><h2 className="mt-3 text-heading-xl font-semibold text-foreground">A useful baseline, not a black-box score.</h2></div>
        <div className="grid gap-x-12 md:grid-cols-2">
          {auditAreas.map((area, index) => <article key={area.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border py-6"><span className="pt-1 text-xs font-mono text-foreground-subtle">0{index + 1}</span><div><h3 className="text-base font-semibold text-foreground">{area.title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted">{area.body}</p></div></article>)}
        </div>
      </Container>
    </section>
    <section className="border-b border-border bg-background-elevated/35 py-16 md:py-20">
      <Container size="wide" className="grid gap-8 md:grid-cols-3">
        {[{ title: "Observed signals", body: "Priority queries and sources are agreed and documented." }, { title: "Clear limitations", body: "Search systems change; we explain what the review can and cannot establish." }, { title: "Actionable priorities", body: "Recommendations connect the finding to a next step and an owner." }].map((item) => <div key={item.title} className="border-t border-border pt-5"><h2 className="text-base font-semibold text-foreground">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p></div>)}
      </Container>
    </section>
    <section id="request-audit" className="scroll-mt-24 py-16 md:py-24">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="text-xs font-mono uppercase tracking-widest text-accent">Request the review</p><h2 className="mt-3 text-heading-xl font-semibold text-foreground">Start with your website and priority.</h2><p className="mt-4 text-sm leading-relaxed text-foreground-muted">Share enough context for us to understand your market and what you need to learn. The team will review the request before confirming scope.</p></div>
          <div className="lg:col-span-8"><ContactForm page="/audit" initialService="ai_visibility_audit" submitLabel="Request my AI visibility audit" /></div>
        </div>
      </Container>
    </section>
    <section className="border-t border-border py-14 md:py-20">
      <Container size="wide" className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4"><p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">FAQ</p><h2 className="mt-3 text-heading-xl font-semibold text-foreground">Before you request the review.</h2></div>
        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {[
            { question: "Is AI visibility inclusion guaranteed?", answer: "No. Search and answer systems choose their own results. The audit documents observed signals and practical improvements, not guaranteed inclusion." },
            { question: "What information should I share?", answer: "Your website, market and the audiences or questions you care about are enough to begin. Do not submit passwords or confidential customer information." },
            { question: "Will I receive a numerical AI visibility score?", answer: "Only if a score can be supported by a transparent, repeatable method. This audit does not fabricate scores or imply access to private model data." },
          ].map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer text-base font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{faq.question}</summary><p className="max-w-3xl pt-4 text-sm leading-relaxed text-foreground-muted">{faq.answer}</p></details>)}
        </div>
      </Container>
    </section>
  </>;
}