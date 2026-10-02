import type { SiteLink } from "@/lib/constants/navigation";

export interface EditorialSection {
  id: string;
  title: string;
  body: string;
  points: string[];
}

export interface EditorialPageData {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  lead: string;
  useCases?: string[];
  sections: EditorialSection[];
  related?: SiteLink[];
  faqs?: Array<{ question: string; answer: string }>;
}

export const aiSearchVisibilityPage: EditorialPageData = {
  slug: "/services/ai-search-visibility",
  name: "AI Search Visibility",
  eyebrow: "Flagship service",
  title: "Be understood wherever people search.",
  description: "Build clearer, more useful signals for search engines and AI answer systems without chasing guaranteed placements.",
  lead: "AI Search Visibility connects technical foundations, answer-ready content, entity clarity and credible citations into one measurable discovery system.",
  useCases: ["A brand is difficult to find in answer-led search", "Search visibility is changing faster than reporting", "Brand and product information conflicts across sources", "A team needs a baseline before investing in AI search"],
  sections: [
    { id: "why-ai-search", title: "Search is expanding beyond the results page.", body: "People now discover information through classic search, generated summaries and conversational answer systems. The interfaces change; the fundamentals of clarity, usefulness and credible sources remain.", points: ["Understand where your audience searches", "Make important information easy to retrieve", "Measure visibility without promising inclusion"] },
    { id: "aeo", title: "Answer Engine Optimization", body: "Organize content around real questions and give each answer enough context to stand on its own.", points: ["Question intent and answer structure", "Clear sourcing and concise explanations", "Structured content that remains useful to people"] },
    { id: "geo", title: "Generative Engine Optimization", body: "Help generative systems interpret your organization and its expertise through consistent, useful, well-supported information.", points: ["Entity and topic relationships", "Content retrieval and source quality", "Brand mentions and citation context"] },
    { id: "ai-overviews", title: "Google AI Overviews", body: "Strengthen the technical and editorial conditions that can make content eligible for AI-generated search features. Eligibility is not a guarantee of appearance.", points: ["Search intent and content coverage", "Technical accessibility and structured data", "Observation of query and page visibility"] },
    { id: "ai-audits", title: "Visibility audits and monitoring", body: "Establish a baseline before deciding what to change. An audit connects observed mentions and citations to the underlying content and technical signals.", points: ["Priority prompt and query set", "Brand mention and citation review", "Action plan with measurable follow-up"] },
    { id: "entity-seo", title: "Entity SEO and knowledge graphs", body: "Make relationships between your brand, people, products and subject areas consistent across the sources you control.", points: ["Entity naming and disambiguation", "Structured data and connected references", "Consistency across key brand sources"] },
    { id: "ai-citation-building", title: "Credible citations and digital PR", body: "Earn relevant editorial references by contributing useful expertise and evidence. This is authority-building, not bulk link placement.", points: ["Relevant publications and expert sources", "Original insight and useful contribution", "Editorial credibility over volume"] },
    { id: "system", title: "How the system works", body: "Begin with a documented baseline, prioritize the clearest gaps, improve the source material and technical foundations, then repeat the same observations to learn what changed.", points: ["Discover and agree the query set", "Audit content, entities and source signals", "Prioritize and implement improvements", "Monitor with dates, context and stated limits"] },
    { id: "measurement", title: "A system you can measure", body: "Search interfaces and datasets evolve, so measurement should combine repeatable observations with durable business signals.", points: ["Documented queries and observation dates", "Organic discovery and assisted conversions", "Clear limits and confidence in reported findings"] },
  ],
  related: [
    { name: "SEO", href: "/services/seo" },
    { name: "AI Search Visibility Audit", href: "/ai-visibility-audit" },
    { name: "Selected work", href: "/work" },
  ],
  faqs: [
    { question: "Can you guarantee citations or AI Overview inclusion?", answer: "No. Search and answer systems control their own results. We improve discoverability, clarity and source quality, then measure observed outcomes without promising placement." },
    { question: "Is AI Search Visibility separate from SEO?", answer: "It builds on strong SEO foundations and adds work around answer formats, entity understanding, source selection and repeatable AI-search observations." },
    { question: "How do you measure progress?", answer: "We agree a query set and baseline, record visible mentions and citations over time, and connect those observations to organic discovery and qualified outcomes where data permits." },
  ],
};

