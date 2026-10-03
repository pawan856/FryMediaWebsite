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

  useEffect(() => {
    if (!servicesDropdownOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target || !(target instanceof Element)) return;

      const trigger = document.getElementById("desktop-services-trigger");
      const menu = document.getElementById("desktop-services-menu");

      if (trigger && menu && !trigger.contains(target) && !menu.contains(target)) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesDropdownOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <Container size="wide">
        <nav
          className="relative flex items-center justify-between"
          aria-label="Main Navigation"
          onMouseLeave={() => setServicesDropdownOpen(false)}
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
                    onFocusCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) openServicesMenu();
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setServicesDropdownOpen(false);
                        event.currentTarget.querySelector("button")?.focus();
                      }
                    }}
                    onBlurCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setServicesDropdownOpen(false);
                      }
                    }}
                  >
                    <button
                      id="desktop-services-trigger"
                      type="button"
                      onClick={() => setServicesDropdownOpen((open) => !open)}
                      className={cn(
                        "group relative inline-flex items-center gap-1.5 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm",
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-foreground-muted hover:text-foreground",
                        isDropdownExpanded && "text-foreground"
                      )}
                      aria-expanded={isDropdownExpanded}
                      aria-controls="desktop-services-menu"
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
                    </button>
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

          <div
            id="desktop-services-menu"
            className={cn(
              "pointer-events-none absolute left-1/2 top-full z-[60] w-[min(1200px,calc(100vw-48px))] -translate-x-1/2 pt-3 transition-all duration-300 ease-out",
              servicesDropdownOpen
                ? "pointer-events-auto opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 -translate-y-4"
            )}
            aria-hidden={!servicesDropdownOpen}
            inert={!servicesDropdownOpen ? true : undefined}
            onMouseEnter={openServicesMenu}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-[#dfe9dc] bg-[#f6f4ef]/95 shadow-[0_22px_55px_rgba(17,30,22,0.11)] backdrop-blur-xl">
              <div className="grid grid-cols-1 gap-px bg-[#dfe9dc] md:grid-cols-2 xl:grid-cols-3">
                {serviceNavigation.map((group) => {
                  const isGroupActive = pathname === group.href || pathname.startsWith(`${group.href}/`);
                  const isFlagship = group.flagship;
                  return (
                    <section
                      key={group.id}
                      className={cn(
                        "bg-[#f9f8f4] p-5 text-left",
                        isFlagship && "bg-[#edf3eb] xl:col-span-2",
                        group.id === "seo" && "xl:col-span-1"
                      )}
                      aria-labelledby={`desktop-service-${group.id}`}
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[9px] font-mono uppercase tracking-[0.18em] text-foreground-subtle">
                            {group.eyebrow}
                          </p>
                          <Link
                            id={`desktop-service-${group.id}`}
                            href={group.href}
                            onClick={() => {
                              track(analyticsEvents.serviceCategoryClick, { page: group.href, service: group.name });
                              if (group.flagship) track(analyticsEvents.aiSearchVisibilityClick, { page: group.href });
                              setServicesDropdownOpen(false);
                            }}
                            aria-current={isGroupActive ? "page" : undefined}
                            className={cn(
                              "mt-2 inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                              isGroupActive && "text-accent"
                            )}
                          >
                            {group.name}
                            {isFlagship && (
                              <span className="border border-[#b8c9b7] bg-[#edf3eb] px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.18em] text-accent">
                                Flagship
                              </span>
                            )}
                          </Link>
                        </div>
                        <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-foreground-subtle" aria-hidden="true" />
                      </div>

                      {group.description && (
                        <p className="mb-4 max-w-md text-xs leading-relaxed text-foreground-muted/90">
                          {group.description}
                        </p>
                      )}

                      <ul className={cn("space-y-1", (isFlagship || group.id === "seo") && "grid gap-x-3 gap-y-1 sm:grid-cols-2") }>
                        {group.items.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => {
                                track(analyticsEvents.serviceCategoryClick, { page: sub.href, service: sub.name });
                                if (sub.href === "/aeo") track(analyticsEvents.aeoClick, { page: sub.href });
                                if (sub.href === "/geo") track(analyticsEvents.geoClick, { page: sub.href });
                                if (sub.href === "/services/ai-search-visibility") track(analyticsEvents.aiSearchVisibilityClick, { page: sub.href });
                                setServicesDropdownOpen(false);
                              }}
                              aria-current={pathname === sub.href.split("#")[0] ? "page" : undefined}
                              className="group/link inline-flex min-h-8 w-full items-center justify-between gap-2 rounded-sm px-1.5 py-1 text-[0.72rem] leading-snug text-foreground-muted transition-all duration-200 hover:translate-x-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                              <span>{sub.name}</span>
                              <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>

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
