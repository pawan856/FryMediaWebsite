import React from "react";
import { cn } from "@/lib/utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "tight" | "wide" | "full";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    tight: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[90rem]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
