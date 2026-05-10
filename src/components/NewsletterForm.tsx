"use client";

export function NewsletterForm() {
  return (
    <form
      className="mt-8 flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="you@company.com"
        className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-3)] outline-none focus:border-[var(--color-accent)]/50"
      />
      <button
        type="submit"
        className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[#080c10] transition-opacity hover:opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
}
