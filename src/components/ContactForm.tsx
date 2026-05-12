"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", subject: "General" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@grow.contact?subject=${encodeURIComponent(`[${form.subject}] ${form.name}`)}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-10 text-center">
        <CheckCircle className="h-10 w-10 text-[var(--color-accent)]" />
        <p className="text-lg font-bold text-[var(--color-ink)]">Message sent.</p>
        <p className="text-sm text-[var(--color-ink-2)]">
          We'll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[var(--color-ink-2)]">
            Name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Alex Hartmann"
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-3)] outline-none focus:border-[var(--color-accent)]/50"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[var(--color-ink-2)]">
            Work email <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="alex@company.com"
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-3)] outline-none focus:border-[var(--color-accent)]/50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[var(--color-ink-2)]">Company</label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder="Acme Corp"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-3)] outline-none focus:border-[var(--color-accent)]/50"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[var(--color-ink-2)]">What can we help with?</label>
        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]/50"
        >
          <option>General</option>
          <option>Demo request</option>
          <option>Pricing</option>
          <option>Enterprise</option>
          <option>Technical support</option>
          <option>Partnership</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[var(--color-ink-2)]">
          Message <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your team and what you're trying to solve..."
          className="resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-3)] outline-none focus:border-[var(--color-accent)]/50"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Send message <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-center text-xs text-[var(--color-ink-3)]">
        We respond within one business day. No spam, ever.
      </p>
    </form>
  );
}
