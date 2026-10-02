import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";
import { articles } from "@/content/insights/articles";
import { getPublishedArticles } from "@/lib/insights/articles";
import { capabilityPages, glossaryTerms, industries, servicePages } from "@/lib/content/architecture";
import { caseStudies } from "@/data/caseStudies";
import { getPublishedCaseStudies } from "@/lib/work/validation";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/ai-search-visibility",
    "/services/seo",
    ...servicePages.map((page) => `/services/${page.slug}`),
    ...capabilityPages.map((page) => `/${page.slug}`),
    "/industries",
    ...industries.map((industry) => `/industries/${industry.slug}`),
    "/work",
    "/insights",
    "/glossary",
    ...glossaryTerms.map((term) => `/glossary/${term.slug}`),
    "/tools",
    "/about",
    "/contact",
    "/audit",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/services/ai-search-visibility" ? 0.95 : route === "/services/seo" ? 0.9 : route === "/contact" || route === "/audit" ? 0.8 : route === "/work" || route === "/insights" || route === "/tools" ? 0.7 : 0.75,
  }));

  return [
    ...routes,
    ...getPublishedCaseStudies(caseStudies).map((study) => ({
      url: `${siteConfig.url}/work/${study.slug}`,
      lastModified: new Date(study.publishedAt || Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...getPublishedArticles(articles).map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    })),
  ];
}
