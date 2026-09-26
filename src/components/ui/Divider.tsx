import React from "react";
import { cn } from "@/lib/utils/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  withNode?: boolean;
}

export function Divider({
  className,
  label,
  withNode = false,
  ...props
}: DividerProps) {
  if (label) {
    return (
      <div
        className={cn("relative flex items-center justify-center my-8 md:my-12", className)}
        {...props}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative px-4 bg-background text-xs font-mono tracking-widest uppercase text-foreground-subtle">
          {label}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full border-t border-border my-6 md:my-10",
        withNode &&
          "after:absolute after:left-1/2 after:-top-[3px] after:-translate-x-1/2 after:h-[5px] after:w-[5px] after:rounded-full after:bg-accent",
        className
      )}
      {...props}
    />
  );
}
