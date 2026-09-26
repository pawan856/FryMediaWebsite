export const analyticsEvents = {
  pageView: "page_view",
  heroCtaClick: "hero_cta_click",
  serviceCtaClick: "service_cta_click",
  workCtaClick: "work_cta_click",
  insightCtaClick: "insight_cta_click",
  contactCtaClick: "contact_cta_click",
  contactFormView: "contact_form_view",
  contactFormStart: "contact_form_start",
  contactFormFieldInteraction: "contact_form_field_interaction",
  contactFormSubmit: "contact_form_submit",
  contactFormSuccess: "contact_form_success",
  contactFormError: "contact_form_error",
  leadCreated: "lead_created",
  leadQualified: "lead_qualified",
  leadWon: "lead_won",
  leadFormView: "lead_form_view",
  leadFormStart: "lead_form_start",
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];