import { DashboardSnapshot } from "./types";

export function getDeterministicSummary(snapshot: DashboardSnapshot) {
  const { traffic, search, leads } = snapshot;
  if (leads.status === "unavailable" && search.status === "unavailable" && traffic.status === "unavailable") return "Analytics data is not connected.";
  if (leads.qualified !== undefined && leads.leads !== undefined) return `${leads.qualified} of ${leads.leads} recorded leads are qualified.`;
  if (search.clicks !== undefined && search.impressions !== undefined) return `${search.clicks} organic clicks from ${search.impressions} impressions were recorded for this period.`;
  return "Data is available, but there is not enough information for a summary yet.";
}