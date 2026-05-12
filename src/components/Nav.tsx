"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={[
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12",
          "transition-[background-color,border-color,backdrop-filter] duration-300 ease-in-out",
          scrolled
            ? "border-b border-[var(--color-border)] bg-[hsl(260_87%_3%)]/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent backdrop-blur-none",
        ].join(" ")}
      >
        <a href="/" className="flex items-center gap-2">
          {/* G logo icon — sourced from app repo src/assets/logo.png */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-auto"
            width={32}
            height={32}
          />
          <span className="text-lg font-bold tracking-tight text-[var(--color-ink)]">
            Grow
          </span>
          <span className="hidden rounded bg-[var(--color-accent-dim)] px-1.5 py-0.5 text-[11px] font-semibold text-[var(--color-accent)] sm:inline">
            BETA
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm text-[var(--color-ink-2)] md:flex">
          <a href="/features" className="transition-colors hover:text-[var(--color-ink)]">Features</a>

          {/* Use Cases dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setUseCasesOpen(true)}
            onMouseLeave={() => setUseCasesOpen(false)}
          >
            <button
              className="flex items-center gap-1 transition-colors hover:text-[var(--color-ink)]"
              type="button"
            >
              Use Cases <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {useCasesOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-1 shadow-lg">
                <a
                  href="/use-cases/technical-recruiting"
                  className="block px-4 py-2.5 text-sm text-[var(--color-ink-2)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]"
                >
                  Technical Recruiting
                </a>
                <a
                  href="/use-cases/executive-search"
                  className="block px-4 py-2.5 text-sm text-[var(--color-ink-2)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]"
                >
                  Executive Search
                </a>
                <a
                  href="/use-cases/high-volume-hiring"
                  className="block px-4 py-2.5 text-sm text-[var(--color-ink-2)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]"
                >
                  High-Volume Hiring
                </a>
              </div>
            )}
          </div>

          <a href="/integrations" className="transition-colors hover:text-[var(--color-ink)]">Integrations</a>
          <a href="/pricing" className="transition-colors hover:text-[var(--color-ink)]">Pricing</a>
          <a href="/blog" className="transition-colors hover:text-[var(--color-ink)]">Blog</a>
          <a href="/about" className="transition-colors hover:text-[var(--color-ink)]">About</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.grow.contact"
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
          >
            Sign in
          </a>
          <a
            href="https://app.grow.contact"
            className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ boxShadow: "0 0 16px hsla(262,83%,58%,0.35)" }}
          >
            Get started
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="rounded-lg p-2 text-[var(--color-ink-2)] md:hidden"
          onClick={() => setOpen(!open)}
          type="button"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute inset-x-0 top-full border-b border-[var(--color-border)] bg-[hsl(260_87%_3%)] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <a href="/features" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>Features</a>
              <a href="/use-cases/technical-recruiting" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>Technical Recruiting</a>
              <a href="/use-cases/executive-search" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>Executive Search</a>
              <a href="/use-cases/high-volume-hiring" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>High-Volume Hiring</a>
              <a href="/integrations" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>Integrations</a>
              <a href="/pricing" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>Pricing</a>
              <a href="/blog" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>Blog</a>
              <a href="/about" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>About</a>
              <a href="/contact" className="text-[var(--color-ink-2)] hover:text-[var(--color-ink)]" onClick={() => setOpen(false)}>Contact</a>
              <a
                href="https://app.grow.contact"
                className="mt-2 rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-center font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Gradient separator line — matches app repo Navbar */}
      <div
        className={[
          "fixed inset-x-0 z-50 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent",
          "transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{ top: "calc(var(--nav-height, 57px))" }}
      />
    </>
  );
}
