import Link from "next/link";

export function TableOfContents({ headings }: { headings: Array<{ id: string; text: string }> }) {
  if (headings.length < 2) return null;
  return (
    <nav aria-label="On this page" className="border-l border-border pl-5 lg:sticky lg:top-28">
      <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">On this page</p>
      <ol className="mt-4 space-y-3">
        {headings.map((heading) => <li key={heading.id}><Link href={`#${heading.id}`} className="text-sm text-foreground-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{heading.text}</Link></li>)}
      </ol>
    </nav>
  );
}