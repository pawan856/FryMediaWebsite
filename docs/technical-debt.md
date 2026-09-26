# Technical Debt Register

| Issue | Impact | Priority | Owner | Planned resolution |
| --- | --- | --- | --- | --- |
| Production lead repository is not connected | Valid enquiries are not persisted | Critical before lead launch | FyrnMedia | Connect a reviewed shared database repository |
| Contact email provider is not connected | Notifications are unavailable | High before lead launch | FyrnMedia | Connect and verify a transactional provider |
| Search Console provider is not connected | SEO reporting unavailable | Medium | FyrnMedia | Add server-side credentials and caching |
| Analytics provider is optional | Behavioral reporting may be unavailable | Medium | FyrnMedia | Configure a real provider and consent policy |
| Error and uptime monitoring are not configured | Operational failures require manual detection | High before launch | FyrnMedia | Select providers and document alert routing |
| Privacy and terms pages need reviewed legal copy | Legal launch readiness incomplete | Critical before public launch | Owner/legal reviewer | Replace clearly marked placeholders |
| CSP uses inline exceptions | Policy can be tightened further | Low | Engineering | Move JSON-LD/runtime styles to nonce or hashed delivery |