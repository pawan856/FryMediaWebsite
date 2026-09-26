export interface ConversionMetric {
  date: string;
  page: string;
  source?: string;
  service?: string;
  event: string;
  count: number;
}

export const conversionDefinitions = {
  websiteLeadConversionRate: "successful leads / unique visitors",
  contactCompletionRate: "successful submissions / form starts",
  qualifiedLeadRate: "qualified leads / total leads",
  opportunityRate: "opportunities / qualified leads",
  wonRate: "won leads / opportunities",
} as const;