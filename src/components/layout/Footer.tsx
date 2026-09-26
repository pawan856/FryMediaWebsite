import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border pt-20 pb-12 overflow-hidden">
      <Container size="wide">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-border">
          {/* Brand Mission Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="FyrnMedia Home"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-background-elevated border border-border">
                <span className="w-1.5 h-1.5 bg-accent rotate-45 transform" />
              </span>
              <span className="font-bold text-xl tracking-tight text-foreground font-sans">
                FYRN<span className="font-light text-foreground-muted">MEDIA</span>
              </span>
            </Link>

            <Text variant="body" className="max-w-md text-foreground-muted leading-relaxed">
              Architectural digital growth studio engineering algorithmic
              authority, ultra-fast web systems, and organic market dominance
              for forward-thinking brands.
            </Text>

            <div className="pt-2 flex items-center gap-4">
              <Badge variant="outline" showDot className="text-[11px]">
                Global Nodes: Operational
              </Badge>
              <span className="text-xs font-mono text-foreground-subtle">
                EST / GMT / SGT
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Capabilities */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-4">
                Capabilities
              </div>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.footerLinks.capabilities.map((link) => (
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

            {/* Company */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-4">
                Company
              </div>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.footerLinks.company.map((link) => (
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

            {/* Strategic Consultation */}
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs font-mono uppercase tracking-widest text-foreground-subtle mb-4">
                Inquiries
              </div>
              <div className="space-y-3">
                <Text variant="small" className="text-foreground-muted">
                  Direct engagement inquiries:
                </Text>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="block text-sm font-mono text-foreground hover:text-accent transition-colors break-all"
                >
                  {siteConfig.contactEmail}
                </a>
                <div className="pt-2 text-xs text-foreground-subtle font-mono">
                  {siteConfig.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-foreground-subtle">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved. Architectural
            Performance & Strategy.
          </div>
          <div className="flex items-center gap-6">
            {siteConfig.footerLinks.governance.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
