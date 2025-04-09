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

interface Testimonial {
  firstName: string;
  lastName: string;
  imageURL: string;
  message: string;
}

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get<{ data: Testimonial[] }>(`${URL}/testimonial`);
        setTestimonials(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="text-gray-700 body-font py-16 bg-gray-100 relative overflow-x-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-700">Testimonials</h1>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
          </div>
        ) : (
          <div className="relative">
            <Swiper
              spaceBetween={-1}
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
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className=" h-[400px] sm:h-[360px] md:h-[380px] lg:h-96 py-8 rounded-xl text-center flex flex-col justify-between transition duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}
                  >
                    <div className="relative mb-4">
                      <Image
                        src={testimonial.imageURL}
                        className="w-full h-56 object-cover rounded-xl"
                        width={500}
                        height={500}
                        alt={`${testimonial.firstName} ${testimonial.lastName}`}
                      />
                      <div className="absolute top-3/4 mx-5 bg-white bg-opacity-70 rounded-xl z-10 p-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {testimonial.firstName} {testimonial.lastName}
                        </h3>
                        <p className="text-gray-600 text-sm">{testimonial.message}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
<div className="absolute top-1/2 transform -translate-y-1/2 z-10 pl-8 md:pl-3 lg:pl-3 hidden lg:block">
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-[#209747] text-white px-3 py-2 rounded-full shadow-lg"
              >
                ❮
              </button>
            </div>
<div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 pr-8 md:pr-3 lg:pr-3 hidden md:block">
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-[#209747] text-white px-3 py-2 rounded-full shadow-lg"
              >
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
