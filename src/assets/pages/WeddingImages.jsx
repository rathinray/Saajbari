import React, { useState, useRef, useEffect } from "react";
import weddingimage1 from "../images/wedding/rice (1).jpeg";
import weddingimage2 from "../images/wedding/rice (2).jpeg";
import weddingimage3 from "../images/wedding/rice (3).jpeg";
import weddingimage4 from "../images/wedding/rice (4).jpeg";
import weddingimage5 from "../images/wedding/rice (5).jpeg";
import weddingimage6 from "../images/wedding/rice (6).jpeg";
import weddingimage7 from "../images/wedding/rice (7).jpeg";
import weddingimage8 from "../images/wedding/rice (8).jpeg";
import weddingimage9 from "../images/wedding/rice (9).jpeg";
import weddingimage10 from "../images/wedding/rice (10).jpeg";
import weddingimage11 from "../images/wedding/rice (11).jpeg";
import weddingimage12 from "../images/wedding/rice (12).jpeg";
import weddingimage13 from "../images/wedding/rice (13).jpeg";
import weddingimage14 from "../images/wedding/rice (14).jpeg";
import weddingimage15 from "../images/wedding/rice (15).jpeg";
import weddingimage16 from "../images/wedding/rice (16).jpeg";
import weddingimage17 from "../images/wedding/rice (17).jpeg";
import weddingimage18 from "../images/wedding/rice (18).jpeg";
import weddingimage19 from "../images/wedding/rice (19).jpeg";
import weddingimage20 from "../images/wedding/rice (20).jpeg";
import weddingimage21 from "../images/wedding/rice (21).jpeg";
import weddingimage22 from "../images/wedding/rice (22).jpeg";
import weddingimage23 from "../images/wedding/rice (23).jpeg";
import weddingimage24 from "../images/wedding/rice (24).jpeg";
import weddingimage25 from "../images/wedding/rice (25).jpeg";
import weddingimage26 from "../images/wedding/rice (26).jpeg";
import weddingimage27 from "../images/wedding/rice (27).jpeg";
import weddingimage28 from "../images/wedding/rice (28).jpeg";
import weddingimage29 from "../images/wedding/rice (29).jpeg";
import weddingimage30 from "../images/wedding/rice (30).jpeg";
import weddingimage31 from "../images/wedding/rice (31).jpeg";
import weddingimage32 from "../images/wedding/rice (32).jpeg";
import weddingimage33 from "../images/wedding/rice (33).jpeg";
import weddingimage34 from "../images/wedding/rice (34).jpeg";
import weddingimage35 from "../images/wedding/rice (35).jpeg";
import weddingimage36 from "../images/wedding/rice (36).jpeg";

import Cover from "../images/wedding/cover.jpeg";

import Footer from "../components/Footer";

