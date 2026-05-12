import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog — Grow AI Recruiting Platform",
  description:
    "What's new at Grow. Product updates, improvements, and new features shipped to the AI recruiting platform.",
};

const entries = [
  {
    date: "May 2025",
    version: "v2.4",
    badge: "New",
    title: "Interview Copilot: real-time scorecard generation",
    body: "The Copilot now generates a structured scorecard — with per-competency ratings and a hire/no-hire recommendation — within 60 seconds of an interview ending. Scorecards sync directly to your ATS and are available to the full hiring panel before the debrief.",
  },
  {
    date: "April 2025",
    version: "v2.3",
    badge: "Improved",
    title: "Candidate outreach sequences: branching logic",
    body: "Outreach automation now supports multi-step branching: if a candidate opens but doesn't reply within 72 hours, Grow automatically sends a short follow-up. Reply rates in beta improved by 34%. Available on Growth and above.",
  },
  {
    date: "March 2025",
    version: "v2.2",
    badge: "New",
    title: "Ashby and Lever ATS integrations",
    body: "Grow now syncs bidirectionally with Ashby and Lever in addition to Greenhouse. Candidate stage changes, scorecards, and offer statuses flow in both directions. Setup takes under 10 minutes from the Integrations settings page.",
  },
  {
    date: "February 2025",
    version: "v2.1",
    badge: "Improved",
    title: "Sourcing AI: retention-aware candidate ranking",
    body: "Grow's sourcing model now factors in retention signals — job tenure patterns, career trajectory, and role fit — alongside skills match. In pilots, this reduced 90-day churn among placed candidates by 22%.",
  },
  {
    date: "January 2025",
    version: "v2.0",
    badge: "Major",
    title: "Grow 2.0: full platform redesign",
    body: "A complete rebuild of the Grow product surface. Unified inbox, redesigned pipeline view, new analytics dashboard with funnel tracking, and a refactored Interview Copilot with lower latency and higher transcription accuracy across accents.",
  },
  {
    date: "November 2024",
    version: "v1.8",
    badge: "New",
    title: "GDPR data processing agreement and EU data residency",
    body: "Enterprise customers can now opt into EU data residency, keeping all candidate data and AI processing within EU infrastructure. A standard DPA (Data Processing Agreement) is available on request for all plans.",
  },
  {
    date: "October 2024",
    version: "v1.7",
    badge: "Improved",
    title: "Predictive analytics: role-level time-to-fill forecasting",
    body: "The analytics dashboard now forecasts time-to-fill per role based on historical pipeline velocity, sourcing volume, and market benchmarks. Helps heads of talent plan recruiting sprints and set realistic hiring timelines with stakeholders.",
  },
  {
    date: "September 2024",
    version: "v1.6",
    badge: "New",
    title: "Slack notifications for candidate milestones",
    body: "Get a Slack message when a candidate passes screening, accepts an interview invite, or receives an offer. Configurable per role and per notification type. Available on Growth and above.",
  },
];

const badgeStyles: Record<string, string> = {
  New: "border-[var(--color-accent)]/40 bg-[var(--color-accent-dim)] text-[var(--color-accent)]",
  Improved: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  Major: "border-purple-500/30 bg-purple-500/10 text-purple-400",
};

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-24 md:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(262 83% 58%) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
              Changelog
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              What&apos;s new.
            </h1>
            <p className="mt-5 text-lg text-[var(--color-ink-2)]">
              Product updates, improvements, and new features shipped to the
              Grow platform. We ship fast — check back often.
            </p>
          </div>
        </section>

        {/* Entries */}
        <section className="border-t border-[var(--color-border)] px-6 pb-32 pt-16 md:px-12">
          <div className="mx-auto max-w-2xl">
            <div className="relative flex flex-col gap-0">
              {entries.map((entry, i) => (
                <div key={entry.version} className="relative flex gap-8 pb-14">
                  {/* Timeline line */}
                  {i < entries.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute left-[5px] top-[10px] h-full w-px bg-[var(--color-border)]"
                    />
                  )}
                  {/* Dot */}
                  <div className="relative mt-[6px] flex h-3 w-3 shrink-0 items-center justify-center">
                    <div className="h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-accent-dim)]" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ${badgeStyles[entry.badge] ?? badgeStyles.New}`}
                      >
                        {entry.badge}
                      </span>
                      <span className="text-xs font-mono text-[var(--color-ink-3)]">
                        {entry.version}
                      </span>
                      <span className="text-xs text-[var(--color-ink-3)]">
                        {entry.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold leading-snug text-[var(--color-ink)]">
                      {entry.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">
                      {entry.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
              <p className="text-sm text-[var(--color-ink-3)]">
                Want to know what&apos;s coming next?{" "}
                <a
                  href="/contact"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  Talk to us
                </a>{" "}
                or follow us on{" "}
                <a
                  href="https://linkedin.com/company/growcontact"
                  className="text-[var(--color-accent)] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
