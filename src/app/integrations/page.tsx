import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integrations — Grow AI Recruiting",
  description:
    "Connect Grow with your ATS, Slack, LinkedIn, Gmail, and 50+ tools.",
  openGraph: {
    title: "Integrations — Grow AI Recruiting",
    description:
      "Connect Grow with your ATS, Slack, LinkedIn, Gmail, and 50+ tools.",
    type: "website",
    url: "https://grow.contact/integrations",
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

// SVG logos as inline components
function TeamsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <rect width="48" height="48" rx="10" fill="#5059C9" />
      <path d="M28 22h6a2 2 0 0 1 2 2v7a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5v-7a2 2 0 0 1 2-2h1z" fill="white" opacity="0.8" />
      <circle cx="31" cy="17" r="4" fill="white" opacity="0.9" />
      <path d="M18 20h-6a2 2 0 0 0-2 2v9a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-9a2 2 0 0 0-2-2h-4z" fill="white" />
      <circle cx="18" cy="14" r="5" fill="white" />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <rect width="48" height="48" rx="10" fill="#2196F3" />
      <path d="M8 17a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V17z" fill="white" />
      <path d="M32 21l8-5v16l-8-5V21z" fill="white" />
    </svg>
  );
}

function MeetIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <rect width="48" height="48" rx="10" fill="#00897B" />
      <path d="M10 18a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V18z" fill="white" />
      <path d="M32 22l6-4v12l-6-4V22z" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <rect width="48" height="48" rx="10" fill="#0A66C2" />
      <path d="M14 20h5v15h-5V20zm2.5-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM21 20h5v2.1c.7-1.3 2.3-2.6 4.8-2.6 5 0 6.2 3.3 6.2 7.6V35h-5v-7c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.7V35H21V20z" fill="white" />
    </svg>
  );
}

function ResendIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <rect width="48" height="48" rx="10" fill="#141414" />
      <path d="M10 16h28v16a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V16z" fill="white" opacity="0.15" />
      <path d="M10 16l14 10 14-10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x="10" y="14" width="28" height="20" rx="3" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
}

function GreenhouseIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <rect width="48" height="48" rx="10" fill="#24A47F" />
      <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2.5" fill="none" />
      <path d="M24 14v10h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <rect width="48" height="48" rx="10" fill="#611f69" />
      <g fill="white">
        <rect x="13" y="22" width="6" height="11" rx="3" />
        <rect x="13" y="13" width="6" height="6" rx="3" opacity="0.7" />
        <rect x="22" y="29" width="11" height="6" rx="3" />
        <rect x="29" y="22" width="6" height="11" rx="3" transform="rotate(90 32 27.5)" />
      </g>
    </svg>
  );
}

const featuredIntegrations = [
  {
    name: "Microsoft Teams",
    category: "Video Interviews",
    desc: "Interview Copilot joins your Teams calls automatically — no bot invite needed. Live transcription, AI question prompts, and automatic scorecards run in-session.",
    features: [
      "Automatic meeting join via calendar link",
      "Live interview transcription",
      "Real-time question suggestions",
      "Post-interview scorecard generation",
    ],
    icon: <TeamsIcon />,
    accent: "#5059C9",
  },
  {
    name: "Zoom",
    category: "Video Interviews",
    desc: "Full Interview Copilot support for Zoom — identical capabilities to Teams. Works with any Zoom meeting link, no special configuration required.",
    features: [
      "Automatic meeting join",
      "Live transcription and AI prompts",
      "Scorecard generation",
      "Recording sync (optional)",
    ],
    icon: <ZoomIcon />,
    accent: "#2196F3",
  },
  {
    name: "Google Meet",
    category: "Video Interviews",
    desc: "Interview Copilot for Google Meet. Grow joins via the meet link and provides the same live AI assistance as on Teams and Zoom.",
    features: [
      "Auto-join via Google Calendar events",
      "Live transcription",
      "Real-time coaching prompts",
      "Automatic scorecard on call end",
    ],
    icon: <MeetIcon />,
    accent: "#00897B",
  },
  {
    name: "LinkedIn",
    category: "Sourcing",
    desc: "Grow connects to LinkedIn Recruiter and public profiles to build candidate long-lists, enrich profiles, and trigger outreach — without manual copy-paste.",
    features: [
      "LinkedIn Recruiter sync",
      "Profile enrichment and ranking",
      "Automated InMail sequences",
      "Candidate deduplication",
    ],
    icon: <LinkedInIcon />,
    accent: "#0A66C2",
  },
  {
    name: "Resend",
    category: "Outreach & Email",
    desc: "All candidate email outreach in Grow is powered by Resend — ensuring deliverability, tracking, and personalization at scale without going to spam.",
    features: [
      "Personalized outreach sequences",
      "Open and reply tracking",
      "Custom sender domains",
      "Bounce and unsubscribe handling",
    ],
    icon: <ResendIcon />,
    accent: "#e5e5e5",
  },
];

