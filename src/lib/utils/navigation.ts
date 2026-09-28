import { siteConfig } from "@/lib/constants/site";

export function getActiveNavigationHref(pathname: string): string | null {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  return (
    siteConfig.navLinks
      .map(({ href }) => href.split("#")[0])
      .filter(
        (href) =>
          normalizedPath === href ||
          (href !== "/" && normalizedPath.startsWith(`${href}/`))
      )
      .sort((left, right) => right.length - left.length)[0] ?? null
  );
}