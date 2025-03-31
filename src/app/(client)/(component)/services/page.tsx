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
  const [isEnd, setIsEnd] = useState(false); // State to track if we are at the end

  // Define services array inside the component function
  const services = [
    {
      title: "Aromatherapy Massage",
      description: "Relax your muscles and calm your mind with a soothing aromatherapy massage using essential oils.",
      price: "Birr 80.00",
      image: "/Images/service.png", // Dummy image URL
    },
    {
      title: "Facial Treatment",
      description: "Revitalize your skin with a deep-cleansing facial, tailored to your skin type for a glowing complexion.",
      price: "Birr 100.00",
      image: "/Images/service.png", // Dummy image URL
    },
    {
      title: "Herbal Steam Bath",
      description: "Detoxify your body and promote relaxation with an herbal steam bath, packed with natural healing benefits.",
      price: "Birr 60.00",
      image: "/Images/service.png", // Dummy image URL
    },
    {
      title: "Manicure & Pedicure",
      description: "Pamper your hands and feet with a relaxing manicure and pedicure, leaving your nails smooth and polished.",
      price: "Birr 50.00",
      image: "/Images/service.png", // Dummy image URL
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

  // Detect if swiper is at the end or the start
  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        setIsEnd(swiperRef.current.isEnd);
      }
    };

    // Attach swiper events
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', handleSlideChange);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChange', handleSlideChange);
      }
    };
  }, []);

  return (
    <section className="text-gray-700 body-font py-16 relative">
      <div className="container px-20 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-black">Our Services</h1>
          <p className="mt-2 text-black">
            We have been working with some Fortune 500+ clients.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1030: { slidesPerView: 3 },
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
                className="service-item bg-white px-6 py-8 rounded-xl shadow-xl text-center h-full flex flex-col justify-between transition duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ width: "100%", maxWidth: "350px", margin: "0 auto" }} // Reduced size
              >
                <div>
                  {/* Image at the top */}
                  <div className="mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <p className="mt-3 text-gray-900 font-semibold text-lg">{service.price}</p>
                </div>
                <Link href="/booking" legacyBehavior>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-4 bg-white text-[#633466] border-2 border-[#633466] font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Book
                  </motion.button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-4 lg:ml-10 transform -translate-y-1/2 text-[#633466] p-2 rounded-full z-10 cursor-pointer" onClick={() => swiperRef.current?.slidePrev()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-4 lg:mr-10 transform -translate-y-1/2 text-[#633466] p-2 rounded-full z-10 cursor-pointer" onClick={() => swiperRef.current?.slideNext()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      {/* Custom Cursor Style */}
      <style jsx>{`
        .service-item:hover {
          cursor: url('/custom-cursor.svg'), pointer; /* Apply the custom cursor */
        }

        .swiper-button-next, .swiper-button-prev {
          cursor: ${isEnd ? 'blur' : 'pointer'};
        }
          
      `}</style>
    </section>
  );
}
