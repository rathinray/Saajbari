import React from "react";
import { motion } from "framer-motion";
import flowerDecor from "../videos/flower-decor.mp4";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import WeddingCarousels from "./WeddingCarousels";

const Wedding = () => {
  const headline = "Wedding Decorations";
  const subheadline ="We specialize in creating stunning, budget-friendly wedding decorations that will make your special day unforgettable. From floral arrangements to lighting, we offer a wide range of services to suit your style and budget.";

  
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const underlineRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
      // Animate headline characters
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current.querySelectorAll(".char"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.7,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      }
      // Animate subheadline characters
      if (subheadlineRef.current) {
        gsap.fromTo(
          subheadlineRef.current.querySelectorAll(".char"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.012,
            duration: 0.5,
            ease: "power2.out",
            delay: 1.1,
          }
        );
      }
    }, []);

    // Helper to split text into spans per character
    const splitText = (text) =>
      text.split("").map((char, i) =>
        char === " " ? (
          <span key={i} className="char" style={{ display: "inline-block", width: "0.5em" }}>
            &nbsp;
          </span>
        ) : (
          <span key={i} className="char" style={{ display: "inline-block" }}>
            {char}
          </span>
        )
      );

      useEffect(() => {
        const title = titleRef.current;
        const underline = underlineRef.current;
    
        let targetWidth = '80%';
        if (window.matchMedia('(min-width: 768px) and (max-width: 1580px)').matches) {
          targetWidth = '40%';
        }
        gsap.fromTo(
          underline,
          { width: '0%' },
          {
            width: targetWidth,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 60%', // When the top of the heading reaches 60% of viewport
              toggleActions: 'play none none none',
            },
          }
        );
      }, []);
  return (
    <div className="wedding-page">
      {/* Hero Section with Background Flower Decoration Video */}
      <div className="relative h-[80vh] bg-cover  overflow-hidden">
        {/* Background flower video using motion.div for fade-in effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <video
            src={flowerDecor}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        {/* Overlay */}
        <div className="bg-black/20 h-full flex flex-col items-center justify-center relative z-10">
          <h1
            ref={headlineRef}
            className="text-white md:text-5xl text-3xl font-bold"
            aria-label={headline}
          >
            {splitText(headline)}
          </h1>
          <h2
            ref={subheadlineRef}
            className="text-white text-xl font-bold mt-4 max-w-3xl text-center"
            aria-label={subheadline}
          >
            {splitText(subheadline)}
          </h2>
        </div>
      </div>

      <section className="py-20 bg-secondary">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
    Why We’re the Perfect Choice
    </h2>
    <div ref={underlineRef} className="w-0 h-1 bg-primary mx-auto mb-6"></div>
    <h3 className="max-w-2xl mx-auto text-lg text-gray-600">We turn your vision into a beautiful reality—crafted with care, love, and timeless elegance.</h3>
    </div>
   

    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 text-left">
      {[
        {
          icon: "💖",
          title: "Customized Themes",
          desc: "Every couple is unique—your decoration should be too. We design based on your story."
        },
        {
          icon: "🎉",
          title: "Experienced Team",
          desc: "Over 100+ weddings crafted with love and detail."
        },
        {
          icon: "🌸",
          title: "Premium Quality Decor",
          desc: "We use only the best flowers, fabrics, and props—luxury that lasts."
        },
        {
          icon: "💰",
          title: "Budget-Friendly Packages",
          desc: "Transparent pricing with options for every dream and budget."
        },
        {
          icon: "⏱️",
          title: "On-Time Delivery",
          desc: "Stress-free execution with punctual setup and teardown."
        },
        {
          icon: "🌿",
          title: "Eco-Friendly Options",
          desc: "Sustainable decor choices that are kind to nature."
        },
      ].map((item, idx) => (
        <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-md space-x-4">
          <div className="text-3xl">{item.icon}</div>
          <div>
            <h4 className="text-xl font-semibold ">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Gallery Section */}
    <WeddingCarousels />

    
    </div>
  );
};


export default Wedding;
