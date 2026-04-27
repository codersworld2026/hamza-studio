import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Features from "./components/Features.jsx";
import Audiences from "./components/Audiences.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Privacy from "./components/Privacy.jsx";

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

export default function App() {
  const hash = useHashRoute();
  const isPrivacy = hash === "#privacy";

  // Manage scroll on hash changes:
  //  - entering privacy → scroll to top
  //  - returning to home with an anchor (e.g. #contact-form) → scroll to that element
  useEffect(() => {
    if (isPrivacy) {
      window.scrollTo(0, 0);
      return;
    }
    if (hash && hash !== "#") {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: "start" });
    }
  }, [isPrivacy, hash]);

  return (
    <div className="min-h-screen bg-canvas text-ink-900">
      <Header />
      <main>
        {isPrivacy ? (
          <Privacy />
        ) : (
          <>
            <Hero />
            <Work />
            <Features />
            <Audiences />
            <About />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
