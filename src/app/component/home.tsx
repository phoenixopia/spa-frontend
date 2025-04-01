import React from 'react';

const Home: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('Images/background.png')" }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Spa Experience
        </h1>
        <p className="max-w-2xl mx-auto font-light text-lg md:text-xl mb-8">
          From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <a
            href="/booking"
            className="px-6 py-3 text-lg font-medium bg-[#633466] text-white rounded-lg hover:bg-purple-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
