import type { Metadata } from "next";
import { ArrowRight, Code2, Crown, TrendingUp } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Use Cases — Grow AI Recruiting Platform",
  description:
    "See how technical recruiting teams, executive search firms, and high-volume hiring operations use Grow to hire faster with less overhead.",
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-dim)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
      {children}
    </span>
  );
}

const cases = [
  {
    href: "/use-cases/technical-recruiting",
    icon: <Code2 className="h-6 w-6" />,
    label: "Technical Recruiting",
    headline: "Hire great engineers without sacrificing eng time.",
    desc: "AI sourcing, async code screening, and Interview Copilot for system design rounds. Your engineers focus on judgment — not note-taking.",
    stats: [
      { value: "3×", label: "Faster hires" },
      { value: "70%", label: "Less interviewer time" },
    ],
    accent: "hsl(262 83% 65%)",
  },
  {
    href: "/use-cases/executive-search",
    icon: <Crown className="h-6 w-6" />,
    label: "Executive Search",
    headline: "Find leaders who move companies — with precision.",
    desc: "Deep market mapping, confidential outreach, and stakeholder-ready reporting. Built for the senior searches that require discretion and depth.",
    stats: [
      { value: "4×", label: "Faster market mapping" },
      { value: "85%", label: "Outreach open rate" },
    ],
    accent: "#a78bfa",
  },
  {
    href: "/use-cases/high-volume-hiring",
    icon: <TrendingUp className="h-6 w-6" />,
    label: "High-Volume Hiring",
    headline: "Process hundreds of applicants without adding headcount.",
    desc: "Instant applicant triage, automated outreach, self-scheduling, and structured screening. Built for operations, logistics, and support teams hiring at scale.",
    stats: [
      { value: "500+", label: "Applications/day" },
      { value: "2.4×", label: "More hires/recruiter" },
    ],
    accent: "#60a5fa",
  },
];

export default function UseCasesPage() {
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
              background: "radial-gradient(ellipse at center, hsla(262,83%,58%,0.6) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Tag>Use Cases</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Built for how your team actually hires.
            </h1>
            <p className="text-lg text-[var(--color-ink-2)]">
              Whether you're scaling an engineering org, running a retained search, or processing 300 applications a week — Grow adapts to your workflow.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            {cases.map(({ href, icon, label, headline, desc, stats, accent }) => (
              <a
                key={href}
                href={href}
                className="group flex flex-col gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-8 transition-colors hover:border-[var(--color-accent)]/30 md:flex-row md:items-center"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: `${accent}18`, color: accent }}
                >
                  {icon}
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <span
                    className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{ borderColor: `${accent}40`, background: `${accent}12`, color: accent }}
                  >
                    {label}
                  </span>
                  <h2 className="text-xl font-bold leading-snug tracking-tight text-[var(--color-ink)]">
                    {headline}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">{desc}</p>
                </div>

                <div className="flex shrink-0 flex-col gap-4 md:w-48">
                  <div className="grid grid-cols-2 gap-3">
                    {stats.map(({ value, label: statLabel }, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-0.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-center"
                      >
                        <span className="text-lg font-bold" style={{ color: accent }}>{value}</span>
                        <span className="text-[10px] text-[var(--color-ink-3)]">{statLabel}</span>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2.5 transition-all">
                    See how it works <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--color-border)] px-6 py-24 text-center md:px-12">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
              Not sure which fits your team?
            </h2>
            <p className="text-[var(--color-ink-2)]">
              Talk to us — we'll map your current hiring process and show you exactly where Grow makes the biggest difference.
            </p>
            <div className="flex gap-3">
              <a
                href="https://app.grow.contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
              >
                Request a demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
