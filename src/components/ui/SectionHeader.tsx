import React from "react";
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "split";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  if (align === "split") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 md:mb-16",
          className
        )}
        {...props}
      >
        <div className="lg:col-span-7 space-y-4">
          {badge && (
            <Badge variant="accent" showDot>
              {badge}
            </Badge>
          )}
          <Heading as="h2" variant="display-lg">
            {title}
          </Heading>
        </div>
        {description && (
          <div className="lg:col-span-5">
            <Text variant="lead">{description}</Text>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "space-y-4 mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
      {...props}
    >
      {badge && (
        <div>
          <Badge variant="accent" showDot>
            {badge}
          </Badge>
        </div>
      )}
      <Heading as="h2" variant="display-lg">
        {title}
      </Heading>
      {description && <Text variant="lead">{description}</Text>}
    </div>
  );
}
