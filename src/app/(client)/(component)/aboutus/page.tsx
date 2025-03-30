import React from "react";
import Link from "next/link";

const Aboutus: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center gap-10">
        {/* Text Content */}
        <div className="lg:flex-grow lg:ml-30 lg:pr-20 md:w-1/3 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="mb-8 text-3xl font-bold leading-relaxed max-w-xl text-center md:text-left mx-auto">
            About Us
          </h1>

          <p className="mb-8 leading-relaxed max-w-xl text-center md:text-left mx-auto">
            Heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>

          {/* Detail Button */}
          <Link href="/aboutusdetail">
            <a className="mt-4 inline-flex items-center bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300">
              Detail
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 5.25l5.25 5.25-5.25 5.25" />
              </svg>
            </a>
          </Link>
        </div>

        {/* Image Content */}
        <div className="lg:max-w-2xl lg:w-full md:w-2/3 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="Images/banner-bg.png" />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
