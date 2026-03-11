import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing access to and use of Satosushi products and services.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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

export default function TermsOfServicePage() {
  return (
    <LegalLayout badge="Legal" title="Terms of Service" lastUpdated="March 1, 2025">
      <p className="text-sm text-neutral-500 leading-relaxed mb-10">
        These Terms of Service (&quot;Terms&quot;) are a legal agreement between
        you and Satosushi (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your
        access to and use of our websites and subscription software products
        (collectively, the &quot;Services&quot;). By creating an account or using
        any of our Services, you agree to be bound by these Terms. If you do
        not agree, do not access or use our Services.
      </p>

      <Section title="1. Eligibility">
        <p>
          You must be at least 18 years old to use our Services. By using our
          Services, you represent and warrant that you meet this requirement and
          that the information you provide to us is accurate and complete.
        </p>
        <p>
          If you are using the Services on behalf of a company or organization,
          you represent that you have the authority to bind that entity to these
          Terms, and references to &quot;you&quot; include that entity.
        </p>
      </Section>

      <Section title="2. Account registration">
        <p>
          Most of our Services require you to create an account. You are
          responsible for keeping your login credentials confidential and for
          all activity that occurs under your account.
        </p>
        <p>
          You agree to notify us immediately at{" "}
          <a href={`mailto:${EMAIL}`} className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity">{EMAIL}</a>{" "}
          if you suspect any unauthorized access to your account. We are not
          liable for any loss or damage arising from your failure to keep your
          credentials secure.
        </p>
      </Section>

      <Section title="3. Subscriptions and billing">
        <p>
          Our Services are offered on a recurring subscription basis (monthly or
          annual). By subscribing, you authorize us to charge your payment
          method at the start of each billing cycle until you cancel.
        </p>
        <p>
          <strong className="text-neutral-700 font-medium">Auto-renewal.</strong>{" "}
          Subscriptions renew automatically at the end of each billing period.
          You will be charged the then-current subscription price unless you
          cancel before the renewal date. You can cancel at any time from your
          account settings.
        </p>
        <p>
          <strong className="text-neutral-700 font-medium">Pricing changes.</strong>{" "}
          We reserve the right to change subscription prices. For existing
          subscribers, price changes will take effect at the next renewal after
          at least 30 days&apos; written notice. Continued use of the Service
          after a price change constitutes acceptance of the new price.
        </p>
        <p>
          <strong className="text-neutral-700 font-medium">Taxes.</strong>{" "}
          All prices are exclusive of applicable taxes. You are responsible for
          any sales, use, VAT, or similar taxes imposed on your subscription by
          your jurisdiction.
        </p>
      </Section>

      <Section title="4. Cancellation">
        <p>
          You may cancel your subscription at any time from your account
          settings or by contacting us. Cancellation takes effect at the end of
          the current billing period. You will retain access to the Service
          through the end of the period you have already paid for.
        </p>
        <p>
          Cancellation does not automatically entitle you to a refund. Please
          review our{" "}
          <a
            href="/refund-policy"
            className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Refund Policy
          </a>{" "}
          for details on eligible refund situations.
        </p>
      </Section>

      <Section title="5. Acceptable use">
        <p>You agree not to use our Services to:</p>
        <Bullets
          items={[
            "Violate any applicable law, regulation, or third-party rights",
            "Transmit spam, unsolicited communications, or deceptive content",
            "Attempt to gain unauthorized access to our systems or another user's account",
            "Interfere with or degrade the performance or availability of our Services",
            "Reverse engineer, decompile, or otherwise attempt to extract source code from our products",
            "Use automated tools to scrape, index, or extract data from our Services without authorization",
            "Impersonate another person or entity",
            "Use our Services to facilitate illegal activity of any kind",
          ]}
        />
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these rules, without prior notice or refund.
        </p>
      </Section>

      <Section title="6. Intellectual property">
        <p>
          All content, software, trademarks, and materials made available
          through our Services are owned by Satosushi or our licensors and are
          protected by applicable intellectual property laws.
        </p>
        <p>
          We grant you a limited, non-exclusive, non-transferable,
          non-sublicensable license to access and use the Services during your
          active subscription period, solely for your internal business
          purposes.
        </p>
        <p>
          You may not copy, modify, distribute, sell, or create derivative works
          from any part of our Services without our prior written consent.
        </p>
      </Section>

      <Section title="7. User content">
        <p>
          Some Services allow you to upload or submit content (such as waitlist
          pages, form configurations, or other data). You retain ownership of
          your content. By submitting content, you grant us a limited,
          non-exclusive license to host, process, and display that content as
          needed to provide the Service to you.
        </p>
        <p>
          You are solely responsible for ensuring that your content complies
          with all applicable laws and does not infringe third-party rights.
        </p>
      </Section>

      <Section title="8. Service availability">
        <p>
          We aim to maintain high availability for all our products but do not
          guarantee uninterrupted service. We may perform scheduled or emergency
          maintenance that temporarily affects access. We will make reasonable
          efforts to notify you of planned downtime in advance.
        </p>
        <p>
          We are not liable for any loss or damage caused by temporary
          unavailability of our Services.
        </p>
      </Section>

      <Section title="9. Disclaimer of warranties">
        <p>
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
          WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
          TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL
          BE ERROR-FREE OR UNINTERRUPTED.
        </p>
      </Section>

      <Section title="10. Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SATOSUSHI AND ITS
          AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR
          ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
          INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL,
          ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE
          THE SERVICES.
        </p>
        <p>
          IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
          FROM THESE TERMS OR YOUR USE OF THE SERVICES EXCEED THE TOTAL AMOUNT
          YOU PAID US IN THE 12 MONTHS IMMEDIATELY PRECEDING THE CLAIM.
        </p>
      </Section>

      <Section title="11. Indemnification">
        <p>
          You agree to indemnify and hold harmless Satosushi and its affiliates,
          officers, employees, and agents from any claims, damages, losses, and
          expenses (including reasonable legal fees) arising from your use of
          the Services, your content, or your violation of these Terms.
        </p>
      </Section>

      <Section title="12. Governing law and disputes">
        <p>
          These Terms are governed by applicable law, without regard to conflict
          of law principles. Any disputes arising under these Terms shall first
          be attempted to be resolved through good-faith negotiation. If
          resolution cannot be reached informally, disputes shall be resolved
          through binding arbitration or in a court of competent jurisdiction,
          as permitted by applicable law.
        </p>
      </Section>

      <Section title="13. Changes to these terms">
        <p>
          We may update these Terms from time to time. When we do, we will
          update the &quot;Last updated&quot; date and, for material changes, notify
          you by email or through a notice in your account. Your continued use
          of the Services after the effective date of any changes constitutes
          acceptance of the updated Terms.
        </p>
      </Section>

      <Section title="14. Contact us">
        <p>
          Questions about these Terms? Contact us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            {EMAIL}
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
