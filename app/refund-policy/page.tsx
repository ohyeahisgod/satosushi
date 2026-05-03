import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Satosushi's refund and cancellation policy for all subscription products.",
  alternates: {
    canonical: "/refund-policy",
  },
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

export default function RefundPolicyPage() {
  return (
    <LegalLayout badge="Legal" title="Refund Policy" lastUpdated="March 1, 2025">
      <p className="text-sm text-neutral-500 leading-relaxed mb-10">
        This Refund Policy applies to all subscription products sold by
        Satosushi. We aim to be fair and transparent about when and how refunds
        are issued. If you have a question not covered here, please contact us
        at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          {EMAIL}
        </a>
        .
      </p>

      <Section title="1. Money-back guarantee">
        <p>
          All new paid subscriptions include a{" "}
          <strong className="text-neutral-700 font-medium">14-day money-back guarantee</strong>.
          If you are not satisfied with the product for any reason within the
          first 14 calendar days of your initial paid subscription, contact us
          and we will issue a full refund — no questions asked.
        </p>
        <p>
          The 14-day window begins on the date your first payment is charged,
          not the date you created a free trial (if applicable).
        </p>
      </Section>

      <Section title="2. Monthly subscriptions">
        <p>
          Monthly subscriptions renew automatically each month. You can cancel
          at any time from your account settings. After cancellation, your
          access continues through the end of the current billing period. You
          will not be charged again after that.
        </p>
        <p>
          Refunds for the current billing period are not issued after the 14-day
          guarantee window, except in cases of verified billing errors or
          significant service failure on our part.
        </p>
      </Section>

      <Section title="3. Annual subscriptions">
        <p>
          Annual subscriptions are eligible for a full refund within the first
          14 days. After 14 days, we may offer a prorated refund for the
          remaining full months in the subscription at our discretion, evaluated
          on a case-by-case basis.
        </p>
        <p>
          To request a refund on an annual plan outside the 14-day window,
          contact us with your account email, the product name, and your reason
          for the request. We will respond within 3 business days.
        </p>
      </Section>

      <Section title="4. One-time purchases and lifetime plans">
        <p>
          One-time purchases are eligible for a full refund within 14 days of
          the purchase date, provided the product did not function as described
          and the issue could not be resolved by our support team.
        </p>
        <p>
          After 14 days, one-time purchases are non-refundable except in cases
          of a material defect that renders the product unusable.
        </p>
      </Section>

      <Section title="5. Non-refundable situations">
        <p>We are not able to issue refunds in the following cases:</p>
        <Bullets
          items={[
            "Refund requests submitted more than 14 days after the initial charge date, outside of the exceptions described above",
            "Accounts suspended or terminated for violation of our Terms of Service",
            "Charges resulting from failure to cancel before an automatic renewal date",
            "Requests based solely on not using the product",
            "Partial-month usage after a cancellation within an active billing period",
          ]}
        />
      </Section>

      <Section title="6. How to request a refund">
        <p>
          Email us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            {EMAIL}
          </a>{" "}
          with the subject line &quot;Refund Request&quot; and include:
        </p>
        <Bullets
          items={[
            "The email address associated with your account",
            "The name of the product",
            "The date of the charge you would like refunded",
            "A brief reason for the request (optional, but helpful)",
          ]}
        />
        <p>
          We aim to process all eligible refund requests within 5 business days.
          Approved refunds are returned to the original payment method. Depending
          on your bank or card provider, it may take 5–10 additional business
          days for the refund to appear on your statement.
        </p>
      </Section>

      <Section title="7. Chargebacks">
        <p>
          If you initiate a chargeback with your bank or card provider without
          first contacting us, we reserve the right to suspend your account
          pending resolution. We encourage you to reach out to us directly first
          — we are generally able to resolve billing issues faster than a
          chargeback process.
        </p>
      </Section>

      <Section title="8. Cancellation">
        <p>
          Cancelling your subscription stops future billing. You can cancel at
          any time from your account settings without contacting us. After
          cancellation, your access remains active through the end of the billing
          period you have paid for.
        </p>
        <p>
          Cancellation does not automatically trigger a refund. If you believe
          you are eligible for one, please follow the refund request process
          described above.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          We may update this Refund Policy from time to time. Changes will be
          posted on this page with an updated &quot;Last updated&quot; date. Continued
          use of our products after any update constitutes acceptance of the
          revised policy.
        </p>
      </Section>
    </LegalLayout>
  );
}