export const servicePages: EditorialPageData[] = [
  {
    slug: "content-marketing", name: "AI-Powered Content & Social", eyebrow: "Content and audience", title: "Make every message useful.",
    description: "A thoughtful content and social practice that combines human editorial judgment with carefully applied AI assistance.",
    lead: "We build a repeatable content system around audience questions, brand voice and clear distribution goals. AI can support research and production; people remain responsible for accuracy, originality and approval.",
    useCases: ["An editorial workflow needs clearer review and ownership", "Content must serve both discovery and customer education", "A team wants responsible AI assistance without unattended publishing"],
    sections: [
      { id: "ai-content", title: "AI-assisted content production", body: "Use AI to accelerate defined parts of the workflow while keeping subject expertise, editorial review and source checking at the center.", points: ["Briefs built from audience intent", "Human-reviewed drafts and source validation", "Reusable editorial standards"] },
      { id: "social-media", title: "Social media", body: "Plan useful, native content for the channels your audience uses rather than copying the same post everywhere.", points: ["Channel and audience fit", "Editorial calendars and creative testing", "Community signals and learning loops"] },
      { id: "email", title: "Email and automation", body: "Create relevant lifecycle communication with clear permission, segmentation and a useful reason to send.", points: ["Lifecycle and nurture planning", "Consent-aware segmentation", "Deliverability and engagement measurement"] },
    ],
    related: [{ name: "AI Search Visibility", href: "/services/ai-search-visibility" }, { name: "Analytics & Strategy", href: "/services/analytics-strategy" }],
    faqs: [{ question: "Does AI write and publish content without review?", answer: "No. AI may assist specific workflow steps, but a qualified person reviews accuracy, usefulness, voice and source quality before publication." }, { question: "Can you work with our in-house team?", answer: "Yes. The system can be scoped around strategy, production, review workflows or distribution support." }],
  },
  {
    slug: "performance-marketing", name: "Performance Marketing", eyebrow: "Paid acquisition", title: "Spend with a clearer signal.",
    description: "Paid acquisition and conversion improvement grounded in audience intent, reliable measurement and commercial context.",
    lead: "Performance marketing works best when campaign decisions connect to the customer journey and business economics, not just platform-reported activity.",
    useCases: ["Paid campaigns need clearer query and landing-page alignment", "Teams need a repeatable creative testing plan", "Conversion friction is obscuring campaign quality"],
    sections: [
      { id: "paid-search", title: "Paid search", body: "Structure search campaigns around intent, landing-page fit and a measurement plan agreed before launch.", points: ["Query and audience mapping", "Campaign structure and landing alignment", "Search-term review and budget governance"] },
      { id: "paid-social", title: "Paid social", body: "Test audience, creative and offer hypotheses with a clear learning question for each campaign.", points: ["Audience and placement planning", "Creative test design", "Frequency and quality monitoring"] },
      { id: "conversion", title: "Conversion rate optimization", body: "Find friction in high-intent journeys and test improvements without treating every change as a guaranteed lift.", points: ["Journey and form review", "Prioritized experiment backlog", "Outcome measurement and documentation"] },
    ],
    related: [{ name: "Analytics & Strategy", href: "/services/analytics-strategy" }, { name: "Web & Technical Build", href: "/services/web-development" }],
  },
  {
    slug: "ai-automation", name: "Marketing Automation & AI Workflows", eyebrow: "Connected workflows", title: "Give good systems the busywork.",
    description: "Practical workflow automation that reduces repetitive work while keeping people in control of consequential decisions.",
    lead: "We map the work first, then decide where automation is safe, useful and measurable. Human review remains part of workflows that affect customers or business decisions.",
    useCases: ["Manual lead routing causes avoidable hand-offs", "Recurring reporting takes time away from analysis", "AI workflow proposals need permissions, review and fallback design"],
    sections: [
      { id: "agents", title: "AI agents and workflow automation", body: "Connect bounded tasks to approved tools and information sources, with clear permissions and fallback paths.", points: ["Workflow mapping and risk review", "Human approval for consequential actions", "Logging, ownership and exception handling"] },
      { id: "crm", title: "CRM and lead flow", body: "Reduce manual hand-offs and improve the context teams have when a lead arrives.", points: ["Lead routing and lifecycle rules", "Data quality and duplicate handling", "Consent and access controls"] },
      { id: "reporting", title: "AI reporting dashboards", body: "Make reporting easier to explore while keeping source data, definitions and limitations visible.", points: ["Metric definitions and data lineage", "Accessible summaries and drill-downs", "Human verification of generated interpretation"] },
    ],
    related: [{ name: "Analytics & Strategy", href: "/services/analytics-strategy" }, { name: "Contact FyrnMedia", href: "/contact" }],
  },
  {
    slug: "web-development", name: "Web & Technical Build", eyebrow: "Digital experience", title: "Build for people and discovery.",
    description: "Fast, accessible web experiences with technical foundations for evolving search and AI discovery.",
    lead: "We connect content structure, accessible interaction and technical performance so a website remains useful to people and understandable to machines.",
    useCases: ["A website needs stronger performance or accessibility foundations", "A migration needs URL and content continuity", "An existing site is difficult for people and search systems to navigate"],
    sections: [
      { id: "websites", title: "AI-ready websites", body: "AI-ready means clear information architecture, accessible content and reliable technical delivery, not a promise of inclusion in any system.", points: ["Next.js and modern web foundations", "Semantic markup and structured data", "Performance and accessibility validation"] },
      { id: "migration", title: "Site migration and replatforming", body: "Plan the move around URL continuity, content quality and observable launch checks.", points: ["Inventory and redirect mapping", "Staged migration and validation", "Post-launch monitoring"] },
    ],
    related: [{ name: "SEO", href: "/services/seo" }, { name: "AI Search Visibility", href: "/services/ai-search-visibility" }],
  },
  {
    slug: "analytics-strategy", name: "Analytics & Strategy", eyebrow: "Measurement and decisions", title: "Turn data into the next decision.",
    description: "Measurement plans and growth strategy grounded in reliable signals, clear definitions and business priorities.",
    lead: "Before adding dashboards, we clarify which decisions matter and what evidence can support them. Tracking should be useful, privacy-conscious and maintainable.",
    useCases: ["Leadership reporting relies on inconsistent definitions", "Marketing outcomes need clearer attribution context", "A growth roadmap needs to be prioritized against evidence and capacity"],
    sections: [
      { id: "ga4", title: "GA4 and server-side tracking", body: "Implement measurement around a documented event model and check that collected data supports the questions the team needs to answer.", points: ["Event and conversion definitions", "Consent-aware implementation", "Quality assurance and documentation"] },
      { id: "attribution", title: "Attribution and revenue reporting", body: "Compare touchpoints with an honest view of what attribution can and cannot establish.", points: ["Source and campaign governance", "Revenue and pipeline alignment", "Limitations made visible"] },
      { id: "growth-strategy", title: "Digital growth strategy", body: "Prioritize a focused roadmap based on customer needs, market context and delivery capacity.", points: ["Opportunity and constraint mapping", "Sequenced experiments and initiatives", "Review cadence tied to outcomes"] },
    ],
    related: [{ name: "Performance Marketing", href: "/services/performance-marketing" }, { name: "AI Search Visibility", href: "/services/ai-search-visibility" }],
  },
];

