// Helpers for delivering messages without a backend: prefilled email + WhatsApp.
import { EMAIL_URL, WHATSAPP_URL } from "../config/contact.js";

export const EMAIL_ADDRESS = EMAIL_URL.replace(/^mailto:/, "");

// Build a mailto: link with an encoded subject + body.
// Note: encodeURIComponent (not URLSearchParams) so spaces become %20, not "+",
// which some mail clients render literally in the body.
export function mailtoLink({ subject = "", body = "" } = {}) {
  const parts = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${EMAIL_ADDRESS}${parts.length ? `?${parts.join("&")}` : ""}`;
}

// Build a wa.me link with prefilled text.
export function whatsappLink(text = "") {
  const base = WHATSAPP_URL.replace(/\/+$/, "");
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
