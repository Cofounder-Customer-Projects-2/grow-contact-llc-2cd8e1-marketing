"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Canvas animation — client-only, no SSR needed
const HeroAnimation = dynamic(
  () => import("./HeroAnimation").then((m) => m.HeroAnimation),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center"
      style={{ backgroundColor: "hsl(260 87% 3%)" }}
    >
      {/* Deep background glow — large radial bloom behind the heading */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{
          top: "-10%",
          width: "120vw",
          height: "80vh",
          background:
            "radial-gradient(ellipse at 50% 0%, hsla(262,83%,58%,0.22) 0%, hsla(262,83%,58%,0.06) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary orb — sits below the heading, gives depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{
          top: "38%",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, hsla(262,83%,58%,0.18) 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: "translate(-50%, 0)",
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center pt-28 px-4 text-center"
        style={{ paddingBottom: "3rem" }}
      >
        {/* Giant gradient wordmark — exact app style */}
        <h1
          className="font-normal bg-clip-text text-transparent select-none"
          style={{
            fontSize: "clamp(80px, 18vw, 230px)",
            lineHeight: 1.02,
            letterSpacing: "-0.024em",
            fontFamily: "'Geist Sans', 'General Sans', ui-sans-serif, sans-serif",
            backgroundImage:
              "linear-gradient(223deg, #E8E8E9 0%, #7C5CFC 60%, #3A7BBF 104.15%)",
          }}
        >
          Grow
        </h1>

        {/* Sub-headline */}
        <p
          className="text-center text-lg leading-8 max-w-md mt-4"
          style={{ color: "hsl(215 20% 65%)", opacity: 0.9 }}
        >
          The most powerful AI ever deployed
          <br />
          in talent acquisition
        </p>

        {/* CTAs */}
        <div className="mt-8 mb-16 flex flex-col items-center gap-3 sm:flex-row">
          {/* Primary — hero button */}
          <Link
            href="https://app.grow.contact/signup"
            className="inline-flex items-center justify-center rounded-full font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{
              padding: "14px 29px",
              background:
                "linear-gradient(135deg, hsl(262 83% 65%) 0%, hsl(262 83% 50%) 100%)",
              boxShadow:
                "0 0 24px hsla(262,83%,58%,0.4), 0 1px 0 rgba(255,255,255,0.15) inset",
              fontSize: "0.9375rem",
            }}
          >
            Start free trial
          </Link>

          {/* Secondary — liquid-glass button */}
          <Link
            href="#features"
            className="liquid-glass inline-flex items-center justify-center rounded-full font-medium transition-all hover:bg-white/[0.07] active:scale-[0.98]"
            style={{
              padding: "14px 29px",
              color: "hsl(215 20% 75%)",
              fontSize: "0.9375rem",
            }}
          >
            See customer stories
          </Link>
        </div>

        {/* Metrics strip */}
        <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-4 w-full max-w-3xl pb-16">
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
              <span
                className="text-2xl font-bold"
                style={{ color: "hsl(262 83% 70%)" }}
              >
                {value}
              </span>
              <span className="text-xs text-[var(--color-ink-3)]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated node-network — below the metrics strip */}
      <HeroAnimation />
    </section>
  );
}
