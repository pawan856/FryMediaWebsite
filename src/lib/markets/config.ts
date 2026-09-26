import { MarketCode, MarketConfig } from "./types";

export const markets: Record<MarketCode, MarketConfig> = {
  IN: { code: "IN", locale: "en-IN", language: "en", country: "IN", currency: "INR", timezone: "Asia/Kolkata", enabled: true, services: ["seo", "geo"], seo: { indexable: true } },
  US: { code: "US", locale: "en-US", language: "en", country: "US", currency: "USD", timezone: "America/New_York", enabled: false, services: [], seo: { indexable: false, pathPrefix: "/us" } },
  GB: { code: "GB", locale: "en-GB", language: "en", country: "GB", currency: "GBP", timezone: "Europe/London", enabled: false, services: [], seo: { indexable: false, pathPrefix: "/gb" } },
  AE: { code: "AE", locale: "en-AE", language: "en", country: "AE", currency: "AED", timezone: "Asia/Dubai", enabled: false, services: [], seo: { indexable: false, pathPrefix: "/ae" } },
};

const configuredMarket = process.env.PRIMARY_MARKET as MarketCode | undefined;
export const primaryMarket: MarketConfig = configuredMarket && markets[configuredMarket]?.enabled ? markets[configuredMarket] : markets.IN;
export const enabledMarkets = Object.values(markets).filter((market) => market.enabled);