export const capabilityPages: EditorialPageData[] = [
  {
    slug: "aeo", name: "Answer Engine Optimization", eyebrow: "AI Search Visibility / AEO", title: "Be useful in the answer.",
    description: "Answer Engine Optimization makes information easier to understand, retrieve and cite across answer-led search experiences.",
    lead: "AEO starts with the question behind a search. It structures accurate, sufficiently contextual answers and supports them with clear entities and credible sources.",
    sections: [
      { id: "answer-engines", title: "How answer engines work", body: "Answer systems retrieve and synthesize information from multiple sources. Their methods vary and can change, so no single markup or format guarantees selection.", points: ["Map question and follow-up intent", "Make source material understandable", "Review answers across a documented query set"] },
      { id: "answer-structure", title: "Build clear, complete answers", body: "A useful answer can be concise without losing the context a reader needs to judge it.", points: ["Direct explanations with supporting detail", "Consistent terms and entity relationships", "Accessible structure that works beyond AI search"] },
      { id: "measurement", title: "Measure observable visibility", body: "Record what appears for agreed questions, when it appears and which sources are cited.", points: ["Repeatable prompt and query tracking", "Citation and brand-mention review", "No guaranteed answer placement"] },
    ], related: [{ name: "AI Search Visibility", href: "/services/ai-search-visibility" }, { name: "GEO", href: "/geo" }],
  },
  {
    slug: "geo", name: "Generative Engine Optimization", eyebrow: "AI Search Visibility / GEO", title: "Make your expertise easier to retrieve.",
    description: "Generative Engine Optimization focuses on how generative search systems interpret, retrieve and cite useful information about a brand.",
    lead: "GEO connects entity understanding, source quality, content retrieval and credible brand mentions. It complements SEO; it does not replace sound technical and editorial foundations.",
    sections: [
      { id: "generative-search", title: "Generative search is a source problem", body: "Generated responses depend on information that systems can retrieve and interpret. Useful, consistent sources create stronger foundations than tricks aimed at one model.", points: ["Clarify expertise and topic relationships", "Make key information accessible and current", "Support claims with credible sources"] },
      { id: "retrieval", title: "Improve retrieval context", body: "Organize information so systems and readers can identify what a page covers and how it relates to other trusted sources.", points: ["Distinct, complete topical pages", "Entity consistency and structured data", "Useful internal links and source references"] },
      { id: "mentions", title: "Earn relevant mentions", body: "Build visibility through relevant editorial contribution and credible references, not manufactured mention volume.", points: ["Source and publication relevance", "Expert contribution and evidence", "Observed citation patterns over time"] },
    ], related: [{ name: "AI Search Visibility", href: "/services/ai-search-visibility" }, { name: "Entity SEO", href: "/entity-seo" }],
  },
  {
    slug: "ai-overviews-optimization", name: "Google AI Overviews Optimization", eyebrow: "AI Search Visibility / Google AI Overviews", title: "Strengthen the signals that matter.",
    description: "Improve technical accessibility, entity relevance and content quality for visibility in evolving Google AI search experiences.",
    lead: "There is no reliable method to guarantee an AI Overview appearance. We focus on search fundamentals, clear evidence and measurement of observed eligibility and visibility.",
    sections: [
      { id: "eligibility", title: "Content eligibility starts with usefulness", body: "Pages need to address a real need with clear, accurate information. A page can be eligible without appearing for every query.", points: ["Intent-specific coverage", "Distinctive expertise and source quality", "Avoiding unsupported claims and repetition"] },
      { id: "technical-foundations", title: "Technical foundations", body: "Make important pages crawlable, understandable and consistent with your canonical site structure.", points: ["Indexing and rendering checks", "Structured data that matches visible content", "Internal links and canonical hygiene"] },
      { id: "monitoring", title: "Measure what actually appears", body: "Track a stable set of queries and record observed results with dates and market context.", points: ["Baseline and repeatable observations", "Organic traffic and conversion context", "No promise of guaranteed inclusion"] },
    ], related: [{ name: "AI Search Visibility", href: "/services/ai-search-visibility" }, { name: "SEO", href: "/services/seo" }],
  },
  {
    slug: "ai-visibility-audit", name: "AI Visibility Audit", eyebrow: "A clear starting point", title: "Find out what systems can see.",
    description: "A structured review of search visibility, AI mentions, entity signals, citations and technical discoverability.",
    lead: "An audit establishes an evidence-based baseline and a prioritized plan. It reports observed signals and limitations rather than claiming access to private model data.",
    sections: [
      { id: "audit-scope", title: "What we review", body: "Scope is agreed around your brand, audience, markets and priority discovery questions.", points: ["Search query and AI answer observations", "Brand mentions, citation context and source quality", "Entity consistency, content and technical access"] },
      { id: "audit-deliverables", title: "What you receive", body: "A useful audit turns observations into clear decisions and owners.", points: ["Documented visibility baseline and methodology", "Priority issues with evidence and impact context", "Sequenced recommendations and measurement plan"] },
      { id: "audit-follow-up", title: "A practical next step", body: "Recommendations can be implemented by your team or scoped into a follow-up engagement.", points: ["No fabricated scores or scan results", "Clear explanation of uncertainty", "A review cadence based on observable signals"] },
    ], related: [{ name: "AI Search Visibility", href: "/services/ai-search-visibility" }, { name: "Start your audit", href: "/audit" }],
  },
  {
    slug: "entity-seo", name: "Entity SEO & Knowledge Graph", eyebrow: "AI Search Visibility / Entity SEO", title: "Make the relationships clear.",
    description: "Entity SEO improves how a brand, its people, products and expertise are represented across connected sources.",
    lead: "Search systems need to distinguish entities and understand their relationships. Consistency across useful sources is more valuable than adding markup that does not reflect reality.",
    sections: [
      { id: "entity-identity", title: "Define the entities that matter", body: "Start with stable names, descriptions and identifiers for your organization and its important offerings.", points: ["Brand and product identity", "People, places and organizational relationships", "Disambiguation and source review"] },
      { id: "knowledge-graph", title: "Connect useful relationships", body: "Represent relationships consistently in content and structured data that matches visible information.", points: ["Semantic internal links", "Structured data aligned with page content", "Consistent references across owned sources"] },
      { id: "entity-measurement", title: "Validate the graph over time", body: "Check important sources and search surfaces for conflicting or missing information.", points: ["Source inventory and discrepancy review", "Change tracking and ownership", "Visibility observations without guarantee"] },
    ], related: [{ name: "GEO", href: "/geo" }, { name: "SEO", href: "/services/seo" }],
  },
  {
    slug: "ai-citation-building", name: "AI Citation & Digital PR", eyebrow: "AI Search Visibility / Credible sources", title: "Earn attention worth citing.",
    description: "Build editorial visibility through relevant expertise, credible references and digital PR grounded in useful contribution.",
    lead: "Citation building is about becoming a relevant, trustworthy source. We prioritize fit and editorial value instead of spammy outreach or bulk backlink schemes.",
    sections: [
      { id: "citation-opportunities", title: "Find relevant citation opportunities", body: "Map the publications, expert sources and reference pages that genuinely shape your category.", points: ["Audience and subject relevance", "Source quality and editorial standards", "Gap analysis from observed citations"] },
      { id: "editorial-contribution", title: "Contribute something credible", body: "Earn attention with original insight, verifiable evidence and responsive expert contribution.", points: ["Expert commentary and useful research", "Journalist and editor relevance", "Transparent sourcing and claims"] },
      { id: "authority-measurement", title: "Measure quality, not volume", body: "Review whether references are relevant, accurate and useful to the people you want to reach.", points: ["Editorial context and brand accuracy", "Referral and search visibility signals", "No paid or fabricated citation claims"] },
    ], related: [{ name: "AI Search Visibility", href: "/services/ai-search-visibility" }, { name: "Content & Social", href: "/services/content-marketing" }],
  },
];

