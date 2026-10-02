import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants/site";
import { footerNavigation } from "@/lib/constants/navigation";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { FyrnLogo } from "@/components/brand/FyrnLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border pt-20 pb-12 overflow-hidden">
      <Container size="wide">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-16 lg:grid-cols-12">
          {/* Brand Mission Column */}
          <div className="space-y-6 lg:col-span-4">
            <Link
              href="/"
              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Fyrn Media home"
            >
              <FyrnLogo />
            </Link>

            <Text variant="body" className="max-w-md text-foreground-muted leading-relaxed">
              We make AI useful in everyday life through thoughtful strategy,
              digital experiences, and technology that helps people and
              ambitious brands move forward.
            </Text>

          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-4">
                Services
              </div>
              <ul className="space-y-2.5 text-sm">
                {footerNavigation.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground-muted hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-4">
                Explore
              </div>
              <ul className="space-y-2.5 text-sm">
                {footerNavigation.explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground-muted hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-4">
                Contact
              </div>
              <ul className="space-y-2.5 text-sm">
                {footerNavigation.contact.map((link) => (
                  <li key={link.name}>
                    {link.href === "/audit" ? (
                      <TrackedLink href={link.href} event="audit_cta_click" className="group inline-flex items-center gap-1 text-foreground-muted transition-colors hover:text-foreground">
                        <span>{link.name}</span><ArrowUpRight className="h-3 w-3 -translate-x-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </TrackedLink>
                    ) : (
                      <Link href={link.href} className="group inline-flex items-center gap-1 text-foreground-muted transition-colors hover:text-foreground">
                        <span>{link.name}</span><ArrowUpRight className="h-3 w-3 -translate-x-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="block text-sm font-mono text-foreground hover:text-accent transition-colors break-all"
                >
                  {siteConfig.contactEmail}
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-foreground-subtle">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved. Architectural
            Performance & Strategy.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerNavigation.governance.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
