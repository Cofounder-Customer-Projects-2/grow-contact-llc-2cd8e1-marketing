import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Grow",
  description:
    "Terms of Service for Grow Contact LLC's AI-powered recruiting platform. Iceland governing law.",
};

// ─── Shared legal layout components ─────────────────────────────────────────

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

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-sm text-[var(--color-ink-3)]">
              Last updated: May 10, 2025 &nbsp;·&nbsp; Effective date: May 10, 2025
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-ink-2)] max-w-2xl">
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a binding legal agreement between you
              (&ldquo;Customer&rdquo; or &ldquo;you&rdquo;) and Grow Contact LLC (&ldquo;Grow,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), a company incorporated in Iceland. By accessing or using the Grow platform,
              website, or any related services (collectively, the &ldquo;Service&rdquo;), you agree to be bound by
              these Terms. If you are using the Service on behalf of an organization, you represent
              that you have authority to bind that organization, and &ldquo;you&rdquo; refers to that
              organization.
            </p>
          </div>

          {/* Table of contents */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)] mb-4">
              Contents
            </p>
            <ol className="flex flex-col gap-2 text-sm text-[var(--color-ink-2)]">
              {[
                ["1", "Definitions", "#definitions"],
                ["2", "Eligibility and account registration", "#eligibility"],
                ["3", "The Service", "#the-service"],
                ["4", "Subscription and payment", "#subscription"],
                ["5", "Acceptable use", "#acceptable-use"],
                ["6", "Customer data and privacy", "#customer-data"],
                ["7", "Intellectual property", "#intellectual-property"],
                ["8", "Confidentiality", "#confidentiality"],
                ["9", "Representations and warranties", "#warranties"],
                ["10", "Limitation of liability", "#limitation-of-liability"],
                ["11", "Indemnification", "#indemnification"],
                ["12", "Termination", "#termination"],
                ["13", "Changes to the Service and Terms", "#changes"],
                ["14", "Governing law and dispute resolution", "#governing-law"],
                ["15", "General provisions", "#general"],
                ["16", "Contact", "#contact"],
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
          <Section id="definitions" heading="1. Definitions">
            <p>
              In these Terms, the following defined terms have the meanings set out below:
            </p>
            <UL
              items={[
                "\"Service\" means the Grow AI-powered recruiting platform, including sourcing, screening, interview copilot, and analytics features, together with the website at grow.contact and any associated APIs.",
                "\"Customer Data\" means any data, including personal data relating to candidates and employees, that you upload to or generate through the Service.",
                "\"Subscription\" means a paid or trial plan granting you access to the Service.",
                "\"Authorized User\" means an employee, contractor, or agent of yours who is permitted to use the Service under your account.",
                "\"Confidential Information\" means non-public information disclosed by either party in connection with the Service that is marked confidential or should reasonably be understood to be confidential.",
                "\"Force Majeure Event\" means circumstances beyond a party's reasonable control, including natural disasters, pandemics, cyberattacks on third-party infrastructure, governmental actions, or failures of internet infrastructure.",
              ]}
            />
          </Section>

          {/* 2 */}
          <Section id="eligibility" heading="2. Eligibility and account registration">
            <p>
              You must be at least 18 years old and have the legal capacity to enter into contracts
              to use the Service. By registering, you represent that all information you provide is
              accurate and current.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and
              for all activities that occur under your account. Notify us immediately at{" "}
              <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                gudmundur@grow.contact
              </a>{" "}
              if you suspect unauthorized access. We are not liable for losses resulting from
              unauthorized use of your account where you failed to promptly notify us after becoming
              aware of the breach.
            </p>
            <p>
              Each account is for one organization. You may create Authorized User accounts for
              individuals within your organization, subject to the limits of your Subscription plan.
              Sharing account credentials between separate organizations is prohibited.
            </p>
          </Section>

          {/* 3 */}
          <Section id="the-service" heading="3. The Service">
            <SubSection heading="3.1 Service description">
              <p>
                Grow provides an AI-powered talent operating system including the following modules,
                subject to your Subscription plan:
              </p>
              <UL
                items={[
                  "AI Sourcing: automated identification and outreach to candidates based on your defined criteria",
                  "Async Screening: AI-scored video, text, and code-based candidate assessments",
                  "Interview Copilot: real-time AI assistance during live interviews via Zoom, Google Meet, and Microsoft Teams integrations",
                  "Predictive Analytics: forecasting models for time-to-hire, offer acceptance, and retention",
                ]}
              />
            </SubSection>

            <SubSection heading="3.2 Beta features">
              <p>
                Grow is currently in beta. Some features may be incomplete, subject to change, or
                temporarily unavailable. We may modify, suspend, or discontinue any feature at any time
                with reasonable notice. Beta access does not guarantee availability of any specific
                feature in future versions.
              </p>
            </SubSection>

            <SubSection heading="3.3 Service availability">
              <p>
                We target commercially reasonable uptime but do not guarantee uninterrupted access.
                Scheduled maintenance, emergency outages, and Force Majeure Events may cause temporary
                unavailability. Enterprise customers may negotiate a separate SLA. We will use
                reasonable efforts to provide advance notice of scheduled maintenance.
              </p>
            </SubSection>

            <SubSection heading="3.4 Integrations and third-party services">
              <p>
                The Service integrates with third-party platforms including video conferencing tools,
                email providers, and ATS systems. Grow does not control and is not responsible for the
                availability, security, or terms of those third-party services. Your use of third-party
                integrations is subject to their respective terms.
              </p>
            </SubSection>
          </Section>

          {/* 4 */}
          <Section id="subscription" heading="4. Subscription and payment">
            <SubSection heading="4.1 Plans">
              <p>
                Grow offers the following subscription tiers (pricing subject to change with 30 days&rsquo;
                notice):
              </p>
              <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">Plan</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">Price</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-3)]">Included</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    {[
                      ["Startup", "$499/month", "Up to 3 active roles, AI sourcing, async screening, 5 copilot interviews/month, basic analytics"],
                      ["Growth", "$1,299/month", "Up to 15 active roles, everything in Startup, unlimited copilot, predictive analytics, ATS integrations, priority support"],
                      ["Enterprise", "Custom", "Unlimited roles, everything in Growth, SSO/SAML, custom AI calibration, dedicated CSM, SLA, custom contracts"],
                    ].map(([plan, price, features]) => (
                      <tr key={plan as string} className="bg-[var(--color-surface-2)]">
                        <td className="px-4 py-3 font-medium text-[var(--color-ink)]">{plan}</td>
                        <td className="px-4 py-3 text-[var(--color-ink-2)]">{price}</td>
                        <td className="px-4 py-3 text-[var(--color-ink-3)]">{features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Feature availability and plan limits are subject to change. Enterprise pricing and
                terms are agreed separately in a written order form.
              </p>
            </SubSection>

            <SubSection heading="4.2 Billing and payment terms">
              <p>
                Subscriptions are billed monthly or annually in advance. Payment is due on the first
                day of each billing cycle. We accept payment by credit card and, for Enterprise
                customers, invoice.
              </p>
              <p>
                All fees are non-refundable except as expressly stated in these Terms or required by
                applicable law. If a payment fails, we may suspend your access until outstanding
                amounts are settled. We will provide at least 3 days&rsquo; notice before suspension.
              </p>
            </SubSection>

            <SubSection heading="4.3 Taxes">
              <p>
                All fees are exclusive of taxes, levies, or duties imposed by taxing authorities. You
                are responsible for paying all applicable taxes. Where Grow is required to collect VAT
                or similar taxes, those amounts will be added to your invoice.
              </p>
            </SubSection>

            <SubSection heading="4.4 Free trials">
              <p>
                We may offer free trial access for a limited period at our discretion. At the end of a
                trial, you must either subscribe or your access will terminate. Trial data may be
                deleted 30 days after trial expiration if you do not convert to a paid plan.
              </p>
            </SubSection>

            <SubSection heading="4.5 Upgrades, downgrades, and cancellation">
              <p>
                You may upgrade or downgrade your plan at any time. Upgrades take effect immediately;
                downgrades take effect at the start of the next billing cycle. To cancel, notify us at{" "}
                <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                  gudmundur@grow.contact
                </a>{" "}
                before the next renewal date. Cancellations do not entitle you to a refund of the
                current period&rsquo;s fees.
              </p>
            </SubSection>
          </Section>

          {/* 5 */}
          <Section id="acceptable-use" heading="5. Acceptable use">
            <p>
              You agree to use the Service only for lawful purposes and in compliance with these
              Terms. The following uses are strictly prohibited:
            </p>
            <UL
              items={[
                "Using the Service to process, store, or transmit unlawful, defamatory, harassing, abusive, fraudulent, or otherwise objectionable content",
                "Discriminating against candidates on the basis of protected characteristics including race, gender, national origin, religion, disability, age, sexual orientation, or pregnancy in violation of applicable law",
                "Using AI-generated scores or predictions as the sole basis for employment decisions without human review",
                "Circumventing or attempting to circumvent any technical limitations, security controls, or access restrictions of the Service",
                "Reverse engineering, decompiling, disassembling, or otherwise attempting to derive source code from the Service",
                "Reselling, sublicensing, or otherwise commercializing access to the Service without our written consent",
                "Transmitting malicious code, viruses, or other harmful software through the Service",
                "Using the Service in a manner that violates GDPR, CCPA, or any other applicable data protection or employment law",
                "Recording or transcribing interviews without the informed consent of all participants where required by law",
                "Using automated scripts, bots, or scrapers to access the Service other than through Grow's official APIs",
              ]}
            />
            <p>
              Grow reserves the right to investigate suspected violations and, at our discretion,
              suspend or terminate access without notice where we reasonably believe a serious violation
              has occurred. We may report violations to competent authorities where required or
              appropriate.
            </p>
          </Section>

          {/* 6 */}
          <Section id="customer-data" heading="6. Customer data and privacy">
            <SubSection heading="6.1 Data ownership">
              <p>
                You retain all right, title, and interest in your Customer Data. By using the Service,
                you grant Grow a limited, non-exclusive, worldwide license to process Customer Data
                solely to provide and improve the Service as described in our{" "}
                <Link href="/privacy" className="text-[var(--color-accent)] hover:opacity-80">
                  Privacy Policy
                </Link>
                .
              </p>
            </SubSection>

            <SubSection heading="6.2 Data processing responsibilities">
              <p>
                You are the data controller for candidate and employee data you upload to the Service.
                Grow acts as your data processor. Our processing is governed by the Data Processing
                Agreement (DPA) incorporated by reference into these Terms. Enterprise customers may
                request a signed DPA addendum.
              </p>
              <p>
                You warrant that: (a) you have obtained all necessary consents, provided required
                notices, and otherwise have a lawful basis for collecting and sharing candidate data
                with Grow; (b) your instructions to Grow regarding data processing comply with
                applicable law; (c) you will not upload special category data (such as health or
                biometric data) without a corresponding lawful basis and explicit consent.
              </p>
            </SubSection>

            <SubSection heading="6.3 Data security">
              <p>
                Grow implements commercially reasonable technical and organizational security measures.
                You are responsible for securing your own account credentials and ensuring Authorized
                Users do the same. In the event of a security incident affecting your Customer Data,
                we will notify you without undue delay and no later than 72 hours after becoming aware,
                consistent with GDPR requirements.
              </p>
            </SubSection>

            <SubSection heading="6.4 Data export and deletion">
              <p>
                Upon request, we will provide a machine-readable export of your Customer Data within
                30 days. Following account termination, we will delete Customer Data within 90 days
                except where retention is required by applicable law. Anonymized, aggregate data derived
                from Customer Data may be retained to improve our AI models.
              </p>
            </SubSection>
          </Section>

          {/* 7 */}
          <Section id="intellectual-property" heading="7. Intellectual property">
            <SubSection heading="7.1 Grow's intellectual property">
              <p>
                Grow and its licensors own all right, title, and interest in the Service, including
                all software, algorithms, AI models, interfaces, documentation, trademarks, and other
                proprietary materials. These Terms do not grant you any ownership interest in the
                Service. All rights not expressly granted are reserved.
              </p>
            </SubSection>

            <SubSection heading="7.2 Customer Data and outputs">
              <p>
                You own your Customer Data and the outputs the Service generates specifically from your
                Customer Data (such as AI-generated scorecards for your candidates). Grow retains the
                right to use aggregate, anonymized insights from usage patterns and model outputs across
                all customers to improve its AI systems, provided such use cannot be attributed to any
                individual or organization.
              </p>
            </SubSection>

            <SubSection heading="7.3 Feedback">
              <p>
                If you provide feedback, suggestions, or ideas about the Service, you grant Grow a
                royalty-free, perpetual, irrevocable, worldwide license to use that feedback for any
                purpose without any obligation to you. Feedback does not create any employment
                relationship or entitle you to compensation.
              </p>
            </SubSection>

            <SubSection heading="7.4 Grow name and marks">
              <p>
                You may not use Grow&rsquo;s name, logo, or trademarks without prior written consent except
                as reasonably necessary to identify Grow as your service provider (e.g., in internal
                documentation or to your candidates).
              </p>
            </SubSection>
          </Section>

          {/* 8 */}
          <Section id="confidentiality" heading="8. Confidentiality">
            <p>
              Each party agrees to keep the other party&rsquo;s Confidential Information confidential and
              to use it only to the extent necessary to perform obligations or exercise rights under
              these Terms. Confidential Information does not include information that: (a) is or
              becomes publicly available without breach of these Terms; (b) was rightfully known to
              the receiving party before disclosure; (c) is independently developed without use of
              the Confidential Information; or (d) is required to be disclosed by law, regulation, or
              court order, provided the receiving party gives reasonable prior notice and cooperates
              with the disclosing party&rsquo;s efforts to obtain a protective order.
            </p>
            <p>
              Obligations of confidentiality survive termination of these Terms for three years,
              except with respect to trade secrets, which remain confidential for as long as they
              qualify as trade secrets under applicable law.
            </p>
          </Section>

          {/* 9 */}
          <Section id="warranties" heading="9. Representations and warranties">
            <p>
              <strong className="text-[var(--color-ink)]">Grow warrants</strong> that: (a) it has the
              legal authority to enter into these Terms; (b) the Service will perform materially in
              accordance with its documentation under normal use; (c) it maintains appropriate data
              security measures consistent with industry standards; and (d) it will process Customer
              Data in compliance with applicable data protection law.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">You warrant</strong> that: (a) you have the
              authority to enter into these Terms and bind your organization; (b) your use of the
              Service will comply with all applicable laws, including employment and data protection
              laws; (c) you will not use the Service in a discriminatory or unlawful manner; and (d)
              all Customer Data you provide is lawfully obtained.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Disclaimer.</strong> Except as expressly
              stated, the Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of
              any kind, whether express, implied, statutory, or otherwise, including implied warranties
              of merchantability, fitness for a particular purpose, or non-infringement. AI-generated
              outputs, scores, and predictions are probabilistic and informational only; they do not
              constitute legal, HR, or professional advice and should not be used as the sole basis
              for any employment decision.
            </p>
          </Section>

          {/* 10 */}
          <Section id="limitation-of-liability" heading="10. Limitation of liability">
            <p>
              To the maximum extent permitted by applicable law:
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Exclusion of consequential damages.</strong>{" "}
              Neither party will be liable to the other for any indirect, incidental, special,
              consequential, exemplary, or punitive damages, including loss of profits, loss of
              revenue, loss of data, loss of goodwill, cost of substitute goods or services, or
              business interruption, even if advised of the possibility of such damages and regardless
              of the theory of liability.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Aggregate liability cap.</strong> Each
              party&rsquo;s total aggregate liability arising out of or related to these Terms, whether in
              contract, tort (including negligence), strict liability, or otherwise, will not exceed
              the total fees paid by you to Grow in the twelve (12) months immediately preceding the
              event giving rise to the claim.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Exceptions.</strong> The liability cap does
              not apply to: (a) your obligation to pay fees; (b) either party&rsquo;s indemnification
              obligations; (c) either party&rsquo;s fraud or wilful misconduct; (d) death or personal injury
              caused by negligence; or (e) any other liability that cannot be excluded under Icelandic
              law or EU law applicable in Iceland.
            </p>
          </Section>

          {/* 11 */}
          <Section id="indemnification" heading="11. Indemnification">
            <SubSection heading="11.1 By you">
              <p>
                You will defend, indemnify, and hold harmless Grow and its officers, directors,
                employees, contractors, and licensors from and against any claims, damages, fines,
                penalties, and expenses (including reasonable legal fees) arising out of or related to:
                (a) your use of the Service in violation of these Terms; (b) your Customer Data,
                including any claim that it infringes a third party&rsquo;s rights or violates applicable
                law; (c) your failure to obtain required consents from candidates or employees; or (d)
                your negligence or wilful misconduct.
              </p>
            </SubSection>

            <SubSection heading="11.2 By Grow">
              <p>
                Grow will defend, indemnify, and hold harmless you from third-party claims alleging
                that the Service, as provided by Grow and used in accordance with these Terms,
                infringes a valid third-party patent, copyright, or trademark. This obligation does
                not apply if the claim arises from: (a) your modification of the Service; (b) your
                Customer Data; (c) use of the Service in combination with other products not provided
                or approved by Grow; or (d) your failure to use updates or patches provided by Grow.
              </p>
            </SubSection>
          </Section>

          {/* 12 */}
          <Section id="termination" heading="12. Termination">
            <SubSection heading="12.1 Termination by you">
              <p>
                You may terminate your Subscription at any time by notifying us at{" "}
                <a href="mailto:gudmundur@grow.contact" className="text-[var(--color-accent)] hover:opacity-80">
                  gudmundur@grow.contact
                </a>
                . Termination takes effect at the end of the current billing cycle. No refunds are
                issued for the remaining prepaid period.
              </p>
            </SubSection>

            <SubSection heading="12.2 Termination by Grow">
              <p>
                We may terminate or suspend your access with 30 days&rsquo; written notice for any reason.
                We may terminate or suspend immediately, without prior notice, if: (a) you materially
                breach these Terms and fail to cure within 10 business days of notice; (b) you engage
                in conduct we reasonably believe is fraudulent, illegal, or poses a risk to the
                security of the Service or other customers; or (c) you become insolvent or subject to
                insolvency proceedings.
              </p>
            </SubSection>

            <SubSection heading="12.3 Effect of termination">
              <p>
                Upon termination: (a) your access to the Service will cease; (b) all outstanding
                fees become immediately due; (c) we will make your Customer Data available for export
                for 30 days and then delete it subject to applicable legal retention requirements;
                (d) sections that by their nature should survive termination (including IP ownership,
                confidentiality, limitation of liability, indemnification, and governing law) will
                survive.
              </p>
            </SubSection>
          </Section>

          {/* 13 */}
          <Section id="changes" heading="13. Changes to the Service and Terms">
            <p>
              We may update these Terms from time to time. We will provide at least 30 days&rsquo; advance
              notice of material changes by email and by posting a notice on the Service. Continued use
              after the effective date of revised Terms constitutes acceptance. If you object to a
              change, your sole remedy is to terminate your Subscription before the effective date.
            </p>
            <p>
              We may add, modify, or remove Service features with reasonable notice. For Enterprise
              customers, material reductions in functionality are subject to the applicable SLA.
            </p>
          </Section>

          {/* 14 */}
          <Section id="governing-law" heading="14. Governing law and dispute resolution">
            <SubSection heading="14.1 Governing law">
              <p>
                These Terms and any dispute arising out of or relating to them are governed by the laws
                of Iceland, without regard to its conflict-of-law principles. Where the GDPR applies,
                EU law governs data protection obligations to the extent required.
              </p>
            </SubSection>

            <SubSection heading="14.2 Jurisdiction">
              <p>
                The parties submit to the exclusive jurisdiction of the courts of Iceland for the
                resolution of any dispute arising under or related to these Terms, except that either
                party may seek emergency injunctive relief in any court of competent jurisdiction.
              </p>
            </SubSection>

            <SubSection heading="14.3 Informal resolution">
              <p>
                Before initiating formal legal proceedings, each party agrees to attempt good-faith
                negotiation for at least 30 days after written notice of the dispute. This requirement
                does not apply to requests for injunctive relief or enforcement of intellectual property
                rights.
              </p>
            </SubSection>
          </Section>

          {/* 15 */}
          <Section id="general" heading="15. General provisions">
            <UL
              items={[
                "Entire agreement: these Terms, together with the Privacy Policy and any applicable DPA or order form, constitute the entire agreement between the parties and supersede all prior or contemporaneous agreements relating to the Service.",
                "Severability: if any provision is held invalid or unenforceable, it will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will remain in full force.",
                "Waiver: failure by either party to enforce any provision does not constitute a waiver of future enforcement.",
                "Assignment: you may not assign these Terms or any rights under them without Grow's prior written consent. Grow may assign these Terms to a successor entity in connection with a merger, acquisition, or sale of assets.",
                "Notices: legal notices must be sent by email to gudmundur@grow.contact (for Grow) or to the email address on your account (for you), with a copy sent by certified post. Notices are effective on receipt.",
                "Force majeure: neither party is liable for delays or failures in performance caused by a Force Majeure Event, provided the affected party notifies the other promptly and uses reasonable efforts to resume performance.",
                "No third-party beneficiaries: these Terms are for the benefit of the parties only and do not create rights in any third party.",
                "Relationship of the parties: the parties are independent contractors. Nothing in these Terms creates an employment, partnership, joint venture, or agency relationship.",
              ]}
            />
          </Section>

          {/* 16 */}
          <Section id="contact" heading="16. Contact">
            <p>
              For questions about these Terms, contact us at:
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
