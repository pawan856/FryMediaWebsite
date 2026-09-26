"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { track } from "@/lib/analytics/track";

interface TrackedLinkProps extends LinkProps {
  event: AnalyticsEvent;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function TrackedLink({ event, children, className, ariaLabel, ...props }: TrackedLinkProps) {
  return <Link {...props} className={className} aria-label={ariaLabel} onClick={() => track(event, { page: window.location.pathname })}>{children}</Link>;
}