import React from "react";
import { cn } from "@/lib/utils/cn";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant?:
    | "display-2xl"
    | "display-xl"
    | "display-lg"
    | "heading-xl"
    | "heading-lg"
    | "heading-md";
}

export function Heading({
  as: Component = "h2",
  variant = "heading-lg",
  className,
  children,
  ...props
}: HeadingProps) {
  const variantClasses = {
    "display-2xl": "text-display-2xl tracking-tighter text-foreground font-bold",
    "display-xl": "text-display-xl tracking-tight text-foreground font-bold",
    "display-lg": "text-display-lg tracking-tight text-foreground font-semibold",
    "heading-xl": "text-heading-xl tracking-tight text-foreground font-semibold",
    "heading-lg": "text-heading-lg tracking-tight text-foreground font-semibold",
    "heading-md": "text-heading-md tracking-normal text-foreground font-medium",
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
