import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Satosushi collects, uses, stores, and protects your personal information.",
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-neutral-900 mb-3">{title}</h2>
      <div className="text-sm text-neutral-500 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2 pl-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const EMAIL = "hello@satosushi.co";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout badge="Legal" title="Privacy Policy" lastUpdated="March 1, 2025">
      <p className="text-sm text-neutral-500 leading-relaxed mb-10">
        Satosushi (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the satosushi.co
        website and related software products. This Privacy Policy describes
        what personal information we collect, how we use it, and the choices
        you have regarding your information. By using any of our products or
        websites, you agree to the practices described in this policy.
      </p>

      <Section title="1. Information we collect">
        <p>
          <strong className="text-neutral-700 font-medium">Information you provide.</strong>{" "}
          When you create an account, subscribe to a product, or contact us, we
          collect information such as your name, email address, and payment
          details. Payment information is processed directly by our payment
          processor (Stripe) and is not stored on our servers.
        </p>
        <p>
          <strong className="text-neutral-700 font-medium">Information collected automatically.</strong>{" "}
          When you access our websites or use our products, we automatically
          collect certain technical data, including your IP address, browser
          type, operating system, referring URL, pages visited, and session
          duration. This data is collected through server logs, cookies, and
          similar technologies.
        </p>
        <p>
          <strong className="text-neutral-700 font-medium">Cookies.</strong>{" "}
          We use essential cookies required for authentication and session
          management, and optional analytics cookies to understand how our
          products are used. You can disable non-essential cookies in your
          browser settings. Note that disabling cookies may affect the
          functionality of certain features.
        </p>
      </Section>

      <Section title="2. How we use your information">
        <p>We use the information we collect to:</p>
        <Bullets
          items={[
            "Create and manage your account",
            "Process payments and send billing-related communications",
            "Deliver and operate the products you subscribe to",
            "Send transactional emails (receipts, password resets, account notices)",
            "Respond to support requests and inquiries",
            "Detect, investigate, and prevent fraudulent or abusive activity",
            "Analyze aggregate usage data to improve our products",
            "Comply with legal obligations",
          ]}
        />
        <p>
          We do not use your personal information for advertising, and we do not
          sell or rent your data to third parties for marketing purposes.
        </p>
      </Section>

      <Section title="3. Third-party service providers">
        <p>
          We share information with trusted third-party providers that help us
          operate our business. These providers are contractually required to
          handle data only as directed by us and in accordance with this policy.
          Key providers include:
        </p>
        <Bullets
          items={[
            "Stripe — payment processing and billing. Stripe's privacy policy is available at stripe.com/privacy.",
            "Cloud hosting providers — for serving our applications and storing data securely.",
            "Email delivery services — for sending transactional and support emails.",
            "Analytics tools — for aggregated, anonymized product usage analysis.",
          ]}
        />
        <p>
          We do not share your personal information with third parties for their
          own marketing or advertising purposes.
        </p>
      </Section>

      <Section title="4. Data retention">
        <p>
          We retain your account information for as long as your account is
          active. If you close your account, we will delete or anonymize your
          personal data within 90 days, except where we are required to retain
          it for legal, tax, or accounting reasons (typically up to 7 years for
          billing records).
        </p>
        <p>
          Support communications are retained for up to 2 years. Server log
          data is retained for up to 90 days.
        </p>
      </Section>

      <Section title="5. Data security">
        <p>
          We use industry-standard security measures to protect your personal
          information, including encryption in transit (TLS) and at rest, access
          controls, and regular security reviews. However, no method of
          transmission over the internet or electronic storage is completely
          secure. We cannot guarantee absolute security.
        </p>
        <p>
          If we become aware of a data breach that affects your personal
          information, we will notify you in accordance with applicable law.
        </p>
      </Section>

      <Section title="6. Your rights and choices">
        <p>
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <Bullets
          items={[
            "Access — request a copy of the personal data we hold about you.",
            "Correction — request that we correct inaccurate or incomplete data.",
            "Deletion — request that we delete your personal data, subject to legal retention requirements.",
            "Portability — request your data in a structured, machine-readable format.",
            "Objection — object to certain types of processing, such as analytics.",
            "Opt-out of marketing emails — use the unsubscribe link in any marketing email we send.",
          ]}
        />
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            {EMAIL}
          </a>
          . We will respond within 30 days.
        </p>
      </Section>

      <Section title="7. International data transfers">
        <p>
          Our servers and service providers are located primarily in the United
          States. If you access our products from outside the United States, your
          information may be transferred to, stored, and processed in the US or
          other countries where our service providers operate. We take appropriate
          steps to ensure that such transfers comply with applicable data
          protection laws.
        </p>
      </Section>

      <Section title="8. Children&apos;s privacy">
        <p>
          Our products are intended for users who are at least 18 years of age.
          We do not knowingly collect personal information from anyone under 18.
          If we learn that we have inadvertently collected data from a minor, we
          will delete it promptly. If you believe we have collected information
          from a minor, please contact us immediately.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &quot;Last updated&quot; date at the top of this page.
          For material changes, we will notify you by email or by displaying a
          notice in your account dashboard prior to the change taking effect.
        </p>
        <p>
          Your continued use of our products after any update constitutes your
          acceptance of the revised policy.
        </p>
      </Section>

      <Section title="10. Contact us">
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or how we handle your personal data, please contact us at:
        </p>
        <p>
          <a
            href={`mailto:${EMAIL}`}
            className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            {EMAIL}
          </a>
        </p>
        <p>
          We will do our best to address your inquiry promptly and
          professionally.
        </p>
      </Section>
    </LegalLayout>
  );
}
