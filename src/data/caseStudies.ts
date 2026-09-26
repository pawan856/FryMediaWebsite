export interface MetricHighlight {
  value: string;
  label: string;
  description?: string;
  source?: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  client?: string;
  industry?: string;
  services?: string[];
  heroImage?: CaseStudyImage;
  gallery?: CaseStudyImage[];
  challenge?: string;
  insight?: string;
  strategy?: string;
  execution?: string;
  outcome?: string;
  learning?: string;
  metrics?: MetricHighlight[];
  testimonial?: { quote: string; name?: string; role?: string };
  technologies?: string[];
  publishedAt?: string;
}

/** Verified studies are added here when they are approved for publication. */
export const caseStudies: CaseStudy[] = [];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}