import React, { useState, useRef, useEffect } from 'react';
import MenuImg from '../images/menu.jpg';
import { Link } from 'react-router-dom';

// Main App component for the wedding menu
const WeddingMenuBangla = () => {
  // State to manage which menu category is open
  const [openCategory, setOpenCategory] = useState(null);

  // Reference for the menu item containers to apply GSAP animations
  const menuRefs = useRef({});

  // Effect to dynamically load GSAP from a CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js';
    script.onload = () => {
      // GSAP is loaded, now you can safely use window.gsap
      console.log('GSAP loaded successfully!');
    };
    script.onerror = () => {
      console.error('Failed to load GSAP script.');
    };
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Mock data for the wedding reception menu in Bengali
  const menuData = [
    {
      id: 'snacks',
      title: '🥤 আপনাদের জন্য বিশেষ স্ন্যাকস ও পানীয়',
      items: [
        { name: 'ঠান্ডা পানীয়', description: '' },
        { name: 'পাকোড়া', description: '' },
        { name: 'ফুচকা', description: '' },
        { name: 'কফি', description: '' },
      ],
    },
    {
      id: 'appetizers',
      title: '🥗 স্টার্টার',
      items: [
        { name: 'লেবু', description: '' },
        { name: 'স্যালাড', description: '' },
        { name: 'রাধা বল্লবি ', description: '' },
        { name: 'চানা বাটার', description: '' },
        { name: 'পাট ভাজা', description: '' },
      ],
    },
    {
      id: 'main-course',
      title: '🍛 প্রধান খাবার',
      items: [
        { name: 'সাদা ভাত', description: '' },
        { name: 'ছোলার ডাল ', description: '' },
        { name: 'পটল চিংড়ি', description: '' },
        { name: 'পাবদা মাছ', description: '' },
        { name: 'ফ্রাইড রাইস', description: '' },
        { name: 'মাটন / মাছ', description: '' },
      ],
    },
   
    {
      id: 'drinks',
      title: '🥗 সাইড আইটেম',
      items: [
        { name: 'চাটনি', description: '' },
        { name: 'পাঁপড়', description: '' },
      
      ],
    },
    {
      id: 'desserts',
      title: '🍨 মিষ্টান্ন',
      items: [
        { name: 'রসগোল্লা', description: '' },
        { name: 'সন্দেশ', description: '' },
        { name: 'আইসক্রিম', description: '' },
      ],
    },
    {
      id: 'mint',
      title: '🌿 মুখশুদ্ধি',
      items: [
        { name: 'পান মসলা', description: '' },
        
      ],
    },
  ];

  // Effect to handle GSAP animations when openCategory changes
  useEffect(() => {
    // Ensure GSAP is loaded before attempting animations
    if (window.gsap) {
      Object.keys(menuRefs.current).forEach(categoryId => {
        const element = menuRefs.current[categoryId];
        if (element) {
          // If the current category is open, animate it to full height
          if (openCategory === categoryId) {
            window.gsap.to(element, {
              height: 'auto', // Animate to auto height to fit content
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out',
              onComplete: () => window.gsap.set(element, { clearProps: 'height' }) // Clear height after animation
            });
          } else {
            // If the category is closed, animate it to 0 height and fade out
            window.gsap.to(element, {
              height: 0,
              opacity: 0,
              duration: 0.5,
              ease: 'power2.inOut',
            });
          }
        }
      });
    }
  }, [openCategory]); // Re-run effect when openCategory changes

  // Function to toggle the visibility of a menu category
  const toggleCategory = (categoryId) => {
    setOpenCategory(prevOpenCategory =>
      prevOpenCategory === categoryId ? null : categoryId
    );
  };

  return (
    // Import Google Fonts directly within the component's render method
    <>
      
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora:wght@400;700&family=Great+Vibes&family=Noto+Sans+Bengali:wght@400;700&display=swap" rel="stylesheet" />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 text-bengoli"
           style={{
             fontFamily: "'Lora', 'Noto Sans Bengali', sans-serif", // Apply Lora and Noto Sans Bengali as default fonts
             background: `linear-gradient(to bottom right, #fdfbfb 0%, #ebedee 100%)`, // Very subtle light gradient
             backgroundImage: `url(${MenuImg})`, // Placeholder for a subtle abstract pattern
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed',
             backgroundBlendMode: 'overlay', // Blend the gradient and image
           }}>
        {/* Wedding Menu Header */}
        <div className="w-full max-w-2xl bg-white bg-opacity-95 p-4 rounded-3xl shadow-2xl mb-8 text-center border-b-4 border-rose-200">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4 font-great-vibes leading-tight text-rose-600 text-bengoli"> রাজেশ ও মৌমিতা’র শুভ বিবাহ</h1>
          <Link to="/wedding-images" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300">
          👀 Take a Look
</Link>

         
        </div>
        <div className="w-full max-w-2xl bg-white bg-opacity-95 p-4 rounded-3xl shadow-2xl mb-8 text-center border-b-4 border-rose-200 text-bengoli">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4 font-great-vibes leading-tight text-rose-600">আজকের <br /> আপ্যায়নের মেনু</h1>
          <p className="text-xl text-gray-700 font-lora italic">বিশেষ দিনে সুস্বাদু স্মৃতির এক অনন্য আয়োজন</p>
        </div>

        {/* Menu Categories */}
        <div className="w-full max-w-2xl text-bengoli">
          {menuData.map((category) => (
            <div key={category.id} className="bg-white bg-opacity-98 rounded-2xl shadow-xl overflow-hidden mb-6 border border-gray-100">
              {/* Category Header (Clickable) */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-600 hover:to-pink-500 text-white font-playfair-display text-2xl rounded-t-2xl focus:outline-none focus:ring-4 focus:ring-rose-300 transition-all duration-300 ease-in-out transform hover:scale-100 active:scale-98"
                style={{letterSpacing: '0.08em'}}
              >
                <span>{category.title}</span>
                {/* Chevron icon for open/close indication */}
                <svg
                  className={`w-9 h-9 transform transition-transform duration-300 ${
                    openCategory === category.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Menu Items Container (animated by GSAP) */}
              <div
                ref={el => menuRefs.current[category.id] = el}
                className={`overflow-hidden ${openCategory !== category.id ? 'h-0 opacity-0' : ''}`}
              >
                <ul className="p-6 bg-white rounded-b-2xl">
                  {category.items.map((item, index) => (
                    <li key={index} className="mb-4 last:mb-0 pb-4 border-b border-gray-200 last:border-b-0">
                      <h3 className="font-lora font-bold text-gray-900 text-xl mb-1">{item.name}</h3>
                      <p className="text-gray-700 text-base italic">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full max-w-2xl bg-white bg-opacity-95 p-4 rounded-3xl shadow-2xl mb-8 text-center border-b-4 border-rose-200 text-bengoli">
          <div className='mb-4'>
          <p className='text-xl text-gray-700 font-lora italic'>🎉 ইভেন্ট পরিচালনায়</p>
          <p className='text-xl text-gray-700 font-lora italic'>সাজবাড়ি ইভেন্ট</p>
          <Link to={'/'} className='text-xl text-gray-700 font-lora italic'>🌐 ওয়েবসাইট ভিজিট করুন</Link>
          </div>
          <div className='flex justify-between border-b'>
            <div>
            <p className='text-xl text-gray-700 font-lora italic'>🍴 ক্যাটারিং পরিচালনায়</p>
            <p className='text-xl text-gray-700 font-lora italic'>স্টার ক্যাটারার</p>
            </div>
            <div>
            <p className='text-xl text-gray-700 font-lora italic'>🌸 ফুলের সাজসজ্জা</p>
            <p className='text-xl text-gray-700 font-lora italic'>মা মনসা ফ্লাওয়ার ডেকোরেশন</p>
            </div>
          </div>
          <div className="flex justify-between">
        <Link to="/wedding-spin-wheel" className="inline-block bg-pink-700 text-white w-36 py-2 mt-4 rounded-full shadow-lg animate-bounce">
  🎮 Play a Game
</Link >
{/* <Link to="/rice-ceremony-quiz" className="inline-block bg-pink-700 text-white px-4 py-2 mt-4 rounded-full shadow-lg animate-bounce">
  🎮 Rice Ceremony Quiz
</Link> */}
<Link to="/bride-groom-qna" className="inline-block  bg-pink-700 text-white w-36 py-2 mt-4 rounded-full shadow-lg animate-bounce">
  🎮 Q&A
</Link>
        </div>
         
        </div>
        <footer className="text-center text-white text-sm mt-auto mb-4" style={{ position: "relative", zIndex: 2 }}>
        Thank you for being a part of our special day! 💕
      </footer>
      </div>
    </>
  );
};

export default WeddingMenuBangla;
