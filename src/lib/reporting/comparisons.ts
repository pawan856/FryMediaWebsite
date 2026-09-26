import { MetricComparison } from "./types";

export function compareMetrics(current?: number, previous?: number): MetricComparison {
  if (current === undefined || previous === undefined) return { current, previous };
  const absoluteChange = current - previous;
  return { current, previous, absoluteChange, percentageChange: previous === 0 ? undefined : (absoluteChange / previous) * 100 };
}

export function formatPercentageChange(value?: number) {
  if (value === undefined || !Number.isFinite(value)) return "Unavailable";
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}

export function conversionRate(numerator?: number, denominator?: number) {
  if (numerator === undefined || denominator === undefined || denominator === 0) return undefined;
  return (numerator / denominator) * 100;
}