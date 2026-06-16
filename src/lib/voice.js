// Helpers for turning a spoken voice note into contact-form fields, and for
// bridging that prefill from the voice modal into the contact form (which may
// live on another page, so we persist via sessionStorage as well as an event).

export const PREFILL_KEY = "nl_prefill";
export const PREFILL_EVENT = "nl:prefill";

// Best-effort extraction of name / email / phone from a transcript.
// The full transcript is always kept as the message so nothing is lost.
export function parseContact(text) {
  const raw = (text || "").trim();
  const result = { name: "", email: "", phone: "", message: raw };
  if (!raw) return result;

  // Email — direct pattern first, then spoken "name at gmail dot com".
  let email = (raw.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i) || [])[0];
  if (!email) {
    const spoken = raw
      .toLowerCase()
      .replace(/\s+at\s+/g, "@")
      .replace(/\s+dot\s+/g, ".");
    const m = spoken.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
    if (m) email = m[0].replace(/\s+/g, "");
  }
  if (email) result.email = email;

  // Phone — a run of 7+ digits (optionally spaced/dashed, with a leading +).
  const phone = (raw.match(/(\+?\d[\d\s-]{6,}\d)/) || [])[0];
  if (phone) result.phone = phone.replace(/[^\d+]/g, "");

  // Name — "my name is …", "I'm …", "this is …", "it's …".
  const nameMatch = raw.match(
    /\b(?:my name is|i am|i'?m|this is|it'?s|name's)\s+([a-z][a-z'’-]+(?:\s+[a-z][a-z'’-]+)?)/i
  );
  if (nameMatch) {
    result.name = nameMatch[1]
      .toLowerCase()
      .replace(/(^|\s)\S/g, (c) => c.toUpperCase())
      .trim();
  }

  return result;
}

// Keep only fields that actually have a value, so we never blank out the form.
export function nonEmpty(data) {
  return Object.fromEntries(
    Object.entries(data || {}).filter(([, v]) => typeof v === "string" && v.trim())
  );
}

export function consumePrefill() {
  try {
    const raw = sessionStorage.getItem(PREFILL_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(PREFILL_KEY);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
