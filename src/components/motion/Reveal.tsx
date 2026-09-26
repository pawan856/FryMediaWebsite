"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils/cn";
import { useInView } from "@/lib/hooks/useInView";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "article" | "li";
  delay?: number;
  threshold?: number;
}

export function Reveal({
  as = "div",
  delay = 0,
  threshold = 0.1,
  className,
  style,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold });
  const Component = as as React.ElementType;

  return (
    <Component
      ref={ref}
      className={cn(
        "motion-reveal",
        inView && "motion-reveal-visible",
        className
      )}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}