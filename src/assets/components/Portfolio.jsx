import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img1 from "../images/decoration/img1.jpeg";
import Img2 from "../images/decoration/img2.jpeg";
import Img3 from "../images/decoration/img3.jpeg";
import Img4 from "../images/decoration/img4.jpeg";
import Img5 from "../images/decoration/img5.jpeg";
import Img6 from "../images/decoration/img6.jpeg";
import Img7 from "../images/decoration/img7.jpeg";
import Img8 from "../images/decoration/img8.jpeg";
import Img9 from "../images/decoration/img9.jpeg";
import Img10 from "../images/decoration/img10.jpeg";
import Img11 from "../images/decoration/img11.jpeg";
import Img12 from "../images/decoration/birthday-1.jpeg";
import Img13 from "../images/decoration/birthday-2.jpeg";
import Img14 from "../images/decoration/img14.jpeg";
import Img15 from "../images/decoration/img15.jpeg";

gsap.registerPlugin(ScrollTrigger);

// Portfolio Data
const portfolioItems = [
  {
    mainImg: Img2,
    alt: "Birthday Celebrations",
    title: "Birthday Celebrations",
    subtitle: "Full Event Planning",
    images: [Img2, Img8, Img12, Img13],
  },
  {
    mainImg: Img4,
    alt: "Memorable Wedding Decorations",
    title: "Memorable Wedding Decorations",
    subtitle: "Creative Concepts & Styling",
    images: [Img1, Img3, Img4, Img5, Img6, Img7],
  },
  {
    mainImg: Img9,
    alt: "Corporate Event",
    title: "Making Your Big Day Beautiful",
    subtitle: "Every detail, beautifully arranged.",
    images: [Img9, Img10, Img11, Img14, Img15],
  },
];

// Carousel Modal Component
const CarouselModal = ({
  images,
  currentIdx,
  onClose,
  onPrev,
  onNext,
  isOpen,
}) => {
  if (!isOpen) return null;

  useEffect(() => {
    // Only lock scroll for desktop, allow scroll for mobile
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <div className="relative w-full max-w-lg">
        <div className="flex items-center justify-center relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 bg-black/40 rounded-full hover:bg-black/70 transition"
            onClick={onPrev}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <img
            src={images[currentIdx]}
            alt=""
            className="max-h-[70vh] w-full object-contain rounded-lg shadow-lg bg-white"
          />
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-2 py-1 bg-black/40 rounded-full hover:bg-black/70 transition"
            onClick={onNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="flex justify-center mt-2 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentIdx ? "bg-primary" : "bg-white/50"
              }`}
              onClick={() => onNext(idx - currentIdx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Portfolio Card Component
const PortfolioCard = ({
  img,
  alt,
  title,
  subtitle,
  onClick,
  cardRef,
  textRef,
}) => (
  <div
    ref={cardRef}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-500"
    onClick={onClick}
    tabIndex={0}
    role="button"
    aria-label={`Open carousel for ${title}`}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onClick();
    }}
  >
    <img
      src={img}
      alt={alt}
      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div
      ref={textRef}
      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    >
      <div>
        <h3 className="text-white text-xl font-serif font-bold">{title}</h3>
        <p className="text-primary">{subtitle}</p>
      </div>
    </div>
  </div>
);

// Portfolio Section
const Portfolio = () => {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  const cardRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;

    let targetWidth = "80%";
    if (
      window.matchMedia("(min-width: 768px) and (max-width: 1580px)").matches
    ) {
      targetWidth = "30%";
    }

    gsap.fromTo(
      underline,
      { width: "0%" },
      {
        width: targetWidth,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // Mobile Scroll Animation
  useEffect(() => {
    if (window.innerWidth <= 768) {
      // Mobile only
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { scale: 1 },
          {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        gsap.fromTo(
          textRefs.current[index],
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }
  }, []);

  const openCarousel = (images) => {
    setCarouselImages(images);
    setCarouselIdx(0);
    setCarouselOpen(true);
  };

  const closeCarousel = () => setCarouselOpen(false);
  const prevImage = () =>
    setCarouselIdx(
      (idx) => (idx - 1 + carouselImages.length) % carouselImages.length
    );
  const nextImage = () =>
    setCarouselIdx((idx) => (idx + 1) % carouselImages.length);

  return (
    <section id="portfolio" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            Our Recent Work
          </h2>
          <div
            ref={underlineRef}
            className="w-20 h-1 bg-primary mx-auto mb-3"
            style={{ width: "0%" }}
          ></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 text-bengoli">
            আমাদের সুন্দরভাবে সাজানো ইভেন্টগুলোর পোর্টফোলিও দেখে নিন।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <PortfolioCard
              key={idx}
              img={item.mainImg}
              alt={item.alt}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() => openCarousel(item.images)}
              cardRef={(el) => (cardRefs.current[idx] = el)}
              textRef={(el) => (textRefs.current[idx] = el)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View More Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      <CarouselModal
        images={carouselImages}
        currentIdx={carouselIdx}
        onClose={closeCarousel}
        onPrev={prevImage}
        onNext={nextImage}
        isOpen={carouselOpen}
      />
    </section>
  );
};

export default Portfolio;
