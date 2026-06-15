import { useState } from "react";
import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { EMAIL_URL, WHATSAPP_URL } from "../config/contact.js";
import { mailtoLink, whatsappLink, EMAIL_ADDRESS } from "../lib/send.js";

const EMPTY = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const { open } = useVoiceModal();
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const ready = form.name.trim() && form.email.trim() && form.message.trim();

  function buildBody() {
    return [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "—"}`,
      "",
      form.message.trim(),
    ].join("\n");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!ready) return;
    window.location.href = mailtoLink({
      subject: `Website enquiry from ${form.name.trim()}`,
      body: buildBody(),
    });
    setSent(true);
  }

  function sendWhatsApp() {
    if (!ready) return;
    const text = `Hi Hamza! I'm ${form.name.trim()}.\n\n${form.message.trim()}\n\n(Email: ${form.email.trim()}${
      form.phone.trim() ? `, Phone: ${form.phone.trim()}` : ""
    })`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__dots" aria-hidden="true" />
      <div className="wrap">
        <div className="contact__grid">
          {/* LEFT — pitch + alternative channels */}
          <div className="contact__intro reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>
              Tell me about your <em>project</em>
            </h2>
            <p>
              Fill in the form and I&rsquo;ll reply with a plan, a price and a timeline — usually the
              same day. Prefer to talk? Send a voice note or message me directly.
            </p>

            <button type="button" className="btn btn--primary contact__voice" onClick={open}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
              </svg>
              Send a voice note instead
            </button>

            <ul className="contact__methods">
              <li>
                <a href={EMAIL_URL}>
                  <span className="contact__ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2.5" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <span className="contact__ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.6A8.4 8.4 0 1 1 21 11.5Z" />
                      <path d="M8.5 9.5c0 4 2 6 6 6" />
                    </svg>
                  </span>
                  Message me on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT — the form */}
          <div className="form-card reveal" data-d="1">
            {sent ? (
              <div className="form-success">
                <div className="check">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17233D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4 13 5 5L20 6" />
                  </svg>
                </div>
                <h3>Almost there! 🎉</h3>
                <p>
                  Your message should have opened in your email or WhatsApp app — just hit send. If
                  nothing popped up, email me at <a href={EMAIL_URL}>{EMAIL_ADDRESS}</a>.
                </p>
                <button
                  type="button"
                  className="btn btn--cream"
                  onClick={() => {
                    setForm(EMPTY);
                    setSent(false);
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set("name")}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set("email")}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-phone">
                      Phone <span className="field__opt">(optional)</span>
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="07…"
                      value={form.phone}
                      onChange={set("phone")}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    placeholder="Write your message here — tell me about your business, what you need and any deadlines."
                    value={form.message}
                    onChange={set("message")}
                    rows={5}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn--primary" disabled={!ready}>
                    Send message
                    <span className="arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                  <button type="button" className="btn btn--teal" onClick={sendWhatsApp} disabled={!ready}>
                    Send on WhatsApp
                  </button>
                </div>
                <p className="form-note">
                  This opens your email (or WhatsApp) with everything filled in — no account or
                  sign-up needed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
