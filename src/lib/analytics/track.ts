import { AnalyticsEvent } from "./events";
import { analyticsConfig } from "./config";
import { primaryMarket } from "@/lib/markets/config";

export interface AnalyticsPayload {
  page?: string;
  service?: string;
  source?: string;
  experimentId?: string;
  variant?: string;
  market?: string;
  language?: string;
}

export function track(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;
  // The local event bus is an integration point, not a claim that analytics is active.
  const dimensions = { market: primaryMarket.code, language: primaryMarket.language, ...payload };
  window.dispatchEvent(new CustomEvent("fyrn:analytics", { detail: { event, payload: dimensions } }));
  if (analyticsConfig.enabled && analyticsConfig.measurementId && "gtag" in window) {
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", event, dimensions);
  }
}