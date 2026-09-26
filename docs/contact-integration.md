# Contact Integration

The contact form and `POST /api/contact` route are ready for a delivery provider,
but no provider is configured by default. Until both `CONTACT_TO_EMAIL` and
`CONTACT_FROM_EMAIL` are set and `ConfiguredContactSubmissionService.submit`
is connected to an email or CRM provider, submissions return a user-safe `503`
response rather than claiming that a message was sent.

Before production deployment:

1. Add `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` to the deployment environment.
2. Implement provider delivery in `src/lib/contact/service.ts` without logging submitted personal data.
3. Connect `src/lib/contact/rateLimit.ts` to a shared store such as Redis if the deployment needs enforcement across instances.
4. Add Turnstile or another verified bot challenge at the API boundary if spam volume requires it.

No analytics vendor is configured. `src/lib/analytics.ts` emits local browser events
only, so a future analytics integration can subscribe without changing the form UI.

## Lead pipeline

`src/lib/leads/` separates lead validation, transparent quality scoring, attribution,
status transitions, persistence, notification, webhook, and duplicate guards. The
default repository is intentionally non-persistent, so `POST /api/contact` returns
`503` until a database-backed `LeadRepository` is configured. No public admin route
is created without authentication and authorization.

Lead quality is not an AI score. Each of these contributes one transparent signal:
selected service, company, website, budget, a detailed message, and a non-personal
email domain. Five or more signals is high quality, three or four is medium, and
otherwise low. Personal email domains are never blocked.

Attribution is limited to first-touch landing page, optional referrer classification,
and UTM source/medium/campaign/content. The browser keeps this context in session
storage only; no personal information is stored there. Configure `LEAD_RETENTION_DAYS`
and implement policy in the repository when a production data store is connected.