"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import Image from 'next/image';
import { useRef } from "react";

const Testimonials = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="relative w-full bg-white py-24"> {/* Changed bg-brown-700 to bg-white */}
      <div className="container mx-auto px-20">
        <h1 className="text-4xl font-bold text-center text-[#F6D1D1] mb-12">Testimonials</h1>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {[
            {
              name: 'HOLDEN CAULFIELD',
              title: 'Senior Product Designer',
              image: '/Images/mobile.jpeg',
              testimonial:
                "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.",
            },
            {
              name: 'ALPER KAMU',
              title: 'UI Developer',
              image: '/Images/mobile.jpeg',
              testimonial:
                "Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen.",
            },
            {
              name: 'HENRY LETHAM',
              title: 'CTO',
              image: '/Images/mobile.jpeg',
              testimonial:
                "Taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY.",
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#D1B29F] text-[#F6D1D1] border rounded-lg shadow-lg p-8 h-full flex flex-col items-center transition-transform transform hover:scale-105 max-w-xl mx-auto">
                <Image
                  alt="testimonial"
                  className="w-40 h-40 mb-4 object-cover object-center rounded-full border-2 border-gray-200 bg-gray-100"
                  src={item.image}
                  width={160}
                  height={160}
                />
                <p className="leading-relaxed text-center text-[#F6D1D1] mb-4">{item.testimonial}</p>
                <span className="inline-block h-1 w-12 rounded bg-pink-300 mt-4 mb-4"></span>
                <h2 className="text-[#F6D1D1] font-medium title-font tracking-wider text-lg">{item.name}</h2>
                <p className="text-[#F6D1D1]">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          className="absolute top-1/2 left-4 lg:ml-40 transform -translate-y-1/2 text-blue-800 p-2 rounded-full z-10 cursor-pointer"
          onClick={() => {
            if (swiperRef.current) swiperRef.current.slidePrev();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg>
        </div>

        <div
          className="absolute top-1/2 right-4 lg:mr-40 transform -translate-y-1/2 text-amber-950 p-2 rounded-full z-10 cursor-pointer"
          onClick={() => {
            if (swiperRef.current) swiperRef.current.slideNext();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
