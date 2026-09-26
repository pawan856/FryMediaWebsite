export type DataStatus = "connected" | "unavailable" | "error";
export type DateRangeKey = "7d" | "28d" | "90d" | "12m" | "custom";

export interface DateRange {
  key: DateRangeKey;
  start: string;
  end: string;
  timezone: string;
}

export interface MetricPoint {
  date: string;
  value: number;
}

export interface TrafficMetrics {
  status: DataStatus;
  visitors?: number;
  sessions?: number;
  engagedSessions?: number;
  byDay?: MetricPoint[];
}

export interface SearchMetrics {
  status: DataStatus;
  clicks?: number;
  impressions?: number;
  ctr?: number;
  averagePosition?: number;
}

export interface LeadMetrics {
  status: DataStatus;
  leads?: number;
  qualified?: number;
  opportunities?: number;
  won?: number;
}

export interface FunnelMetric {
  label: string;
  value?: number;
  rateFromPrevious?: number;
}

export interface DashboardSnapshot {
  range: DateRange;
  traffic: TrafficMetrics;
  search: SearchMetrics;
  leads: LeadMetrics;
  funnel: FunnelMetric[];
  freshness?: string;
}

export interface MetricComparison {
  current?: number;
  previous?: number;
  absoluteChange?: number;
  percentageChange?: number;
}