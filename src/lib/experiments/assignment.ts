import { ExperimentConfig } from "./config";

export function getExperimentVariant(experiment: ExperimentConfig, storageKey = `fyrn:experiment:${experiment.id}`) {
  if (!experiment.enabled || typeof window === "undefined") return "control";
  const existing = sessionStorage.getItem(storageKey);
  if (existing && experiment.variants.includes(existing)) return existing;
  const variant = experiment.variants.find((item) => (experiment.allocation[item] || 0) > 0) || "control";
  sessionStorage.setItem(storageKey, variant);
  return variant;
}