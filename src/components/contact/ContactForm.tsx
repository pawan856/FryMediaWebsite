"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { contactBudgets, ContactFormData } from "@/lib/contact/types";
import { validateContactForm } from "@/lib/contact/validation";
import { trackEvent } from "@/lib/analytics";
import { track } from "@/lib/analytics/track";
import { analyticsEvents } from "@/lib/analytics/events";
import { attributionStorageKey, readAttribution } from "@/lib/analytics/attribution";
import { cn } from "@/lib/utils/cn";

const initialData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "seo",
  message: "",
  budget: "",
  website_confirm: "",
};

const budgetLabels: Record<(typeof contactBudgets)[number], string> = {
  under_50k: "Under ₹50K",
  "50k_1l": "₹50K–₹1L",
  "1l_3l": "₹1L–₹3L",
  "3l_plus": "₹3L+",
  not_sure: "Not sure yet",
};

export function ContactForm() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const startedRef = useRef(false);
  const interactedFieldsRef = useRef(new Set<string>());

  useEffect(() => {
    track(analyticsEvents.contactFormView, { page: "/contact" });
    const service = new URLSearchParams(window.location.search).get("service");
    const attribution = readAttribution(sessionStorage.getItem(attributionStorageKey));
    setData((current) => ({ ...current, firstTouch: attribution ? JSON.stringify(attribution.firstTouch) : "", lastTouch: attribution ? JSON.stringify(attribution.lastTouch) : "", referrer: attribution?.referrer || "", ...(service === "seo" || service === "geo" ? { service } : {}) }));
  }, []);

  const update = (field: keyof ContactFormData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: "" }));
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("contact_form_start");
    }
    if (!interactedFieldsRef.current.has(field)) {
      interactedFieldsRef.current.add(field);
      track(analyticsEvents.contactFormFieldInteraction, { page: "/contact" });
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(data);
    if (!validation.success) {
      setErrors(validation.errors);
      trackEvent("contact_form_error");
      return;
    }

    setStatus("sending");
    setErrors({});
    setServerMessage("");
    trackEvent("contact_form_submit");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { success: boolean; message?: string; errors?: Record<string, string> };
      if (!response.ok || !result.success) {
        setErrors(result.errors || {});
        setServerMessage(result.message || "We couldn't send your message. Please try again.");
        setStatus("error");
        trackEvent("contact_form_error");
        return;
      }
      setStatus("success");
      trackEvent("contact_form_success");
    } catch {
      setServerMessage("We couldn't send your message. Please try again.");
      setStatus("error");
      trackEvent("contact_form_error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-accent/40 bg-background-elevated p-8 md:p-12" role="status" aria-live="polite">
        <span className="mb-8 flex h-10 w-10 items-center justify-center border border-accent text-accent"><Check className="h-5 w-5" /></span>
        <h2 className="text-heading-xl font-bold tracking-tight text-foreground">Message received.</h2>
        <p className="mt-4 max-w-md leading-relaxed text-foreground-muted">Thanks for reaching out. We&apos;ve got your message and will review it shortly.</p>
        <Link href="/" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          Back to FyrnMedia <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    );
  }

  const fieldClass = (field: string) => cn(
    "mt-2 w-full border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle",
    errors[field] ? "border-accent" : "border-border focus:border-accent"
  );

  return (
    <form onSubmit={submit} noValidate className="border border-border bg-background-elevated/40 p-6 md:p-10" aria-label="Start a conversation form">
      <input name="website_confirm" value={data.website_confirm} onChange={(event) => update("website_confirm", event.target.value)} className="absolute -left-[9999px] h-px w-px opacity-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" id="name" value={data.name} error={errors.name} required autoComplete="name" onChange={(value) => update("name", value)} />
        <Field label="Work email" id="email" type="email" value={data.email} error={errors.email} required autoComplete="email" onChange={(value) => update("email", value)} />
        <Field label="Company" id="company" value={data.company} autoComplete="organization" onChange={(value) => update("company", value)} />
        <Field label="Website" id="website" type="url" value={data.website} error={errors.website} placeholder="https://" autoComplete="url" onChange={(value) => update("website", value)} />
      </div>

      <div className="mt-6">
        <label htmlFor="service" className="text-sm font-medium text-foreground">What do you need help with? <span className="text-accent" aria-hidden="true">*</span></label>
        <select id="service" value={data.service} onChange={(event) => update("service", event.target.value)} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} className={fieldClass("service")}>
          <option value="seo">SEO</option>
          <option value="geo">AI Search / GEO (emerging capability)</option>
          <option value="something_else">Something else / exploring</option>
        </select>
        <ErrorMessage id="service-error" message={errors.service} />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Message <span className="text-accent" aria-hidden="true">*</span></label>
        <textarea id="message" rows={6} value={data.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell us a little about your business, your current challenge, and what you're hoping to achieve." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={fieldClass("message")} />
        <ErrorMessage id="message-error" message={errors.message} />
      </div>

      <div className="mt-6">
        <label htmlFor="budget" className="text-sm font-medium text-foreground">Budget <span className="text-foreground-subtle">(optional)</span></label>
        <select id="budget" value={data.budget} onChange={(event) => update("budget", event.target.value)} aria-invalid={Boolean(errors.budget)} className={fieldClass("budget")}>
          <option value="">Select a range</option>
          {contactBudgets.map((budget) => <option key={budget} value={budget}>{budgetLabels[budget]}</option>)}
        </select>
        <ErrorMessage id="budget-error" message={errors.budget} />
      </div>

      {serverMessage && <p className="mt-6 text-sm text-accent" role="alert">{serverMessage}</p>}
      <button type="submit" disabled={status === "sending"} className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2.5 bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-wait disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        {status === "sending" ? "Sending..." : "Start the Conversation"}
        {status === "sending" ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />}
      </button>
    </form>
  );
}

function Field({ label, id, value, error, onChange, type = "text", placeholder, required, autoComplete }: { label: string; id: string; value: string; error?: string; onChange: (value: string) => void; type?: string; placeholder?: string; required?: boolean; autoComplete?: string }) {
  const errorId = `${id}-error`;
  return <div>
    <label htmlFor={id} className="text-sm font-medium text-foreground">{label} {required && <span className="text-accent" aria-hidden="true">*</span>}</label>
    <input id={id} type={type} value={value} placeholder={placeholder} required={required} autoComplete={autoComplete} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={cn("mt-2 w-full border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle", error ? "border-accent" : "border-border focus:border-accent")} />
    <ErrorMessage id={errorId} message={error} />
  </div>;
}

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} className="mt-2 text-xs text-accent" role="alert">{message}</p> : null;
}