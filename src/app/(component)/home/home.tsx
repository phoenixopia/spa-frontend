'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/Images/mobile.jpeg', description: 'Many people around the world believed that bathing in a particular spring, well, or river resulted in physical and spiritual purification.' },
  { src: '/Images/mobile.jpeg', description: 'Many people around the world believed that bathing in a particular spring, well, or river resulted in physical and spiritual purification.' },
  { src: '/Images/hi.jpeg', description: 'Description for hi image 2' },
  { src: '/Images/mobile.jpeg', description: 'Description for mobile image 3' },
  { src: '/Images/hi.jpeg', description: 'Description for hi image 3' },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10 p-4"> {/* Added padding to the whole carousel */}
      <div className="relative h-72 md:h-[500px] overflow-hidden rounded-lg shadow-lg bg-white px-72"> {/* Added padding inside the container */}
        {images.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 flex flex-col md:flex-row ${index === current ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Description Section */}
            <div className="flex-1 font-light font-serif flex items-center justify-center p-5 bg-white/50">
              <div className="text-lg p-10 text-gray-800">
                {/* Title */}
                <h2 className="font-bold text-xl mb-8">Spa Experience</h2>
                {/* Description */}
                <p className="mb-8 pr-48">{slide.description}</p>
                {/* Book Now Button */}
                <button className="bg-pink-500 text-white font-semibold my-6 px-6 py-2 rounded-lg hover:bg-pink-600 transition">
                  Book Now
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex-1 relative h-1/2 p-20 md:h-full">
              <Image src={slide.src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Controls */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 transition">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 transition">
        &#10095;
      </button>
    </div>
  );
}
