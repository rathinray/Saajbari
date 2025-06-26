import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;

    let targetWidth = '80%';
    if (window.matchMedia('(min-width: 768px) and (max-width: 1580px)').matches) {
      targetWidth = '48%';      
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
    <section id="contact" className="py-20 bg-primary text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-serif font-bold mb-4"
        >
          Let's Create Magic Together
        </h2>
        <div
          ref={underlineRef}
          className="w-20 h-1 bg-white mx-auto mb-6"
          style={{ width: '0%' }}
        >
        </div>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Ready to plan your next unforgettable event? Get in touch with our
          team today.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d134.91392668674234!2d88.68787800103834!3d25.32923693717721!2m2!1f329.2348574209783!2f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x39fb5c4b965ff633%3A0xcede04c6db30a200!2z4Kas4Ka_4KaJ4Kaf4Ka_IOCmquCmvuCmsOCnjeCmsuCmvuCmsA!5e1!3m2!1sen!2sin!4v1750695052644!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Saajbari Location"
          ></iframe>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm h-full">
            <h3 className="text-xl font-serif font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium"></h4>
                  <p className="opacity-90">
                    Baul, Balurghat, Dakshin Dinajpur, 733158
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Call Us</h4>
                  <p className="opacity-90">+91 9800875439</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Email Us</h4>
                  <p className="opacity-90">saajbari@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="opacity-90">
                    When u want <span role="img" aria-label="smile">😊</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-blue-500"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-pink-500"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube text-red-500"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Contact;