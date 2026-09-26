import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const problems = [
  ["I have traffic, but not enough enquiries.", "Search visibility", "Connect intent, experience, and conversion paths."],
  ["My website is difficult to discover.", "Technical SEO", "Clarify the architecture search systems need to crawl and interpret."],
  ["My content is inconsistent.", "Content strategy", "Build useful, structured information around real questions."],
  ["I do not know how AI search changes discovery.", "AI Search / GEO", "Create clearer entity and source signals without promising model control."],
] as const;

export function ProblemSolution() {
  return <section className="border-b border-border py-20 md:py-32"><Container size="wide"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-xs font-mono uppercase tracking-widest text-accent">Who this is for</p><h2 className="mt-6 text-display-lg font-bold tracking-tighter text-foreground">Businesses that want to be easier to find.</h2><p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">The starting point is usually a problem, not a predefined service. Bring the situation as it is; we will help create clarity around the next useful step.</p><Link href="/services" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Explore Services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></Link></div><div className="divide-y divide-border border-y border-border lg:col-span-6 lg:col-start-7">{problems.map(([problem, capability, response]) => <div key={problem} className="py-6"><p className="text-base font-semibold text-foreground">&ldquo;{problem}&rdquo;</p><p className="mt-3 text-xs font-mono uppercase tracking-widest text-accent">{capability}</p><p className="mt-2 text-sm leading-relaxed text-foreground-muted">{response}</p></div>)}</div></div></Container></section>;
}