import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Search, Shield, UserCheck, BarChart2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Executive Search — Grow",
  description:
    "Find and close executive talent with AI-assisted search and structured evaluation.",
  openGraph: {
    title: "Executive Search — Grow",
    description:
      "Find and close executive talent with AI-assisted search and structured evaluation.",
    type: "website",
    url: "https://grow.contact/use-cases/executive-search",
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
    icon: <Search className="h-5 w-5" />,
    title: "Deep market mapping",
    desc: "Grow builds a landscape of qualified executives from public signals — career arc, board affiliations, media mentions, executive transitions — before you make a single outreach.",
    accent: "#2dd4a0",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Confidential outreach at scale",
    desc: "Personalized, discreet outreach sequences that respect the sensitivity of senior conversations. No spray-and-pray, no visible job postings, no awkward mass emails.",
    accent: "#a78bfa",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    title: "Structured executive interviews",
    desc: "Interview Copilot prompts competency-based questions aligned to your leadership rubric, transcribes live, and drafts a scorecard — keeping every conversation consistent.",
    accent: "#60a5fa",
  },
  {
    icon: <BarChart2 className="h-5 w-5" />,
    title: "Stakeholder-ready reporting",
    desc: "Generate candidate comparison decks, long-list summaries, and progress reports for your board or CEO in one click. No slide-building required.",
    accent: "#fb923c",
  },
];

export default function ExecutiveSearchPage() {
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
              background: "radial-gradient(ellipse at center, #a78bfa 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6">
            <Tag>Executive Search</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Find leaders who move companies.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #a78bfa, #c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                With precision.
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-ink-2)]">
              Executive searches are high-stakes and deeply relational. Grow handles the research, mapping, and outreach infrastructure so you can focus on the conversations that close.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.grow.contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-[#080c10] transition-opacity hover:opacity-90"
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
              src="/usecase-executive-search.jpg"
              alt="Executive search candidate pipeline dashboard"
              className="w-full rounded-2xl border border-[var(--color-border)] shadow-2xl"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 md:px-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "4×", label: "Faster market mapping" },
              { value: "60%", label: "Less desk research" },
              { value: "85%", label: "Outreach open rate" },
              { value: "2.1×", label: "Higher close rate" },
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
              <SectionLabel>How it works</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                The executive search workflow, rebuilt.
              </h2>
              <p className="max-w-2xl text-[var(--color-ink-2)]">
                From target mapping to stakeholder reporting — Grow handles the infrastructure of a search so you can focus on the relationships.
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

        {/* Features */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4">
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Built for senior search.
              </h2>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Board and C-suite market mapping",
                "LinkedIn + executive database sourcing",
                "Confidential outreach templates",
                "Interview Copilot with leadership competency frameworks",
                "Candidate comparison and long-list decks",
                "Reference check interview guides",
                "Compensation benchmarking integrations",
                "Board-ready progress reports",
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
        <section className="border-t border-[var(--color-border)] px-6 py-16 md:px-12">
          <div className="mx-auto max-w-3xl">
            <blockquote className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <p className="text-lg leading-relaxed text-[var(--color-ink-2)]">
                &ldquo;Grow replaced three weeks of desk research with three hours. We ran the VP Engineering search for a Series C client faster than any search we've done before — and the candidate quality was better because we weren't pattern-matching on résumés.&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-[var(--color-ink)]">Managing Partner</p>
                <p className="text-xs text-[var(--color-ink-3)]">Executive search firm · 12 active searches</p>
              </div>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:px-12">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-8 py-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px]"
              style={{ background: "radial-gradient(ellipse at top, #a78bfa20, transparent 70%)" }}
            />
            <Tag>Executive search</Tag>
            <h2 className="relative text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              Run your next search on Grow.
            </h2>
            <p className="relative max-w-lg text-[var(--color-ink-2)]">
              No setup fees. No long contracts. Get your first search running in under 48 hours.
            </p>
            <a
              href="https://app.grow.contact"
              className="relative inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-[#080c10] transition-opacity hover:opacity-90"
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
