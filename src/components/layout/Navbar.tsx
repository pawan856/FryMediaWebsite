"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/lib/constants/site";
import { serviceNavigation } from "@/lib/constants/navigation";
import { analyticsEvents } from "@/lib/analytics/events";
import { track } from "@/lib/analytics/track";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { getActiveNavigationHref } from "@/lib/utils/navigation";
import { FyrnLogo } from "@/components/brand/FyrnLogo";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const activeNavigationHref = getActiveNavigationHref(pathname);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);

  const openServicesMenu = () => {
    if (!servicesDropdownOpen) track(analyticsEvents.servicesMenuOpened, { page: pathname });
    setServicesDropdownOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-20 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <Container size="wide">
        <nav
          className="flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Fyrn Media home"
          >
            <FyrnLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {siteConfig.navLinks.map((item) => {
              const isActive = activeNavigationHref === item.href;

              if (item.subItems) {
                const isDropdownExpanded = servicesDropdownOpen;

                return (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    onFocusCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) openServicesMenu();
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setServicesDropdownOpen(false);
                        event.currentTarget.querySelector("a")?.focus();
                      }
                    }}
                    onBlurCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setServicesDropdownOpen(false);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative inline-flex items-center gap-1.5 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm",
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-foreground-muted hover:text-foreground"
                      )}
                      aria-expanded={isDropdownExpanded}
                      aria-controls="desktop-services-menu"
                      aria-current={pathname === item.href ? "page" : isActive ? "location" : undefined}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 text-foreground-subtle group-hover:translate-y-0.5",
                          isDropdownExpanded && "rotate-180 text-foreground"
                        )}
                      />
                      <span
                        className={cn(
                          "absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300",
                          isActive && "scale-x-100",
                          "group-hover:scale-x-100"
                        )}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      id="desktop-services-menu"
                      className={cn(
                        "absolute left-1/2 top-full z-30 w-[min(94vw,1000px)] -translate-x-1/2 pt-3 transition-all duration-200",
                        isDropdownExpanded &&
                          "opacity-100 translate-y-0 pointer-events-auto",
                        !isDropdownExpanded &&
                          "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                      aria-hidden={!isDropdownExpanded}
                      inert={!isDropdownExpanded}
                    >
                      <div className="grid max-h-[min(72vh,680px)] grid-cols-1 gap-px overflow-y-auto border border-border bg-border shadow-2xl md:grid-cols-2 xl:grid-cols-4">
                        {serviceNavigation.map((group) => {
                          const isGroupActive = pathname === group.href || pathname.startsWith(`${group.href}/`);
                          const isFlagship = group.flagship;
                          return (
                            <section
                              key={group.id}
                              className={cn(
                                "bg-background-elevated/95 p-4 backdrop-blur-xl",
                                isFlagship && "md:col-span-2 xl:col-span-2",
                                group.id === "seo" && "md:col-span-2 xl:col-span-2"
                              )}
                              aria-labelledby={`desktop-service-${group.id}`}
                            >
                              <div className="mb-3 flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-[9px] font-mono uppercase tracking-widest text-foreground-subtle">
                                    {group.eyebrow}
                                  </p>
                                  <Link
                                    id={`desktop-service-${group.id}`}
                                    href={group.href}
                                    onClick={() => {
                                      track(analyticsEvents.serviceCategoryClick, { page: group.href, service: group.name });
                                      if (group.flagship) track(analyticsEvents.aiSearchVisibilityClick, { page: group.href });
                                    }}
                                    aria-current={isGroupActive ? "page" : undefined}
                                    className={cn(
                                      "mt-1 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                                      isGroupActive && "text-accent"
                                    )}
                                  >
                                    {group.name}
                                    {isFlagship && <span className="border border-accent/25 bg-accent/5 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest text-accent">Flagship</span>}
                                  </Link>
                                </div>
                                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-foreground-subtle" aria-hidden="true" />
                              </div>
                              {group.description && <p className="mb-3 max-w-md text-xs leading-relaxed text-foreground-muted">{group.description}</p>}
                              <ul className={cn("space-y-1", (isFlagship || group.id === "seo") && "grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-2") }>
                                {group.items.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => {
                                        track(analyticsEvents.serviceCategoryClick, { page: sub.href, service: sub.name });
                                        if (sub.href === "/aeo") track(analyticsEvents.aeoClick, { page: sub.href });
                                        if (sub.href === "/geo") track(analyticsEvents.geoClick, { page: sub.href });
                                        if (sub.href === "/services/ai-search-visibility") track(analyticsEvents.aiSearchVisibilityClick, { page: sub.href });
                                      }}
                                      aria-current={pathname === sub.href.split("#")[0] ? "page" : undefined}
                                      className="group/link inline-flex min-h-7 w-full items-center justify-between gap-2 rounded-sm px-1.5 text-[11px] leading-snug text-foreground-muted transition-all hover:translate-x-0.5 hover:bg-background-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                    >
                                      <span>{sub.name}</span>
                                      <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100" aria-hidden="true" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </section>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm group",
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-foreground-muted hover:text-foreground"
                    )}
                    aria-current={pathname === item.href ? "page" : isActive ? "location" : undefined}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                        isActive && "scale-x-100"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div onClick={() => track(analyticsEvents.contactCtaClick, { page: pathname })}>
              <Button href="/contact" variant="primary" size="sm" className="text-xs tracking-wide uppercase font-mono px-4 py-2">
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            ref={mobileMenuTriggerRef}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-border rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span
              className={cn(
                "w-5 h-[1.5px] bg-foreground transition-all duration-300 mb-1",
                mobileMenuOpen && "rotate-45 translate-y-[5.5px]"
              )}
            />
            <span
              className={cn(
                "w-5 h-[1.5px] bg-foreground transition-all duration-300",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-5 h-[1.5px] bg-foreground transition-all duration-300 mt-1",
                mobileMenuOpen && "-rotate-45 -translate-y-[5.5px]"
              )}
            />
          </button>
        </nav>
      </Container>

      {/* Accessible Mobile Slide-over Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        triggerRef={mobileMenuTriggerRef}
      />
    </header>
  );
}
