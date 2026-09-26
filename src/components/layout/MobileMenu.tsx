"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants/site";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key press and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDrawerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden transition-all duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      inert={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-2xl transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div
        ref={drawerRef}
        onKeyDown={handleDrawerKeyDown}
        className={cn(
          "relative h-full flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-border pb-6">
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

        {/* Navigation List */}
        <div className="py-8 my-auto">
          <div className="text-[11px] font-mono uppercase tracking-widest text-foreground-subtle mb-4">
            Navigation Index
          </div>
          <ul className="space-y-4">
            {siteConfig.navLinks.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.name} className="border-b border-border/40 pb-3">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between group"
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
        </div>

        {/* Footer Area */}
        <div className="pt-6 border-t border-border space-y-4">
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
    </div>
  );
}
