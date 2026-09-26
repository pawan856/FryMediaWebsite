import { primaryMarket } from "@/lib/markets/config";
import { getDateRange } from "@/lib/reporting/dateRanges";
import { DashboardSnapshot } from "@/lib/reporting/types";
import { searchConsoleService } from "@/lib/search-console/service";

export async function getDashboardSnapshot() {
  const range = getDateRange("28d", primaryMarket.timezone);
  const search = await searchConsoleService.getSummary(range);
  const snapshot: DashboardSnapshot = {
    range,
    traffic: { status: "unavailable" },
    search,
    leads: { status: "unavailable" },
    funnel: ["Visitors", "Contact Starts", "Leads", "Qualified Leads", "Opportunities", "Won"].map((label) => ({ label })),
  };
  return snapshot;
}