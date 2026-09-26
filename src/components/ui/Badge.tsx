import React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
  showDot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  showDot = false,
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default:
      "bg-background-surface border border-border text-foreground-muted",
    accent:
      "bg-accent-subtle border border-accent-border text-accent",
    outline:
      "bg-transparent border border-border text-foreground-subtle",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wide rounded-sm select-none",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {showDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
        </span>
      )}
      {children}
    </span>
  );
}
