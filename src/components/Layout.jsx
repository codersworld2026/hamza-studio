import { useEffect } from "react";
import { VoiceModalProvider } from "../context/VoiceModalContext.jsx";
import Marquee from "./Marquee.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import VoiceModal from "./VoiceModal.jsx";
import CookieConsent from "./CookieConsent.jsx";

export default function Layout({ children }) {
  useEffect(() => {
    // Reveal-on-scroll (ported from the original prototype).
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    // Scroll to a hash target on load (cross-page anchors like /#contact).
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    }

    return () => {
      if (io) io.disconnect();
    };
  }, []);

  return (
    <VoiceModalProvider>
      <Marquee />
      <Header />
      <main id="top">{children}</main>
      <Footer />
      <VoiceModal />
      <CookieConsent />
    </VoiceModalProvider>
  );
}
