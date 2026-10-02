import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/utils/seo";
import { CaseStudyStructuredData } from "@/components/seo/StructuredData";
import { CaseStudyDetail } from "@/components/work/CaseStudyDetail";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { validateCaseStudy } from "@/lib/work/validation";
import { ContentViewTracker } from "@/components/analytics/ContentViewTracker";

export function generateStaticParams() {
  return caseStudies.filter(validateCaseStudy).map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || !validateCaseStudy(study)) return constructMetadata({ title: "Work — FyrnMedia", path: `/work/${slug}`, noIndex: true });
  return constructMetadata({ title: `${study.title} — FyrnMedia Case Study`, description: study.summary, path: `/work/${study.slug}` });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || !validateCaseStudy(study)) notFound();
  return <><ContentViewTracker event="case_study_viewed" page={`/work/${study.slug}`} /><CaseStudyStructuredData study={study} /><CaseStudyDetail study={study} /></>;
}