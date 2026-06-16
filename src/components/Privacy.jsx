import { EMAIL_URL, WHATSAPP_URL } from "../config/contact.js";

const LAST_UPDATED = "16 June 2026";
const BUSINESS_NAME = "Northlight Studios (Hamza Suliman, sole trader)";
const EMAIL = EMAIL_URL.replace(/^mailto:/, "");
const WHATSAPP_LABEL = WHATSAPP_URL.replace(/^https?:\/\//, "");

export default function Privacy() {
  return (
    <article className="legal">
      <a className="legal__back" href="/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        Back to home
      </a>

      <h1>Privacy Policy</h1>
      <p className="legal__updated">Last updated: {LAST_UPDATED}</p>

      <div className="legal__note">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
        <p>
          <strong>Template — please review.</strong> This privacy notice is a starting template that
          reflects the way <em>this website</em> currently behaves (no analytics, no cookies, no
          tracking, contact form sends an email). Before publishing, have it reviewed by a legal
          professional and adjust to your jurisdiction and actual data-handling practices.
        </p>
      </div>

      <Section title="1. Who we are">
        <p>
          {BUSINESS_NAME} (“we”, “us”, “Northlight Studios”) operates this website. We are the data
          controller for any personal data you choose to share with us.
        </p>
        <p>
          You can reach us by email at <a href={EMAIL_URL}>{EMAIL}</a> or on WhatsApp at{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {WHATSAPP_LABEL}
          </a>
          .
        </p>
      </Section>

      <Section title="2. What information we collect">
        <p>We only collect information you choose to give us:</p>
        <ul>
          <li>
            <strong>Contact form submissions.</strong> When you fill in the enquiry form, your name,
            email address, optional phone number, and the project description you provide are sent to
            us as an email. The form does not store anything on this website.
          </li>
          <li>
            <strong>Direct messages.</strong> If you contact us by WhatsApp or email, the contents of
            those messages and any contact details you share will be visible to us via those
            services.
          </li>
        </ul>
        <p>
          This site does <strong>not</strong> use analytics, advertising cookies, fingerprinting, or
          any third-party tracking. No cookies are set by this website.
        </p>
      </Section>

      <Section title="3. How we use your information">
        <p>We use the information you give us to:</p>
        <ul>
          <li>Reply to your enquiry and discuss your project.</li>
          <li>Send you a quote, contract, or invoice if we agree to work together.</li>
          <li>Communicate with you about ongoing work.</li>
        </ul>
        <p>
          We will <strong>not</strong> add you to a marketing list, send you unsolicited promotional
          email, or share your details with third parties for marketing.
        </p>
      </Section>

      <Section title="4. Lawful basis for processing">
        <p>Under the UK GDPR, our lawful bases for processing your data are:</p>
        <ul>
          <li>
            <strong>Consent</strong> — you choose to send us your details by filling in the form or
            messaging us.
          </li>
          <li>
            <strong>Contract</strong> — where we have agreed to do work for you, we process the
            personal data necessary to perform that contract.
          </li>
          <li>
            <strong>Legitimate interests</strong> — replying to people who have proactively contacted
            us about our services.
          </li>
        </ul>
      </Section>

      <Section title="5. How long we keep your data">
        <p>
          Enquiries that do not turn into a project are kept for up to 12 months and then deleted. If
          we work together, project-related communications and records are kept for the duration of
          the project plus 6 years for tax and legal record-keeping (HMRC requirement).
        </p>
      </Section>

      <Section title="6. Where your data is stored">
        <p>
          Email enquiries are received and stored in our email provider (iCloud / Apple Mail).
          WhatsApp messages are stored by WhatsApp. We do not run our own servers or databases for
          this website.
        </p>
      </Section>

      <Section title="7. Sharing your data">
        <p>
          We do not sell or rent your personal data. We may share it only in the following
          circumstances:
        </p>
        <ul>
          <li>With service providers we use (e.g. our email provider).</li>
          <li>If required by law, court order, or to protect our rights.</li>
        </ul>
      </Section>

      <Section title="8. Your rights">
        <p>Under the UK GDPR, you have the right to:</p>
        <ul>
          <li>Ask what personal data we hold about you (a “subject access request”).</li>
          <li>Ask us to correct inaccurate data.</li>
          <li>Ask us to delete your data.</li>
          <li>Object to processing or restrict it.</li>
          <li>Withdraw your consent at any time.</li>
          <li>
            Complain to the UK Information Commissioner’s Office (ICO) at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
              ico.org.uk
            </a>
            .
          </li>
        </ul>
        <p>
          To exercise any of these rights, email us at <a href={EMAIL_URL}>{EMAIL}</a>. We will
          respond within one month.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          If we make material changes to this policy we will update the “last updated” date at the top
          of the page.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          Questions about this privacy notice? Email <a href={EMAIL_URL}>{EMAIL}</a>.
        </p>
      </Section>
    </article>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
