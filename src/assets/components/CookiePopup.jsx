import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("cookieAccepted");
    const isDeclined = localStorage.getItem("cookieDeclined");

    if (!isAccepted && !isDeclined) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieDeclined", "true");
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-6 right-6 w-80 bg-white text-gray-900 p-6 rounded-2xl shadow-2xl z-50 flex flex-col space-y-4"
        >
          <h3 className="text-lg font-semibold">We Value Your Privacy</h3>
          <p className="text-sm text-gray-600">
            We use cookies to enhance your browsing experience. By clicking Accept, you agree to our cookie policy.
          </p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 bg-gray-300 text-gray-800 cursor-pointer rounded-lg hover:bg-gray-400 transition"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-primary text-white cursor-pointer rounded-lg hover:bg-primary-dark transition"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePopup;
