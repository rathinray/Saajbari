import React, { useState } from "react";
import { User, Calendar, MapPin } from "lucide-react";

export default function AadhaarCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="relative perspective-2000">
          <div
            className={`flex gap-1 transition-all duration-1000 ${
              isOpen ? "book-open" : "book-closed"
            }`}
          >
            {/* Left Page (Front of Card) */}
            <div
              className={`w-full md:w-1/2 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-1000 origin-right ${
                isOpen
                  ? "transform scale-100 opacity-100"
                  : "transform scale-0 opacity-0"
              }`}
              style={{
                transformOrigin: "right center",
                transform: isOpen ? "rotateY(0deg)" : "rotateY(-90deg)",
              }}
            >
              {/* Orange Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 md:p-4 text-center relative">
                <div className="absolute left-3 top-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                </div>
                <div className="absolute right-3 top-1">
                  <div className="w-12 h-12 md:w-16 md:h-16">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#FF6B35" />
                      <circle cx="50" cy="50" r="35" fill="#FF8C42" />
                      <circle cx="50" cy="50" r="25" fill="#FFA556" />
                      <circle cx="50" cy="50" r="15" fill="#FFB969" />
                      <circle cx="50" cy="50" r="8" fill="#FFC876" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-white font-bold text-base md:text-lg mt-1">
                  शुभ विवाह
                </h1>
                <p className="text-white text-xs md:text-sm">
                  Happy Marriage Ceremony
                </p>
              </div>

              {/* Green Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 md:p-3 text-center">
                <p className="text-white font-semibold text-xs md:text-sm">
                  शुभ विवाह ऑन-लाइन विवाह पंजिकरण
                </p>
                <p className="text-white text-[10px] md:text-xs">
                  Unique Identification Authority of Marriage
                </p>
              </div>

              {/* Main Content */}
              <div className="p-4 md:p-6">
                <div className="flex gap-3 md:gap-4">
                  {/* Left Side - Details */}
                  <div className="flex-1">
                    <p className="text-[10px] md:text-xs text-gray-600 mb-2">
                      सूचि/ समर्थ खाद्य अथवा / Listed here all food menu
                    </p>
                    <div className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
                      <p>মিনারেল ওয়াটার বোতল</p>
                      <p>লেবু</p>
                      <p>সালাদ</p>
                      <p>আলুর চিপস</p>
                      <p>সাদা ভাত</p>
                      <p>মুসুর ডাল</p>
                      <p>সবজি / ছেঁচড়া</p>
                      <p>দই কাতলা</p>
                      <p>মাংস</p>
                      <p>চাটনি</p>
                      <p>দই</p>
                      <p>দুধ চমচম</p>
                      <p>সন্দেশ</p>
                      <p>মুখশুদ্ধি</p>
                    </div>
                    <div className="mt-3 md:mt-4 text-xs text-gray-600">
                      <p>आपनार पोसाण संख्या / Your Food No</p>
                      <p className="font-bold text-sm md:text-lg">12345678**</p>
                      <p className="text-[10px] md:text-xs">987654321**</p>
                    </div>
                  </div>

                  {/* Right Side - QR Code */}
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded flex items-center justify-center mb-2">
                      <div className="grid grid-cols-8 gap-0.5 p-2">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 ${
                              Math.random() > 0.5 ? "bg-black" : "bg-white"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 text-center">बिशेष</p>
                  </div>
                </div>

                {/* Food Number */}
                <div className="mt-3 md:mt-4 text-center border-t pt-2 md:pt-3">
                  <p className="text-lg md:text-2xl font-bold tracking-wider">
                    0023 0052 6306
                  </p>
                </div>
              </div>

              {/* Footer Badges */}
              <div className="flex justify-between items-center px-4 md:px-6 pb-3 md:pb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded"></div>
                <div className="flex-1 h-1.5 md:h-2 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-3 md:mx-4 rounded"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Right Page (Back of Card - with bullet points) */}
            <div
              className={`w-full md:w-1/2 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-1000 origin-left ${
                isOpen
                  ? "transform scale-100 opacity-100"
                  : "transform scale-0 opacity-0"
              }`}
              style={{
                transformOrigin: "left center",
                transform: isOpen ? "rotateY(0deg)" : "rotateY(90deg)",
              }}
            >
              {/* Header with orange strip */}
              <div className="relative">
                <div className="absolute left-3 top-3 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                <div className="absolute right-3 top-1">
                  <div className="w-12 h-12 md:w-16 md:h-16">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#FF6B35" />
                      <circle cx="50" cy="50" r="35" fill="#FF8C42" />
                      <circle cx="50" cy="50" r="25" fill="#FFA556" />
                      <circle cx="50" cy="50" r="15" fill="#FFB969" />
                      <circle cx="50" cy="50" r="8" fill="#FFC876" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Instructions with bullet points */}
              <div className="p-4 md:p-6 pt-8 md:pt-10">
                <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <p className="flex-1">
                      शादी, विवाह समारोह और अन्य धार्मिक रीत पद्धती के अनुसार इस
                      प्रारूप द्वारा सभी तरीके से सभी धार्मिक रीती पद्धती के
                      अनुसार विवाह संपन्न होगा।
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <p className="flex-1">
                      विवाह करने आयोजकों की किसी भी व्यक्ति को समापन्नो के लेख
                      में सभी तथ्य सही और सभी प्रमाण्य होंगे अगर सभी तथ्य साबित
                      हो जाएं (सत्यता प्रमाणित होने का विषयाधिन)
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <p className="flex-1">
                      विवाह के बाद आयोजकों द्वारा सभी हो सकते हैं वो फॉर्म से
                      प्रामाणिक तौरपर दिए हुए सभी तथ्य सायरात दिया जायेगा।
                      सम्पूर्ण दायितव शुभ चितुर मॉडल द्वारा सभी फॉर्म किया
                      जायेगा
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <p className="flex-1">
                      यदि विवाह आयोजकों द्वारा दिए गए सभी तथ्य भ्रामक और फर्जी
                      पाए जाते हैं,तो प्रमाण्य या दस्तावेज उन सभी तथ्य को
                      रिकॉर्ड में सहेजने की कर्म-चारियों द्वारा पूर्णरूपेण हकदार
                      होंगे संबंधित पक्षों द्वारा तमाम कर्म-चारियों क़ानूनी
                      कार्रवाई उनके खिलाफ की जा सकती है
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <p className="flex-1">
                      विवाह होने के साथ सभी मेहमानो, उपस्थित लोगो संबंधित सभी
                      कार्यवाही सम्पन्न होंने के बाद सभी मेहमानो हर कोई भोजन या
                      आमंत्रण के लिए अपनिए क्रांतिक के तहत आमंत्रित किया गया है
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <p className="flex-1">
                      विवाहपर रही या अवर होंने के बाद जितनि भी उपस्थिति में से
                      सभी मेहमानो से आग्रहीत किया जाता कि स्थल या फॉर्मों मीसरे
                      तहत शामिल जितनि भी खाद्य सामग्री है उन्ही में परिशुद्धता
                      है है उनके उत्सर्ग होंगी
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <p className="flex-1">
                      विवाह मॉडल की जो भी तकनीक हो साक्षता चाहिए। साक्षतता पहल
                      होंसकती उसके बाद वहां समग्र स्थान प्रोटोकॉल को उनकी अंतिम
                      कर्म-चारियों द्वारा सुझाव दिया जायेगा।
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <p className="flex-1">
                      शादी के समापोन बिलकुल अथवा क्षेत्र विशिष्ट थोड़े द्वारा कू
                      भी व्यक्ति संबंधित फॉर्म में उपलब्ध सभी तथ्य उनके खुद के
                      हितों में प्रयोग किया जायेगा
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer with tri-color strip */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex justify-between items-center px-4 md:px-6 pb-3 md:pb-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded"></div>
                  <div className="flex-1 h-1.5 md:h-2 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-3 md:mx-4 rounded"></div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Closed State - Shows only front preview */}
          {!isOpen && (
            <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Same front page content */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 md:p-4 text-center relative">
                <div className="absolute left-3 top-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                </div>
                <div className="absolute right-3 top-1">
                  <div className="w-12 h-12 md:w-16 md:h-16">
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
                <p className="text-white text-xs md:text-sm">
                  Happy Marriage Ceremony
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 md:p-3 text-center">
                <p className="text-white font-semibold text-xl md:text-sm text-bengoli">
                  সুতৃষ্ণা ও শুভজিৎ এর শুভ পরিণয়{" "}
                </p>
                <p className="text-white text-[10px] md:text-xs">
                  Unique Identification Authority of Marriage
                </p>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-1">
                    <p className="text-base md:text-xs text-gray-600 mb-2 text-bengoli">
                      তালিকায় যেসব খাবার আছে - Listed here all food menu
                    </p>
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
                    <div className="mt-3 md:mt-4 text-xl text-gray-600 text-center">
                      <p>আপনার খাবার সংখ্যা / Your Food No</p>
                      <p className="font-bold text-sm md:text-lg">12345678**</p>
                      <p className="text-[10px] md:text-xs">987654321**</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    {/* <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-200 rounded flex items-center justify-center mb-2">
                      <div className="grid grid-cols-8 gap-0.5 p-2">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 ${
                              Math.random() > 0.5 ? "bg-black" : "bg-white"
                            }`}
                          />
                        ))}
                      </div>
                    </div> */}
                    {/* <p className="text-xs text-gray-600 text-center">बिशेष</p> */}
                  </div>
                </div>

                <div className="mt-3 md:mt-4 text-center border-t pt-2 md:pt-3">
                  <p className="text-lg md:text-2xl font-bold tracking-wider">
                    0023 0052 6306
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center px-4 md:px-6 pb-3 md:pb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded"></div>
                <div className="flex-1 h-1.5 md:h-2 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-3 md:mx-4 rounded"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded"></div>
              </div>
            </div>
          )}
        </div>

        {/* Open Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
          >
            {isOpen ? "📕 Close Card" : "📖 Tap to Open"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .book-closed {
          justify-content: center;
        }
        .book-open {
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