export const industries: EditorialPageData[] = [
  { slug: "saas-b2b-tech", name: "SaaS & B2B Tech", eyebrow: "Industries", title: "Complex products need clear discovery.", description: "Search, content and measurement for SaaS and B2B technology teams with considered buying journeys.", lead: "We connect technical product information, buying-group questions and trusted category expertise into a coherent discovery system.", sections: [{ id: "buying-journey", title: "Support the whole buying group", body: "B2B discovery involves multiple roles, technical questions and long evaluation cycles.", points: ["Map research questions by role and stage", "Connect product detail to customer problems", "Measure qualified interest, not only visits"] }, { id: "technical-trust", title: "Make complexity understandable", body: "Clear architecture helps people evaluate the product and helps search systems interpret the category.", points: ["Technical and use-case content", "Entity clarity across products and integrations", "Evidence-led category education"] }], related: [{ name: "SEO", href: "/services/seo" }, { name: "AI Search Visibility", href: "/services/ai-search-visibility" }] },
  { slug: "ecommerce-d2c", name: "E-commerce & D2C", eyebrow: "Industries", title: "Make product discovery easier.", description: "Organic visibility, paid acquisition and conversion foundations for e-commerce and direct-to-consumer teams.", lead: "Product discovery depends on useful information, a healthy catalog, clear measurement and a buying experience that works across devices.", sections: [{ id: "catalog-discovery", title: "Catalog discovery", body: "Help customers and crawlers navigate product ranges without duplicating or obscuring useful content.", points: ["Category and product architecture", "Faceted navigation and canonical planning", "Product details that answer real questions"] }, { id: "commerce-measurement", title: "Measure the journey", body: "Connect discovery to product engagement and revenue data with definitions the team can trust.", points: ["Search and shopping intent", "Consent-aware conversion measurement", "Landing and checkout friction review"] }], related: [{ name: "Performance Marketing", href: "/services/performance-marketing" }, { name: "Analytics & Strategy", href: "/services/analytics-strategy" }] },
  { slug: "healthcare", name: "Healthcare", eyebrow: "Industries", title: "Make important information easier to trust.", description: "Careful content and technical discovery for healthcare organizations, with accuracy and review built into the process.", lead: "Healthcare information can affect important decisions. Work should be reviewed by qualified subject-matter and compliance owners before publication.", sections: [{ id: "health-content", title: "Accuracy before reach", body: "Content planning starts with audience needs and a clear review process for sensitive claims.", points: ["Qualified expert review", "Clear sourcing and update ownership", "Accessible language and page structure"] }, { id: "health-discovery", title: "Reliable discovery foundations", body: "Technical access and consistent organizational information help people find the right service details.", points: ["Local and service information consistency", "Accessible mobile experiences", "Measurement aligned to enquiries and access needs"] }] },
  { slug: "real-estate", name: "Real Estate", eyebrow: "Industries", title: "Connect local intent to useful detail.", description: "Local discovery and digital experiences for property, place and real estate organizations.", lead: "Real-estate discovery is shaped by geography, property detail and trust. Clear data and useful local content make those connections easier to navigate.", sections: [{ id: "local-discovery", title: "Local discovery", body: "Align location information and service pages with how people search across neighborhoods and markets.", points: ["Location and service architecture", "Consistent business details", "Useful local market information"] }, { id: "property-experience", title: "Property information that works", body: "Make listings and property resources clear, indexable and accessible across devices.", points: ["Structured property information", "Page performance and mobile experience", "Lead journey measurement"] }] },
  { slug: "education", name: "Education", eyebrow: "Industries", title: "Help learners find the right next step.", description: "Search and content systems for education providers and learning platforms.", lead: "Prospective learners compare programs, formats and outcomes. Useful information architecture makes that evaluation clearer without overstating outcomes.", sections: [{ id: "program-discovery", title: "Program discovery", body: "Connect program details to the questions learners and families ask at each decision stage.", points: ["Course and qualification structure", "Admissions and eligibility information", "Accessible learning journeys"] }, { id: "education-measurement", title: "Measure meaningful enquiries", body: "Track discovery and enquiry quality while keeping claims about learning outcomes evidence-based.", points: ["Content and channel attribution", "Lead journey measurement", "Review of claims and source material"] }] },
  { slug: "financial-services", name: "Financial Services", eyebrow: "Industries", title: "Make complex choices easier to understand.", description: "Search visibility and content foundations for financial services, with careful review of regulated claims.", lead: "Financial topics require precision and context. Strategy should include qualified review, clear sourcing and a transparent approval process.", sections: [{ id: "financial-content", title: "Clarity with appropriate care", body: "Explain products and concepts in language audiences can understand while routing claims through qualified reviewers.", points: ["Claim and source review", "Clear product and eligibility information", "Content governance and update ownership"] }, { id: "financial-discovery", title: "Reliable discovery and measurement", body: "Technical foundations and privacy-aware measurement support a more dependable view of discovery.", points: ["Crawl and structured data review", "Consent-aware analytics", "Outcome reporting with limitations stated"] }] },
];

