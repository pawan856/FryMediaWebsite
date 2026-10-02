# Information Architecture

## Navigation Source

`src/lib/constants/navigation.ts` is the shared source for desktop navigation,
the mobile accordion, the footer and the HTML sitemap. Service and industry
details are defined in `src/lib/content/architecture.ts` and generated from
allow-listed slugs.

## Canonical Routes

- AI Search Visibility: `/services/ai-search-visibility`
- AEO, GEO, AI Overviews, AI Visibility Audit, Entity SEO and AI Citation:
  `/aeo`, `/geo`, `/ai-overviews-optimization`, `/ai-visibility-audit`,
  `/entity-seo` and `/ai-citation-building`
- Service hubs: `/services/seo`, `/services/content-marketing`,
  `/services/performance-marketing`, `/services/ai-automation`,
  `/services/web-development` and `/services/analytics-strategy`
- Industries: `/industries` and the approved static paths under
  `/industries/[slug]`
- Tools, audit and glossary: `/tools`, `/audit` and `/glossary`

`/seo` permanently redirects to `/services/seo`; `/services/geo` permanently
redirects to `/geo`. Canonical metadata uses the slashless route, and the
Next.js router is configured with `trailingSlash: false`.

## Publishing Rules

Only reviewed case studies and published articles enter detail routes or the
XML sitemap. The current case-study and article registries are empty, so their
archive pages show honest empty states. Legal notices remain `noindex` until
reviewed. The AI visibility checker does not return fabricated scores; the
robots helper opens the supplied site's published `robots.txt` file.