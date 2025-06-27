import React, { useEffect, useState } from 'react';
import SanaiMusic from '../sounds/sanai_music.mp3';
import BrideImg from '../images/bride_image.png';
import GroomImg from '../images/groom_image.png';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const BengaliWeddingMenu = () => {
  const menuItems = [
    { category: 'Starter', items: ['Beguni', 'Fish Fry', 'Chicken Pakora'] },
    { category: 'Main Course', items: ['Shorshe Ilish', 'Chicken Kasha', 'Basanti Pulao'] },
    { category: 'Dessert', items: ['Rasgulla', 'Mishti Doi', 'Sandesh'] },
  ];

  const elementRef = useRef(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      y: -100, // comes from top
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%', // when top of element hits 80% of viewport
        toggleActions: 'play none none none', // play on enter
      },
    });
  }, []);

  

  return (
    <section className="wedding-menu-section min-h-[200vh] bg-gradient-to-b from-rose-100 via-yellow-50 to-rose-100 py-10 px-4 flex flex-col items-center justify-start relative overflow-hidden">

      {/* Auto-playing music */}
      <audio src={SanaiMusic} autoPlay loop />

      {/* Floating Petals */}
      {Array.from({ length: 15 }).map((_, index) => {
        const size = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        const duration = Math.random() * 8 + 6;
        return (
          <div
            key={index}
            className="absolute rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${size * 2}px`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `rgba(255, ${100 + Math.random() * 100}, ${150 + Math.random() * 100}, 0.7)`,
              animation: `fall ${duration}s linear ${delay}s infinite`,
            }}
          ></div>
        );
      })}

      {/* Bride Image with smooth scroll and fixed lock */}
      <div ref={elementRef}
        className='mb-10 z-[9999] transition-transform'
      >
        <img src={BrideImg} alt="Bride" className="w-20 mx-auto bg-transparent" />
      </div>

      {/* Section Divider */}
      <div className="w-full flex justify-center my-6">
        <div className="h-1 w-2/3 bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-300 rounded-full animate-pulse"></div>
      </div>

      {/* Wedding Menu */}
      <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 space-y-6 z-10">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-6 tracking-widest drop-shadow-md">🍽️ Bengali Wedding Menu</h2>
        {menuItems.map((menu, index) => (
          <div key={index} className="bg-pink-50 rounded-2xl p-4 shadow hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-pink-700">{menu.category}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-lg">
              {menu.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Section Divider */}
      <div className="w-full flex justify-center my-6">
        <div className="h-1 w-2/3 bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-300 rounded-full animate-pulse"></div>
      </div>

      {/* Groom Image */}
      <div className=" z-10 absolute bottom-30 left-[55%] animate-groom">
        <img src={GroomImg} alt="Groom" className="w-20 mx-auto bg-transparent" />
      </div>

    </section>
  );
};

export default BengaliWeddingMenu;
