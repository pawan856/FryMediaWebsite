"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants/site";
import { FyrnLogo } from "@/components/brand/FyrnLogo";
import { getActiveNavigationHref } from "@/lib/utils/navigation";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { industryNavigation, serviceNavigation } from "@/lib/constants/navigation";
import { analyticsEvents } from "@/lib/analytics/events";
import { track } from "@/lib/analytics/track";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const pathname = usePathname();
  const activeNavigationHref = getActiveNavigationHref(pathname);
  const [portalReady, setPortalReady] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [expandedNavSection, setExpandedNavSection] = useState<"services" | "industries" | null>(null);
  const [expandedServiceGroup, setExpandedServiceGroup] = useState<string | null>(null);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !portalReady || !overlayRef.current) return;

    const scrollY = window.scrollY;
    const previousFocus = document.activeElement;
    const menuTrigger = triggerRef.current;
    const body = document.body;
    const root = document.documentElement;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    const previousRootStyles = {
      scrollBehavior: root.style.scrollBehavior,
      overscrollBehavior: root.style.overscrollBehavior,
    };
    const inertBackground = Array.from(body.children)
      .filter((element) => element !== overlayRef.current)
      .map((element) => {
        const backgroundElement = element as HTMLElement;
        const wasInert = backgroundElement.inert;
        backgroundElement.inert = true;
        return { element: backgroundElement, wasInert };
      });

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    root.style.scrollBehavior = "auto";
    root.style.overscrollBehavior = "none";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const desktopBreakpoint = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopBreakpoint.addEventListener("change", closeOnDesktop);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopBreakpoint.removeEventListener("change", closeOnDesktop);
      inertBackground.forEach(({ element, wasInert }) => {
        element.inert = wasInert;
      });
      Object.assign(body.style, previousBodyStyles);
      window.scrollTo(0, scrollY);
      Object.assign(root.style, previousRootStyles);
      const focusTarget =
        previousFocus instanceof HTMLElement &&
        previousFocus.isConnected &&
        previousFocus !== body
          ? previousFocus
          : menuTrigger;
      focusTarget?.focus({ preventScroll: true });
    };
  }, [isOpen, onClose, portalReady, triggerRef]);

  if (!portalReady) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className={cn(
        "mobile-navigation-overlay fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      inert={!isOpen}
      role="dialog"
      aria-modal={isOpen}
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default bg-background"
        onClick={onClose}
        aria-label="Close navigation menu"
        aria-hidden="true"
        tabIndex={-1}
      />

      <div
        ref={drawerRef}
        className={cn(
          "mobile-navigation-panel relative flex h-full min-h-0 flex-col bg-background px-6 sm:px-8 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          paddingTop: "max(1.5rem, env(safe-area-inset-top))",
          paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border pb-6">
          <Link
            href="/"
            onClick={onClose}
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Fyrn Media home"
          >
            <FyrnLogo />
          </Link>
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 text-foreground-muted hover:text-foreground border border-border rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-8"
          aria-label="Mobile navigation links"
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-foreground-subtle mb-4">
            Navigation Index
          </div>
          <ul className="space-y-4">
            {siteConfig.navLinks.map((item, idx) => {
              const isActive = activeNavigationHref === item.href;
              const isCurrentPage = pathname === item.href;

              if (item.href === "/services") {
                const isServicesExpanded = expandedNavSection === "services";
                return (
                  <li key={item.name} className="border-b border-border/40 pb-3">
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive ? "location" : undefined}
                        className={cn("text-2xl font-bold tracking-tight", isActive ? "text-accent" : "text-foreground")}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={isServicesExpanded}
                        aria-controls="mobile-service-groups"
                        onClick={() => {
                          setExpandedNavSection((current) => current === "services" ? null : "services");
                          setExpandedServiceGroup(null);
                          if (expandedNavSection !== "services") track(analyticsEvents.servicesMenuOpened, { page: pathname, source: "mobile_navigation" });
                        }}
                        className="flex h-11 w-11 items-center justify-center border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={isServicesExpanded ? "Collapse service categories" : "Expand service categories"}
                      >
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", isServicesExpanded && "rotate-180")} />
                      </button>
                    </div>
                    <div
                      id="mobile-service-groups"
                      className={cn("grid transition-[grid-template-rows,opacity] duration-300", isServicesExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
                      aria-hidden={!isServicesExpanded}
                      inert={!isServicesExpanded}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="space-y-2 pt-4">
                          {serviceNavigation.map((group) => {
                            const isGroupExpanded = expandedServiceGroup === group.id;
                            const isGroupCurrent = pathname === group.href || pathname.startsWith(`${group.href}/`);
                            return (
                              <section key={group.id} className="border-l border-border pl-3">
                                <div className="flex items-center gap-2">
                                  <Link
                                    href={group.href}
                                    onClick={() => {
                                      track(analyticsEvents.serviceCategoryClick, { page: group.href, service: group.name });
                                      if (group.flagship) track(analyticsEvents.aiSearchVisibilityClick, { page: group.href });
                                      onClose();
                                    }}
                                    aria-current={isGroupCurrent ? "page" : undefined}
                                    className={cn("min-h-11 flex-1 py-2 text-sm font-semibold", isGroupCurrent ? "text-accent" : "text-foreground")}
                                  >
                                    {group.name}
                                    {group.flagship && <span className="ml-2 text-[9px] font-mono uppercase tracking-widest text-accent">Flagship</span>}
                                  </Link>
                                  <button
                                    type="button"
                                    aria-expanded={isGroupExpanded}
                                    aria-controls={`mobile-service-${group.id}`}
                                    onClick={() => setExpandedServiceGroup((current) => current === group.id ? null : group.id)}
                                    className="flex h-11 w-11 items-center justify-center text-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                    aria-label={`${isGroupExpanded ? "Collapse" : "Expand"} ${group.name}`}
                                  >
                                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isGroupExpanded && "rotate-180")} />
                                  </button>
                                </div>
                                <div
                                  id={`mobile-service-${group.id}`}
                                  className={cn("grid transition-[grid-template-rows,opacity] duration-300", isGroupExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
                                  aria-hidden={!isGroupExpanded}
                                  inert={!isGroupExpanded}
                                >
                                  <ul className="min-h-0 overflow-hidden space-y-1 pb-2">
                                    {group.items.map((sub) => (
                                      <li key={sub.href}>
                                        <Link
                                          href={sub.href}
                                          onClick={() => {
                                            track(analyticsEvents.serviceCategoryClick, { page: sub.href, service: sub.name });
                                            if (sub.href === "/aeo") track(analyticsEvents.aeoClick, { page: sub.href });
                                            if (sub.href === "/geo") track(analyticsEvents.geoClick, { page: sub.href });
                                            onClose();
                                          }}
                                          aria-current={pathname === sub.href.split("#")[0] ? "page" : undefined}
                                          className="flex min-h-10 items-center px-2 text-sm text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                        >
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </section>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              if (item.href === "/industries") {
                const isIndustriesExpanded = expandedNavSection === "industries";
                return (
                  <li key={item.name} className="border-b border-border/40 pb-3">
                    <div className="flex items-center justify-between gap-4">
                      <Link href={item.href} onClick={onClose} aria-current={isActive ? "page" : undefined} className={cn("py-2 text-2xl font-bold tracking-tight", isActive ? "text-accent" : "text-foreground")}>{item.name}</Link>
                      <button type="button" aria-expanded={isIndustriesExpanded} aria-controls="mobile-industries" onClick={() => setExpandedNavSection((current) => current === "industries" ? null : "industries")} className="flex h-11 w-11 items-center justify-center border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label={`${isIndustriesExpanded ? "Collapse" : "Expand"} industries`}>
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", isIndustriesExpanded && "rotate-180")} />
                      </button>
                    </div>
                    <div id="mobile-industries" className={cn("grid transition-[grid-template-rows,opacity] duration-300", isIndustriesExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")} aria-hidden={!isIndustriesExpanded} inert={!isIndustriesExpanded}>
                      <ul className="min-h-0 overflow-hidden border-l border-border pl-4">
                        {industryNavigation.map((industry) => <li key={industry.href}><Link href={industry.href} onClick={onClose} aria-current={pathname === industry.href ? "page" : undefined} className="flex min-h-11 items-center text-sm text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{industry.name}</Link></li>)}
                      </ul>
                    </div>
                  </li>
                );
              }

              if (item.children) {
                return (
                  <li key={item.name} className="border-b border-border/40 pb-3">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between group"
                      aria-current={isCurrentPage ? "page" : isActive ? "location" : undefined}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-foreground-subtle">0{idx + 1}</span>
                        <span className={cn("text-2xl font-bold tracking-tight transition-colors", isActive ? "text-accent" : "text-foreground group-hover:text-accent")}>
                          {item.name}
                        </span>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-foreground-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <ul className="ml-9 mt-2 border-l border-border pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="flex min-h-11 items-center text-sm text-foreground-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.name} className="border-b border-border/40 pb-3">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between group"
                    aria-current={isCurrentPage ? "page" : isActive ? "location" : undefined}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-foreground-subtle">
                        0{idx + 1}
                      </span>
                      <span
                        className={cn(
                          "text-2xl font-bold tracking-tight transition-colors",
                          isActive
                            ? "text-accent"
                            : "text-foreground group-hover:text-accent"
                        )}
                      >
                        {item.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-foreground-subtle group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 space-y-4 border-t border-border pt-6">
          <Link
            href="/audit"
            onClick={() => track(analyticsEvents.auditCtaClick, { page: "/audit", source: "mobile_navigation" })}
            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-sm bg-accent px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
          >
            Free AI Visibility Audit <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/contact" onClick={onClose} className="block text-center text-sm text-foreground-muted hover:text-foreground">General enquiry</Link>

          <div className="flex items-center justify-between text-xs text-foreground-muted font-mono pt-2">
            <span>{siteConfig.contactEmail}</span>
            <span>London • NY • SG</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
