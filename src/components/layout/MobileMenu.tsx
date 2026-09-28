"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants/site";
import { getActiveNavigationHref } from "@/lib/utils/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

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
    const desktopBreakpoint = window.matchMedia("(min-width: 768px)");
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
        "mobile-navigation-overlay fixed inset-0 z-40 md:hidden transition-opacity duration-300",
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
            className="flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 bg-accent rotate-45 transform" />
            <span className="font-bold text-lg tracking-tight text-foreground font-sans">
              FYRN<span className="font-light text-foreground-muted">MEDIA</span>
            </span>
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
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full text-center"
            onClick={onClose}
          >
            Initiate Consultation
          </Button>

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
