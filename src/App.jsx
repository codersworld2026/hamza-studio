import { useEffect, useState } from "react";
import { VoiceModalProvider } from "./context/VoiceModalContext.jsx";
import Marquee from "./components/Marquee.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Promises from "./components/Promises.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Services from "./components/Services.jsx";
import Love from "./components/Love.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import Privacy from "./components/Privacy.jsx";
import VoiceModal from "./components/VoiceModal.jsx";

function useHashRoute() {
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return hash;
}

// Reveal-on-scroll, ported from the prototype's app.js IntersectionObserver.
function useScrollReveal(active) {
  useEffect(() => {
    if (!active) return undefined;
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      return undefined;
    }
    const io = new IntersectionObserver(
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
    return () => io.disconnect();
  }, [active]);
}

export default function App() {
  const hash = useHashRoute();
  const isPrivacy = hash === "#privacy";

  useScrollReveal(!isPrivacy);

  // Manage scroll on hash changes:
  //  - entering privacy → scroll to top
  //  - returning to home with an anchor (e.g. #contact) → scroll to that element
  useEffect(() => {
    if (isPrivacy) {
      window.scrollTo(0, 0);
      return;
    }
    if (hash && hash !== "#" && hash !== "#top") {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [isPrivacy, hash]);

  return (
    <VoiceModalProvider>
      <Marquee />
      <Header />
      <main id="top">
        {isPrivacy ? (
          <Privacy />
        ) : (
          <>
            <Hero />
            <Promises />
            <HowItWorks />
            <Services />
            <Love />
            <CTA />
          </>
        )}
      </main>
      <Footer />
      <VoiceModal />
    </VoiceModalProvider>
  );
}
