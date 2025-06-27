    import WeddingMenu from "../components/WeddingMenu";
    import { useRef, useEffect } from "react";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    function MenuPage() {
        const scrollRef = useRef(null);

    return (
        <div ref={scrollRef}>
          
            <WeddingMenu />
          
        </div>
    )
}

export default MenuPage;