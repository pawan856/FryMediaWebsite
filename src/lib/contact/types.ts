export const contactServices = [
  "seo",
  "geo",
  "something_else",
] as const;

export const contactBudgets = [
  "under_50k",
  "50k_1l",
  "1l_3l",
  "3l_plus",
  "not_sure",
] as const;

export type ContactService = (typeof contactServices)[number];
export type ContactBudget = (typeof contactBudgets)[number];

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  service: ContactService;
  message: string;
  budget: ContactBudget | "";
  website_confirm: string;
  landingPage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  firstTouch?: string;
  lastTouch?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  website: string;
  service: ContactService;
  message: string;
  budget: ContactBudget | "";
  landingPage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  firstTouch?: string;
  lastTouch?: string;
}