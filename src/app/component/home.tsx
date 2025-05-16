"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <section className="relative sm:block w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Image as element */}
      <img
        src="Images/background.jpg"
        alt="Background"
        className="absolute sm:block top-0 left-0 w-100% sm:object-cover"
      />


      {/* Foreground content */}
      <div
        className="absolute sm:static text-center text-white px-4 top-16 left-21"
        style={{ fontFamily: "'Metal Mania', cursive" }}
      >
        <h1 className="hidden sm:block text-2xl sm:text-6xl font-bold mb-6 text-[#209747]">
          Fana Traditional Steam
        </h1>
        <p className="hidden sm:block max-w-2xl mx-auto font-light md:text-3xl mb-8">
          Experience the essence of Ethiopian beauty and self-care with Fana Traditional Steam where tradition meets luxury to celebrate your natural glow.
        </p>

        <div className="flex flex-col w-full items-center sm:flex-row justify-center gap-4 ml-10">
          <a
            href="/booking"
            className="px-6 py-3 text-lg font-medium bg-[#209747] max-w-[8rem] text-white rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
