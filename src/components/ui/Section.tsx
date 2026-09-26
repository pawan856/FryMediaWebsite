import React from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "default" | "lg" | "hero" | "none";
  borderTop?: boolean;
  borderBottom?: boolean;
}

export function Section({
  className,
  spacing = "default",
  borderTop = false,
  borderBottom = false,
  children,
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "py-0",
    sm: "py-12 md:py-16",
    default: "py-20 md:py-28 lg:py-36",
    lg: "py-24 md:py-36 lg:py-48",
    hero: "pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36",
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        spacingClasses[spacing],
        borderTop && "border-t border-border",
        borderBottom && "border-b border-border",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
