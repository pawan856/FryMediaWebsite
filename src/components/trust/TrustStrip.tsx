import { Container } from "@/components/ui/Container";

const capabilities = ["SEO", "Technical Search", "Content", "AI Search", "Digital Strategy"];

export function TrustStrip() {
  return <section aria-label="FyrnMedia capability areas" className="border-y border-border bg-background-elevated/40"><Container size="wide"><div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-5"><p className="col-span-2 border-b border-border py-4 text-[10px] font-mono uppercase tracking-widest text-foreground-subtle sm:col-span-1 sm:border-b-0 sm:py-5">Capability areas</p>{capabilities.map((item) => <span key={item} className="border-b border-border px-3 py-4 text-center text-[10px] font-mono uppercase tracking-widest text-foreground-muted last:border-b-0 sm:border-b-0 sm:py-5">{item}</span>)}</div></Container></section>;
}