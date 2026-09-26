"use client";

import { enabledMarkets } from "@/lib/markets/config";

export function MarketSelector() {
  if (enabledMarkets.length < 2) return null;
  return <label className="sr-only">Select market<select defaultValue={enabledMarkets[0].code}>{enabledMarkets.map((market) => <option key={market.code} value={market.code}>{market.country}</option>)}</select></label>;
}