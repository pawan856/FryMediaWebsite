import { CurrencyCode } from "@/lib/markets/types";

export function formatCurrency(value: number, currency: CurrencyCode, locale = "en-IN") {
  return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}

export function formatNumber(value: number, locale = "en-IN") {
  return new Intl.NumberFormat(locale).format(value);
}

export function formatDate(value: string | Date, locale = "en-IN") {
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(value));
}