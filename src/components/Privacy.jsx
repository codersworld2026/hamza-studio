import { ArrowLeft, AlertTriangle } from "lucide-react";
import { EMAIL_URL, WHATSAPP_URL } from "../config/contact.js";

const LAST_UPDATED = "27 April 2026";
const BUSINESS_NAME = "Hamza Studio (Hamza Suliman, sole trader)";

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pt-14">
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand-600 transition-colors hover:text-brand-700"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
        Back to home
      </a>

      <header className="mt-8">
        <h1 className="font-display text-[36px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[44px]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-[14px] text-ink-500">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      {/* Review banner — flag for legal review */}
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-peach-400/40 bg-peach-100/40 p-4">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-peach-400" strokeWidth={2.2} />
        <p className="text-[13.5px] leading-relaxed text-ink-700">
          <strong>Template — please review.</strong> This privacy notice is a
          starting template that reflects the way{" "}
          <em>this website</em> currently behaves (no analytics, no cookies, no
          tracking, contact form sends an email). Before publishing, have it
          reviewed by a legal professional and adjust to your jurisdiction and
          actual data-handling practices.
        </p>
      </div>

      <div className="prose prose-ink mt-10 max-w-none space-y-8 text-[15px] leading-relaxed text-ink-700">
        <Section title="1. Who we are">
          <p>
            {BUSINESS_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;Hamza Studio&rdquo;) operates this website. We are the data
            controller for any personal data you choose to share with us.
          </p>
          <p>
            You can reach us by email at{" "}
            <a className="text-brand-600 hover:text-brand-700" href={EMAIL_URL}>
              {EMAIL_URL.replace(/^mailto:/, "")}
            </a>{" "}
            or on WhatsApp at{" "}
            <a className="text-brand-600 hover:text-brand-700" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {WHATSAPP_URL.replace(/^https?:\/\//, "")}
            </a>
            .
          </p>
        </Section>

        <Section title="2. What information we collect">
          <p>We only collect information you choose to give us:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Contact form submissions.</strong> When you fill in the
              enquiry form, your name, email address, optional phone number,
              and the project description you provide are sent to us as an
              email. The form does not store anything on this website.
            </li>
            <li>
              <strong>Direct messages.</strong> If you contact us by WhatsApp
              or email, the contents of those messages and any contact details
              you share will be visible to us via those services.
            </li>
          </ul>
          <p>
            This site does <strong>not</strong> use analytics, advertising
            cookies, fingerprinting, or any third-party tracking. No cookies
            are set by this website.
          </p>
        </Section>

        <Section title="3. How we use your information">
          <p>We use the information you give us to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Reply to your enquiry and discuss your project.</li>
            <li>
              Send you a quote, contract, or invoice if we agree to work
              together.
            </li>
            <li>Communicate with you about ongoing work.</li>
          </ul>
          <p>
            We will <strong>not</strong> add you to a marketing list, send you
            unsolicited promotional email, or share your details with third
            parties for marketing.
          </p>
        </Section>

        <Section title="4. Lawful basis for processing">
          <p>Under the UK GDPR, our lawful bases for processing your data are:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Consent</strong> — you choose to send us your details by
              filling in the form or messaging us.
            </li>
            <li>
              <strong>Contract</strong> — where we have agreed to do work for
              you, we process the personal data necessary to perform that
              contract.
            </li>
            <li>
              <strong>Legitimate interests</strong> — replying to people who
              have proactively contacted us about our services.
            </li>
          </ul>
        </Section>

        <Section title="5. How long we keep your data">
          <p>
            Enquiries that do not turn into a project are kept for up to 12
            months and then deleted. If we work together, project-related
            communications and records are kept for the duration of the
            project plus 6 years for tax and legal record-keeping (HMRC
            requirement).
          </p>
        </Section>

        <Section title="6. Where your data is stored">
          <p>
            Email enquiries are received and stored in our email provider
            (iCloud / Apple Mail). WhatsApp messages are stored by WhatsApp.
            We do not run our own servers or databases for this website.
          </p>
        </Section>

        <Section title="7. Sharing your data">
          <p>
            We do not sell or rent your personal data. We may share it only in
            the following circumstances:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>With service providers we use (e.g. our email provider).</li>
            <li>If required by law, court order, or to protect our rights.</li>
          </ul>
        </Section>

        <Section title="8. Your rights">
          <p>Under the UK GDPR, you have the right to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Ask what personal data we hold about you (a &ldquo;subject access request&rdquo;).</li>
            <li>Ask us to correct inaccurate data.</li>
            <li>Ask us to delete your data.</li>
            <li>Object to processing or restrict it.</li>
            <li>Withdraw your consent at any time.</li>
            <li>
              Complain to the UK Information Commissioner&rsquo;s Office (ICO)
              at{" "}
              <a className="text-brand-600 hover:text-brand-700" href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                ico.org.uk
              </a>
              .
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a className="text-brand-600 hover:text-brand-700" href={EMAIL_URL}>
              {EMAIL_URL.replace(/^mailto:/, "")}
            </a>
            . We will respond within one month.
          </p>
        </Section>

        <Section title="9. Changes to this policy">
          <p>
            If we make material changes to this policy we will update the
            &ldquo;last updated&rdquo; date at the top of the page.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions about this privacy notice? Email{" "}
            <a className="text-brand-600 hover:text-brand-700" href={EMAIL_URL}>
              {EMAIL_URL.replace(/^mailto:/, "")}
            </a>
            .
          </p>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="font-display text-[20px] font-semibold tracking-tight text-ink-900 sm:text-[22px]">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
