import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;

    let targetWidth = '60%';
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
  <section id="about" className="py-10 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Our Team"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            About Saajbari
          </h2>
          <div
            ref={underlineRef}
            className="w-20 h-1 bg-primary mb-6"
            style={{ width: '0%' }}
          ></div>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2018, Saajbari has grown from a small local business to
            a premier event planning known for its creativity, attention to
            detail, and exceptional service.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our team of passionate professionals brings together diverse
            talents in design, coordination, and execution to create events
            that exceed expectations and create lasting memories.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary">
                <i className="fas fa-calendar-check text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg">500+</h4>
                <p className="text-gray-600">Events Planned</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary">
                <i className="fas fa-smile-beam text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg">100%</h4>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* <a
            href="#contact"
            className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-full inline-block font-medium transition-all"
          >
            Get to Know Us
          </a> */}
        </div>
      </div>
    </div>
  </section>
);
}

export default About;