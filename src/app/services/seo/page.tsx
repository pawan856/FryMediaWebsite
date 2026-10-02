import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { SeoHero } from "@/components/seo/SeoHero";
import { WhatSeoMeansToday } from "@/components/seo/WhatSeoMeansToday";
import { SeoPillars } from "@/components/seo/SeoPillars";
import { SeoPracticeAreas } from "@/components/seo/SeoPracticeAreas";
import { TechnicalSeoSection } from "@/components/seo/TechnicalSeoSection";
import { SearchStrategySection } from "@/components/seo/SearchStrategySection";
import { ContentSection } from "@/components/seo/ContentSection";
import { LocalSeoSection } from "@/components/seo/LocalSeoSection";
import { AiSearchSection } from "@/components/seo/AiSearchSection";
import { SeoProcess } from "@/components/seo/SeoProcess";
import { SeoDeliverables } from "@/components/seo/SeoDeliverables";
import { WhatWeDontDo } from "@/components/seo/WhatWeDontDo";
import { MeasurementSection } from "@/components/seo/MeasurementSection";
import { SeoFAQ } from "@/components/seo/SeoFAQ";
import { SeoCTA } from "@/components/seo/SeoCTA";
import { Breadcrumbs, SeoServiceStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = constructMetadata({
  title: "SEO Services — Search Visibility & Organic Growth | FyrnMedia",
  description:
    "FyrnMedia SEO spans technical foundations, semantic and on-page work, topical authority, digital PR, local, e-commerce, SaaS/B2B, and international search.",
  path: "/services/seo",
});

export default function SeoServicePage() {
  return (
    <>
      <SeoServiceStructuredData />
      <div className="seo-hero-composition relative isolate overflow-hidden border-b border-border">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "SEO" },
          ]}
        />
        {/* 1. SEO Hero with SearchFlow Visual */}
        <SeoHero />
      </div>

      {/* 2. What SEO Means Today */}
      <WhatSeoMeansToday />

      {/* 3. The 6 SEO Pillars */}
      <SeoPillars />

      <SeoPracticeAreas />

      {/* 4. Technical SEO Deep Dive with CrawlGraph */}
      <TechnicalSeoSection />

      {/* 5. Search Strategy with IntentMap */}
      <SearchStrategySection />

      {/* 6. Content Architecture with Cluster Topology */}
      <ContentSection />

      {/* 7. Local & Regional Search Presence */}
      <LocalSeoSection />

      {/* 8. AI Search & Generative Engine Optimization (GEO) */}
      <AiSearchSection />

      {/* 9. 6-Stage SEO Process */}
      <SeoProcess />

      {/* 10. Concrete Technical Deliverables */}
      <SeoDeliverables />

      {/* 11. What We Don't Do (Anti-Shortcuts Manifesto) */}
      <WhatWeDontDo />

      {/* 12. Commercial Measurement Framework */}
      <MeasurementSection />

      {/* 13. Accessible SEO FAQ */}
      <SeoFAQ />

      {/* 14. Closing CTA */}
      <SeoCTA />
    </>
  );
}
