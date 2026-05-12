import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Grow",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg)] px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-ink)] md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-[var(--color-ink-3)]">
        This page doesn&apos;t exist or has been moved. Try heading back to the
        homepage or browsing the site.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href="/features"
          className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
