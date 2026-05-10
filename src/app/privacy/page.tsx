import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Grow",
  description:
    "How Grow Contact LLC collects, uses, and protects your personal data. GDPR and CCPA compliant.",
};

// ─── Shared layout for legal pages ──────────────────────────────────────────

function LegalNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-[var(--color-border)] bg-[#080c10]/80 px-6 py-4 backdrop-blur-md md:px-12">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-bold tracking-tight text-[var(--color-ink)]">
          Grow
        </span>
        <span className="hidden rounded bg-[var(--color-accent-dim)] px-1.5 py-0.5 text-[11px] font-semibold text-[var(--color-accent)] sm:inline">
          BETA
        </span>
      </Link>
      <Link
        href="/"
        className="text-sm text-[var(--color-ink-3)] transition-colors hover:text-[var(--color-ink)]"
      >
        ← Back to home
      </Link>
    </nav>
  );
}

function LegalFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-10 md:px-12">
      <div className="mx-auto max-w-3xl flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-[var(--color-ink-3)]">
          © {new Date().getFullYear()} Grow Contact LLC. All rights reserved.
        </p>
        <div className="flex gap-5 text-xs text-[var(--color-ink-3)]">
          <Link href="/privacy" className="hover:text-[var(--color-ink)] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[var(--color-ink)] transition-colors">
            Terms of Service
          </Link>
          <a href="mailto:gudmundur@grow.contact" className="hover:text-[var(--color-ink)] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Section components ──────────────────────────────────────────────────────

function Section({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-[var(--color-ink)]">{heading}</h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--color-ink-2)]">
        {children}
      </div>
    </section>
  );
}

function SubSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold text-[var(--color-ink)]">{heading}</h3>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-[var(--color-ink-2)]">
        {children}
      </div>
    </div>
  );
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 pl-4">
      {items.map((item) => (
        <li key={item} className="list-disc marker:text-[var(--color-accent)]">
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <>
      <LegalNav />
      <main className="pt-24 pb-20 px-6 md:px-12">
        <div className="mx-auto max-w-3xl flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-dim)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] w-fit">
              Legal
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--color-ink-3)]">
              Last updated: May 10, 2025 &nbsp;·&nbsp; Effective date: May 10, 2025
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-ink-2)] max-w-2xl">
              This Privacy Policy explains how Grow Contact LLC (&ldquo;Grow,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and protects personal
              data in connection with our AI-powered recruiting platform and website at{" "}
              <a href="https://grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                grow.contact
              </a>
              . We are incorporated in Iceland and process data subject to the General Data Protection
              Regulation (GDPR) and, where applicable, the California Consumer Privacy Act (CCPA).
            </p>
          </div>

          {/* Table of contents */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)] mb-4">
              Contents
            </p>
            <ol className="flex flex-col gap-2 text-sm text-[var(--color-ink-2)]">
              {[
                ["1", "Who we are", "#who-we-are"],
                ["2", "Data we collect", "#data-we-collect"],
                ["3", "How we use your data", "#how-we-use"],
                ["4", "Legal bases for processing (GDPR)", "#legal-bases"],
                ["5", "Sub-processors and third parties", "#sub-processors"],
                ["6", "International data transfers", "#international-transfers"],
                ["7", "Data retention", "#data-retention"],
                ["8", "Your rights", "#your-rights"],
                ["9", "Cookies and tracking", "#cookies"],
                ["10", "Data security", "#data-security"],
                ["11", "Children's privacy", "#children"],
                ["12", "Changes to this policy", "#changes"],
                ["13", "Contact us", "#contact"],
              ].map(([num, label, href]) => (
                <li key={href as string}>
                  <a
                    href={href as string}
                    className="hover:text-[var(--color-ink)] transition-colors"
                  >
                    <span className="text-[var(--color-ink-3)]">{num}. </span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* 1 */}
          <Section id="who-we-are" heading="1. Who we are">
            <p>
              <strong className="text-[var(--color-ink)]">Data Controller:</strong> Grow Contact LLC,
              registered in Iceland.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Contact:</strong>{" "}
              <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                gudmundur@grow.contact
              </a>
            </p>
            <p>
              Grow provides an AI-powered talent operating system that helps companies source
              candidates, conduct async screening, run AI-assisted interviews, and predict hiring
              outcomes. As the data controller, Grow determines the purposes and means of processing
              personal data on the platform. Where Grow processes candidate data on behalf of its
              business customers, those customers are the data controller and Grow acts as a data
              processor under a separate Data Processing Agreement (DPA).
            </p>
          </Section>

          {/* 2 */}
          <Section id="data-we-collect" heading="2. Data we collect">
            <SubSection heading="2.1 Account and registration data">
              <p>
                When you create a Grow account or request a demo, we collect information you provide
                directly:
              </p>
              <UL
                items={[
                  "Full name and professional title",
                  "Work email address and password (hashed)",
                  "Company name and size",
                  "Billing name and address (processed by our payment provider)",
                ]}
              />
            </SubSection>

            <SubSection heading="2.2 Candidate profile data">
              <p>
                If you use Grow to manage recruiting, you or the platform may collect the following
                data about candidates:
              </p>
              <UL
                items={[
                  "Name, contact details, and professional history (resume / LinkedIn profile)",
                  "Application materials, cover letters, and portfolio links",
                  "Async screening responses (video, text, or code submissions)",
                  "Interview transcripts and associated metadata",
                  "AI-generated scores, summaries, and competency assessments",
                  "Predicted outcomes such as offer acceptance and retention scores",
                ]}
              />
              <p>
                Business customers are responsible for ensuring they have a lawful basis to collect and
                share candidate data with Grow.
              </p>
            </SubSection>

            <SubSection heading="2.3 Communication data">
              <p>
                Our platform can send and receive email on your behalf using our email infrastructure
                provider. We store:
              </p>
              <UL
                items={[
                  "Outbound and inbound email content and metadata (to, from, subject, timestamp)",
                  "Email open and click events for sequence tracking",
                  "Candidate reply content",
                ]}
              />
            </SubSection>

            <SubSection heading="2.4 Meeting and recording data">
              <p>
                When you use the Interview Copilot feature, Grow integrates with video-conferencing
                platforms via Recall.ai. This involves:
              </p>
              <UL
                items={[
                  "Audio and video recordings of interviews (with participant consent)",
                  "Real-time transcription of interview audio",
                  "Metadata such as meeting ID, participants, and duration",
                  "AI-generated suggestions and post-interview scorecards derived from recordings",
                ]}
              />
              <p>
                You are responsible for informing interview participants that recordings may occur and
                obtaining appropriate consent before enabling this feature.
              </p>
            </SubSection>

            <SubSection heading="2.5 Usage and technical data">
              <p>
                We automatically collect certain data when you use our platform or visit our website:
              </p>
              <UL
                items={[
                  "IP address and approximate geographic location (country/region)",
                  "Browser type, operating system, and device type",
                  "Pages viewed, clicks, and session duration",
                  "Referral URLs and UTM campaign parameters",
                  "Error logs and performance diagnostics",
                ]}
              />
            </SubSection>
          </Section>

          {/* 3 */}
          <Section id="how-we-use" heading="3. How we use your data">
            <p>We use personal data for the following purposes:</p>
            <UL
              items={[
                "Providing, operating, and maintaining the Grow platform and its features",
                "Processing account registrations, managing subscriptions, and handling billing",
                "Enabling AI-powered sourcing, screening, interview assistance, and analytics features",
                "Sending transactional emails (account confirmations, password resets, billing receipts)",
                "Sending product-related communications where you have opted in",
                "Improving and training our AI models on aggregate, anonymized patterns — never on individual identifiable data without consent",
                "Detecting and preventing fraud, abuse, and security incidents",
                "Complying with legal obligations under Icelandic law and the GDPR",
                "Enforcing our Terms of Service and protecting our rights and property",
                "Responding to lawful requests from competent authorities",
              ]}
            />
            <p>
              We do not sell personal data to third parties. We do not use candidate data for purposes
              unrelated to the services you have engaged us to provide.
            </p>
          </Section>

          {/* 4 */}
          <Section id="legal-bases" heading="4. Legal bases for processing (GDPR)">
            <p>
              Where the GDPR applies, we rely on the following legal bases for processing personal
              data:
            </p>
            <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">
                      Processing activity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">
                      Legal basis
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {[
                    ["Account creation and service delivery", "Performance of a contract (Art. 6(1)(b))"],
                    ["Billing and payment processing", "Performance of a contract (Art. 6(1)(b))"],
                    ["Security, fraud prevention, and abuse detection", "Legitimate interests (Art. 6(1)(f))"],
                    ["Product analytics and improvement", "Legitimate interests (Art. 6(1)(f))"],
                    ["Marketing communications to existing customers", "Legitimate interests (Art. 6(1)(f))"],
                    ["Marketing to new contacts who have opted in", "Consent (Art. 6(1)(a))"],
                    ["Compliance with legal obligations", "Legal obligation (Art. 6(1)(c))"],
                    ["Interview recordings with candidate consent", "Consent (Art. 6(1)(a))"],
                    ["Processing special category data (if applicable)", "Explicit consent (Art. 9(2)(a))"],
                  ].map(([activity, basis]) => (
                    <tr key={activity as string} className="bg-[var(--color-surface-2)]">
                      <td className="px-4 py-3 text-[var(--color-ink-2)]">{activity}</td>
                      <td className="px-4 py-3 text-[var(--color-ink-2)]">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Where we rely on legitimate interests, you have the right to object to that processing.
              Please contact us at{" "}
              <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                gudmundur@grow.contact
              </a>{" "}
              to exercise that right.
            </p>
          </Section>

          {/* 5 */}
          <Section id="sub-processors" heading="5. Sub-processors and third parties">
            <p>
              Grow uses the following third-party sub-processors to operate the platform. Each
              processor is bound by a data processing agreement consistent with GDPR requirements.
            </p>
            <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">
                      Processor
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {[
                    ["Supabase, Inc.", "Database hosting, authentication, and file storage", "USA (EU region available)"],
                    ["Resend, Inc.", "Transactional email delivery", "USA"],
                    ["Recall.ai", "Meeting bot integration, recording, and transcription", "USA"],
                    ["OpenRouter, Inc.", "AI model routing and inference", "USA"],
                    ["Vercel, Inc.", "Website and application hosting", "USA / Global edge"],
                  ].map(([name, purpose, location]) => (
                    <tr key={name as string} className="bg-[var(--color-surface-2)]">
                      <td className="px-4 py-3 font-medium text-[var(--color-ink)]">{name}</td>
                      <td className="px-4 py-3 text-[var(--color-ink-2)]">{purpose}</td>
                      <td className="px-4 py-3 text-[var(--color-ink-3)]">{location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              We may also disclose data to: (a) professional advisors such as lawyers and accountants
              under confidentiality obligations; (b) law enforcement or regulators where required by
              law; (c) a successor entity in the event of a merger, acquisition, or sale of assets,
              subject to standard data protection commitments.
            </p>
          </Section>

          {/* 6 */}
          <Section id="international-transfers" heading="6. International data transfers">
            <p>
              Grow is incorporated in Iceland, which is part of the European Economic Area (EEA). Our
              sub-processors are predominantly based in the United States. Where we transfer personal
              data outside the EEA, we rely on appropriate safeguards under GDPR Chapter V, including:
            </p>
            <UL
              items={[
                "European Commission Standard Contractual Clauses (SCCs) incorporated into our sub-processor agreements",
                "Adequacy decisions where applicable",
                "Supplementary technical and organizational measures where required",
              ]}
            />
            <p>
              You may request a copy of the relevant transfer safeguards by contacting us at{" "}
              <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                gudmundur@grow.contact
              </a>
              .
            </p>
          </Section>

          {/* 7 */}
          <Section id="data-retention" heading="7. Data retention">
            <p>
              We retain personal data only as long as necessary for the purposes described in this
              policy, or as required by law.
            </p>
            <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">
                      Data category
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">
                      Retention period
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {[
                    ["Active account data", "Duration of account plus 30 days after deletion request"],
                    ["Candidate profiles and screening data", "Duration of customer subscription plus 90 days"],
                    ["Interview recordings and transcripts", "90 days after interview date, or earlier on request"],
                    ["Email communication logs", "12 months from collection"],
                    ["Billing and invoice records", "7 years (Icelandic accounting law)"],
                    ["Server logs and usage analytics", "90 days"],
                    ["Backup data", "30 days after the primary data deletion cycle"],
                  ].map(([category, period]) => (
                    <tr key={category as string} className="bg-[var(--color-surface-2)]">
                      <td className="px-4 py-3 text-[var(--color-ink-2)]">{category}</td>
                      <td className="px-4 py-3 text-[var(--color-ink-3)]">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              After the applicable retention period, data is securely deleted or anonymized so that it
              can no longer be attributed to an identified individual.
            </p>
          </Section>

          {/* 8 */}
          <Section id="your-rights" heading="8. Your rights">
            <SubSection heading="8.1 Rights under the GDPR (EEA and UK residents)">
              <p>
                If you are located in the EEA or the United Kingdom, you have the following rights with
                respect to your personal data:
              </p>
              <UL
                items={[
                  "Right of access (Art. 15): request a copy of the personal data we hold about you",
                  "Right to rectification (Art. 16): correct inaccurate or incomplete data",
                  "Right to erasure (Art. 17): request deletion of your data where no legal basis for retention exists",
                  "Right to restriction (Art. 18): limit how we process your data while a dispute is pending",
                  "Right to data portability (Art. 20): receive your data in a machine-readable format",
                  "Right to object (Art. 21): object to processing based on legitimate interests or for direct marketing",
                  "Rights related to automated decision-making (Art. 22): not to be subject to solely automated decisions with significant legal effect without human review",
                  "Right to withdraw consent: where processing is based on consent, you may withdraw at any time without affecting prior processing",
                ]}
              />
              <p>
                You also have the right to lodge a complaint with the Icelandic Data Protection
                Authority (Persónuvernd) at{" "}
                <a
                  href="https://www.personuvernd.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:opacity-80"
                >
                  www.personuvernd.is
                </a>
                .
              </p>
            </SubSection>

            <SubSection heading="8.2 Rights under the CCPA (California residents)">
              <p>
                If you are a California resident, you have the following rights under the California
                Consumer Privacy Act:
              </p>
              <UL
                items={[
                  "Right to know: request disclosure of the categories and specific pieces of personal information we collect, use, disclose, and sell",
                  "Right to delete: request deletion of your personal information, subject to certain exceptions",
                  "Right to opt out of sale: we do not sell personal information; this right is not currently applicable",
                  "Right to non-discrimination: we will not discriminate against you for exercising your CCPA rights",
                  "Right to correct: request correction of inaccurate personal information",
                  "Right to limit use of sensitive personal information: limit our use of sensitive personal information to what is necessary for the service",
                ]}
              />
              <p>
                To submit a CCPA request, email us at{" "}
                <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                  gudmundur@grow.contact
                </a>{" "}
                with the subject line &ldquo;CCPA Request.&rdquo; We will respond within 45 days.
              </p>
            </SubSection>

            <SubSection heading="8.3 How to exercise your rights">
              <p>
                To exercise any of the rights above, contact us at{" "}
                <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                  gudmundur@grow.contact
                </a>
                . We may ask you to verify your identity before acting on a request. We will respond
                within 30 days (or as required by applicable law). If your request is complex or
                numerous, we may extend the period by a further 60 days and will notify you accordingly.
              </p>
              <p>
                If you are a candidate whose data is processed by a Grow customer, please direct your
                request to that customer (your prospective employer), who is the data controller for
                that processing.
              </p>
            </SubSection>
          </Section>

          {/* 9 */}
          <Section id="cookies" heading="9. Cookies and tracking">
            <p>
              Our website uses the following types of cookies and similar tracking technologies:
            </p>
            <UL
              items={[
                "Strictly necessary cookies: required for the website and application to function (session management, security tokens). These cannot be disabled.",
                "Analytics cookies: we use privacy-respecting analytics to understand how visitors use our site. These are only set after you consent.",
                "Preference cookies: store your choices such as language settings or cookie consent status.",
              ]}
            />
            <p>
              You can manage your cookie preferences at any time using the cookie banner on our website
              or by adjusting your browser settings. Note that disabling all cookies may affect site
              functionality.
            </p>
          </Section>

          {/* 10 */}
          <Section id="data-security" heading="10. Data security">
            <p>
              We implement technical and organizational measures appropriate to the risk, including:
            </p>
            <UL
              items={[
                "Encryption of data in transit (TLS 1.2+) and at rest (AES-256)",
                "Access controls with role-based permissions and multi-factor authentication for team members",
                "Regular security reviews and dependency patching",
                "Logging and monitoring of access to personal data",
                "Incident response procedures with data breach notification to supervisory authorities within 72 hours where required",
              ]}
            />
            <p>
              No security measures are 100% effective. If you believe your account has been compromised,
              contact us immediately at{" "}
              <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                gudmundur@grow.contact
              </a>
              .
            </p>
          </Section>

          {/* 11 */}
          <Section id="children" heading="11. Children's privacy">
            <p>
              Grow is a B2B platform intended for use by businesses and their employees. We do not
              knowingly collect personal data from individuals under the age of 16. If you believe a
              child has provided data to us, contact us immediately and we will take steps to delete it.
            </p>
          </Section>

          {/* 12 */}
          <Section id="changes" heading="12. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify registered users by
              email and update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of
              the platform after the effective date of a revised policy constitutes acceptance of the
              updated terms. For material changes, we will provide at least 30 days&rsquo; advance notice
              where required by law.
            </p>
          </Section>

          {/* 13 */}
          <Section id="contact" heading="13. Contact us">
            <p>
              For any questions, concerns, or requests related to this Privacy Policy or our data
              practices, contact our Data Protection contact:
            </p>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex flex-col gap-1.5">
              <p className="font-semibold text-[var(--color-ink)]">Grow Contact LLC</p>
              <p>
                Email:{" "}
                <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                  gudmundur@grow.contact
                </a>
              </p>
              <p className="text-[var(--color-ink-3)]">Iceland</p>
            </div>
          </Section>
        </div>
      </main>
      <LegalFooter />
    </>
  );
}
