import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Audiences from "./components/Audiences.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Audiences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
