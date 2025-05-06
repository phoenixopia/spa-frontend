"use client";

import React from 'react';

const Home: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('Images/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative text-center text-white px-4" style={{ fontFamily: "'Metal Mania', cursive" }}>
        <h1 className="text-6xl font-bold mb-6 text-[#209747]">
          Fana Traditional Steam
        </h1>
        <p className="max-w-2xl mx-auto font-light md:text-3xl mb-8">
          Experience the essence of Ethiopian beauty and self-care with Fana Traditional Steam where tradition meets luxury to celebrate your natural glow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/booking"
            className="px-6 py-3 text-lg font-medium bg-[#209747] text-white rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
