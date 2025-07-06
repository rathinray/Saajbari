import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    url: "https://images.pexels.com/photos/2049561/pexels-photo-2049561.jpeg",
    title: "The Grand Entrance",
    description: "A magical moment as the couple arrives."
  },
  {
    url: "https://images.pexels.com/photos/30184772/pexels-photo-30184772.jpeg",
    title: "Elegant Setup",
    description: "A beautifully decorated wedding venue."
  },
  {
    url: "https://images.pexels.com/photos/28405840/pexels-photo-28405840.jpeg",
    title: "Lights & Drapes",
    description: "Stunning light work and drapery."
  },
  {
    url: "https://images.pexels.com/photos/9901785/pexels-photo-9901785.jpeg",
    title: "The Ceremony",
    description: "An unforgettable wedding ceremony."
  },
  {
    url: "https://images.pexels.com/photos/5599007/pexels-photo-5599007.jpeg",
    title: "Floral Aisle",
    description: "The perfect floral walkway for the bride."
  },
  {
    url: "https://images.pexels.com/photos/30184783/pexels-photo-30184783.jpeg",
    title: "Floral Aisle",
    description: "The perfect floral walkway for the bride."
  }
];

const WeddingImagesGsap = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const panels = gsap.utils.toArray('.panel');

    panels.forEach((panel) => {
      const text = panel.querySelector('.caption');

      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(text, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
        },
        onEnterBack: () => {
          gsap.fromTo(text, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
        }
      });
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => "+=" + (window.innerHeight * panels.length),
      onUpdate: (self) => {
        setProgress(Math.round(self.progress * 100));
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-black text-white overflow-hidden relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50">
        <div className="h-full bg-yellow-400" style={{ width: `${progress}%` }} />
      </div>

      {images.map((img, idx) => (
        <section key={idx} className="panel w-full h-screen flex items-center justify-center relative">
          {/* Background Image */}
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
          />
          {/* Caption at Top */}
          <div className="caption absolute bottom-10  left-10 transform -translate-x-1/2 text-center px-4 max-w-2xl">
            <h2 className="text-5xl font-bold mb-2">{img.title}</h2>
            <p className="text-lg">{img.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default WeddingImagesGsap;
