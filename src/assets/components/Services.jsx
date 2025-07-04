import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "fas fa-ring",
    title: "Elegant Decoration",
    description:
      "We offer elegant flower decorations, stylish pendle setups, and stunning light arrangements to beautifully transform your event space and create a memorable atmosphere.",
    delay: "",
    as: "div",
    href: "/wedding-decoration",
  },
  // {
  //   icon: "fas fa-birthday-cake",
  //   title: "Birthday Celebrations",
  //   description:
  //     "Custom birthday parties that reflect personality and create lasting memories for all ages.",
  //   delay: "animate-delay-100",
  //   as: "div",
  //   href: "/birthday-celebration",
  // },
  // {
  //   icon: "fas fa-glass-cheers",
  //   title: "Corporate Events",
  //   description:
  //     "Professional event planning for corporate gatherings that impress clients and employees alike.",
  //   delay: "animate-delay-200",
  //   as: "div",
  //   href: "/corporate-events",
  // },
  {
    icon: "fas fa-utensils",
    title: "Catering & Essential Services",
    description:
      "We offer expert cooking services, complete catering solutions, and reliable water supply to ensure your event runs smoothly with delicious food and seamless hospitality.",
    delay: "",
    as: "a",
    href: "/catering-services",
    
  },
  {
    icon: "fas fa-photo-video",
    title: "Photo, Video & Sound",
    description:
      "Capture every special moment and enjoy crystal-clear sound with our professional photography, videography, and sound system solutions.",
    delay: "animate-delay-100",
    as: "div",
    href: "/photography-video",
  },
  {
    icon: "fas fa-store",
    title: "Live Stall Corner",
    description:
      "We provide a variety of popular stall items including fresh coffee, crispy fuchka, delicious pan, soft lusi, and tasty pakoda to delight your guests with authentic flavors.",
    delay: "animate-delay-200",
    as: "div",
    href: "/custom-themes",
  },
];

const Services = () => {
    const cardsRef = useRef([]);
    const titleRef = useRef(null);
    const underlineRef = useRef(null);
    useEffect(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#services',
            start: 'top 70%', 
          },
        }
      );
    }, []);
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
      <section id="services" className="py-10 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
      <h2
        ref={titleRef}
        className="text-3xl md:text-4xl font-serif font-bold mb-4"
      >
        Our Premium Services
      </h2>
      <div
        ref={underlineRef}
        className="w-20 h-1 bg-primary mx-auto mb-6"
        style={{ width: '0%' }}
      ></div>
      <p className="max-w-2xl mx-auto text-lg text-gray-600">
        We offer comprehensive event planning services to make your special
        occasions truly memorable.
      </p>
    </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              if (service.href) {         
                return (
                  <div
                    key={service.title}
                    ref={(el) => (cardsRef.current[idx] = el)}
                    className="service-card bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:border-primary border border-transparent"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                      <i className={`${service.icon} text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={service.title}
                    ref={(el) => (cardsRef.current[idx] = el)}
                    className="service-card bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:border-primary border border-transparent"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                      <i className={`${service.icon} text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  

