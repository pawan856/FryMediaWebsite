import { CaseStudy } from "@/data/caseStudies";

export function validateCaseStudy(study: CaseStudy) {
  return Boolean(study.slug.trim() && study.title.trim() && study.summary.trim());
}

export function getPublishedCaseStudies(studies: CaseStudy[]) {
  return studies.filter(validateCaseStudy);
}