const galleryImages = [
  {
    id: 1,
    src: weddingimage1,
    alt: "পথচলা শুরু হোক প্রেমের আলোয়।",
    category: "Pre-wedding",
  },
  {
    id: 2,
    src: weddingimage2,
    alt: "আজ, আগামীকাল, সারাজীবন— তুমি-আমি একসাথে।",
    category: "Pre-wedding",
  },
  {
    id: 3,
    src: weddingimage3,
    alt: "আজকে আমি, কাল থেকে আমরা।",
    category: "Pre-wedding",
  },
  {
    id: 4,
    src: weddingimage4,
    alt: "স্বপ্নগুলো আজ একটু বেশি সত্যি মনে হয়।",
    category: "Pre-wedding",
  },
  {
    id: 5,
    src: weddingimage5,
    alt: "প্রতিটা মুহূর্তে তোমাতে ভরসা, তোমাতে ভালোবাসা।",
    category: "Pre-wedding",
  },

  {
    id: 6,
    src: weddingimage6,
    alt: "মনের মানুষটির কাছে আজ আরও এক ধাপ এগিয়ে।",
    category: "Pre-wedding",
  },
  {
    id: 7,
    src: weddingimage7,
    alt: "নিজের মানুষকে পেতে চলেছি… হৃদয়টা আজ একটু নরম।",
    category: "Pre-wedding",
  },

  {
    id: 8,
    src: weddingimage8,
    alt: "আজ আমি… তার হৃদয়ের রানী।",
    category: "Pre-wedding",
  },
  {
    id: 9,
    src: weddingimage9,
    alt: "আজ একটু বেশি দায়িত্ব… আর অনেকটা ভালোবাসা।",
    category: "Pre-wedding",
  },
  {
    id: 10,
    src: weddingimage10,
    alt: "চোখে উৎসব, মনে শান্তি… কারণ সে আসছে।",
    category: "Pre-wedding",
  },
  {
    id: 11,
    src: weddingimage11,
    alt: "আজকের হাসিটা আমার, কারণ সে আমার।",
    category: "Pre-wedding",
  },
  {
    id: 12,
    src: weddingimage12,
    alt: "চোখে লাজুক স্বপ্ন… মনে হাজারো কথা।",
    category: "Pre-wedding",
  },
  {
    id: 13,
    src: weddingimage13,
    alt: "তার হাতটা ধরার অপেক্ষায়।",
    category: "Pre-wedding",
  },

  {
    id: 15,
    src: weddingimage15,
    alt: "ভালোবাসার পথে আজ একসাথে প্রথম পা।",
    category: "Pre-wedding",
  },
  {
    id: 16,
    src: weddingimage16,
    alt: "নীরবতায়ও আজ কথা বলে আমাদের মন।",
    category: "Pre-wedding",
  },
  {
    id: 17,
    src: weddingimage17,
    alt: "প্রেমের গল্পটা আজ আরও গভীর।",
    category: "Pre-wedding",
  },
  {
    id: 18,
    src: weddingimage18,
    alt: "দু’টি হৃদয়, একটাই স্বপ্ন।",
    category: "Pre-wedding",
  },
  {
    id: 19,
    src: weddingimage19,
    alt: "ভালোবাসার রঙে রাঙানো এক নতুন শুরু।",
    category: "Pre-wedding",
  },
  {
    id: 20,
    src: weddingimage20,
    alt: "আজ থেকে আমরা, চিরদিনের জন্য।",
    category: "Pre-wedding",
  },
  {
    id: 21,
    src: weddingimage21,
    alt: "এই বন্ধনটা আজীবনের।",
    category: "Pre-wedding",
  },
  {
    id: 22,
    src: weddingimage22,
    alt: "ভালোবাসার এই গল্প চিরকাল থাকুক।",
    category: "Pre-wedding",
  },
  {
    id: 23,
    src: weddingimage23,
    alt: "ভালোবাসার এই বন্ধন অটুট থাকুক।",
    category: "wedding",
  },

  {
    id: 24,
    src: weddingimage24,
    alt: "দু’টি হৃদয়ের গল্প আজ চিরকালের।",
    category: "wedding",
  },

  {
    id: 25,
    src: weddingimage25,
    alt: "এই ভালোবাসা সময়ের সীমানা পেরিয়ে যাক।",
    category: "wedding",
  },

  {
    id: 26,
    src: weddingimage26,
    alt: "ভালোবাসায় বাঁধা দুটি প্রাণ।",
    category: "wedding",
  },
  {
    id: 14,
    src: weddingimage14,
    alt: "নিজেকে সাজিয়েছি, তাকে পেতে…",
    category: "Pre-wedding",
  },

  {
    id: 27,
    src: weddingimage27,
    alt: "একসাথে থাকার প্রতিশ্রুতি আজীবনের।",
    category: "wedding",
  },

  {
    id: 28,
    src: weddingimage28,
    alt: "ভালোবাসার শুরু, আজীবনের পথচলা।",
    category: "wedding",
  },
  {
    id: 29,
    src: weddingimage29,
    alt: "ভালোবাসার এই শুরু শেষহীন হোক।",
    category: "wedding",
  },
  {
    id: 30,
    src: weddingimage30,
    alt: "এই ভালোবাসা চিরকাল আলো ছড়াক।",
    category: "wedding",
  },
  {
    id: 31,
    src: weddingimage31,
    alt: "দু’জন থেকে আমরা—এই গল্প চিরন্তন হোক।",
    category: "wedding",
  },
  {
    id: 32,
    src: weddingimage32,
    alt: "ভালোবাসার এই প্রতিশ্রুতি অটুট থাকুক।",
    category: "wedding",
  },
  {
    id: 33,
    src: weddingimage33,
    alt: "এই বন্ধনে ভরে উঠুক সারাজীবন।",
    category: "wedding",
  },
  {
    id: 34,
    src: weddingimage34,
    alt: "ভালোবাসার এই পথচলা অনন্ত হোক।",
    category: "wedding",
  },
  {
    id: 35,
    src: weddingimage35,
    alt: "এই ভালোবাসা সময়ের সাথে আরও গভীর হোক।",
    category: "wedding",
  },
  {
    id: 36,
    src: weddingimage36,
    alt: "ভালোবাসার এই গল্প শেষহীন থাকুক।",
    category: "wedding",
  },
];

