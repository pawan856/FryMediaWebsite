"use client";

import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

export function ArticleShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  useEffect(() => setShareUrl(encodeURIComponent(window.location.href)), []);
  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground-subtle">
    <span>Share</span>
    <button type="button" onClick={copyLink} className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="Copy article link">{copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />} {copied ? "Copied" : "Copy link"}</button>
    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label={`Share ${title} on LinkedIn`}>LinkedIn</a>
    <a href={`https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label={`Share ${title} on X`}>X</a>
  </div>;
}