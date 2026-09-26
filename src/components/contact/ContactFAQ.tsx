export function ContactFAQ() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-3">
        <div><p className="text-xs font-mono uppercase tracking-widest text-accent">Before you send</p></div>
        <div className="space-y-8 md:col-span-2">
          <div><h2 className="text-base font-semibold text-foreground">What happens after I submit?</h2><p className="mt-2 text-sm leading-relaxed text-foreground-muted">We&apos;ll review your message and get back to you with a considered next step.</p></div>
          <div><h2 className="text-base font-semibold text-foreground">Do I need to know exactly what I need?</h2><p className="mt-2 text-sm leading-relaxed text-foreground-muted">No. A clear description of the challenge is enough to start the conversation.</p></div>
          <div><h2 className="text-base font-semibold text-foreground">Can I contact FyrnMedia about SEO?</h2><p className="mt-2 text-sm leading-relaxed text-foreground-muted">Yes. SEO is our active service, and the form can help you give us the right context.</p></div>
        </div>
      </div>
    </section>
  );
}