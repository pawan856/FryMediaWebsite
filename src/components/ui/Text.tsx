import React from "react";
import { cn } from "@/lib/utils/cn";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  variant?: "lead" | "body" | "small" | "muted" | "meta";
}

export function Text({
  as: Component = "p",
  variant = "body",
  className,
  children,
  ...props
}: TextProps) {
  const variantClasses = {
    lead: "text-lg md:text-xl text-foreground-muted font-normal leading-relaxed",
    body: "text-base md:text-lg text-foreground-muted leading-relaxed",
    small: "text-sm text-foreground-muted leading-normal",
    muted: "text-sm text-foreground-subtle leading-normal",
    meta: "text-xs uppercase tracking-widest font-mono text-foreground-muted",
  };

  return (
    <Component
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
