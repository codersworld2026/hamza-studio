import { useEffect, useRef, useState } from "react";
import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { EMAIL_URL } from "../config/contact.js";

const BAR_COUNT = 28;
const FLAT = Array(BAR_COUNT).fill(8);

function fmt(s) {
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${m}:${ss < 10 ? "0" : ""}${ss}`;
}

// The recorder body is mounted fresh every time the modal opens, so its
// state (view / recording / timer) always starts clean — no reset effect needed.
function Recorder({ onClose }) {
  const [view, setView] = useState("live"); // "live" | "sent"
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [bars, setBars] = useState(FLAT);

  const timerRef = useRef(null);
  const animRef = useRef(null);

  function clearTimers() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (animRef.current) {
      clearInterval(animRef.current);
      animRef.current = null;
    }
  }

  // Stop any running timers when the recorder unmounts (modal closed).
  useEffect(() => clearTimers, []);

  function startRecording() {
    setRecording(true);
    setSeconds(0);
    clearTimers();
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    animRef.current = setInterval(() => {
      setBars(Array.from({ length: BAR_COUNT }, () => Math.round(8 + Math.random() * 34)));
    }, 120);
  }

  function stopRecording() {
    clearTimers();
    setRecording(false);
    setBars(FLAT);
    setView("sent");
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="vmTitle">
      <button className="modal__close" aria-label="Close" onClick={onClose}>
        ✕
      </button>

      {view === "live" ? (
        <div className="rec-live">
          <h3 id="vmTitle">Send me a voice note</h3>
          <p>Tap to record. Tell me about your business — I&rsquo;ll reply with a plan.</p>
          <div className="recorder">
            <button
              className={`rec-btn${recording ? " recording" : ""}`}
              aria-label={recording ? "Stop recording" : "Record"}
              onClick={() => (recording ? stopRecording() : startRecording())}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
              </svg>
            </button>
            <div className="wavebars">
              {bars.map((h, i) => (
                <i key={i} style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="rec-status">
              {recording ? `Recording… ${fmt(seconds)}` : "Tap the mic to start"}
            </div>
          </div>
          <p className="modal__alt">
            Prefer to type? <a href={EMAIL_URL}>Email me instead →</a>
          </p>
        </div>
      ) : (
        <div className="rec-sent">
          <div className="check">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17233D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m4 13 5 5L20 6" />
            </svg>
          </div>
          <h3>Got it! 🎉</h3>
          <p>
            Your voice note is on its way. Hamza will get back to you — usually same day. Good days,
            all ways.
          </p>
          <button className="btn btn--primary" onClick={onClose} style={{ marginTop: 6 }}>
            Nice, close this
          </button>
        </div>
      )}
    </div>
  );
}

export default function VoiceModal() {
  const { isOpen, close } = useVoiceModal();

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Esc to close.
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
