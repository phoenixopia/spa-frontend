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
import Image from "next/image";


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
        const response = await axios.get<{ data: Category[] }>(`${URL}/service`);


        if (Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        } else {
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="text-gray-700 body-font py-16 relative overflow-x-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
          <p className="mt-2 text-gray-800">
            We have been working with some Fortune 1000+ clients.
          </p>
        </motion.div>
  
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
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
                    <Image
  src={category.imageURL || "/Images/ab.jpg"} // <-- notice the leading slash
  alt={category.name}
  width={500}
  height={500}
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
                      className="mt-4 bg-white text-[#209747] border-2 hover:bg-green-600 border-[#209747] font-semibold py-3 px-6 rounded-lg transition duration-300"
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
  
      {/* Swiper Navigation Buttons - Always rendered */}
      {categories.length > 0 && (
  <>
    <div className="absolute top-1/2 transform -translate-y-1/2 z-10 pl-8 lg:pl-13 hidden lg:block">
      <button
        disabled={loading}
        onClick={() => swiperRef.current?.slidePrev()}
        className={`${
          loading ? "opacity-0 cursor-not-allowed" : ""
        } bg-[#209747] text-white px-3 py-2 rounded-full shadow-lg`}
      >
        ❮
      </button>
    </div>

    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 pr-8 lg:pr-13 hidden lg:block">
      <button
        disabled={loading}
        onClick={() => swiperRef.current?.slideNext()}
        className={`${
          loading ? "opacity-0 cursor-not-allowed" : ""
        } bg-[#209747] text-white px-3 py-2 rounded-full shadow-lg`}
      >
        ❯
      </button>
    </div>
  </>
      )}
    </section>
  );  
}
