import React from "react";
import { cn } from "@/lib/utils/cn";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 12;
  gap?: "none" | "sm" | "default" | "lg";
}

export function Grid({
  className,
  cols = 3,
  gap = "default",
  children,
  ...props
}: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    12: "grid-cols-12",
  };

  const gapClasses = {
    none: "gap-0",
    sm: "gap-4 md:gap-6",
    default: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
  };

  return (
    <div
      className={cn("grid", colClasses[cols], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
}
