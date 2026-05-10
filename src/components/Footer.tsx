export function Footer() {
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
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-4">
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-[var(--color-ink)]">Product</p>
              <a href="/features" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Features</a>
              <a href="/pricing" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Pricing</a>
              <a href="/integrations" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Integrations</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-[var(--color-ink)]">Use Cases</p>
              <a href="/use-cases/technical-recruiting" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Technical Hiring</a>
              <a href="/use-cases/executive-search" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Executive Search</a>
              <a href="/use-cases/high-volume-hiring" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">High-Volume Hiring</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-[var(--color-ink)]">Company</p>
              <a href="/about" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">About</a>
              <a href="/blog" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Blog</a>
              <a href="/contact" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-[var(--color-ink)]">Legal</p>
              <a href="/privacy" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Privacy</a>
              <a href="/terms" className="text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors">Terms</a>
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
