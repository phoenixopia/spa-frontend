"use client";

import React from 'react';

const Home: React.FC = () => {
  return (

    <section className="relative lg:static w-full lg:h-screen flex items-center justify-center mb-50 sm:mb-100 lg:mb-0">
      {/* Image as element */}
      <img
        src="Images/background.jpg"
        alt="Background"
        className="absolute lg:static top-0 left-0 w-full lg:h-screen"
      />

      {/* Foreground content */}
      <div
        className="absolute lg:block text-center text-white px-4 top-16 left-15 mt-20 sm:top-[12%] sm:left-[34%]"
        style={{ fontFamily: "'Metal Mania', cursive" }}
      >
        <h1 className="hidden sm:flex lg:ml-10 text-2xl lg:text-6xl font-bold mb-6 text-[#209747]">
          Fana Traditional Steam
        </h1>
        <p className="hidden lg:block max-w-2xl mx-auto font-light md:text-3xl mb-8">
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
