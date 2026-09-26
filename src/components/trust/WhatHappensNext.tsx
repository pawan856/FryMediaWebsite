import { Container } from "@/components/ui/Container";

const steps = ["You tell us what you’re working on.", "We review the context.", "We discuss whether there’s a fit.", "We recommend the next step."];

export function WhatHappensNext() {
  return <section className="border-t border-border py-16 md:py-24"><Container size="wide"><div className="grid gap-8 md:grid-cols-3"><div><p className="text-xs font-mono uppercase tracking-widest text-accent">What happens next?</p><h2 className="mt-5 text-heading-xl font-bold tracking-tight text-foreground">A conversation, not a funnel.</h2></div><ol className="grid gap-5 md:col-span-2 sm:grid-cols-2">{steps.map((step, index) => <li key={step} className="border-l border-border pl-4"><span className="text-xs font-mono text-accent">0{index + 1}</span><p className="mt-3 text-sm leading-relaxed text-foreground-muted">{step}</p></li>)}</ol></div></Container></section>;
}