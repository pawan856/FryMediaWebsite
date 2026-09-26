# CRO Experiments

Experiments are disabled by default in `src/lib/experiments/config.ts`.
Do not enable a variant without recording the following:

- Experiment ID and owner
- Hypothesis and audience
- Control and variant definitions
- Primary metric: `contact_form_success`
- Secondary metrics: contact starts, qualified lead rate, and relevant CTA clicks
- Start and end dates
- Success criteria
- Result, decision, and learning

The site optimizes for qualified conversations, not raw clicks. A smaller number
of higher-quality leads can be a better outcome than a larger number of weak leads.
Variant assignment is session-stable and uses no fingerprinting. No experiment
should be enabled if it harms accessibility, performance, or form usability.

## Metric definitions

- Website lead conversion rate = successful leads / unique visitors
- Contact completion rate = successful submissions / form starts
- Qualified lead rate = qualified leads / total leads
- Opportunity rate = opportunities / qualified leads
- Won rate = won leads / opportunities

Analytics remains local-only unless `NEXT_PUBLIC_GA_ID` is configured. No event
payload includes names, email addresses, messages, or other lead content.