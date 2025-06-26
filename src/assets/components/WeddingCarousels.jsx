import React, { useState, useEffect, useRef } from "react";

// Example images (replace with your own or pass as props)
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
];

const AUTO_PLAY_INTERVAL = 3500; // ms

const WeddingCarousels = ({ photos = images }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-play logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current, photos.length]);

  // Manual navigation
  const goTo = (idx) => {
    setCurrent(idx);
    clearTimeout(timeoutRef.current);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
    clearTimeout(timeoutRef.current);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
    clearTimeout(timeoutRef.current);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={photos[current]}
          alt={`Wedding ${current + 1}`}
          className="w-full h-64 sm:h-80 object-cover transition-all duration-700"
          style={{ aspectRatio: "16/9" }}
        />
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md focus:outline-none"
          aria-label="Previous"
          style={{ zIndex: 2 }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md focus:outline-none"
          aria-label="Next"
          style={{ zIndex: 2 }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-2.5 h-2.5 rounded-full border border-white ${
                idx === current ? "bg-pink-500" : "bg-white/70"
              } transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
              style={{ outline: "none" }}
            ></button>
          ))}
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .wedding-carousel-img {
            height: 180px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WeddingCarousels;
