import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Code, GitBranch, Terminal, Layers } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technical Recruiting — Grow",
  description:
    "Hire engineers faster with AI sourcing, async technical screens, and interview intelligence.",
  openGraph: {
    title: "Technical Recruiting — Grow",
    description:
      "Hire engineers faster with AI sourcing, async technical screens, and interview intelligence.",
    type: "website",
    url: "https://grow.contact/use-cases/technical-recruiting",
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

const painPoints = [
  {
    issue: "Interview loops take 3–4 weeks",
    detail: "Every stage requires engineering time. Scheduling alone costs days.",
  },
  {
    issue: "Signal-to-noise is low",
    detail: "Sourcing tools surface hundreds of profiles. Finding the right ones is manual.",
  },
  {
    issue: "Eng bandwidth is the bottleneck",
    detail: "Your best engineers spend 30%+ of their time on interviews instead of shipping.",
  },
  {
    issue: "Calibration is tribal knowledge",
    detail: "What 'great' looks like lives in the hiring manager's head, not in the process.",
  },
];

const workflow = [
  {
    step: "01",
    icon: <Code className="h-5 w-5" />,
    title: "Define the role with precision",
    desc: "Feed Grow your job description, GitHub preferences, required stack, and calibration rubric. It takes 15 minutes and replaces weeks of back-and-forth.",
    accent: "hsl(262 83% 65%)",
  },
  {
    step: "02",
    icon: <GitBranch className="h-5 w-5" />,
    title: "AI sources the top 1%",
    desc: "Grow scans GitHub activity, open-source contributions, work history, and technical signals to surface ranked candidates before you open LinkedIn.",
    accent: "#60a5fa",
  },
  {
    step: "03",
    icon: <Terminal className="h-5 w-5" />,
    title: "Async code screening — no overhead",
    desc: "Candidates complete a technical screener on their schedule. Grow evaluates code quality, problem-solving, and communication and sends you a scored summary.",
    accent: "#a78bfa",
  },
  {
    step: "04",
    icon: <Layers className="h-5 w-5" />,
    title: "Interview Copilot keeps loops tight",
    desc: "Live transcription, real-time question suggestions by competency area, and an automatic scorecard mean your eng team focuses on judgment, not note-taking.",
    accent: "#fb923c",
  },
];

export default function TechnicalRecruitingPage() {
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
              background: "radial-gradient(ellipse at center, hsla(262,83%,58%,0.6) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6">
            <Tag>Technical Recruiting</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Hire great engineers.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, hsl(262 83% 65%), hsl(262 83% 50%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Without sacrificing eng time.
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-ink-2)]">
              Grow automates the parts of technical hiring that eat engineering capacity — sourcing, screening, scheduling — so your team can focus on the conversations that actually matter.
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
              src="/usecase-technical-recruiting.png"
              alt="Technical recruiting pipeline dashboard"
              className="w-full rounded-2xl border border-[var(--color-border)] shadow-2xl"
            />
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 md:px-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "3×", label: "Faster eng hires" },
              { value: "70%", label: "Less interviewer time" },
              { value: "94%", label: "Screening accuracy" },
              { value: "11 days", label: "Avg time-to-offer" },
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

        {/* Pain points */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 md:grid-cols-2 md:items-center">
              <div className="flex flex-col gap-6">
                <SectionLabel>The problem</SectionLabel>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-ink)]">
                  Technical hiring is breaking your eng team.
                </h2>
                <p className="text-[var(--color-ink-2)] leading-relaxed">
                  The average software engineer spends 4–6 hours per week on interviews. At 10 engineers, that's 1–1.5 FTEs of capacity lost to a process that hasn't changed in a decade.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {painPoints.map(({ issue, detail }) => (
                  <div
                    key={issue}
                    className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                  >
                    <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center">
                      <span className="block h-1.5 w-1.5 rounded-full bg-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-ink)]">{issue}</p>
                      <p className="mt-0.5 text-sm text-[var(--color-ink-3)]">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionLabel>The workflow</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                How Grow handles technical hiring end to end.
              </h2>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {workflow.map(({ step, icon, title, desc, accent }) => (
                <div
                  key={step}
                  className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `${accent}18`, color: accent }}
                    >
                      {icon}
                    </div>
                    <span className="text-xs font-semibold text-[var(--color-ink-3)]">{step}</span>
                  </div>
                  <p className="font-bold text-[var(--color-ink)]">{title}</p>
                  <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="border-t border-[var(--color-border)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4">
              <SectionLabel>What you get</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Built for technical hiring teams.
              </h2>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "GitHub and portfolio signal scoring",
                "Stack-specific async screening questions",
                "Code challenge grading with AI rationale",
                "Interview Copilot for system design rounds",
                "Automatic technical scorecard generation",
                "Hiring manager calibration workflows",
                "Rejection message drafts with candidate feedback",
                "Offer probability scoring per candidate",
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
                &ldquo;We used to spend 15 engineering hours per senior hire just on interviews. With Grow, we screen async and use Interview Copilot for the final two rounds. We're down to 6 hours and the quality of hires has gone up.&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-[var(--color-ink)]">CTO</p>
                <p className="text-xs text-[var(--color-ink-3)]">Series B infrastructure startup · 80 employees</p>
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
              style={{ background: "radial-gradient(ellipse at top, hsla(262,83%,58%,0.08), transparent 70%)" }}
            />
            <Tag>Technical recruiting</Tag>
            <h2 className="relative text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              Stop paying engineers to interview.
            </h2>
            <p className="relative max-w-lg text-[var(--color-ink-2)]">
              See how Grow handles technical hiring end to end — and gives your engineers back 70% of their interview time.
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
