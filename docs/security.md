# Production Security Notes

`next.config.ts` applies the baseline response headers for the public site:

- Content Security Policy
- HSTS in production
- clickjacking protection
- MIME sniffing protection
- strict-origin referrer policy
- restricted browser permissions

The current CSP allows `unsafe-inline` for scripts because the application emits
static JSON-LD and Next.js runtime scripts inline. It allows `unsafe-inline` for
styles because existing visual components use inline style values. These should be
replaced with nonce-based scripts and classes/CSS variables before tightening the
policy further. Production does not allow `unsafe-eval`.

The contact API validates content type, body size, JSON shape, fields, honeypot,
rate-limit interfaces, and server-side lead data before processing. The health
endpoint exposes only `{ "status": "ok" }`. No admin or analytics dashboard route
is public without authentication and authorization.