# International Architecture

The current site uses the existing unprefixed URLs as the primary market experience:

`/`, `/about`, `/services`, `/services/seo`, `/services/geo`, `/work`, `/insights`, and `/contact`.

`IN` is the only enabled market and uses `en-IN` with `INR`. The configuration
also defines US, GB, and AE as inactive possibilities. Inactive markets do not
produce routes, sitemap entries, navigation links, selectors, or hreflang links.

## Future migration

If a real market is activated, use the configured prefix consistently (`/us/`,
`/gb/`, or `/ae/`) and create only pages with genuine localized content. Keep the
current unprefixed URLs as the default or redirect them through a deliberate,
tested migration. Each localized page must have its own canonical URL and only
hreflang links to pages that actually exist.

Do not use IP-based redirects. Market selection should be explicit and accessible.
Do not add LocalBusiness schema, local addresses, translated copy, or market claims
until the business has verified information and reviewed content for that market.

Currency, dates, and numbers use `Intl` helpers in `src/lib/i18n/formatting.ts`.
Arabic remains configuration-only; RTL is set from the market language when an
Arabic market is eventually enabled.