"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label="FyrnMedia Home"
          >
            <span className="flex items-center justify-center w-7 h-7 bg-background-elevated border border-border group-hover:border-accent transition-colors duration-300">
              <span className="w-2 h-2 bg-accent rotate-45 transform group-hover:scale-125 transition-transform duration-300" />
            </span>
            <div className="flex items-baseline tracking-tighter">
              <span className="font-bold text-xl tracking-tight text-foreground font-sans">
                FYRN
              </span>
              <span className="font-light text-xl tracking-tight text-foreground-muted ml-0.5">
                MEDIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.subItems) {
                return (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1.5 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm",
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-foreground-muted hover:text-foreground"
                      )}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 text-foreground-subtle",
                          servicesDropdownOpen && "rotate-180 text-foreground"
                        )}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute left-0 top-full pt-2 w-80 transition-all duration-200 pointer-events-none",
                        servicesDropdownOpen &&
                          "opacity-100 translate-y-0 pointer-events-auto",
                        !servicesDropdownOpen &&
                          "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="p-3 bg-background-elevated/95 backdrop-blur-xl border border-border shadow-2xl rounded-sm">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle px-3 py-1 mb-1">
                          Core Capabilities
                        </div>
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block p-3 rounded-sm hover:bg-background-surface transition-colors group"
                          >
                            <div className="text-sm font-medium text-foreground group-hover:text-accent flex items-center justify-between">
                              {sub.name}
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-foreground-muted mt-1 leading-snug">
                              {sub.description}
                            </p>
                          </Link>
                        ))}
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
          <div className="hidden md:flex items-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs tracking-wide uppercase font-mono px-4 py-2"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-border rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
