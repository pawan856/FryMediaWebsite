# Production Launch Checklist

This checklist is intentionally status-based. The project is not considered GO
until every critical business and security dependency is verified in the actual
deployment environment.

Current status: **NO-GO for deployment** until a hosting platform, confirmed
production domain, lead repository, email provider, and monitoring plan are
provided and verified. The application architecture is launch-prepared, but
external deployment cannot be completed from this repository alone.

## Infrastructure

- [ ] Production hosting platform selected and documented
- [ ] Production domain confirmed by the owner
- [ ] DNS records verified without changing unrelated records
- [ ] HTTPS certificate active and HTTP redirects to the canonical host
- [ ] www/non-www canonical host decision implemented
- [ ] Development, staging, and production credentials separated

## Application

- [ ] `npm ci` succeeds
- [ ] `npm run lint` succeeds
- [ ] `npm run typecheck` succeeds
- [ ] `npm run build` succeeds in production configuration
- [ ] Homepage, About, Services, SEO, GEO, Work, Insights, and Contact verified
- [ ] `/api/health` returns `{ "status": "ok" }`
- [ ] 404 and generic error flows verified

## Leads and email

- [ ] Production lead repository connected and tested
- [ ] Contact notification provider connected and tested
- [ ] Confirmation email behavior verified if enabled
- [ ] SPF, DKIM, and DMARC verified if email is enabled
- [ ] Controlled test lead removed or clearly marked after verification
- [ ] Lead retention and backup policy approved

## SEO

- [ ] Canonical domain confirmed
- [ ] `/sitemap.xml` returns valid XML with public canonical URLs only
- [ ] `/robots.txt` allows public pages and disallows API/admin paths
- [ ] Metadata and structured data validated on priority pages
- [ ] Production domain verified in Search Console
- [ ] Production sitemap submitted, never staging or localhost

## Analytics

- [ ] `NEXT_PUBLIC_GA_ID` configured only if a real property exists
- [ ] Page views and key CTA/form events verified without PII
- [ ] First/last-touch attribution verified
- [ ] Day 0 baseline recorded only from real data

## Security and monitoring

- [ ] Response security headers verified externally
- [ ] No secrets or preview URLs present in production
- [ ] Rate limiting connected to a shared store if required
- [ ] Error monitoring selected and connected, or explicitly marked unavailable
- [ ] Uptime monitoring selected and connected, or explicitly marked unavailable
- [ ] Rollback procedure tested for the actual hosting platform

## GO / NO-GO

GO only when critical domain, HTTPS, build, routes, contact, lead persistence,
security, sitemap, and monitoring checks are verified. A missing optional provider
must remain visibly documented as unavailable; it must not be reported as working.