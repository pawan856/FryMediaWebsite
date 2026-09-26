import { siteConfig } from "@/lib/constants/site";
import { primaryMarket } from "@/lib/markets/config";

/** Only returns alternates for URLs that exist. Future prefixed markets stay absent until activated. */
export function getLanguageAlternates(path = "") {
  const url = `${siteConfig.url}${path}`;
  return { [primaryMarket.locale]: url, "x-default": url };
}