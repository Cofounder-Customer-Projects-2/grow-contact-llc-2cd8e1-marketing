import type { Metadata } from "next";
import { CheckCircle, Zap, Users, Mic, BarChart3, Mail, Kanban, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features — Grow AI Recruiting",
  description:
    "AI sourcing, async screening, Interview Copilot, and pipeline analytics — all in one platform.",
  openGraph: {
    title: "Features — Grow AI Recruiting",
    description:
      "AI sourcing, async screening, Interview Copilot, and pipeline analytics — all in one platform.",
    type: "website",
    url: "https://grow.contact/features",
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

const features = [
  {
    tag: "AI Sourcing",
    icon: <Zap className="h-6 w-6" />,
    accent: "#2dd4a0",
    image: "/feature-ai-sourcing.jpg",
    heading: "Always-on pipelines. Zero manual search.",
    body: "Define a role once. Grow's sourcing engine runs continuously across hundreds of profiles, applies your calibration criteria, and surfaces ranked candidates before you've finished your morning standup. It learns from your decisions over time, so every hire makes the next one better.",
    bullets: [
      "Cross-channel sourcing across LinkedIn, GitHub, and more",
      "Auto-calibrates to your hire signals over time",
      "Bulk candidate enrichment with contact data",
      "GDPR, CCPA, and opt-out compliant",
      "Role-specific filters: seniority, location, skills, tenure",
    ],
  },
  {
    tag: "Outreach Automation",
    icon: <Mail className="h-6 w-6" />,
    accent: "#60a5fa",
    image: "/feature-outreach.png",
    heading: "Personalized outreach at scale. Without sounding robotic.",
    body: "Grow crafts individualized outreach messages for each candidate based on their profile, experience, and the role requirements. Multi-step sequences handle follow-ups automatically, so no warm lead falls through the cracks.",
    bullets: [
      "AI-generated personalized messages per candidate",
      "Multi-step sequence automation (email + LinkedIn)",
      "A/B test subject lines and message variants",
      "Reply detection pauses sequences automatically",
      "Unsubscribe handling and suppression lists",
    ],
  },
  {
    tag: "Interview Copilot",
    icon: <Mic className="h-6 w-6" />,
    accent: "#a78bfa",
    image: "/feature-interview-copilot.png",
    heading: "Show up to every interview like a pro.",
    body: "Grow joins your Zoom, Google Meet, or Microsoft Teams calls as a silent observer. It transcribes in real time, surfaces competency-based follow-up questions, flags topics not yet covered, and generates a structured scorecard the moment the call ends.",
    bullets: [
      "Works with Zoom, Google Meet, and Microsoft Teams",
      "Real-time live transcription with speaker labels",
      "Competency-based question suggestions as you talk",
      "Flags uncovered criteria and gaps mid-interview",
      "Automatic post-interview scorecard generation",
      "Shareable structured summaries for hiring managers",
    ],
  },
  {
    tag: "Candidate Pipeline",
    icon: <Kanban className="h-6 w-6" />,
    accent: "#fb923c",
    image: "/feature-pipeline.png",
    heading: "One view of every candidate. Across every role.",
    body: "A clean Kanban-style pipeline that shows exactly where every candidate stands. Move them through stages, leave notes, tag teammates, and see the full history of every interaction — all in one place.",
    bullets: [
      "Drag-and-drop Kanban pipeline view",
      "Custom stages per role or department",
      "Collaborative notes and @-mentions",
      "Full interaction history per candidate",
      "Bulk actions: reject, advance, archive",
      "Email and calendar activity auto-logged",
    ],
  },
  {
    tag: "Email Inbox",
    icon: <Mail className="h-6 w-6" />,
    accent: "#34d399",
    image: "/feature-inbox.jpg",
    heading: "All your recruiting conversations. One inbox.",
    body: "Stop switching between Gmail and your ATS. Grow's shared recruiting inbox syncs all candidate emails, threads outreach replies, and lets your whole team respond — with AI drafts ready when you need them.",
    bullets: [
      "Shared team inbox for all candidate threads",
      "AI-drafted reply suggestions",
      "Syncs with Gmail and Outlook",
      "Auto-tag conversations by role and stage",
      "Smart reminders for unanswered threads",
    ],
  },
  {
    tag: "Predictive Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    accent: "#f59e0b",
    image: "/feature-analytics.jpg",
    heading: "Know the outcome before you extend the offer.",
    body: "Grow's prediction models are trained on your historical hires and industry benchmarks. Get time-to-hire forecasts, offer acceptance probability, and 12-month retention risk for every candidate — so you can prioritize your highest-signal opportunities.",
    bullets: [
      "Time-to-hire forecast per requisition",
      "Offer acceptance probability scoring",
      "12-month retention risk model",
      "Pipeline conversion funnel analytics",
      "Source quality attribution",
      "Diversity and inclusion reporting",
    ],
  },
];

export default function FeaturesPage() {
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
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
            <Tag>Platform features</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Every tool your recruiting team needs.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #2dd4a0, #60efca)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                All in one place.
              </span>
            </h1>
            <p className="max-w-xl text-lg text-[var(--color-ink-2)]">
              Grow handles the full recruiting loop — from first outreach to signed offer — with six tightly integrated AI modules.
            </p>
            <a
              href="https://app.grow.contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-[#080c10] transition-opacity hover:opacity-90"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Feature overview cards */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-16 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ tag, icon, accent, heading }) => (
                <div
                  key={tag}
                  className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 transition-colors hover:border-[var(--color-accent)]/30"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: accent }}>{tag}</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">{heading}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature deep dives */}
        <section className="px-6 py-8 md:px-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-0">
            {features.map(({ tag, accent, heading, body, bullets, image }, i) => (
              <div
                key={tag}
                className={`flex flex-col gap-12 border-b border-[var(--color-border)] py-20 md:items-center md:gap-16 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Feature visual */}
                <div className="flex flex-1 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <img
                    src={image}
                    alt={tag}
                    className="h-full w-full object-cover"
                    style={{ minHeight: 260 }}
                  />
                </div>

                {/* Copy */}
                <div className="flex flex-1 flex-col gap-5">
                  <span
                    className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{ borderColor: `${accent}40`, background: `${accent}12`, color: accent }}
                  >
                    {tag}
                  </span>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink)]">
                    {heading}
                  </h2>
                  <p className="text-[var(--color-ink-2)] leading-relaxed">{body}</p>
                  <ul className="flex flex-col gap-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-2)]">
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: accent }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
            <SectionLabel>Ready to hire faster?</SectionLabel>
            <h2 className="relative text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              Start your free trial today.
            </h2>
            <p className="relative max-w-lg text-[var(--color-ink-2)]">
              No recruiter required. Get up and running in under 48 hours.
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
