import Image from "next/image";
import { ArticleBlock } from "@/content/insights/articles";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return <div className="prose-fyrn space-y-8">
    {blocks.map((block, index) => {
      if (block.type === "heading") {
        const Heading = block.level === 2 ? "h2" : "h3";
        return <Heading id={block.id} key={`${block.type}-${index}`} className="scroll-mt-28 pt-6 text-heading-lg font-bold tracking-tight text-foreground">{block.text}</Heading>;
      }
      if (block.type === "paragraph") return <p key={`${block.type}-${index}`} className="text-lg leading-relaxed text-foreground-muted">{block.text}</p>;
      if (block.type === "quote") return <blockquote key={`${block.type}-${index}`} className="border-l border-accent pl-6 text-xl leading-relaxed text-foreground">&ldquo;{block.text}&rdquo;{block.attribution && <cite className="mt-3 block text-sm not-italic text-foreground-subtle">{block.attribution}</cite>}</blockquote>;
      if (block.type === "list") return <ul key={`${block.type}-${index}`} className="list-disc space-y-3 pl-6 text-lg leading-relaxed text-foreground-muted">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
      if (block.type === "code") return <pre key={`${block.type}-${index}`} className="overflow-x-auto border border-border bg-background-elevated p-5 text-sm text-foreground-muted"><code>{block.code}</code></pre>;
      return <figure key={`${block.type}-${index}`}><Image src={block.image.src} alt={block.image.alt} width={block.image.width} height={block.image.height} className="h-auto w-full" loading="lazy" />{block.image.caption && <figcaption className="mt-3 text-xs text-foreground-subtle">{block.image.caption}</figcaption>}</figure>;
    })}
  </div>;
}