import Wedding from "../components/Wedding";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WeddingDecoration() {
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