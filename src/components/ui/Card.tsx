import React from "react";
import { cn } from "@/lib/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  borderGlow?: boolean;
}

export function Card({
  className,
  interactive = false,
  borderGlow = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-sm bg-background-elevated/70 border border-border p-6 md:p-8 transition-all duration-300",
        interactive &&
          "hover:border-border-hover hover:bg-background-surface hover:translate-y-[-2px] hover:shadow-card-hover",
        borderGlow &&
          "before:absolute before:inset-0 before:rounded-sm before:border before:border-accent/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
