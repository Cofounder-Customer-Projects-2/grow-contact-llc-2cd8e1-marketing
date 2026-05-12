import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Zap, Users, ClipboardList, TrendingUp } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "High-Volume Hiring — Grow",
  description:
    "Process hundreds of candidates without sacrificing quality. Automate screening at scale.",
  openGraph: {
    title: "High-Volume Hiring — Grow",
    description:
      "Process hundreds of candidates without sacrificing quality. Automate screening at scale.",
    type: "website",
    url: "https://grow.contact/use-cases/high-volume-hiring",
  },
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

const steps = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant applicant triage",
    desc: "Every inbound application is screened, scored, and ranked against your criteria in seconds — not days. Grow reads résumés, matches competencies, and flags your top candidates automatically.",
    accent: "hsl(262 83% 65%)",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Automated outreach and scheduling",
    desc: "Shortlisted candidates receive a personalized outreach and can self-schedule a screening interview — no coordinator overhead, no back-and-forth email chains.",
    accent: "#60a5fa",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Consistent structured screening",
    desc: "Every candidate goes through the same structured interview regardless of which recruiter runs it. Interview Copilot enforces the rubric, records, and scores automatically.",
    accent: "#a78bfa",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Real-time funnel analytics",
    desc: "See where candidates drop off, which sources convert best, and which roles are falling behind — before they become a problem. Predictive alerts keep your pipeline healthy.",
    accent: "#fb923c",
  },
];

export default function HighVolumeHiringPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-24 md:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(ellipse at center, #60a5fa 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6">
            <Tag>High-Volume Hiring</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Process hundreds of applicants.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #60a5fa, #93c5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Without adding headcount.
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-ink-2)]">
              When you're hiring 50–500 people a month, speed and consistency matter more than any other variable. Grow automates triage, screening, and scheduling so your team handles decisions — not admin.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.grow.contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
              >
                Request a demo
              </a>
            </div>
          </div>
        </section>

        {/* Hero screenshot */}
        <section className="px-6 pb-4 md:px-12">
          <div className="mx-auto max-w-5xl">
            <img
              src="/usecase-high-volume-hiring.png"
              alt="High-volume hiring applicant queue dashboard"
              className="w-full rounded-2xl border border-[var(--color-border)] shadow-2xl"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 md:px-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "500+", label: "Applications screened/day" },
              { value: "80%", label: "Reduction in screening time" },
              { value: "4 hrs", label: "Avg time to first screen" },
              { value: "2.4×", label: "More hires per recruiter" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-5 py-5 text-center"
              >
                <span className="text-2xl font-bold text-[var(--color-accent)]">{value}</span>
                <span className="text-xs text-[var(--color-ink-3)]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionLabel>The workflow</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                From application to offer — automated.
              </h2>
              <p className="max-w-2xl text-[var(--color-ink-2)]">
                Grow compresses your applicant-to-offer timeline from weeks to days — without sacrificing the consistency that protects quality at scale.
              </p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {steps.map(({ icon, title, desc, accent }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    {icon}
                  </div>
                  <p className="font-bold text-[var(--color-ink)]">{title}</p>
                  <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases within use case */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4">
              <SectionLabel>Where it fits</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Built for teams hiring at scale.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  vertical: "Operations & Logistics",
                  desc: "Warehouse, fulfillment, and field operations teams hiring dozens per week.",
                  accent: "hsl(262 83% 65%)",
                },
                {
                  vertical: "Retail & Hospitality",
                  desc: "Seasonal and permanent hiring across hundreds of locations with consistent standards.",
                  accent: "#60a5fa",
                },
                {
                  vertical: "BPO & Customer Support",
                  desc: "Contact center and support teams ramping from 50 to 500 in weeks.",
                  accent: "#a78bfa",
                },
              ].map(({ vertical, desc, accent }) => (
                <div
                  key={vertical}
                  className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6"
                >
                  <div className="h-1.5 w-10 rounded-full" style={{ background: accent }} />
                  <p className="font-semibold text-[var(--color-ink)]">{vertical}</p>
                  <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t border-[var(--color-border)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4">
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Everything you need for volume.
              </h2>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Bulk application triage and scoring",
                "AI-powered résumé parsing and ranking",
                "Automated candidate communication",
                "Self-scheduling interview links",
                "Structured screening with Interview Copilot",
                "Bulk offer letter generation",
                "Source performance analytics",
                "Pipeline health alerts and forecasting",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-2)]">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-16 md:px-12">
          <div className="mx-auto max-w-3xl">
            <blockquote className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-8">
              <p className="text-lg leading-relaxed text-[var(--color-ink-2)]">
                &ldquo;We hire 200 warehouse associates every quarter. Before Grow, that took 3 full-time coordinators. Now it takes one recruiter and Grow. We've cut our time-to-start from 18 days to 6 and offer acceptance is up 12 points.&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-[var(--color-ink)]">VP People</p>
                <p className="text-xs text-[var(--color-ink-3)]">E-commerce operations company · 1,200 employees</p>
              </div>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--color-border)] px-6 py-24 md:px-12">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px]"
              style={{ background: "radial-gradient(ellipse at top, #60a5fa20, transparent 70%)" }}
            />
            <Tag>High-volume hiring</Tag>
            <h2 className="relative text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              Scale your hiring without scaling your team.
            </h2>
            <p className="relative max-w-lg text-[var(--color-ink-2)]">
              See how Grow processes hundreds of applications per week and keeps your pipeline moving.
            </p>
            <a
              href="https://app.grow.contact"
              className="relative inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
