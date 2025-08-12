import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CookiePopup from "../components/CookiePopup";
import WhatsappButton from "../components/WhatsappButton";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const scrollRef = useRef(null);

  return (
    <div ref={scrollRef}>
      <Navbar />
      <Hero />
      <WhatsappButton />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <CookiePopup />
    </div>
  );
};

export default HomePage;
