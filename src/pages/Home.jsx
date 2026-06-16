import Hero from "../components/Hero.jsx";
import Promises from "../components/Promises.jsx";
import Services from "../components/Services.jsx";
import GoodMorning from "../components/GoodMorning.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import AreasWeServe from "../components/AreasWeServe.jsx";
import Love from "../components/Love.jsx";
import BookingSection from "../components/BookingSection.jsx";
import CTA from "../components/CTA.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Promises />
      <Services />
      <GoodMorning />
      <HowItWorks />
      <AreasWeServe />
      <Love />
      <BookingSection />
      <CTA />
      <ContactForm />
    </>
  );
}
