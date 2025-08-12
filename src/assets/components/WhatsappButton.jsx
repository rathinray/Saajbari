import React from "react";
import WhatsappIcon from "../images/icons/Whatsapp.svg";

/**
 * WhatsAppFloatingButton
 * A lightweight, accessible React component that renders a floating WhatsApp chat button.
 * - Uses Tailwind CSS classes for styling (no external CSS required)
 * - Accepts `phone` and optional `message` props to build the wa.me link
 * - Opens in a new tab and uses rel="noopener noreferrer"
 *
 * Usage:
 * <WhatsAppFloatingButton phone="919876543210" message="Hi%20I%20want%20to%20book%20an%20event" />
 */

export default function WhatsappButton({
  phone = "917908753659",
  message = "Hi%20I%20want%20to%20book%20an%20event",
  className = "",
}) {
  const href = message
    ? `https://wa.me/${phone}?text=${message}`
    : `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-4 py-3 shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp ${className}`}
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Outer pulsing ring (subtle attention) */}
      <span
        className="absolute -inset-1 rounded-full opacity-0 animate-pulse"
        aria-hidden="true"
        style={{ boxShadow: "0 0 0 6px rgba(37,211,102,0.08)" }}
      ></span>

      {/* WhatsApp SVG */}
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full">
        <img src={WhatsappIcon} alt="" />
      </span>

      {/* Label (hidden on very small screens to save space) */}
      <span className="hidden sm:inline-block text-white font-medium">
        Chat on WhatsApp
      </span>
    </a>
  );
}