const WeddingImages = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState({ src: "", alt: "" });
  const lightboxRef = useRef(null);
  const lightboxImgRef = useRef(null);
  const carouselRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) =>
      anchor.addEventListener("click", handleAnchorClick),
    );
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleAnchorClick),
      );
    };
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen && e.key === "Escape") {
        closeLightbox();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, [lightboxOpen]);

  // GSAP animation for lightbox (optional)
  useEffect(() => {
    if (lightboxOpen && lightboxRef.current && lightboxImgRef.current) {
      // Uncomment if using GSAP
      // gsap.fromTo(lightboxRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      // gsap.fromTo(lightboxImgRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
    }
  }, [lightboxOpen]);

  const openLightbox = (src, alt) => {
    setLightboxImg({ src, alt });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    // Uncomment if using GSAP
    // gsap.to(lightboxImgRef.current, { scale: 0.8, opacity: 0, duration: 0.2 });
    // gsap.to(lightboxRef.current, { opacity: 0, duration: 0.2, onComplete: () => setLightboxOpen(false) });
    setLightboxOpen(false);
  };

  // Carousel navigation
  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({ left: dir * width, behavior: "smooth" });
    }
  };

  // Lightbox click outside to close
  const handleLightboxClick = (e) => {
    if (e.target === lightboxRef.current) {
      closeLightbox();
    }
  };
  const shuffledImages = [...galleryImages].sort(() => Math.random() - 0.5);

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${Cover})` }}
        className="hero min-h-screen flex items-center justify-center text-center text-white px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
            Eternal Love Story
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl mx-auto">
            Capturing the timeless moments of our journey together
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
              onClick={() => {
                const gallerySection = document.getElementById("gallery");
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Gallery
            </button>

            <a
              onClick={() => {
                const ourStorySection = document.getElementById("our-story");
                if (ourStorySection) {
                  ourStorySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                Our Story
              </button>
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <a className="text-white text-2xl">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </section>

      {/*
        Mobile menu state and handler
      */}

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-playfair font-bold text-pink-600">
            Anamika & Dipayan
          </h2>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-pink-600 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    const gallerySection = document.getElementById("gallery");
                    if (gallerySection) {
                      gallerySection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-800 hover:text-pink-600 transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    const ourStorySection =
                      document.getElementById("our-story");
                    if (ourStorySection) {
                      ourStorySection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-800 hover:text-pink-600 transition"
                >
                  Our Story
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-50 overflow-hidden transition-all duration-400 ease-in-out
            ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
          style={{
            transitionProperty: "max-height, opacity",
          }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <div className="flex justify-between">
              <h2 className="text-2xl font-playfair font-bold text-pink-600">
                Anamika & Dipayan
              </h2>
              <button
                className="self-end text-gray-800 text-2xl focus:outline-none"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <a
              href="/"
              className="block text-lg text-gray-800 hover:text-pink-600 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              onClick={() => {
                const gallerySection = document.getElementById("gallery");
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: "smooth" });
                }
                setIsMobileMenuOpen(false); // Close mobile menu after scrolling
              }}
              className="block text-lg text-gray-800 hover:text-pink-600 transition py-2"
            >
              Gallery
            </a>

            <a
              onClick={() => {
                const ourStorySection = document.getElementById("our-story");
                if (ourStorySection) {
                  ourStorySection.scrollIntoView({ behavior: "smooth" });
                }
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg text-gray-800 hover:text-pink-600 transition py-2"
            >
              Our Story
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Gallery Section */}
        <section id="gallery" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Wedding Gallery
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Relive the magical moments from our special day through these
              beautiful photographs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shuffledImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => openLightbox(image.src, image.alt)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-800 font-medium text-bengoli">
                    {image.alt}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="our-story" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Story */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  How We Began
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every love story is beautiful, but ours is our favorite.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  What started as a simple hello slowly turned into countless
                  conversations, shared laughter, and unforgettable memories.
                  From late-night talks to spontaneous trips, every moment
                  brought us closer and showed us what love truly means.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We’ve grown together, supported each other through every high
                  and low, and found comfort in the little things—holding hands,
                  shared smiles, and dreams about the future. Through every
                  chapter, one thing remained constant: we knew we were meant to
                  walk this journey together.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Now, as we begin a new chapter of our lives, we’re excited to
                  celebrate our love with all the people who mean the most to
                  us. Thank you for being part of our story and for sharing in
                  the joy of our forever.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <img
                  src={weddingimage6}
                  alt="Our Story"
                  className="rounded-2xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="mb-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Moments
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>
          <div className="relative">
            <div
              className="carousel flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-6 scrollbar-hide"
              ref={carouselRef}
            >
              {galleryImages.slice(0, 6).map((image) => (
                <div
                  key={image.id}
                  className="carousel-item flex-shrink-0 w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-gray-800 font-medium truncate">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 transform -translate-x-4 hover:bg-pink-100 transition"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous"
              type="button"
            >
              <i className="fas fa-chevron-left text-pink-600 text-xl"></i>
            </button>
            <button
              className="carousel-next absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 transform translate-x-4 hover:bg-pink-100 transition"
              onClick={() => scrollCarousel(1)}
              aria-label="Next"
              type="button"
            >
              <i className="fas fa-chevron-right text-pink-600 text-xl"></i>
            </button>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="lightbox fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            style={{ display: "flex" }}
            ref={lightboxRef}
            onClick={handleLightboxClick}
          >
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <button
                className="close-lightbox absolute top-4 right-4 text-white text-3xl hover:text-pink-300 transition z-10"
                onClick={closeLightbox}
                aria-label="Close"
                type="button"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="flex items-center justify-center w-full h-full">
                <img
                  className="lightbox-content rounded-lg shadow-xl max-h-[70vh] w-auto max-w-[90vw] object-contain mx-auto"
                  src={lightboxImg.src}
                  alt={lightboxImg.alt}
                  ref={lightboxImgRef}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-gray-100 py-4">
        <div className="container mx-auto px-4 text-center space-y-3">
          <p className="text-lg font-medium">
            Event Managed by{" "}
            <span className="text-pink-500 font-semibold">Saajbari Event</span>
          </p>
          {/* <p className="text-lg font-medium">
      Photography by <span className="text-pink-500 font-semibold">Saajbari Photography</span>
    </p> */}
          <p className="text-lg font-medium">
            Visit us:{" "}
            <a
              href="https://saajbarievent.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              www.saajbarievent.in
            </a>
          </p>
          <p className="text-base text-gray-400 mt-4">
            © 2025{" "}
            <span className="text-white font-semibold">Saajbarievent</span>. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingImages;
