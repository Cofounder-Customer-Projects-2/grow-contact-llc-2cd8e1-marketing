import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Grow AI Recruiting Platform",
  description:
    "Get in touch with the Grow team. Ask about a demo, pricing, enterprise plans, or just say hello.",
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-dim)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
      {children}
    </span>
  );
}

export default function ContactPage() {
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
              background: "radial-gradient(ellipse at center, hsl(262 83% 58%) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-start gap-5">
            <Tag>Contact us</Tag>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-6xl">
              Let's talk.
            </h1>
            <p className="text-lg text-[var(--color-ink-2)]">
              Whether you want a demo, have a question about pricing, or want to discuss an enterprise deployment — we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 md:grid-cols-2 md:gap-12">
              {/* Contact info */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
                    How we can help
                  </p>
                  <div className="mt-6 flex flex-col gap-4">
                    {[
                      {
                        icon: <ArrowRight className="h-4 w-4" />,
                        title: "Request a demo",
                        desc: "See Grow in action with a live walkthrough tailored to your team's hiring workflow.",
                      },
                      {
                        icon: <ArrowRight className="h-4 w-4" />,
                        title: "Pricing & plans",
                        desc: "We'll help you find the right plan or build a custom quote for your team size and use case.",
                      },
                      {
                        icon: <ArrowRight className="h-4 w-4" />,
                        title: "Enterprise",
                        desc: "SSO, custom contracts, SLA guarantees, and dedicated onboarding for large teams.",
                      },
                      {
                        icon: <ArrowRight className="h-4 w-4" />,
                        title: "General questions",
                        desc: "Anything else — integrations, technical questions, or just want to learn more about Grow.",
                      },
                    ].map(({ icon, title, desc }) => (
                      <div
                        key={title}
                        className="flex gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-[var(--color-accent)]">
                          {icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-ink)]">{title}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-ink-3)]">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
                    Direct contact
                  </p>
                  <a
                    href="mailto:hello@grow.contact"
                    className="flex items-center gap-2.5 text-sm text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                    hello@grow.contact
                  </a>
                  <a
                    href="https://app.grow.contact"
                    className="flex items-center gap-2.5 text-sm text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 text-[var(--color-accent)]" />
                    app.grow.contact — chat with us in-app
                  </a>
                </div>
              </div>

              {/* Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
