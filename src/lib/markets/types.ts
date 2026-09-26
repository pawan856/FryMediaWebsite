export type MarketCode = "IN" | "US" | "GB" | "AE";
export type CurrencyCode = "INR" | "USD" | "GBP" | "AED";

export interface MarketConfig {
  code: MarketCode;
  locale: string;
  language: "en" | "hi" | "ar";
  country: MarketCode;
  currency: CurrencyCode;
  timezone: string;
  enabled: boolean;
  services: string[];
  contact?: { email?: string; phone?: string; address?: string };
  seo: { indexable: boolean; pathPrefix?: string };
}