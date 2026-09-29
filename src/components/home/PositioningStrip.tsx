"use client";

import React from "react";

const ITEMS = [
  "AI for Everyday Life",
  "Human-Centered Technology",
  "Practical AI",
  "Digital Experiences",
  "Smarter Strategy",
  "SEO Engineering",
  "Content Architecture",
  "Technical Performance",
  "Organic Growth",
  "Search Visibility",
  "Web Experiences",
];

export function PositioningStrip() {
  return (
    <div
      className="relative w-full border-y border-border bg-background-elevated/50 py-4 overflow-hidden"
      aria-label="FyrnMedia capabilities"
    >
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background-elevated/80 to-transparent" aria-hidden="true" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background-elevated/80 to-transparent" aria-hidden="true" />

      {/* The scrolling track — doubled for seamless loop */}
      <div
        className="flex items-center gap-0 whitespace-nowrap animate-marquee will-change-transform hover:[animation-play-state:paused]"
        style={{ animationDuration: "40s" }}
        aria-hidden="true"
      >
        {/* Two copies for seamless loop */}
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-xs font-mono uppercase tracking-widest text-foreground-subtle px-6">
              {item}
            </span>
            <span className="text-foreground-dim font-mono text-xs" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
