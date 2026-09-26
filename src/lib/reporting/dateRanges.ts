import { DateRange, DateRangeKey } from "./types";

const rangeDays: Record<Exclude<DateRangeKey, "custom">, number> = { "7d": 7, "28d": 28, "90d": 90, "12m": 365 };

export function getDateRange(key: DateRangeKey = "28d", timezone = "Asia/Kolkata", now = new Date()): DateRange {
  const end = new Date(now);
  const start = new Date(now);
  if (key === "12m") start.setUTCDate(start.getUTCDate() - 365);
  else if (key !== "custom") start.setUTCDate(start.getUTCDate() - rangeDays[key]);
  return { key, start: start.toISOString(), end: end.toISOString(), timezone };
}