const moreIntegrations = [
  { name: "Greenhouse", icon: <GreenhouseIcon />, category: "ATS", status: "Available" },
  { name: "Slack", icon: <SlackIcon />, category: "Notifications", status: "Available" },
  { name: "Lever", icon: null, category: "ATS", status: "Coming soon" },
  { name: "Ashby", icon: null, category: "ATS", status: "Coming soon" },
  { name: "Workday", icon: null, category: "HRIS", status: "Coming soon" },
  { name: "BambooHR", icon: null, category: "HRIS", status: "Coming soon" },
  { name: "Calendly", icon: null, category: "Scheduling", status: "Coming soon" },
  { name: "Rippling", icon: null, category: "HRIS", status: "Coming soon" },
];

export default function IntegrationsPage() {
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
              background: "radial-gradient(ellipse at center, hsl(262 83% 58%) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Tag>Integrations</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Works where your team works.
            </h1>
            <p className="text-lg text-[var(--color-ink-2)]">
              Grow connects with the tools you already use — video conferencing, LinkedIn, your ATS, and email infrastructure — without forcing a workflow change.
            </p>
            <a
              href="https://app.grow.contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Hero screenshot */}
        <section className="px-6 pb-4 md:px-12">
          <div className="mx-auto max-w-5xl">
            <img
              src="/integrations-hub.jpg"
              alt="Grow integrations hub dashboard showing connected apps"
              className="w-full rounded-2xl border border-[var(--color-border)] shadow-2xl"
            />
          </div>
        </section>

        {/* Featured integrations */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionLabel>Core integrations</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Deep integrations, not surface-level connectors.
              </h2>
            </div>

            <div className="mt-14 flex flex-col gap-5">
              {featuredIntegrations.map(({ name, category, desc, features, icon, accent }) => (
                <div
                  key={name}
                  className="flex flex-col gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-7 md:flex-row md:items-start"
                >
                  <div className="flex flex-col items-start gap-3 md:w-64 md:shrink-0">
                    <div className="flex items-center gap-3">
                      {icon}
                      <div>
                        <p className="font-bold text-[var(--color-ink)]">{name}</p>
                        <span
                          className="inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          style={{ borderColor: `${accent}40`, background: `${accent}12`, color: accent }}
                        >
                          {category}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">{desc}</p>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">What's included</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm text-[var(--color-ink-2)]">
                          <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-accent)]" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More integrations */}
        <section className="border-t border-[var(--color-border)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4">
              <SectionLabel>More integrations</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Your ATS, HRIS, and scheduling tools.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {moreIntegrations.map(({ name, icon, category, status }) => (
                <div
                  key={name}
                  className="flex flex-col gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]">
                    {icon ?? <span className="text-xs font-bold text-[var(--color-ink-3)]">{name.slice(0, 2)}</span>}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{name}</p>
                    <p className="text-xs text-[var(--color-ink-3)]">{category}</p>
                  </div>
                  <span
                    className={`inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      status === "Available"
                        ? "border-[var(--color-accent)]/30 bg-[var(--color-accent-dim)] text-[var(--color-accent)]"
                        : "border-[var(--color-border)] text-[var(--color-ink-3)]"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API callout */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[var(--color-ink)]">Need a custom integration?</p>
                <p className="text-sm text-[var(--color-ink-2)]">
                  Grow has a full REST API and webhooks. Connect any tool in your stack — ATS, HRIS, scheduling, identity, or internal tooling.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
                >
                  Talk to us
                </a>
                <a
                  href="https://app.grow.contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  View API docs <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
