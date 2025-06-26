    import WeddingMenu from "../components/WeddingMenu";
    import { useRef, useEffect } from "react";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Lenis from 'lenis'

    function MenuPage() {
        const scrollRef = useRef(null);

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
        <div ref={scrollRef}>
          
            <WeddingMenu />
          
        </div>
    )
}

export default MenuPage;