// Cookie/consent preference. We only store this one strictly-necessary value
// (the user's banner choice) — no tracking. Third-party embeds (Cal.com) are
// gated on consent === "accepted".

export const CONSENT_KEY = "nl_cookie_consent";
export const CONSENT_EVENT = "nl:consent";

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY); // "accepted" | "rejected" | null
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable — still broadcast so the UI updates this session */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
