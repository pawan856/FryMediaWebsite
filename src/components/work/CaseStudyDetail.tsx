import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { MetricHighlight } from "./MetricHighlight";

const storySections = [
  ["01", "The Challenge", "challenge"],
  ["02", "The Insight", "insight"],
  ["03", "The Strategy", "strategy"],
  ["04", "The Execution", "execution"],
  ["05", "The Outcome", "outcome"],
  ["06", "The Learning", "learning"],
] as const;

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const metadata = [study.industry, study.services?.join(" / "), study.publishedAt?.slice(0, 4)].filter(Boolean);
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: study.title }]} />
      <section className="border-b border-border pb-16 pt-10 md:pb-24">
        <Container size="wide">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">
            {metadata.map((item) => <span key={item}>{item}</span>)}
          </div>
          <h1 className="mt-8 max-w-4xl text-display-xl font-bold tracking-tighter text-foreground">{study.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">{study.summary}</p>
        </Container>
      </section>
      <Container size="wide">
        {study.heroImage && <Image src={study.heroImage.src} alt={study.heroImage.alt} width={study.heroImage.width} height={study.heroImage.height} className="mt-12 aspect-[16/8] w-full object-cover" priority />}
        <div className="grid gap-16 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-3"><p className="text-xs font-mono uppercase tracking-widest text-accent">Project narrative</p></div>
          <div className="space-y-14 lg:col-span-8 lg:col-start-5">
            {storySections.map(([number, label, key]) => {
              const value = study[key];
              return value ? <section key={key}><p className="text-xs font-mono uppercase tracking-widest text-accent">{number} — {label}</p><p className="mt-4 text-lg leading-relaxed text-foreground-muted">{value}</p></section> : null;
            })}
            {study.metrics?.length ? <div className="grid gap-8 border-t border-border pt-10 sm:grid-cols-2">{study.metrics.map((metric) => <MetricHighlight key={`${metric.value}-${metric.label}`} metric={metric} />)}</div> : null}
            {study.testimonial?.quote && <blockquote className="border-l border-border pl-6 text-lg leading-relaxed text-foreground">&ldquo;{study.testimonial.quote}&rdquo;</blockquote>}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border py-10">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"><ArrowLeft className="h-4 w-4" /> More work</Link>
          <Link href={study.services?.some((service) => service.toLowerCase().includes("seo")) ? "/contact?service=seo" : "/contact"} className="group inline-flex items-center gap-2 text-sm font-semibold text-accent">Have a similar challenge? Start a Conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
        </div>
      </Container>
    </>
  );
}