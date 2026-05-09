import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle, Zap, Users, BarChart3, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Grow — AI-Powered Talent Operating System",
  description:
    "Replace your recruiting stack and cut senior recruiter overhead. One calibrated AI platform that sources, screens, interviews, and predicts outcomes.",
};

// ─── Shared primitives ─────────────────────────────────────────────────────

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

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-[var(--color-border)] bg-[#080c10]/80 px-6 py-4 backdrop-blur-md md:px-12">
      <a href="/" className="flex items-center gap-2">
        <span className="text-lg font-bold tracking-tight text-[var(--color-ink)]">
          Grow
        </span>
        <span className="hidden rounded bg-[var(--color-accent-dim)] px-1.5 py-0.5 text-[11px] font-semibold text-[var(--color-accent)] sm:inline">
          BETA
        </span>
      </a>
      <div className="hidden items-center gap-8 text-sm text-[var(--color-ink-2)] md:flex">
        <a href="#features" className="transition-colors hover:text-[var(--color-ink)]">Features</a>
        <a href="#pricing" className="transition-colors hover:text-[var(--color-ink)]">Pricing</a>
        <a href="#waitlist" className="transition-colors hover:text-[var(--color-ink)]">Customers</a>
      </div>
      <a
        href="#waitlist"
        className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[#080c10] transition-opacity hover:opacity-90"
      >
        Request demo
      </a>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-32 text-center">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, #2dd4a0 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
        <Tag>AI Talent Operating System</Tag>

        <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-6xl md:text-7xl">
          Hire fast.
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #2dd4a0, #60efca)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Scale without headcount.
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-ink-2)] md:text-xl">
          Grow replaces your recruiting stack and senior recruiter overhead with one
          calibrated AI platform — continuous sourcing, async screening, live interview
          copilot, and predictive analytics.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            id="waitlist"
            href="mailto:hello@grow.ai?subject=Demo Request"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-[#080c10] transition-opacity hover:opacity-90"
          >
            Request a demo <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-base font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
          >
            See how it works
          </a>
        </div>

        <p className="text-sm text-[var(--color-ink-3)]">
          Built for Series A–C teams · No recruiter required
        </p>
      </div>

      {/* Hero metrics strip */}
      <div className="relative z-10 mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 w-full max-w-3xl">
        {[
          { value: "3×", label: "Faster time-to-hire" },
          { value: "60%", label: "Recruiter cost saved" },
          { value: "94%", label: "Screening accuracy" },
          { value: "12mo", label: "Retention predicted" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col gap-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-center"
          >
            <span className="text-2xl font-bold text-[var(--color-accent)]">{value}</span>
            <span className="text-xs text-[var(--color-ink-3)]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Problem ────────────────────────────────────────────────────────────────

function Problem() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-6">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-ink)]">
              Recruiting is broken for high-growth teams.
            </h2>
            <p className="text-[var(--color-ink-2)] leading-relaxed">
              You have five tools open, two contract sourcers, a coordinator
              chasing scheduling, and still can&apos;t fill a role in under 30
              days. Meanwhile your senior recruiter costs $180K+ and owns
              institutional knowledge that walks out the door.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                issue: "Tool fragmentation",
                detail: "ATS, sourcing platform, screening tool, scheduler — all disconnected.",
              },
              {
                issue: "Recruiter overhead",
                detail: "Senior talent is expensive and bottlenecked on execution.",
              },
              {
                issue: "Slow signal",
                detail: "Weeks pass before you know if a candidate is worth advancing.",
              },
              {
                issue: "Gut-feel decisions",
                detail: "Offer acceptance and retention is anyone's guess.",
              },
            ].map(({ issue, detail }) => (
              <div
                key={issue}
                className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4"
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
  );
}

// ─── Solution overview ───────────────────────────────────────────────────────

function SolutionOverview() {
  const pillars = [
    {
      icon: <Zap className="h-5 w-5" />,
      name: "Continuous AI Sourcing",
      desc: "Always-on sourcing across profiles while you sleep.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      name: "Adaptive Async Screening",
      desc: "Candidates screen on their time. AI scores them instantly.",
    },
    {
      icon: <Mic className="h-5 w-5" />,
      name: "Live Interview Copilot",
      desc: "Real-time guidance in Zoom, Meet, and Teams.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      name: "Predictive Analytics",
      desc: "Time-to-hire, offer acceptance, 12-month retention forecasts.",
    },
  ];

  return (
    <section id="features" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel>The solution</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            One platform. Every stage of the hire.
          </h2>
          <p className="max-w-xl text-[var(--color-ink-2)]">
            Grow handles the full recruiting loop — from first outreach to signed
            offer — with four tightly integrated AI modules.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon, name, desc }, i) => (
            <div
              key={name}
              className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                {icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-ink)]">{name}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-3)]">{desc}</p>
              </div>
              <span className="mt-auto text-xs font-semibold text-[var(--color-ink-3)]">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Feature deep-dives ──────────────────────────────────────────────────────

type Feature = {
  label: string;
  heading: string;
  body: string;
  bullets: string[];
  accent: string;
  flip?: boolean;
  image: string;
};

function FeatureRow({ feature }: { feature: Feature }) {
  return (
    <div
      className={`flex flex-col gap-12 md:items-center md:gap-16 ${feature.flip ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Feature preview image */}
      <div
        className="relative flex-1 overflow-hidden rounded-2xl border border-[var(--color-border)]"
        style={{ minHeight: 280 }}
      >
        <Image
          src={feature.image}
          alt={`${feature.label} preview`}
          width={1200}
          height={800}
          className="h-full w-full object-cover object-top"
          style={{ borderRadius: 16 }}
        />
      </div>

      {/* Copy */}
      <div className="flex flex-1 flex-col gap-5">
        <Tag>{feature.label}</Tag>
        <h3 className="text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink)]">
          {feature.heading}
        </h3>
        <p className="text-[var(--color-ink-2)] leading-relaxed">{feature.body}</p>
        <ul className="flex flex-col gap-2.5">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-2)]">
              <CheckCircle
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: feature.accent }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Features() {
  const features: Feature[] = [
    {
      label: "AI Sourcing",
      heading: "Always-on pipelines. Zero manual search.",
      body:
        "Define a role once. Grow's sourcing engine runs continuously across hundreds of profiles, applies your calibration criteria, and surfaces ranked candidates before you've finished your morning standup.",
      bullets: [
        "Simultaneous outreach across multiple channels",
        "Auto-calibrates to your hire signals over time",
        "Respects GDPR, CCPA, and opt-out preferences",
      ],
      accent: "#2dd4a0",
      image: "/feature-sourcing.png",
    },
    {
      label: "Async Screening",
      heading: "Screen 10× more candidates. Spend zero hours on calls.",
      body:
        "Candidates complete video or text-based screeners on their own schedule. Grow's AI scores responses against your rubric and surfaces ranked summaries — no coordinator, no scheduling overhead.",
      bullets: [
        "Video, text, and code challenge formats",
        "Structured scoring with explainable rationale",
        "Candidate-level summaries ready to share",
      ],
      accent: "#60a5fa",
      flip: true,
      image: "/feature-screening.png",
    },
    {
      label: "Interview Copilot",
      heading: "Show up to every interview like a pro.",
      body:
        "Grow listens live on Zoom, Meet, or Teams and surfaces suggested follow-up questions, flags competency gaps, and tracks what was covered — all without interrupting the conversation.",
      bullets: [
        "Works with Zoom, Google Meet, Microsoft Teams",
        "Real-time question suggestions by competency",
        "Post-interview scorecard generated automatically",
      ],
      accent: "#a78bfa",
      image: "/feature-interview.png",
    },
    {
      label: "Predictive Analytics",
      heading: "Know the outcome before you extend the offer.",
      body:
        "Grow's prediction models are trained on your historical hires and industry benchmarks. Get time-to-hire forecasts, offer acceptance probability, and 12-month retention risk for every candidate.",
      bullets: [
        "Time-to-hire forecast per requisition",
        "Offer acceptance probability scoring",
        "12-month retention risk model",
      ],
      accent: "#fb923c",
      flip: true,
      image: "/feature-analytics.png",
    },
  ];

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-24">
        {features.map((f) => (
          <FeatureRow key={f.label} feature={f} />
        ))}
      </div>
    </section>
  );
}

// ─── Social proof ────────────────────────────────────────────────────────────

function SocialProof() {
  const quotes = [
    {
      quote:
        "We cut our time-to-hire from 42 days to 14. The async screening alone saved us two weeks per role.",
      name: "Head of Talent",
      company: "Series B SaaS · 120 employees",
    },
    {
      quote:
        "Grow replaced three separate tools and a contract sourcer. I haven't opened LinkedIn Recruiter in two months.",
      name: "VP People",
      company: "Series A Fintech · 60 employees",
    },
    {
      quote:
        "The Interview Copilot is the closest thing to having a senior recruiter in the room without the overhead.",
      name: "Founder",
      company: "Series C Marketplace · 300 employees",
    },
  ];

  return (
    <section className="border-t border-[var(--color-border)] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel>Early customers</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-ink)]">
            Trusted by teams scaling fast.
          </h2>
        </div>

        {/* Logo row placeholder */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {["Acme Corp", "Velocity AI", "Stackr", "Meridian", "Pluto HQ"].map(
            (name) => (
              <div
                key={name}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink-3)]"
              >
                {name}
              </div>
            ),
          )}
        </div>

        {/* Quote cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map(({ quote, name, company }) => (
            <div
              key={name}
              className="flex flex-col gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-[var(--color-ink)]">{name}</p>
                <p className="text-xs text-[var(--color-ink-3)]">{company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ────────────────────────────────────────────────────────────────

function Pricing() {
  const plans = [
    {
      name: "Startup",
      price: "$499",
      period: "/mo",
      description: "For lean teams making their first 5–10 hires.",
      features: [
        "Up to 3 active roles",
        "AI sourcing & async screening",
        "Interview Copilot (5 interviews/mo)",
        "Basic analytics dashboard",
        "Email support",
      ],
      cta: "Get started",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$1,299",
      period: "/mo",
      description: "For scaling teams hiring across multiple functions.",
      features: [
        "Up to 15 active roles",
        "Everything in Startup",
        "Unlimited Interview Copilot",
        "Predictive analytics",
        "ATS integrations",
        "Slack notifications",
        "Priority support",
      ],
      cta: "Start free trial",
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
      ],
      cta: "Talk to sales",
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-ink)]">
            Simple, predictable pricing.
          </h2>
          <p className="max-w-lg text-[var(--color-ink-2)]">
            No per-seat chaos. Pay for what you hire, not how many people watch.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map(({ name, price, period, description, features, cta, highlight }) => (
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
                href="#waitlist"
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
      </div>
    </section>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="border-t border-[var(--color-border)] px-6 py-28 md:px-12">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at top, #2dd4a020, transparent 70%)",
          }}
        />
        <Tag>Ready to scale?</Tag>
        <h2 className="relative text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          Stop hiring like it&apos;s 2019.
        </h2>
        <p className="relative max-w-lg text-[var(--color-ink-2)]">
          Join the waitlist and see how Grow cuts your time-to-hire in half
          without adding a single recruiter.
        </p>
        <a
          href="mailto:hello@grow.ai?subject=Demo Request"
          className="relative inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-[#080c10] transition-opacity hover:opacity-90"
        >
          Request a demo <ArrowRight className="h-4 w-4" />
        </a>
        <p className="relative text-xs text-[var(--color-ink-3)]">
          No commitment. Setup in under 48 hours.
        </p>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-12 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold text-[var(--color-ink)]">Grow</span>
            <p className="max-w-xs text-sm text-[var(--color-ink-3)]">
              AI-powered talent operating system for high-growth teams.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-[var(--color-ink)]">Product</p>
              <a href="#features" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Features</a>
              <a href="#pricing" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Pricing</a>
              <a href="#waitlist" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Changelog</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-[var(--color-ink)]">Company</p>
              <a href="#waitlist" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">About</a>
              <a href="#waitlist" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Blog</a>
              <a href="mailto:hello@grow.ai" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-[var(--color-ink)]">Legal</p>
              <a href="#waitlist" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Privacy</a>
              <a href="#waitlist" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Terms</a>
              <a href="#waitlist" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Security</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start gap-2 border-t border-[var(--color-border)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-ink-3)]">
            © {new Date().getFullYear()} Grow. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-ink-3)]">
            Built for Series A–C teams moving fast.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <SolutionOverview />
        <Features />
        <SocialProof />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
