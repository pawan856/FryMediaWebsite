import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";
import { primaryMarket } from "@/lib/markets/config";
import { getLanguageAlternates } from "@/lib/seo/hreflang";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.ogImage,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? title
    : `${siteConfig.name} — Digital Growth & SEO`;

  const canonicalUrl = `${siteConfig.url}${path ? (path.startsWith("/") ? path : `/${path}`) : ""}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} Visual Identity`,
              },
            ],
          }
        : {}),
      locale: primaryMarket.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
