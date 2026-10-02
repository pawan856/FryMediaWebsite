import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { EditorialPageData } from "@/lib/content/architecture";
import { caseStudies } from "@/data/caseStudies";
import { getPublishedCaseStudies } from "@/lib/work/validation";

interface EditorialPageProps {
  data: EditorialPageData;
  breadcrumbs: Array<{ label: string; href?: string }>;
  ctaHref?: string;
  ctaLabel?: string;
  featured?: boolean;
}

export function EditorialPage({
  data,
  breadcrumbs,
  ctaHref = "/contact?service=something_else",
  ctaLabel = "Talk through your goals",
  featured = false,
}: EditorialPageProps) {
  const faqs = data.faqs?.length ? data.faqs : [
    { question: "How is this work scoped?", answer: `We begin with your goals, current systems and available evidence, then agree a focused scope for ${data.name}.` },
    { question: "How do you measure progress?", answer: "We agree observable signals and reporting limits before work begins. Outcomes depend on the market, implementation and systems outside any single team's control." },
  ];
  const publishedStudies = getPublishedCaseStudies(caseStudies);
  const showWorkSection = featured || breadcrumbs.some((item) => item.label === "Services" || item.label === "AI Search Visibility");

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-40" aria-hidden="true" />
        <Container size="wide" className="relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-6 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground-muted">
                <span className="h-px w-6 bg-accent" />{data.eyebrow}
              </p>
              <h1 className="max-w-5xl text-display-xl font-bold leading-[1.02] tracking-tighter text-foreground">
                {data.title}
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-foreground-muted lg:col-span-4 lg:justify-self-end">
              {data.lead}
            </p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <TrackedLink
              href={ctaHref}
              event={featured ? "audit_cta_click" : "service_cta_click"}
              className="group inline-flex min-h-12 items-center gap-2.5 bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-accent-hover hover:shadow-md hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </TrackedLink>
            <span className="max-w-md text-xs leading-relaxed text-foreground-subtle">
              {data.description}
            </span>
          </div>
        </Container>
      </section>

      {data.useCases?.length ? (
        <section className="border-b border-border py-14 md:py-20">
          <Container size="wide">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4"><p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">When this helps</p><h2 className="mt-3 text-heading-xl font-semibold text-foreground">Common starting points.</h2></div>
              <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">{data.useCases.map((useCase, index) => <li key={useCase} className="flex gap-3 border-t border-border py-4 text-sm leading-relaxed text-foreground"><span className="pt-0.5 text-[10px] font-mono text-foreground-subtle">0{index + 1}</span>{useCase}</li>)}</ul>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-b border-border py-16 md:py-24" aria-label={`${data.name} approach`}>
        <Container size="wide">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent">A connected practice</p>
              <h2 className="mt-3 text-heading-xl font-semibold text-foreground">What the work covers</h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-foreground-muted">
              Each engagement starts with the context, constraints and evidence that matter for your team.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {data.sections.map((section, index) => (
              <article key={section.id} id={section.id} className="grid gap-5 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-foreground-subtle">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-heading-lg font-semibold text-foreground">{section.title}</h2>
                </div>
                <div className="md:col-span-7">
                  <p className="max-w-3xl text-sm leading-relaxed text-foreground-muted">{section.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />{point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background-elevated/30 py-14 md:py-20">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">Working sequence</p><h2 className="mt-3 text-heading-xl font-semibold text-foreground">A clear path from question to learning.</h2></div>
            <ol className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">{[
              { title: "Understand", body: "Map the audience, systems, constraints and evidence." },
              { title: "Prioritize", body: "Agree the most useful opportunity and how to evaluate it." },
              { title: "Implement", body: "Deliver or coordinate the work with clear owners and review." },
              { title: "Learn", body: "Review what changed, document limits and set the next decision." },
            ].map((step, index) => <li key={step.title} className="border-t border-border py-4"><p className="text-[10px] font-mono uppercase tracking-widest text-accent">0{index + 1} / {step.title}</p><p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.body}</p></li>)}</ol>
          </div>
        </Container>
      </section>

      {showWorkSection ? (
        <section className="border-b border-border py-14 md:py-20">
          <Container size="wide">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">Evidence</p><h2 className="mt-3 text-heading-xl font-semibold text-foreground">Selected work</h2></div><Link href="/work" className="text-sm font-semibold text-accent underline underline-offset-4">Visit the work archive</Link></div>
            {publishedStudies.length ? <ul className="mt-8 divide-y divide-border border-y border-border">{publishedStudies.map((study) => <li key={study.slug}><Link href={`/work/${study.slug}`} className="block py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">{study.industry || "Selected work"}</p><h3 className="mt-2 text-lg font-semibold text-foreground">{study.title}</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">{study.summary}</p></Link></li>)}</ul> : <p className="mt-8 max-w-2xl border-l-2 border-border pl-5 text-sm leading-relaxed text-foreground-muted">No case studies are published yet. We only share work after details and outcomes have been reviewed; no client results are invented.</p>}
          </Container>
        </section>
      ) : null}

      {faqs.length ? (
        <section className="border-b border-border py-16 md:py-24">
          <Container size="wide">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-mono uppercase tracking-widest text-accent">Questions</p>
                <h2 className="mt-3 text-heading-xl font-semibold text-foreground">A few useful answers.</h2>
              </div>
              <div className="divide-y divide-border border-y border-border lg:col-span-8">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      {faq.question}
                      <ArrowRight className="h-4 w-4 shrink-0 text-foreground-subtle transition-transform group-open:rotate-90" aria-hidden="true" />
                    </summary>
                    <p className="max-w-3xl pt-4 text-sm leading-relaxed text-foreground-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {data.related?.length ? (
        <section className="border-b border-border py-14 md:py-20">
          <Container size="wide">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">Explore further</p>
                <h2 className="mt-3 text-heading-lg font-semibold text-foreground">Connected capabilities</h2>
              </div>
              <ul className="grid w-full gap-x-8 sm:grid-cols-2 md:max-w-2xl">
                {data.related.map((link) => (
                  <li key={link.href} className="border-b border-border">
                    <Link href={link.href} className="group flex min-h-12 items-center justify-between gap-3 text-sm text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      {link.name}
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 md:py-24">
        <Container size="wide" className="flex flex-col gap-6 border-l-2 border-accent pl-6 md:flex-row md:items-center md:justify-between md:pl-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">Next step</p>
            <h2 className="mt-2 text-heading-lg font-semibold text-foreground">Start with the question you need to answer.</h2>
          </div>
          <Link href={ctaHref} className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {ctaLabel}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </Container>
      </section>
    </>
  );
}