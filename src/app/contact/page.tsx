import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/seo";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { WhatHappensNext } from "@/components/trust/WhatHappensNext";

export const metadata: Metadata = constructMetadata({
  title: "Contact FyrnMedia — Let's Talk",
  description: "Tell FyrnMedia what you are trying to achieve, where you are stuck, or what you would like to explore.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-16 md:py-28">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-accent">Start a conversation</p>
              <h2 className="mt-6 text-heading-xl font-bold tracking-tight text-foreground">Bring the messy version.</h2>
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground-muted">
                <p>Tell us about your business.</p><p>Tell us what you&apos;re trying to improve.</p><p>We&apos;ll review the context and get back to you.</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6"><ContactForm /></div>
          </div>
          <ContactFAQ />
          <WhatHappensNext />
        </Container>
      </section>
    </>
  );
}