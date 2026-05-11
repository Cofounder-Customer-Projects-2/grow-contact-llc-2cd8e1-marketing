import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Grow AI Recruiting Platform",
  description:
    "Learn about Grow's mission to replace fragmented recruiting stacks with one AI-powered platform that sources, screens, and interviews candidates for high-growth teams.",
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

const values = [
  {
    name: "Speed without compromise",
    desc: "We believe you shouldn't have to choose between moving fast and making good hires. AI makes both possible.",
    accent: "#2dd4a0",
  },
  {
    name: "Transparency in every signal",
    desc: "AI recommendations are only useful when you understand why. Every scoring decision is explainable.",
    accent: "#60a5fa",
  },
  {
    name: "Bias-aware by design",
    desc: "We build models that flag potential bias, enforce structured evaluation, and give every candidate a fair shot.",
    accent: "#a78bfa",
  },
  {
    name: "Obsession with the candidate experience",
    desc: "How you treat candidates reflects on your brand. Grow makes every touchpoint fast, respectful, and personal.",
    accent: "#fb923c",
  },
];

const team = [
  {
    name: "Alex Hartmann",
    role: "Co-founder & CEO",
    bio: "Previously Head of Talent at two Series C SaaS companies. Spent 8 years watching great candidates get lost in broken processes.",
    avatar: "/team-alex-hartmann.png",
  },
  {
    name: "Priya Nair",
    role: "Co-founder & CTO",
    bio: "Built ML systems at a top recruiting tech company. Led the team behind a candidate matching engine used by 50,000+ employers.",
    avatar: "/team-priya-nair.png",
  },
  {
    name: "Marcus Chen",
    role: "Head of Product",
    bio: "Former PM at a leading ATS. Knows every pain point in the recruiter workflow and is determined to fix all of them.",
    avatar: "/team-marcus-chen.jpg",
  },
  {
    name: "Sofia Lindqvist",
    role: "Head of Customer Success",
    bio: "Helped 200+ recruiting teams onboard and scale. Obsessed with making Grow genuinely useful from day one.",
    avatar: "/team-sofia-lindqvist.png",
  },
];

export default function AboutPage() {
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
              background: "radial-gradient(ellipse at center, #2dd4a0 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6">
            <Tag>About us</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              We're building the recruiting team{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #2dd4a0, #60efca)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                every company deserves.
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-ink-2)]">
              Grow was founded on a simple conviction: the best hiring teams shouldn't require a small army of recruiters, five disconnected tools, and months of tribal knowledge. AI makes it possible to do more with less — and to do it better.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 md:grid-cols-2 md:items-center">
              <div className="flex flex-col gap-6">
                <SectionLabel>Our mission</SectionLabel>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-ink)]">
                  Make great hiring accessible to every team.
                </h2>
                <p className="text-[var(--color-ink-2)] leading-relaxed">
                  Enterprise recruiting technology has always been out of reach for Series A and B companies. Expensive contracts, complex implementations, and tools designed for 200-person TA teams — none of it fits.
                </p>
                <p className="text-[var(--color-ink-2)] leading-relaxed">
                  Grow flips that. One platform, calibrated to your company, operational in 48 hours. AI handles the execution so your people can focus on the decisions that actually matter.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3×", label: "Faster time-to-hire" },
                  { value: "60%", label: "Recruiter cost saved" },
                  { value: "94%", label: "Screening accuracy" },
                  { value: "12mo", label: "Retention predicted" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-5 py-6 text-center"
                  >
                    <span className="text-3xl font-bold text-[var(--color-accent)]">{value}</span>
                    <span className="text-xs text-[var(--color-ink-3)]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founding story */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>The story</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-ink)]">
              Born from frustration. Built with conviction.
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-[var(--color-ink-2)] leading-relaxed">
              <p>
                In 2022, our founders were running recruiting at fast-growing companies and hitting the same walls everyone hits: a sourcing tool that doesn't talk to the ATS, a coordinator spending half their week on scheduling, and a senior recruiter hoarding institutional knowledge that could walk out the door any day.
              </p>
              <p>
                The obvious answer was to hire more people. The smarter answer was to build better software.
              </p>
              <p>
                We spent two years talking to heads of talent, founders, and hiring managers. We mapped every failure mode in the recruiting process and built Grow to solve them — not with another point tool, but with a platform that thinks like a great recruiter.
              </p>
              <p>
                Today Grow is used by Series A to Series C teams across SaaS, fintech, and marketplace companies. Our customers have cut average time-to-hire by 3x and reduced recruiting overhead by more than half.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionLabel>What we believe</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Our values
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {values.map(({ name, desc, accent }) => (
                <div
                  key={name}
                  className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6"
                >
                  <div
                    className="h-1.5 w-10 rounded-full"
                    style={{ background: accent }}
                  />
                  <p className="font-semibold text-[var(--color-ink)]">{name}</p>
                  <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-t border-[var(--color-border)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionLabel>The team</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                Built by people who've lived the problem.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map(({ name, role, bio, avatar }) => (
                <div
                  key={name}
                  className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                >
                  <img
                    src={avatar}
                    alt={name}
                    className="h-14 w-14 rounded-xl object-cover object-top"
                  />
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">{name}</p>
                    <p className="text-xs text-[var(--color-accent)]">{role}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-ink-3)]">{bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-24 md:px-12">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-8 py-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px]"
              style={{ background: "radial-gradient(ellipse at top, #2dd4a020, transparent 70%)" }}
            />
            <Tag>Join us</Tag>
            <h2 className="relative text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              We're hiring.
            </h2>
            <p className="relative max-w-lg text-[var(--color-ink-2)]">
              We're a small team building ambitious software. If you believe recruiting can be radically better, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-[#080c10] transition-opacity hover:opacity-90"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
