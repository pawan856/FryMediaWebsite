"use client";

import { Container } from "@/components/ui/Container";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] items-center border-b border-border py-24">
      <Container size="wide">
        <div className="max-w-xl">
          <p className="mb-6 text-xs font-mono uppercase tracking-widest text-accent">500 / Temporary Interruption</p>
          <h1 className="text-display-xl font-bold tracking-tighter text-foreground">The signal dropped.</h1>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted">
            Something interrupted this page. Please try the request again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-10 border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Try again
          </button>
        </div>
      </Container>
    </section>
  );
}