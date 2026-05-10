import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — Grow AI Recruiting Platform",
  description:
    "Simple, predictable pricing for every stage of growth. From your first 5 hires to enterprise scale — no per-seat chaos, no hidden fees.",
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-dim)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
      {children}
    </p>
  );
}

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    description: "For lean teams making their first 5–10 hires.",
    features: [
      "Up to 3 active roles",
      "AI sourcing & async screening",
      "Interview Copilot (5 interviews/mo)",
      "Candidate pipeline",
      "Email inbox",
      "Basic analytics dashboard",
      "Email support",
    ],
    cta: "Get started",
    ctaHref: "https://app.grow.contact",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    period: "/mo",
    description: "For scaling teams hiring across multiple functions.",
    features: [
      "Up to 15 active roles",
      "Everything in Starter",
      "Unlimited Interview Copilot",
      "Outreach automation",
      "Predictive analytics",
      "ATS integrations",
      "Slack notifications",
      "Priority support",
    ],
    cta: "Start free trial",
    ctaHref: "https://app.grow.contact",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume teams with custom security and compliance needs.",
    features: [
      "Unlimited roles",
      "Everything in Growth",
      "SSO / SAML",
      "Custom AI calibration",
      "Dedicated CSM",
      "SLA + uptime guarantee",
      "Custom contracts",
      "GDPR data processing agreement",
    ],
    cta: "Talk to sales",
    ctaHref: "/contact",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. Growth and Starter plans come with a 14-day free trial, no credit card required. You can source candidates and run interviews before committing.",
  },
  {
    q: "What counts as an \"active role\"?",
    a: "An active role is any open requisition you're sourcing or screening for. You can archive roles at any time and they won't count against your limit.",
  },
  {
    q: "How does Interview Copilot billing work?",
    a: "On the Starter plan, you get 5 Interview Copilot sessions per month. On Growth and above, sessions are unlimited. A session is one meeting joined by Grow.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the next billing cycle.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Annual billing comes with a 20% discount compared to monthly pricing. Contact us to switch to an annual plan.",
  },
  {
    q: "What integrations are included?",
    a: "All plans include Zoom, Google Meet, and Microsoft Teams for Interview Copilot. Growth and above unlock ATS integrations (Greenhouse, Lever, Ashby) and Slack.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-24 text-center md:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(ellipse at center, #2dd4a0 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Tag>Pricing</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Simple, predictable pricing.
            </h1>
            <p className="text-lg text-[var(--color-ink-2)]">
              No per-seat chaos. Pay for what you hire, not how many people watch.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 md:grid-cols-3">
              {plans.map(({ name, price, period, description, features, cta, ctaHref, highlight }) => (
                <div
                  key={name}
                  className={`relative flex flex-col gap-6 rounded-2xl border p-7 ${
                    highlight
                      ? "border-[var(--color-accent)]/40 bg-[var(--color-accent-dim)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface-2)]"
                  }`}
                >
                  {highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-bold text-[#080c10]">
                        Most popular
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{name}</p>
                    <div className="mt-1 flex items-baseline gap-0.5">
                      <span className="text-4xl font-bold text-[var(--color-ink)]">{price}</span>
                      <span className="text-sm text-[var(--color-ink-3)]">{period}</span>
                    </div>
                    <p className="mt-2 text-xs text-[var(--color-ink-3)]">{description}</p>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-ink-2)]">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={ctaHref}
                    className={`mt-auto block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                      highlight
                        ? "bg-[var(--color-accent)] text-[#080c10]"
                        : "border border-[var(--color-border)] text-[var(--color-ink-2)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-[var(--color-ink-3)]">
              All plans include a 14-day free trial. Annual billing saves 20%.{" "}
              <a href="/contact" className="text-[var(--color-accent)] hover:underline">
                Contact us
              </a>{" "}
              for custom quotes.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-t border-[var(--color-border)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionLabel>Compare plans</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                What's included
              </h2>
            </div>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="pb-4 pr-6 text-left text-[var(--color-ink-3)] font-medium">Feature</th>
                    <th className="pb-4 px-4 text-center font-semibold text-[var(--color-ink)]">Starter</th>
                    <th className="pb-4 px-4 text-center font-semibold text-[var(--color-accent)]">Growth</th>
                    <th className="pb-4 pl-4 text-center font-semibold text-[var(--color-ink)]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AI candidate sourcing", "✓", "✓", "✓"],
                    ["Active roles", "3", "15", "Unlimited"],
                    ["Outreach automation", "—", "✓", "✓"],
                    ["Interview Copilot sessions", "5/mo", "Unlimited", "Unlimited"],
                    ["Candidate pipeline", "✓", "✓", "✓"],
                    ["Email inbox", "✓", "✓", "✓"],
                    ["Predictive analytics", "—", "✓", "✓"],
                    ["ATS integrations", "—", "✓", "✓"],
                    ["Slack notifications", "—", "✓", "✓"],
                    ["SSO / SAML", "—", "—", "✓"],
                    ["Custom AI calibration", "—", "—", "✓"],
                    ["Dedicated CSM", "—", "—", "✓"],
                    ["SLA guarantee", "—", "—", "✓"],
                  ].map(([feature, starter, growth, enterprise]) => (
                    <tr key={feature} className="border-b border-[var(--color-border)]">
                      <td className="py-3.5 pr-6 text-[var(--color-ink-2)]">{feature}</td>
                      <td className="py-3.5 px-4 text-center text-[var(--color-ink-3)]">{starter}</td>
                      <td className="py-3.5 px-4 text-center text-[var(--color-accent)]">{growth}</td>
                      <td className="py-3.5 pl-4 text-center text-[var(--color-ink-3)]">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Common questions
              </h2>
            </div>
            <div className="mt-12 flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6"
                >
                  <p className="font-semibold text-[var(--color-ink)]">{q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-2)]">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--color-border)] px-6 py-24 md:px-12">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px]"
              style={{ background: "radial-gradient(ellipse at top, #2dd4a020, transparent 70%)" }}
            />
            <Tag>14 days free</Tag>
            <h2 className="relative text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              Try Grow free for 14 days.
            </h2>
            <p className="relative max-w-lg text-[var(--color-ink-2)]">
              No credit card required. Setup takes under 48 hours. Cancel anytime.
            </p>
            <a
              href="https://app.grow.contact"
              className="relative inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-[#080c10] transition-opacity hover:opacity-90"
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
