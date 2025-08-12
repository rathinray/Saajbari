import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Icon1 from "../images/icons/decoration.png";
import Icon2 from "../images/icons/food.png";
import Icon3 from "../images/icons/video.png";
import Icon4 from "../images/icons/stall.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Icon1,
    title: "ডেকোরেশনের সম্পূর্ণ সমাধান",
    description:
      "আমরা সুন্দর ফুলের সাজ, স্টাইলিশ প্যান্ডেল এবং চোখধাঁধানো লাইটের ব্যবস্থা করি, যা আপনার অনুষ্ঠানকে আরও আকর্ষণীয় ও স্মরণীয় করে তোলে।",
    delay: "",
    as: "div",
    href: "/wedding-decoration",
  },
  // {
  //   icon: "fas fa-birthday-cake",
  //   title: "Birthday Celebrations",
  //   description:
  //     "Custom birthday parties that reflect personality and create lasting memories for all ages.",
  //   delay: "animate-delay-100",
  //   as: "div",
  //   href: "/birthday-celebration",
  // },
  // {
  //   icon: "fas fa-glass-cheers",
  //   title: "Corporate Events",
  //   description:
  //     "Professional event planning for corporate gatherings that impress clients and employees alike.",
  //   delay: "animate-delay-200",
  //   as: "div",
  //   href: "/corporate-events",
  // },
  {
    icon: Icon2,
    title: "কেটারিং ও রাঁধুনি",
    description:
      "আমরা পেশাদার রাঁধুনির মাধ্যমে সুস্বাদু রান্না ও সম্পূর্ণ কেটারিং পরিষেবা দিয়ে আপনার অনুষ্ঠানে খাবারের অভিজ্ঞতা নিখুঁত করে তুলি।",
    delay: "",
    as: "a",
    href: "/catering-services",
  },
  {
    icon: Icon3,
    title: "ছবি, ভিডিও ও সাউন্ড সিস্টেম",
    description:
      "আমরা পেশাদার ফটোগ্রাফি, ভিডিওগ্রাফি এবং সাউন্ড সিস্টেমের ব্যবস্থা করি, যা আপনার বিশেষ মুহূর্তগুলোকে চিরকাল স্মরণীয় করে রাখবে।",
    delay: "animate-delay-100",
    as: "div",
    href: "/photography-video",
  },
  {
    icon: Icon4,
    title: "লাইভ স্টল কর্নার",
    description:
      "আমরা সরবরাহ করি জনপ্রিয় স্টল আইটেম যেমন কফি, মচমচে ফুচকা, সুস্বাদু পানের ব্যবস্থা এবং পাকোড়া—যা অতিথিদের মুখে হাসি ফোটাবে।",
    delay: "animate-delay-200",
    as: "div",
    href: "/custom-themes",
  },
];

const Services = () => {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#services",
          start: "top 70%",
        },
      }
    );
  }, []);
  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;

    let targetWidth = "80%";
    if (
      window.matchMedia("(min-width: 768px) and (max-width: 1580px)").matches
    ) {
      targetWidth = "40%";
    }
    gsap.fromTo(
      underline,
      { width: "0%" },
      {
        width: targetWidth,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 60%", // When the top of the heading reaches 60% of viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="services" className="py-10 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            Our Premium Services
          </h2>
          <div
            ref={underlineRef}
            className="w-20 h-1 bg-primary mx-auto mb-3"
            style={{ width: "0%" }}
          ></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 text-bengoli">
            আমরা আপনার বিশেষ দিনগুলোকে সত্যিই মনে রাখার মতো করে তুলতে সব রকমের
            অনুষ্ঠান পরিকল্পনার ব্যবস্থা করে থাকি।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            if (service.href) {
              return (
                <div
                  key={service.title}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="service-card bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:border-primary border border-transparent group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-125 transition-transform duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-bengoli">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-bengoli">
                    {service.description}
                  </p>
                </div>
              );
            } else {
              return (
                <div
                  key={service.title}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="service-card bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:border-primary border border-transparent"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <i className={`${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-bengoli">
                    {service.description}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
