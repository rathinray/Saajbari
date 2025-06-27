import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Wedding Decoration",
    title: "Royal Wedding",
    subtitle: "Full Event Planning",
  },
  {
    img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Birthday Party",
    title: "Sweet 16 Celebration",
    subtitle: "Theme Design & Decor",
  },
  {
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Corporate Event",
    title: "Annual Gala Dinner",
    subtitle: "Full Service Planning",
  },
];

const PortfolioCard = ({ img, alt, title, subtitle }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img
      src={img}
      alt={alt}
      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div>
        <h3 className="text-white text-xl font-serif font-bold">{title}</h3>
        <p className="text-primary">{subtitle}</p>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;

    let targetWidth = '80%';
    if (window.matchMedia('(min-width: 768px) and (max-width: 1580px)').matches) {
      targetWidth = '30%';
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
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

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
            className="w-20 h-1 bg-primary mx-auto mb-6"
            style={{ width: '0%' }}
          ></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Browse through our portfolio of beautifully executed events.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <PortfolioCard key={idx} {...item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View More Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;