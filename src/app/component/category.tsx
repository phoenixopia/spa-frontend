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
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_APP_URL;

export default function Categorylist() {
  const swiperRef = useRef<SwiperType | null>(null);

  interface Category {
    id: string;
    name: string;
    description: string;
    imageURL: string;
  }

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("API URL:", `${URL}/category`);
        const response = await axios.get<{ data: Category[] }>(`${URL}/category`);

        if (Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
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
          <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
          <p className="mt-2 text-gray-800">
            We have been working with some Fortune 500+ clients.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
          </div>
        ) : categories.length === 0 ? (
          <p className="text-center">No services available.</p>
        ) : (
          <Swiper
            spaceBetween={10}
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
            {categories.map((category, index) => (
              <SwiperSlide key={category.id}>
                <motion.div
                  className="service-item bg-white px-6 py-8 rounded-xl shadow-xl text-center h-full flex flex-col justify-between transition duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ width: "100%", maxWidth: "350px", margin: "0 auto" }}
                >
                  <div>
                    <div className="mb-4">
                      <img
                        src={category.imageURL} // Fallback image
                        alt={category.name}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                  <Link href={`/servicedetail/${category.id}`} legacyBehavior>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="mt-4 bg-white text-[#633466] border-2 hover:bg-purple-600 border-[#633466] font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                      Details
                    </motion.button>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Swiper Navigation Buttons */}
      <div className="absolute top-1/2 left-20 transform -translate-y-1/2 z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#633466] text-white px-3 py-2 rounded-full shadow-lg"
        >
          ❮
        </button>
      </div>
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 z-10">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#633466] text-white px-3 py-2 rounded-full shadow-lg"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
