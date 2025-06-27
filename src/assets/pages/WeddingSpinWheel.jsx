import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette-r19';
import Confetti from 'react-confetti';
import Modal from 'react-modal';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';

// Sound effect (you can replace with your own sound)
// Check that the file exists in your project at: src/assets/sounds/spin-sound.mp3
import spinSound from '../sounds/spin-sound.wav';

const WeddingSpinWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sound setup
  const [play] = useSound(spinSound);

  // Wedding Wheel Data
  const data = [
    { option: '🎉 Unlimited Gulab Jamun🍩' },
    { option: '🎁 Special Dessert Surprise' },
    { option: '🎲 Try Again!' },
    { option: '🍦 Extra Rosogolla' },
    { option: '🍽️ Extra Paneer Tikka' },
    { option: '🍦 Unlimited Ice Cream' },
    { option: '🎲 Try Again!' },
  ];

  // Handle Spin Click
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    play(); // Play spin sound
  };

  // On Spin Stop
  const handleStopSpinning = () => {
    setMustSpin(false);
    setShowConfetti(true);
    setIsModalOpen(true);
  };

  // Automatically stop confetti after 3 seconds
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 relative">
      {/* Confetti */}
      {showConfetti && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            pointerEvents: "none",
          }}
        >
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}

      {/* Modal (z-index above everything, no overlay) */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
          }}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-auto text-center outline-none"
            style={{
              zIndex: 10001,
              position: "relative",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h2 className="text-2xl font-bold text-pink-700 mb-4">🎊 Congratulations!</h2>
            <p className="text-lg mb-4">{data[prizeNumber].option}</p>
            <p className="text-lg mb-4">Thank you for playing!</p>
          
            <p className="text-xs mb-4">Dont take it too seriously</p>
            <p className="text-xs mb-4">We are just having fun</p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-pink-700 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-800 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-pink-700">🎯 Spin the Wedding Wheel!</h1>

      {/* Wheel */}
      <div className="mb-6 z-10">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={['#FFB6C1', '#FFDAB9']}
          textColors={['#000']}
          onStopSpinning={handleStopSpinning}
          radiusLineWidth={2}
          outerBorderColor="#F472B6"
          innerBorderColor="#FDE68A"
          fontSize={12}
          spinDuration={0.4}
        />
      </div>

      {/* Spin Button */}
      <button
        onClick={handleSpinClick}
        className="bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-800 transition-all z-10"
      >
        Spin Now 🎉
      </button>

      <Link to="/wedding-menu-bangla"
        // 👈 Route to your main page
        className="fixed bottom-6 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all z-20"
      >
        🔙 Back
      </Link>
    </div>
  );
};

export default WeddingSpinWheel;
