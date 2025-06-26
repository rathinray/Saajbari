import Wedding from "../components/Wedding";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useEffect } from "react";
import Lenis from 'lenis'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WeddingDecoration() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
          smooth: true,
          lerp: 0.08,
        });
    
        // Keep Lenis running
          function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    
        // Sync with ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);
    
        return () => {
          lenis.destroy();
        };
      }, []);
    return (
        <div>
            <Navbar />
            <Wedding />
            <Contact />
            <Footer />
        </div>
        
    )
}

export default WeddingDecoration;