import React, { useState, useEffect } from "react";
import { Camera, Menu } from "lucide-react";
import weddingimage28 from "../images/wedding/rice (28).jpeg";
import weddingimage29 from "../images/wedding/rice (29).jpeg";
import weddingimage30 from "../images/wedding/rice (30).jpeg";
import weddingimage31 from "../images/wedding/rice (31).jpeg";
import weddingimage32 from "../images/wedding/rice (32).jpeg";
import weddingimage33 from "../images/wedding/rice (33).jpeg";
import weddingimage34 from "../images/wedding/rice (34).jpeg";
import weddingimage35 from "../images/wedding/rice (35).jpeg";
import weddingimage36 from "../images/wedding/rice (36).jpeg";

export default function WeddingReception() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Premium wedding background images - you can replace these with your own images
  const backgroundImages = [
    weddingimage28,
    weddingimage29,
    weddingimage30,
    weddingimage31,
    weddingimage32,
    weddingimage33,
    weddingimage34,
    weddingimage35,
    weddingimage36,
  ];

  // Auto-rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Dark gradient overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            {/* Additional warm overlay for premium look */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-rose-900/30"></div>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-amber-400 w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl relative z-10">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-3xl bg-black/20 backdrop-blur-md shadow-2xl border border-white/10">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Elegant Title - Dipayan Weds Anamika */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-2 tracking-wide drop-shadow-2xl">
                  Dipayan
                </h1>

                <div className="flex items-center justify-center gap-4 my-4">
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-rose-300 italic drop-shadow-lg">
                    Weds
                  </span>
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300 drop-shadow-2xl">
                  Anamika
                </h2>

                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
                </div>
              </div>
            </div>

            {/* Couple Portrait Container */}
            <div className="relative mb-8 sm:mb-12 flex justify-center">
              <div className="relative group">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-rose-400 to-amber-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Portrait Frame */}
                <div className="relative bg-gradient-to-br from-white/20 to-amber-50/10 backdrop-blur-lg p-2 sm:p-3 rounded-2xl shadow-2xl border border-white/20">
                  <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-amber-900/40 via-rose-900/30 to-amber-900/40">
                    {/* Romantic Background with Florals and Lights */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>

                    {/* Fairy Lights Effect */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-amber-400/30 to-transparent"></div>
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-300 rounded-full animate-pulse shadow-lg shadow-amber-300/50"
                        style={{
                          top: `${Math.random() * 30}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          opacity: 0.6 + Math.random() * 0.4,
                        }}
                      ></div>
                    ))}

                    {/* Floral Decorative Elements */}
                    <svg
                      className="absolute bottom-0 left-0 w-32 h-32 opacity-30 text-rose-300"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        fill="currentColor"
                        opacity="0.3"
                      />
                      <circle
                        cx="35"
                        cy="40"
                        r="15"
                        fill="currentColor"
                        opacity="0.5"
                      />
                      <circle
                        cx="65"
                        cy="40"
                        r="15"
                        fill="currentColor"
                        opacity="0.5"
                      />
                      <circle
                        cx="50"
                        cy="25"
                        r="12"
                        fill="currentColor"
                        opacity="0.6"
                      />
                    </svg>
                    <svg
                      className="absolute top-0 right-0 w-28 h-28 opacity-25 text-amber-300"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="25"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <circle
                        cx="40"
                        cy="35"
                        r="12"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <circle
                        cx="60"
                        cy="35"
                        r="12"
                        fill="currentColor"
                        opacity="0.6"
                      />
                    </svg>

                    {/* Couple Placeholder with Elegant Styling */}
                    <div className="absolute inset-0 flex items-end justify-center p-6">
                      <div className="text-center space-y-4">
                        {/* Bride and Groom Icons */}
                        <div className="flex items-end justify-center gap-6 mb-4">
                          {/* Bride - Anamika */}
                          <div className="relative">
                            <div className="w-24 h-32 sm:w-32 sm:h-40 md:w-36 md:h-44 bg-gradient-to-br from-rose-300/60 to-amber-300/60 backdrop-blur-sm rounded-t-full rounded-b-3xl border-2 border-amber-300/60 shadow-2xl flex flex-col items-center justify-end p-3">
                              <div className="absolute top-3 w-16 h-20 sm:w-20 sm:h-24 bg-gradient-to-br from-amber-50/80 to-rose-100/80 rounded-full border-2 border-amber-400/50 shadow-inner"></div>
                              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-br from-amber-400/70 to-rose-400/70 rounded-t-full backdrop-blur-sm shadow-lg"></div>
                              <div className="mt-auto pt-2 text-amber-100 font-serif text-xs sm:text-sm font-medium drop-shadow-lg">
                                Anamika
                              </div>
                            </div>
                          </div>

                          {/* Groom - Dipayan */}
                          <div className="relative">
                            <div className="w-24 h-32 sm:w-32 sm:h-40 md:w-36 md:h-44 bg-gradient-to-br from-amber-300/60 to-amber-400/60 backdrop-blur-sm rounded-t-full rounded-b-3xl border-2 border-amber-400/60 shadow-2xl flex flex-col items-center justify-end p-3">
                              <div className="absolute top-3 w-16 h-20 sm:w-20 sm:h-24 bg-gradient-to-br from-amber-50/80 to-amber-100/80 rounded-full border-2 border-amber-500/50 shadow-inner"></div>
                              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-amber-900/50 rounded-sm shadow-md"></div>
                              <div className="mt-auto pt-2 text-amber-100 font-serif text-xs sm:text-sm font-medium drop-shadow-lg">
                                Dipayan
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-amber-100 font-serif italic text-sm sm:text-base px-4 bg-black/30 backdrop-blur-md py-2 rounded-full border border-amber-400/30 shadow-xl">
                          Together Forever
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              {/* Wedding Gallery Button */}
              <button
                onMouseEnter={() => setHoveredButton("gallery")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() =>
                  window.open(
                    `${window.location.origin}/#wedding-images`,
                    "_blank",
                  )
                }
                className="group relative w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/30">
                  <Camera
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-amber-200 transition-transform duration-300 ${hoveredButton === "gallery" ? "rotate-12 scale-110" : ""}`}
                  />
                  <span className="text-base sm:text-lg font-serif text-white font-medium drop-shadow-lg">
                    Wedding Gallery
                  </span>
                </div>
              </button>

              {/* Reception Menu Button */}
              <button
                onMouseEnter={() => setHoveredButton("menu")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() =>
                  window.open(`${window.location.origin}/#menu`, "_blank")
                }
                className="group relative w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/30">
                  <Menu
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-rose-200 transition-transform duration-300 ${hoveredButton === "menu" ? "rotate-12 scale-110" : ""}`}
                  />
                  <span className="text-base sm:text-lg font-serif text-white font-medium drop-shadow-lg">
                    Reception Menu
                  </span>
                </div>
              </button>
            </div>

            {/* Decorative Bottom Element */}
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
                <div
                  className="w-2 h-2 bg-rose-400 rounded-full animate-pulse shadow-lg shadow-rose-400/50"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
