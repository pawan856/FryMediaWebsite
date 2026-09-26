export type AnalyticsProvider = "ga4" | "none";

export interface AnalyticsProviderConfig {
  enabled: boolean;
  provider: AnalyticsProvider;
  measurementId?: string;
}

export const analyticsConfig: AnalyticsProviderConfig = {
  enabled: Boolean(process.env.NEXT_PUBLIC_GA_ID),
  provider: process.env.NEXT_PUBLIC_GA_ID ? "ga4" : "none",
  measurementId: process.env.NEXT_PUBLIC_GA_ID,
};