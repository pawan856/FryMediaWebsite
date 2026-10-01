import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99] select-none group relative overflow-hidden";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-2",
    md: "text-sm px-5 py-2.5 gap-2.5",
    lg: "text-base px-7 py-3.5 gap-3",
  };

  const variantClasses = {
    primary:
      "bg-accent text-white hover:bg-accent-hover hover:-translate-y-px shadow-sm hover:shadow-md hover:shadow-accent/20 font-semibold",
    secondary:
      "bg-background-surface hover:bg-background-highlight text-foreground border border-border hover:border-border-hover",
    outline:
      "bg-transparent text-foreground border border-border hover:border-foreground/30 hover:bg-white/[0.03]",
    ghost:
      "bg-transparent text-foreground-muted hover:text-foreground hover:bg-white/[0.04]",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
