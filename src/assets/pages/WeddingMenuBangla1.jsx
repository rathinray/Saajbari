import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BengaliWeddingMenu = () => {
  const menuRef = useRef(null);
  const titleRef = useRef(null);
  const dishRefs = useRef([]);
  const borderRef = useRef(null);
  const flowerRefs = useRef([]);

  useEffect(() => {
    // Mobile-friendly animations
    const isMobile = window.innerWidth < 768;
    
    // Title animation
    gsap.from(titleRef.current, {
      y: isMobile ? -20 : -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Simplified border animation for mobile
    gsap.from(borderRef.current, {
      scaleX: 0,
      duration: isMobile ? 1 : 1.5,
      ease: isMobile ? 'power2.out' : 'elastic.out(1, 0.5)',
      delay: 0.3
    });

    // Reduced flower animations on mobile
    flowerRefs.current.forEach((flower, index) => {
      if (isMobile && index > 1) return; // Only animate 2 flowers on mobile
      
      gsap.from(flower, {
        rotation: index % 2 === 0 ? -180 : 180,
        opacity: 0,
        duration: isMobile ? 0.7 : 1,
        delay: isMobile ? 0.1 * index : 0.2 * index,
        ease: 'back.out(1.7)'
      });
    });

    // Stacked dish items animation for mobile
    dishRefs.current.forEach((dish, index) => {
      gsap.from(dish, {
        x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50),
        y: isMobile ? 20 : 0,
        opacity: 0,
        duration: isMobile ? 0.5 : 0.8,
        delay: isMobile ? 0.05 * index : 0.1 * index,
        scrollTrigger: {
          trigger: dish,
          start: isMobile ? "top 90%" : "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Lighter background animation for mobile
    const patternAnimation = gsap.timeline({ 
      repeat: -1, 
      yoyo: true 
    });
    patternAnimation.to('.menu-pattern', {
      rotation: isMobile ? 1 : 2,
      duration: isMobile ? 15 : 10,
      ease: 'sine.inOut'
    });

    return () => {
      patternAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const menuItems = [
    { category: 'শুরু', dishes: ['মুড়ি ও আলুর দম', 'ঘুগনি', 'ফুচকা', 'চপ'] },
    { category: 'স্ন্যাক্স', dishes: ['বেগুনী', 'পেঁয়াজু', 'সিঙাড়া', 'মুড়ি'] },
    { category: 'মূল খাবার', dishes: ['লucchi চিংড়ি', 'ইলিশ মাছের ঝোল', 'মাটন বিরিয়ানি', 'চিকেন কোরমা'] },
    { category: 'ডাল ও ভাত', dishes: ['মসুর ডাল', 'বাসমতি ভাত', 'গোবিন্দভোগ চালের ভাত', 'কালাই ডাল'] },
    { category: 'সাইড ডিশ', dishes: ['আলু পোস্তো', 'লাবরা', 'চানার ডালনা', 'বেগুন ভাজা'] },
    { category: 'ডেজার্ট', dishes: ['রসগোল্লা', 'মিষ্টি দই', 'সন্দেশ', 'পায়েস'] },
    { category: 'পান', dishes: ['সাদা পান', 'মিষ্টি পান', 'জর্দা পান'] }
  ];

  const addToDishRefs = (el) => {
    if (el && !dishRefs.current.includes(el)) {
      dishRefs.current.push(el);
    }
  };

  const addToFlowerRefs = (el) => {
    if (el && !flowerRefs.current.includes(el)) {
      flowerRefs.current.push(el);
    }
  };

  const FlowerSVG = ({ style }) => (
    <svg 
      ref={addToFlowerRefs}
      className="flower-svg" 
      style={style} 
      viewBox="0 0 50 50" 
      width="30" 
      height="30"
    >
      <circle cx="25" cy="25" r="5" fill="#e84393" />
      <path d="M25,10 C30,15 35,15 40,10 C35,20 35,25 40,30 C35,35 30,35 25,30 C20,35 15,35 10,30 C15,25 15,20 10,10 C15,15 20,15 25,10" fill="#fd79a8" />
    </svg>
  );

  return (
    <div className="bengali-wedding-menu" ref={menuRef}>
      <div className="menu-pattern">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#e84393" opacity="0.2" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="menu-header">
        <FlowerSVG style={{ position: 'absolute', left: '5%', top: '15px' }} />
        <FlowerSVG style={{ position: 'absolute', right: '5%', top: '15px' }} />
        
        <div className="border-top" ref={borderRef}></div>
        
        <h1 ref={titleRef} className="menu-title">
          <span className="bengali-text">বিয়ের মেনু</span>
          <span className="english-text">Wedding Menu</span>
        </h1>
        
        <div className="border-bottom" ref={borderRef}></div>
      </div>

      <div className="menu-content">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="menu-section">
            <h2 className="section-title" ref={addToDishRefs}>
              {section.category}
            </h2>
            <ul className="dish-list">
              {section.dishes.map((dish, dishIndex) => (
                <li 
                  key={dishIndex} 
                  className="dish-item" 
                  ref={addToDishRefs}
                  onClick={() => {
                    // Mobile tap effect
                    gsap.to(dishRefs.current[dishRefs.current.length - 1], {
                      scale: 0.95,
                      duration: 0.1,
                      yoyo: true,
                      repeat: 1
                    });
                  }}
                >
                  <span className="dish-name">{dish}</span>
                  <span className="dish-decoration">
                    <svg width="16" height="8" viewBox="0 0 20 10">
                      <path d="M0,5 Q10,0 20,5 Q10,10 0,5" fill="#e84393" opacity="0.7" />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BengaliWeddingMenu;