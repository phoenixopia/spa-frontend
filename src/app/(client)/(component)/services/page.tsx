"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function SpaServices() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [cursorStyle, setCursorStyle] = useState('default'); // State to track cursor style

  // Define services array inside the component function
  const services = [
    {
      icon: "🛁",
      title: "Aromatherapy Massage",
      description: "Relax your muscles and calm your mind with a soothing aromatherapy massage using essential oils.",
      category: "Massage",
      price: "Birr 80.00",
    },
    {
      icon: "💆‍♀️",
      title: "Facial Treatment",
      description: "Revitalize your skin with a deep-cleansing facial, tailored to your skin type for a glowing complexion.",
      category: "Skincare",
      price: "Birr 100.00",
    },
    {
      icon: "🌿",
      title: "Herbal Steam Bath",
      description: "Detoxify your body and promote relaxation with an herbal steam bath, packed with natural healing benefits.",
      category: "Detox",
      price: "Birr 60.00",
    },
    {
      icon: "💅",
      title: "Manicure & Pedicure",
      description: "Pamper your hands and feet with a relaxing manicure and pedicure, leaving your nails smooth and polished.",
      category: "Nail Care",
      price: "Birr 50.00",
    },
  ];

  // Event listener for when the mouse is over the services
  useEffect(() => {
    const handleMouseEnter = () => setCursorStyle('hover');
    const handleMouseLeave = () => setCursorStyle('default');
    
    // Add event listeners for each service item
    document.querySelectorAll('.service-item').forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    // Clean up event listeners on component unmount
    return () => {
      document.querySelectorAll('.service-item').forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className="text-gray-700 body-font py-16 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-pink-700">Our Spa Services</h1>
          <p className="mt-2 text-pink-500">
            Experience relaxation and rejuvenation with our premium spa services.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="service-item bg-white px-4 py-6 rounded-xl shadow-xl text-center h-full flex flex-col justify-between transition duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}
              >
                <div>
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-200 text-pink-700 mb-4 text-3xl">
                    {service.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">{service.title}</h2>
                  <h3 className="text-gray-500 text-xs tracking-widest mb-2">{service.category}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <p className="mt-3 text-gray-900 font-semibold text-lg">{service.price}</p>
                </div>
                <Link href="/booking">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300"
                  >
                    Check Availability
                  </motion.button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-4 lg:ml-10 transform -translate-y-1/2 text-amber-950 p-2 rounded-full z-10 cursor-pointer" onClick={() => swiperRef.current?.slidePrev()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-4 lg:mr-10 transform -translate-y-1/2 text-amber-950 p-2 rounded-full z-10 cursor-pointer" onClick={() => swiperRef.current?.slideNext()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>

      {/* Custom Cursor Style */}
      <style jsx>{`
        .service-item:hover {
          cursor: url('/custom-cursor.svg'), pointer; /* Apply the custom cursor */
        }
      `}</style>
    </section>
  );
}
