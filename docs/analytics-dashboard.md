# Analytics Dashboard Architecture

The project does not currently have authentication or authorization, so
`/admin/analytics` is intentionally not exposed. A hidden route or client-side
flag would not be a security boundary.

The reporting layer is ready under `src/lib/reporting/`, `src/lib/search-console/`,
and `src/lib/dashboard/`:

- `DashboardSnapshot` normalizes traffic, Search Console, leads, and funnel data.
- Date ranges default to 28 days and use the configured market timezone.
- Comparisons return unavailable values instead of `Infinity%`, `NaN%`, or fake zeroes.
- Search Console credentials are server-only environment variables.
- Disconnected providers produce `unavailable` states.
- `getDeterministicSummary` only describes values that were actually retrieved.
- `canAccessDashboard` remains closed until real authentication and role checks are connected.

Set these only when real integrations exist:

```text
NEXT_PUBLIC_GA_ID=
SEARCH_CONSOLE_PROPERTY_URL=
SEARCH_CONSOLE_CLIENT_EMAIL=
SEARCH_CONSOLE_PRIVATE_KEY=
```

No traffic, rankings, leads, GEO visibility, or performance values are generated
as placeholders. The future dashboard should prioritize qualified leads, then
opportunities, won leads, conversion, organic search, traffic, and technical health.