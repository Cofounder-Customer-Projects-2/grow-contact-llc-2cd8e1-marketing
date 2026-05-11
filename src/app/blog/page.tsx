import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — Grow AI Recruiting Platform",
  description:
    "Insights on AI-powered recruiting, hiring strategy, interview best practices, and how modern talent teams are building faster pipelines.",
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

const posts = [
  {
    slug: "#",
    category: "AI Recruiting",
    image: "/blog-featured-ai-sourcing.png",
    title: "How AI Sourcing Changed Our Time-to-Hire from 42 Days to 14",
    excerpt:
      "We followed one Series B SaaS team as they replaced their manual sourcing process with Grow's always-on AI engine. Here's exactly what changed and what didn't.",
    author: "Grow Team",
    date: "May 6, 2026",
    readTime: "8 min read",
    accent: "#2dd4a0",
    featured: true,
  },
  {
    slug: "#",
    category: "Interview Copilot",
    image: "/blog-interview-copilot.jpg",
    title: "The Interview Copilot Guide: Getting the Most from Live AI Assistance",
    excerpt:
      "Live transcription, real-time question suggestions, automatic scorecards — here's a practical walkthrough of how to use Interview Copilot without becoming dependent on it.",
    author: "Grow Team",
    date: "April 28, 2026",
    readTime: "6 min read",
    accent: "#a78bfa",
    featured: false,
  },
  {
    slug: "#",
    category: "Hiring Strategy",
    image: "/blog-structured-interviews.jpg",
    title: "Why Structured Interviews Outperform Unstructured Ones by 2×",
    excerpt:
      "The research has been clear for decades. Yet most interviews are still unstructured. Here's why — and how to change that without slowing down your process.",
    author: "Grow Team",
    date: "April 15, 2026",
    readTime: "5 min read",
    accent: "#60a5fa",
    featured: false,
  },
  {
    slug: "#",
    category: "Outreach",
    image: "/blog-outreach-patterns.jpg",
    title: "5 Outreach Message Patterns That Actually Get Responses from Passive Candidates",
    excerpt:
      "We analyzed 200,000+ outreach messages sent through Grow and found five patterns that consistently outperform generic templates. The differences are subtle but the gap is large.",
    author: "Grow Team",
    date: "April 3, 2026",
    readTime: "7 min read",
    accent: "#fb923c",
    featured: false,
  },
  {
    slug: "#",
    category: "Technical Recruiting",
    image: "/blog-technical-recruiting.png",
    title: "Screening Engineers at Scale Without Grinding Your Team",
    excerpt:
      "High-volume technical recruiting is one of the hardest operational problems in talent. This is how modern engineering teams use AI to screen 10× more candidates without burning out their interviewers.",
    author: "Grow Team",
    date: "March 21, 2026",
    readTime: "9 min read",
    accent: "#34d399",
    featured: false,
  },
  {
    slug: "#",
    category: "Analytics",
    image: "/blog-hiring-metrics.jpg",
    title: "The Metrics Every Head of Talent Should Be Tracking in 2026",
    excerpt:
      "Time-to-fill is a lagging indicator. Offer acceptance rate is a symptom. Here are the leading metrics that actually predict whether your recruiting process is healthy.",
    author: "Grow Team",
    date: "March 10, 2026",
    readTime: "6 min read",
    accent: "#f59e0b",
    featured: false,
  },
];

const categories = ["All", "AI Recruiting", "Interview Copilot", "Hiring Strategy", "Outreach", "Technical Recruiting", "Analytics"];

export default function BlogPage() {
  const [featuredPost, ...restPosts] = posts;
  type Post = typeof posts[number];

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
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <Tag>Blog</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Hiring insights from the Grow team.
            </h1>
            <p className="max-w-xl text-lg text-[var(--color-ink-2)]">
              Strategy, product deep-dives, and real data from teams using AI to hire faster.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-16 md:px-12">
          <div className="mx-auto max-w-5xl">
            <SectionLabel>Featured</SectionLabel>
            <a
              href={featuredPost.slug}
              className="mt-6 flex flex-col gap-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-8 transition-colors hover:border-[var(--color-accent)]/30 md:flex-row md:items-center"
            >
              {/* Featured visual */}
              <div className="flex flex-1 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                  style={{ minHeight: 200 }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <span
                  className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ borderColor: `${featuredPost.accent}40`, background: `${featuredPost.accent}12`, color: featuredPost.accent }}
                >
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="text-[var(--color-ink-2)] leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-[var(--color-ink-3)]">
                  <span>{featuredPost.author}</span>
                  <span>·</span>
                  <span>{featuredPost.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Post grid */}
        <section className="border-t border-[var(--color-border)] px-6 py-16 md:px-12">
          <div className="mx-auto max-w-5xl">
            {/* Category filter - static */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    i === 0
                      ? "border-[var(--color-accent)]/40 bg-[var(--color-accent-dim)] text-[var(--color-accent)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink-3)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-ink)]"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {restPosts.map(({ slug, category, title, excerpt, author, date, readTime, accent, image }: Post) => (
                <a
                  key={title}
                  href={slug}
                  className="flex flex-col gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/30"
                >
                  {/* Post visual */}
                  <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
                    <img
                      src={image}
                      alt={title}
                      className="h-36 w-full object-cover"
                    />
                  </div>

                  <span
                    className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{ borderColor: `${accent}40`, background: `${accent}12`, color: accent }}
                  >
                    {category}
                  </span>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold leading-snug text-[var(--color-ink)]">{title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--color-ink-2)] line-clamp-3">{excerpt}</p>
                  </div>

                  <div className="mt-auto flex items-center gap-3 text-xs text-[var(--color-ink-3)]">
                    <span>{date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {readTime}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-xl text-center">
            <SectionLabel>Newsletter</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-ink)]">
              Get hiring insights in your inbox.
            </h2>
            <p className="mt-3 text-[var(--color-ink-2)]">
              Monthly deep-dives on AI recruiting, hiring strategy, and product updates from Grow.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
