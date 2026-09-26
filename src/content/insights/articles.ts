export type ArticleStatus = "draft" | "published";

export interface ArticleAuthor {
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export type ArticleBlock =
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language?: string; code: string }
  | { type: "image"; image: ArticleImage };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "SEO" | "Search" | "AI Search" | "Digital Strategy" | "Technology" | "Growth";
  author?: ArticleAuthor;
  publishedAt?: string;
  updatedAt?: string;
  readingTime?: string;
  coverImage?: ArticleImage;
  content: ArticleBlock[];
  tags?: string[];
  status: ArticleStatus;
  seo?: { title?: string; description?: string };
}

/** Published articles are added here only after editorial review. */
export const articles: Article[] = [];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}