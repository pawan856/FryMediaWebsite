import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";
import { articles } from "@/content/insights/articles";
import { getPublishedArticles } from "@/lib/insights/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/services/seo", "/services/geo", "/contact", "/work", "/insights"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/services/seo" ? 0.9 : route === "/services/geo" ? 0.8 : route === "/contact" ? 0.7 : route === "/work" || route === "/insights" ? 0.7 : 0.8,
  }));

  return [...routes, ...getPublishedArticles(articles).map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))];
}
