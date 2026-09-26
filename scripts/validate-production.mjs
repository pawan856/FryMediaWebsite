const requiredInProduction = [];
const missing = requiredInProduction.filter((name) => !process.env[name]);

if (process.env.NODE_ENV === "production" && missing.length) {
  console.error(`Missing production configuration: ${missing.join(", ")}`);
  process.exit(1);
}

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn("NEXT_PUBLIC_SITE_URL is not set; using the configured site URL in src/lib/constants/site.ts.");
}