export const glossaryTerms = [
  { term: "Answer Engine Optimization", slug: "answer-engine-optimization", short: "A practice for structuring useful, accurate information so answer-led search experiences can interpret and retrieve it.", detail: "Answer Engine Optimization (AEO) focuses on question intent, clear answer structure, supporting context and trustworthy sources. It does not guarantee a particular answer placement." },
  { term: "Generative Engine Optimization", slug: "generative-engine-optimization", short: "Work that improves how generative search systems interpret and retrieve information about a brand and its expertise.", detail: "GEO brings together clear entities, useful content, source quality and repeatable observations of mentions and citations. The methods and systems continue to evolve." },
  { term: "Entity SEO", slug: "entity-seo", short: "The practice of clarifying people, organizations, products and concepts and the relationships between them.", detail: "Entity SEO uses consistent language, connected content and structured data that matches visible information to reduce ambiguity for people and search systems." },
  { term: "AI Search Visibility", slug: "ai-search-visibility", short: "The observable presence of a brand or its information in AI-assisted discovery and answer experiences.", detail: "AI search visibility can be monitored across a defined query set, with dated observations and clear limitations. It is not a guaranteed score or placement." },
  { term: "Canonical URL", slug: "canonical-url", short: "The preferred URL for a page when multiple URL variants could represent similar content.", detail: "A canonical URL is declared in page metadata to identify the preferred address. Redirects and consistent internal links help reinforce that choice." },
];

export function getCapabilityPage(slug: string) {
  return capabilityPages.find((page) => page.slug === slug);
}

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((page) => page.slug === slug);
}