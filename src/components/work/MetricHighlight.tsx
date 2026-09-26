import { MetricHighlight as MetricHighlightData } from "@/data/caseStudies";

export function MetricHighlight({ metric }: { metric: MetricHighlightData }) {
  return (
    <div className="border-l border-accent pl-5">
      <div className="text-heading-xl font-bold tracking-tight text-foreground">{metric.value}</div>
      <div className="mt-1 text-xs font-mono uppercase tracking-widest text-accent">{metric.label}</div>
      {metric.description && <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{metric.description}</p>}
      {metric.source && <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">{metric.source}</p>}
    </div>
  );
}