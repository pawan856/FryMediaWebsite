import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/StructuredData";
import { EmptyWorkState } from "@/components/work/EmptyWorkState";
import { WorkHero } from "@/components/work/WorkHero";
import { caseStudies } from "@/data/caseStudies";
import { getPublishedCaseStudies } from "@/lib/work/validation";

export const metadata: Metadata = constructMetadata({
  title: "Selected Work — FyrnMedia",
  description: "A considered archive of FyrnMedia work across strategy, search, technology, design, and growth.",
  path: "/work",
});

export default function WorkPage() {
  const publishedStudies = getPublishedCaseStudies(caseStudies);
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work" }]} />
      <WorkHero />
      <section className="py-16 md:py-28">
        <Container size="wide">
          {publishedStudies.length ? (
            <div className="space-y-12">{publishedStudies.map((study) => <a key={study.slug} href={`/work/${study.slug}`} className="block border-b border-border pb-12 text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><span className="text-xs font-mono uppercase tracking-widest text-foreground-subtle">{study.industry || "Selected work"}</span><h2 className="mt-4 text-heading-xl font-bold">{study.title}</h2><p className="mt-3 max-w-2xl text-foreground-muted">{study.summary}</p></a>)}</div>
          ) : <EmptyWorkState />}
        </Container>
      </section>
    </>
  );
}