import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger);

const NUM_FIRECRACKERS = 18;

const random = (min, max) => Math.random() * (max - min) + min;

const Firecracker = ({ idx }) => {
  // Each firecracker is a colored circle that animates outward and fades
  const ref = useRef(null);

  // Memoize size so it doesn't change on every render
  const size = useMemo(() => random(8, 16), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Randomize direction, distance, color, and delay
    const angle = random(0, 2 * Math.PI);
    const distance = random(120, 260);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const scale = random(0.7, 1.3);
    const delay = random(0, 1.2);

    gsap.fromTo(
      el,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 0.5,
      },
      {
        opacity: 0,
        x,
        y,
        scale,
        duration: random(1.2, 2.1),
        delay,
        ease: "power2.out",
        repeat: -1,
        repeatDelay: random(1.5, 3.5),
      }
    );
  }, []);

  // Firecracker colors (gold, pink, blue, green, orange, white)
  const colors = [
    "#FFD700", "#FF69B4", "#00BFFF", "#32CD32", "#FFA500", "#FFFFFF",
    "#FF6347", "#00FFEF", "#FFB6C1", "#FFFACD"
  ];
  const color = colors[idx % colors.length];

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: "50%",
        top: "20%",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 16px 4px ${color}`,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.85,
        filter: "blur(0.5px)",
        mixBlendMode: "screen",
      }}
    />
  );
};

const FirecrackerBG = () => {
  // Renders a set of firecrackers as a fixed background overlay
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: NUM_FIRECRACKERS }).map((_, i) => (
        <Firecracker key={i} idx={i} />
      ))}
    </div>
  );
};

const WeddingMenu = () => {
  // Typewriter effect for the welcome text
  useEffect(() => {
    const text = "Welcome to the Wedding of";
    const el = document.querySelector(".welcome");
    if (!el) return;
    el.textContent = "";
    let i = 0;
    const type = () => {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 60);
      }
    };
    type();
  }, []);
  useEffect(() => {
    // Smooth Scroll Setup
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    // ScrollTrigger Animation
    gsap.to("#movingElement", {
      y: () => {
        const target = document.querySelector("#targetElement");
        const targetOffsetTop = target.getBoundingClientRect().top + window.scrollY;
        return targetOffsetTop - 60; // Adjusted to align with the top of the target
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#movingElement",
        start: "top top",
        endTrigger: "#targetElement",
        end: "top top", // Stop when top of movingElement reaches top of targetElement
        scrub: true,
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-4" style={{ position: "relative", zIndex: 1 }}>
      <FirecrackerBG />
      {/* Header */}
      <header className="text-center mt-8" style={{ position: "relative", zIndex: 2 }}>
        <h1 className="text-3xl font-bold text-pink-700 mb-2 welcome">Welcome to the Wedding of</h1>
        <h2 className="text-4xl font-extrabold text-pink-900 mb-4">Som ❤️ Ritika</h2>
        <div className="w-20 h-1 bg-pink-700 mx-auto rounded-full mb-6"></div>
       
      </header>

      {/* Event Details */}
      <section className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mb-6" style={{ position: "relative", zIndex: 2 }}>
     
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Today's Event</h3>
        <p className="mb-1">📅 <strong>Date:</strong> 24th June 2025</p>
        <p className="mb-1">🕒 <strong>Venue:</strong> Royal Garden Banquet Hall</p>
        <p>🎉 <strong>Event:</strong> Reception Dinner</p>
      </section>

      {/* Menu Section */}
      <section className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mb-6" style={{ position: "relative", zIndex: 2 }}>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">🍽️ Today's Menu</h3>
        
        <div className="mb-4">
          <h4 className="font-bold mb-2">Starters:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Paneer Tikka</li>
            <li>Veg Spring Rolls</li>
            <li>Chicken Malai Kebab</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold mb-2">Main Course:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Butter Naan</li>
            <li>Dal Makhani</li>
            <li>Shahi Paneer</li>
            <li>Chicken Biryani</li>
          </ul>
          
        </div>

        <div>
          <h4 className="font-bold mb-2">Desserts:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Rasmalai</li>
            <li>Gulab Jamun</li>
            <li>Ice Cream</li>
          </ul>
         
        </div>
      </section>

      {/* Event & Catering Details */}
      <section className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mb-6 text-center" style={{ position: "relative", zIndex: 2 }}>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">🎉 Event Managed By</h3>
        <p className="text-pink-700 font-bold">Saajbari Events</p>
        <a href="https://royalflavorscatering.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Visit Website
        </a>

        <h3 className="text-xl font-semibold mb-2 text-gray-700 mt-4">🍴 Catering By</h3>
        <p className="text-pink-700 font-bold">Royal Flavors Catering</p>
        <p className="text-gray-600 mb-2">Premium catering service</p>
      </section>


      <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mb-6 text-center" style={{ position: "relative", zIndex: 2 }}>
     
        <h1 className="text-xl font-bold text-pink-700 mb-4">🙏 Sorry for the Little Delay!</h1>
        <p className="text-gray-700 text-lg mb-2">Our catering team is on the way 🍽️</p>
        <p className="text-gray-700 text-lg">Meanwhile, please enjoy the fun activities we’ve prepared for you 🎉</p>
        <div className="flex justify-between">
        <Link to="/wedding-spin-wheel" className="inline-block bg-pink-700 text-white px-4 py-2 mt-4 rounded-full shadow-lg animate-bounce">
  🎮 Play a Game
</Link >
{/* <Link to="/rice-ceremony-quiz" className="inline-block bg-pink-700 text-white px-4 py-2 mt-4 rounded-full shadow-lg animate-bounce">
  🎮 Rice Ceremony Quiz
</Link> */}
<Link to="/bride-groom-qna" className="inline-block  bg-pink-700 text-white px-4 py-2 mt-4 rounded-full shadow-lg animate-bounce">
  🎮 Q&A
</Link>
        </div>
    
    </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm mt-auto mb-4" style={{ position: "relative", zIndex: 2 }}>
        Thank you for being a part of our special day! 💕
      </footer>
    </div>
  );
};

export default WeddingMenu;
