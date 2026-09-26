export interface ExperimentConfig {
  id: string;
  name: string;
  enabled: boolean;
  variants: string[];
  allocation: Record<string, number>;
  start?: string;
  end?: string;
  primaryMetric: string;
  secondaryMetrics: string[];
  owner: string;
  successCriteria: string;
}

export const experiments: Record<string, ExperimentConfig> = {
  homepageHero: {
    id: "homepage-hero-001",
    name: "Homepage hero positioning",
    enabled: false,
    variants: ["control", "search-visibility", "findable-business"],
    allocation: { control: 1, "search-visibility": 0, "findable-business": 0 },
    primaryMetric: "contact_form_success",
    secondaryMetrics: ["contact_cta_click", "contact_form_start", "qualified_lead_rate"],
    owner: "FyrnMedia",
    successCriteria: "Improve qualified enquiries without reducing qualified lead rate.",
  },
};