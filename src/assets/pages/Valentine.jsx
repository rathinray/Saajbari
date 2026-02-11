import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import couplePhoto from "/couple.jpeg";

export default function Valentine() {
  const [screen, setScreen] = useState("question"); // 'question' or 'congrats'
  const [showNoMessage, setShowNoMessage] = useState(false);

  const handleYes = () => {
    setScreen("congrats");
  };

  const handleNoClick = () => {
    setShowNoMessage(true);
    setTimeout(() => setShowNoMessage(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] mx-auto">
        <AnimatePresence mode="wait">
          {screen === "question" ? (
            <QuestionScreen
              key="question"
              onYes={handleYes}
              onNoClick={handleNoClick}
              showNoMessage={showNoMessage}
            />
          ) : (
            <CongratsScreen key="congrats" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function QuestionScreen({ onYes, onNoClick, showNoMessage }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {/* Floating hearts background */}
      <FloatingHearts count={8} />

      <motion.div
        className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        <motion.h1
          className="text-4xl font-bold text-rose-600 mb-8"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Are you my Valentine? 💝
        </motion.h1>

        <div className="space-y-4">
          {/* Yes Button */}
          <motion.button
            onClick={onYes}
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes ❤️
          </motion.button>

          {/* No Button (Disabled) */}
          <motion.button
            onClick={onNoClick}
            className="w-full py-4 px-6 bg-gray-300 text-gray-500 text-xl font-semibold rounded-full shadow-lg cursor-not-allowed opacity-60"
            whileTap={{ scale: 0.98 }}
          >
            No 💔
          </motion.button>
        </div>

        {/* Playful Message */}
        <AnimatePresence>
          {showNoMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 bg-rose-100 border-2 border-rose-300 rounded-2xl p-4"
            >
              <p className="text-rose-700 font-medium">
                You always choose the wrong decision, that's why it's disabled
                😜
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function CongratsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="text-center min-h-screen flex flex-col justify-between py-8"
    >
      {/* Floating hearts background */}
      <FloatingHearts count={15} />

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 mx-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl font-bold text-rose-600 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            Congratulations 🎉
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            className="text-2xl text-rose-500 font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            You're officially my Valentine 💕
          </motion.p>

          {/* Couple Picture with Glow Effect */}
          <motion.div
            className="relative inline-block"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>

            {/* Heart overlay corners */}
            <div className="absolute -top-2 -right-2 text-4xl animate-bounce">
              ❤️
            </div>
            <div
              className="absolute -bottom-2 -left-2 text-4xl animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              💕
            </div>

            {/* Picture placeholder */}
            <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-pink-200 to-rose-200 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
              {/* Replace this with actual couple image */}
              <img src={couplePhoto} />
            </div>
          </motion.div>

          {/* Confetti hearts */}
          <motion.div
            className="mt-6 text-4xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            💖
          </motion.div>
        </motion.div>
      </div>

      {/* Dancing Emoji at Bottom */}
      <DancingEmoji />
    </motion.div>
  );
}

function DancingEmoji() {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2"
      animate={{
        y: [0, -20, 0],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="text-7xl">💃</div>
    </motion.div>
  );
}

function FloatingHearts({ count }) {
  const hearts = ["❤️", "💕", "💖", "💗", "💝", "💘"];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {hearts[Math.floor(Math.random() * hearts.length)]}
        </motion.div>
      ))}
    </div>
  );
}
