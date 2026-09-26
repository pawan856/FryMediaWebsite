import { analyticsEvents, AnalyticsEvent } from "./analytics/events";
import { track } from "./analytics/track";

export type ConversionEvent = Extract<AnalyticsEvent, "hero_cta_click" | "service_cta_click" | "work_cta_click" | "insight_cta_click" | "contact_cta_click">;

export type LeadAnalyticsEvent = Extract<AnalyticsEvent, "lead_created" | "lead_qualified" | "lead_won" | "lead_form_view" | "lead_form_start">;

export function trackEvent(event: AnalyticsEvent) {
  track(event);
}

export function trackLeadEvent(event: LeadAnalyticsEvent) {
  if (event in analyticsEvents) track(event as AnalyticsEvent);
}

export function trackConversionEvent(event: ConversionEvent) {
  track(event);
}