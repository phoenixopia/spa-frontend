'use client';
import React from "react";
import { Link } from 'react-router-dom';
import Image from "next/image";
import { motion } from "framer-motion";

const Opening = () => {
  return (
    <section className="text-gray-600 body-font relative overflow-x-hidden">
      <div className="container mx-10 lg:px-30 py-14 relative">
        <div className="lg:w-2/3 flex flex-col items-start ml-4">
          {/* Title */}
          <h1 className="font-Italianno text-[#209747] text-6xl font-extrabold mb-10 w-full">
            Opening Hours
          </h1>

          {/* Time details */}
          <div className="w-full mb-6">
            <h2 className="text-[#209747] font-Italianno text-4xl font-bold mb-2 w-full">
              Monday to Sunday
            </h2>
            <h2 className="text-[#209747] font-Italianno text-4xl font-bold w-full">
              from 8:00 AM to 8:30 PM
            </h2>
          </div>
        </div>
      </div>

{/* Button positioned above the map, aligned to the right */}
<div className="flex justify-end w-full mb-6 pr-10">
  <a href="/booking" className="flex-shrink-0">
    <button className="text-white bg-[#209747] border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
      Book Now
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 inline ml-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  </a>
</div>



      
    </section>
  );
};

export default Opening;
