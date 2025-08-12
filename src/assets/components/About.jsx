import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Grid1 from "../images/decoration/grid-1.jpeg";
import Grid2 from "../images/decoration/grid-2.jpeg";
import Grid3 from "../images/decoration/grid-3.jpeg";
import Grid4 from "../images/decoration/grid-4.jpeg";
import Grid5 from "../images/decoration/grid-5.jpg";
import Grid6 from "../images/decoration/img3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const images = [Grid1, Grid2, Grid3, Grid4, Grid5, Grid6];
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const underline = underlineRef.current;

    let targetWidth = "60%";
    if (
      window.matchMedia("(min-width: 768px) and (max-width: 1580px)").matches
    ) {
      targetWidth = "48%";
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
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-10 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Carousel Section */}
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              className="rounded-lg overflow-hidden"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl font-serif font-bold mb-4"
            >
              About Saajbari
            </h2>
            <div
              ref={underlineRef}
              className="w-20 h-1 bg-primary mb-6"
              style={{ width: "0%" }}
            ></div>
            <p className="text-lg text-gray-600 mb-6 text-bengoli">
              ২০১৮ সালে প্রতিষ্ঠিত, সাজবাড়ি একটি ছোট স্থানীয় উদ্যোগ থেকে আজ
              একটি স্বনামধন্য ইভেন্ট প্ল্যানিং প্রতিষ্ঠানে পরিণত হয়েছে। আমাদের
              সুনাম এসেছে সৃজনশীলতা, নিখুঁত পরিকল্পনা এবং ব্যতিক্রমী পরিষেবার
              জন্য।
            </p>
            <p className="text-lg text-gray-600 mb-8 text-bengoli">
              আমাদের একদল উদ্যমী ও পেশাদার কর্মী একত্রিত করেছে নকশা, সমন্বয় ও
              বাস্তবায়নের বৈচিত্র্যপূর্ণ দক্ষতা—যার ফলে আমরা এমন সব অনুষ্ঠান
              গড়ে তুলি যা প্রত্যাশার চেয়েও বেশি আনন্দ দেয় এবং স্মৃতিতে
              দীর্ঘদিন ধরে বেঁচে থাকে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
