import { useEffect, useRef, useState } from "react";
import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { EMAIL_URL } from "../config/contact.js";
import { mailtoLink, whatsappLink } from "../lib/send.js";

const BAR_COUNT = 24;
const FLAT = Array(BAR_COUNT).fill(8);

function fmt(s) {
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${m}:${ss < 10 ? "0" : ""}${ss}`;
}

function getSpeechRecognition() {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function goToForm(onClose) {
  onClose();
  // wait for the modal to close / body scroll to unlock
  setTimeout(() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

// Mounted fresh each time the modal opens, so state always starts clean.
function Recorder({ onClose }) {
  const SR = getSpeechRecognition();
  const supported = !!SR;

  const [phase, setPhase] = useState("idle"); // idle | recording | review
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(supported ? "" : "unsupported"); // "" | "unsupported" | "mic"
  const [seconds, setSeconds] = useState(0);
  const [bars, setBars] = useState(FLAT);

  const recRef = useRef(null);
  const finalRef = useRef("");
  const recordingRef = useRef(false);
  const timerRef = useRef(null);
  const animRef = useRef(null);

  function clearTimers() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (animRef.current) clearInterval(animRef.current);
    timerRef.current = null;
    animRef.current = null;
  }

  function teardown() {
    recordingRef.current = false;
    try {
      if (recRef.current) recRef.current.stop();
    } catch {
      /* already stopped */
    }
    clearTimers();
  }

  // Stop recognition + timers when the recorder unmounts (modal closed).
  useEffect(() => {
    return () => {
      recordingRef.current = false;
      try {
        if (recRef.current) recRef.current.stop();
      } catch {
        /* already stopped */
      }
      if (timerRef.current) clearInterval(timerRef.current);
      if (animRef.current) clearInterval(animRef.current);
    };
  }, []);

  function startTimers() {
    setSeconds(0);
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    animRef.current = setInterval(() => {
      setBars(Array.from({ length: BAR_COUNT }, () => Math.round(8 + Math.random() * 34)));
    }, 120);
  }

  function startRecording() {
    if (!SR) {
      setError("unsupported");
      return;
    }
    setError("");
    finalRef.current = "";
    setTranscript("");

    const rec = new SR();
    rec.lang = "en-GB";
    rec.continuous = true;
    rec.interimResults = true;

    rec.onresult = (event) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const r = event.results[i];
        if (r.isFinal) finalRef.current += r[0].transcript;
        else interim += r[0].transcript;
      }
      setTranscript((finalRef.current + interim).replace(/\s+/g, " ").trimStart());
    };
    rec.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        setError("mic");
        teardown();
        setBars(FLAT);
        setPhase("idle");
      }
      // "no-speech"/"aborted" are transient — onend will restart if still recording.
    };
    rec.onend = () => {
      if (recordingRef.current) {
        try {
          rec.start();
        } catch {
          /* restart race — ignore */
        }
      }
    };

    recRef.current = rec;
    recordingRef.current = true;
    try {
      rec.start();
    } catch {
      /* start race — ignore */
    }
    setPhase("recording");
    startTimers();
  }

  function stopRecording() {
    teardown();
    setBars(FLAT);
    setPhase("review");
  }

  const trimmed = transcript.trim();
  const emailHref = mailtoLink({ subject: "Voice note enquiry — Hamza Studio", body: trimmed });
  const waHref = whatsappLink(trimmed);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="vmTitle">
      <button className="modal__close" aria-label="Close" onClick={onClose}>
        ✕
      </button>

      {/* Browser can't do in-page speech-to-text */}
      {error === "unsupported" ? (
        <div className="rec-fallback">
          <h3 id="vmTitle">Send me a voice note</h3>
          <p>
            This browser can&rsquo;t transcribe speech in-page. No worries — type your message in the
            form, or send me an email and I&rsquo;ll take it from there.
          </p>
          <div className="vm-actions">
            <button className="btn btn--primary" onClick={() => goToForm(onClose)}>
              Use the contact form
            </button>
            <a className="btn btn--cream" href={EMAIL_URL}>
              Email me
            </a>
          </div>
        </div>
      ) : phase === "review" ? (
        <div className="rec-review">
          <h3 id="vmTitle">Here&rsquo;s what I heard</h3>
          <p>Tidy it up if you like, then send it over.</p>
          <textarea
            className="vm-transcript"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Your message will appear here as you speak…"
            rows={5}
          />
          <div className="vm-actions">
            <a
              className="btn btn--primary"
              href={emailHref}
              aria-disabled={!trimmed}
              onClick={(e) => {
                if (!trimmed) e.preventDefault();
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              Send as email
            </a>
            <a
              className="btn btn--teal"
              href={trimmed ? waHref : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!trimmed}
              onClick={(e) => {
                if (!trimmed) e.preventDefault();
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF6E9" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.6A8.4 8.4 0 1 1 21 11.5Z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <button className="vm-link" onClick={startRecording}>
            ↺ Record again
          </button>
        </div>
      ) : (
        <div className="rec-live">
          <h3 id="vmTitle">Send me a voice note</h3>
          <p>Tap the mic and tell me about your business — I&rsquo;ll turn it into text.</p>

          {error === "mic" && (
            <p className="vm-error">
              Microphone access was blocked. Allow it in your browser, or type your message in the
              form instead.
            </p>
          )}

          <div className="recorder">
            <button
              className={`rec-btn${phase === "recording" ? " recording" : ""}`}
              aria-label={phase === "recording" ? "Stop recording" : "Start recording"}
              onClick={() => (phase === "recording" ? stopRecording() : startRecording())}
            >
              {phase === "recording" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="6" width="12" height="12" rx="2.5" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
                </svg>
              )}
            </button>
            <div className="wavebars">
              {bars.map((h, i) => (
                <i key={i} style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="rec-status">
              {phase === "recording" ? `Listening… ${fmt(seconds)} — tap to stop` : "Tap the mic to start"}
            </div>
          </div>

          {phase === "recording" && transcript && (
            <p className="vm-livetext">{transcript}</p>
          )}

          <p className="modal__alt">
            Prefer to type? <a href="#contact" onClick={(e) => { e.preventDefault(); goToForm(onClose); }}>Use the form →</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default function VoiceModal() {
  const { isOpen, close } = useVoiceModal();

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <div
      className={`modal-overlay${isOpen ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {isOpen && <Recorder onClose={close} />}
    </div>
  );
}
