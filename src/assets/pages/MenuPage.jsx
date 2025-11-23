import React, { useState } from "react";
import { User, Calendar, MapPin } from "lucide-react";
import Couple from "../images/couple.jpeg";
import QRCodePng from "../images/qrcode.png";

export default function AadhaarCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="relative perspective-1000">
          <div
            className={`relative w-full transition-transform duration-700 transform-style-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Side */}
            <div
              className="w-full bg-white rounded-lg shadow-2xl overflow-hidden backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Orange Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-center relative">
                <div className="absolute left-4 top-4">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                    <User className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="absolute right-4 top-2">
                  <div className="w-16 h-16">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#FF6B35" />
                      <circle cx="50" cy="50" r="35" fill="#FF8C42" />
                      <circle cx="50" cy="50" r="25" fill="#FFA556" />
                      <circle cx="50" cy="50" r="15" fill="#FFB969" />
                      <circle cx="50" cy="50" r="8" fill="#FFC876" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-white font-bold text-2xl md:text-lg mt-1 text-bengoli">
                  শুভ বিবাহ
                </h1>
                <p className="text-white text-sm">Happy Marriage Ceremony</p>
              </div>

              {/* Green Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 text-center">
                <p className="text-white font-semibold text-xl md:text-sm text-bengoli">
                  সুতৃষ্ণা ও শুভজিৎ এর শুভ পরিণয়{" "}
                </p>
                <p className="text-white text-xs">
                  Unique Identification Authority of Marriage
                </p>
              </div>

              {/* Main Content */}
              <div className="p-6">
                <p className="text-xl md:text-xs text-gray-600 mb-2 text-bengoli text-center">
                  আয়োজিত পদাবলী{" "}
                </p>
                <div className="flex">
                  {/* Left Side - Details */}

                  <div className="flex-1">
                    <div className="space-y-0.5 md:space-y-1 text-xl md:text-sm text-bengoli font-bold">
                      <ul className="list-disc ml-5">
                        <li>মিনারেল ওয়াটার বোতল</li>
                        <li>লেবু</li>
                        <li>সালাদ</li>
                        <li>আলুর চিপস</li>
                        <li>সাদা ভাত</li>
                        <li>মুসুর ডাল</li>
                        <li>সবজি / ছেঁচড়া</li>
                        <li>দই কাতলা</li>
                        <li>মাংস</li>
                        <li>চাটনি</li>
                        <li>দই</li>
                        <li>দুধ চমচম</li>
                        <li>সন্দেশ</li>
                        <li>মুখশুদ্ধি</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Side - QR Code */}
                  <span className="">
                    <img src={QRCodePng} alt="QR Code" className="w-30 h-30" />
                  </span>
                </div>
                <div className="mt-3 md:mt-4 text-xl text-gray-600 text-center">
                  <p>আপনার খাবার সংখ্যা / Your Food No</p>
                  <p className="font-bold text-lg md:text-lg">12345678**23</p>
                </div>

                {/* Food Number */}
                <div className="mt-4 text-center border-t pt-3">
                  <p className="text-2xl font-bold tracking-wider">
                    0024 0022 5406
                  </p>
                </div>
              </div>

              {/* Footer Badges */}
              <div className="flex justify-between items-center px-6 pb-4">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="flex-1 h-2 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-4 rounded"></div>
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 text-center">
                <h2 className="text-white font-bold text-lg  text-bengoli">
                  আমাদের পরিচয়
                </h2>
              </div>

              {/* Photo Section */}
              <div className="p-6">
                <div className="flex gap-4 items-start">
                  {/* Couple Photo */}
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-red-200 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={Couple}
                      alt="Couple"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-bengoli">
                    <h3 className="font-bold text-lg mb-1 text-bengoli">
                      সুতৃষ্ণা ও শুভজিৎ
                    </h3>
                    <p className="text-sm mb-1">Sutrisna with Subhajit</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span>তারিখ: 28/11/2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>বিবাহিত / Married</span>
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="w-20 h-20 rounded flex items-center justify-center">
                    <img src={QRCodePng} alt="QR Code" className="w-20 h-20" />
                  </div>
                </div>

                {/* Food Number */}
                <div className="mt-6 text-center border-t pt-4">
                  <p className="text-xl font-bold tracking-wider">
                    0024 0022 5406
                  </p>
                </div>

                {/* Additional Info */}
                <div className="mt-4 space-y-2 text-sm text-gray-700 text-bengoli">
                  <p>📍 Address: নিজ বাসভবন — বাউল</p>
                  <p>🕐 Time: 7:15 PM onwards</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center px-6 pb-4">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="flex-1 h-2 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-4 rounded"></div>
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Back Side */}
            <div
              className="absolute top-0 w-full bg-white rounded-lg shadow-2xl overflow-hidden backface-hidden rotate-y-180"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-3xl">
                  {/* Aadhaar Card Style */}
                  <div
                    className="bg-white rounded-sm shadow-lg overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #e8f5e9 0%, #fff3e0 50%, #fce4ec 100%)",
                      border: "3px solid #d32f2f",
                    }}
                  >
                    {/* Top Red Bar */}
                    <div className="h-3 bg-red-600"></div>

                    {/* Header with Logo */}
                    <div className="bg-white p-3 md:p-4 border-b-2 border-red-600 text-bengoli">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                            style={{
                              background:
                                "linear-gradient(135deg, #f44336 0%, #e91e63 100%)",
                            }}
                          >
                            <span className="text-2xl md:text-3xl">💍</span>
                          </div>
                          <div>
                            <h1
                              className="text-lg md:text-2xl font-bold"
                              style={{ color: "#1a237e" }}
                            >
                              বিবাহ নির্দেশিকা কার্ড
                            </h1>
                            <p className="text-xs md:text-sm text-gray-600">
                              Marriage Guidelines Card
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">
                            Document No.
                          </div>
                          <div className="font-mono font-bold text-red-600 text-sm">
                            MAR-2025-001
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Only */}
                    <div className="p-4 md:p-6 bg-white">
                      {/* Main Heading */}
                      <div className="mb-4 pb-3 border-b-2 border-red-600">
                        <div className="flex items-start gap-2">
                          <span className="text-red-600 font-bold text-lg">
                            ●
                          </span>
                          <div>
                            <strong
                              className="text-base md:text-lg"
                              style={{ color: "#1a237e" }}
                            >
                              আহা, "বিবাহ"
                            </strong>
                            <p className="text-sm text-gray-700 mt-1">
                              কেবল দুটি মানুষের মিলন নয়, এটি দুটি পরিবারের এক
                              রোম্যান্টিক যাত্রা।
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image Section - Mobile Optimized */}
                      {/* <div className="mb-4">
                        <img
                          src="/mnt/data/ff823533-ccf1-498d-98e4-7fe51201738a.png"
                          alt="বিবাহ সম্পর্কিত রোমান্টিক লেখা"
                          className="w-full rounded border-2 border-gray-300"
                        />
                      </div> */}

                      {/* Section 1 */}
                      <div className="mb-4">
                        <div className="bg-blue-900 text-white px-3 py-2 text-xs md:text-sm font-bold mb-3">
                          বিবাহের রোমান্টিক কথা / Romantic Thoughts on Marriage
                        </div>
                        <ul className="space-y-2 text-xs md:text-sm">
                          {[
                            "বিবাহ হলো ভালোবাসার সেই যাত্রা, যা দূরত্বকে আলাদা পথ থেকে এনে একটি নতুন সম্পর্কের দিকে নিয়ে যায়।",
                            "বিবাহ মানে কেবল একসাথে থাকা নয়; এটি হলো বোঝাপড়া, দায়িত্ববোধ, ভালোবাসা ও সমর্থনের সমন্বয়।",
                            "একটি সুন্দর বিবাহ প্রতিদিন ছোট ছোট ভাল কাজ এবং বোঝাপড়ার মাধ্যমে সম্পর্ককে শক্তিশালী করে।",
                            "বিবাহ মানুষকে আরও পরিপক্ক করে—এখানে সুখ-দুঃখ দুটোই ভাগাভাগি করতে হয়।",
                            "বিবাহ মানে দুটি পরিবারের মিলন, সমন্বয় ও সম্মান।",
                            "বিবাহের পথে সুখ-দুঃখ দুটোই থাকে; গুরুত্বপূর্ণ হলো—বিশ্বাস, ধৈর্য ও একে অপরের পাশে থাকা।",
                          ].map((text, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-600 font-bold flex-shrink-0">
                                ●
                              </span>
                              <span className="text-gray-800 leading-relaxed">
                                {text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Section 2 - Important Rules */}
                      <div
                        className="mb-4 border-2 border-red-600 rounded p-3"
                        style={{ background: "#fff3e0" }}
                      >
                        <div className="bg-red-600 text-white px-3 py-2 text-xs md:text-sm font-bold mb-3 -mx-3 -mt-3">
                          ⚠️ মনে রাখার মতো গুরুত্বপূর্ণ নিয়ম / Important Rules
                          to Remember
                        </div>
                        <ul className="space-y-2 text-xs md:text-sm mt-3">
                          {[
                            "বিবাহ কেবল উৎসব নয়—এটি দায়িত্ব ও ভালোবাসার দীর্ঘ যাত্রা।",
                            "বিয়ের পর বাস্তব জীবনের দায়িত্বগুলো দুজনকে মিলেমিশে পালন করতে হয়।",
                            "ছোট ছোট ভুল ক্ষমা করলে সম্পর্ক আরও মজবুত হয়।",
                            "জীবনের প্রতিটি ধাপে পাশে থাকা—এটাই বিবাহকে সুন্দর ও অর্থবহ করে তোলে।",
                          ].map((text, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-red-600 font-bold flex-shrink-0">
                                ●
                              </span>
                              <span className="text-red-900 font-semibold leading-relaxed">
                                {text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Summary */}
                      <div className="bg-blue-50 border-l-4 border-blue-900 p-3 rounded">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-900 font-bold">📌</span>
                          <div>
                            <strong className="text-xs md:text-sm text-blue-900">
                              সংক্ষেপে:
                            </strong>
                            <p className="text-xs md:text-sm text-gray-800 mt-1 leading-relaxed">
                              বিবাহ হলো ভালোবাসা ও দায়িত্বের মিশেল— রোমান্স
                              আছে, বাস্তবতা আছে; দুটোর মাঝে ভারসাম্য রাখতে হয়।
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Red Bar with Footer */}
                    <div className="bg-red-600 p-2 md:p-3">
                      <div className="flex justify-between items-center text-white text-xs flex-wrap gap-2">
                        <span>💕 একটি সুন্দর ও সফল বিবাহ জীবনের জন্য</span>
                        <span>Issued: 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flip Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {isFlipped ? "← Show Front" : "Tap to Flip →"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
