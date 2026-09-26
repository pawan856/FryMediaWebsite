import { DateRange, SearchMetrics } from "@/lib/reporting/types";
import { searchConsoleConfig } from "./config";

export interface SearchConsoleQueryRow { query: string; clicks: number; impressions: number; ctr: number; position: number; }
export interface SearchConsolePageRow { page: string; clicks: number; impressions: number; ctr: number; position: number; }

export interface SearchConsoleService {
  getSummary(range: DateRange): Promise<SearchMetrics>;
  getQueries(range: DateRange): Promise<{ status: "connected" | "unavailable" | "error"; rows?: SearchConsoleQueryRow[] }>;
  getPages(range: DateRange): Promise<{ status: "connected" | "unavailable" | "error"; rows?: SearchConsolePageRow[] }>;
}

/** Server boundary for a future Search Console client. Credentials never reach the browser. */
export const searchConsoleService: SearchConsoleService = {
  async getSummary(_range) { return searchConsoleConfig.connected ? { status: "error" } : { status: "unavailable" }; },
  async getQueries(_range) { return searchConsoleConfig.connected ? { status: "error" } : { status: "unavailable" }; },
  async getPages(_range) { return searchConsoleConfig.connected ? { status: "error" } : { status: "unavailable" }; },
};