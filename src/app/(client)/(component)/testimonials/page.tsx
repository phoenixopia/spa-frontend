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

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [cursorStyle, setCursorStyle] = useState("default"); // State to track cursor style
  const [isEnd, setIsEnd] = useState(false); // State to track if we are at the end

  // Define services array inside the component function
  const services = [
    {
      title: "Aster Aweke",
      description:
        "Relax your muscles and calm your mind with a soothing aromatherapy massage using essential oils. soothing aromatherapy massage using essential oils.",
      image: "/Images/aster.jpeg", // Dummy image URL
    },
    {
      title: "Aster Aweke",
      description:
        "Revitalize your skin with a deep-cleansing facial, tailored to your skin type for a glowing complexion. soothing aromatherapy massage using essential oils.",
      image: "/Images/aster.jpeg", // Dummy image URL
    },
    {
      title: "Aster Aweke",
      description:
        "Detoxify your body and promote relaxation with an herbal steam bath, packed with natural healing benefits. soothing aromatherapy massage using essential oils.",
      image: "/Images/hi.jpeg", // Dummy image URL
    },
    {
      title: "Aster Aweke",
      description:
        "Pamper your hands and feet with a relaxing manicure and pedicure, leaving your nails smooth and polished.and feet with a relaxing manicure and pedicure, leaving your nails smooth and polished.",
      image: "/Images/aster.jpeg", // Dummy image URL
    },
  ];

  // Event listener for when the mouse is over the services
  useEffect(() => {
    const handleMouseEnter = () => setCursorStyle("hover");
    const handleMouseLeave = () => setCursorStyle("default");

    // Add event listeners for each service item
    document.querySelectorAll(".service-item").forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up event listeners on component unmount
    return () => {
      document.querySelectorAll(".service-item").forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
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
      swiperRef.current.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("slideChange", handleSlideChange);
      }
    };
  }, []);

  return (
    <section className="text-gray-700 body-font py-16 bg-gray-100 relative">
      <div className="container px-20 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-black">Testimonials</h1>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={2} // Space between slides
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1030: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="service-item bg-gray-100 h-96 py-8 rounded-xl text-center flex flex-col justify-between transition duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }} // Reduced size
              >
                <div className="relative mb-4">
                  {/* Image at the top */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover rounded-xl" // Adjusted image height
                  />

                  {/* Title and description on top of the image */}
                  <div className="absolute top-3/4 mx-5 bg-white bg-opacity-70 rounded-xl z-10">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div
        className="absolute top-1/2 left-4 lg:ml-10 transform -translate-y-1/2 text-purple-900 p-2 rounded-full z-10 cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </div>
      <div
        className="absolute top-1/2 right-4 lg:mr-10 transform -translate-y-1/2 text-purple-900 p-2 rounded-full z-10 cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      {/* Custom Cursor Style */}
      <style jsx>{`
        .service-item:hover {
          cursor: url('/custom-cursor.svg'), pointer; /* Apply the custom cursor */
        }

        .swiper-button-next,
        .swiper-button-prev {
          cursor: ${isEnd ? "blur" : "pointer"};
        }
      `}</style>
    </section>
  );
}
