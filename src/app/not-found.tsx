import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center border-b border-border py-24">
      <Container size="wide">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-mono uppercase tracking-widest text-accent">404 / Signal Lost</p>
          <h1 className="text-display-xl font-bold tracking-tighter text-foreground">This page is not available.</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
            The address may have changed, or the page may never have existed.
          </p>
          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-2.5 border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Return home
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}