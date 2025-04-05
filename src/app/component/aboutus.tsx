import React from "react";
import Link from "next/link"; // Import Link from next/link

const Aboutus: React.FC = () => {
  return (
    <section className="text-gray-800 body-font bg-gray-100"> {/* Added bg-white here */}
      <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center gap-10">
        {/* Text Content */}
        <div className="lg:flex-grow lg:ml-30 lg:pr-20 md:w-1/3 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center">
          <h1 className="mb-8 text-gray-800 text-3xl font-bold leading-relaxed max-w-xl text-left mx-auto">
            About Us
          </h1>

          <p className="mb-8 text-[#717171] leading-relaxed max-w-xl text-left mx-auto">
          
Fana Traditional Steam (Weyba Tis) is a premier beauty and body care company founded in 1995 EC by Fana G/Medhin, a passionate entrepreneur with a vision to enhance and celebrate natural beauty. Specializing in the traditional Ethiopian steam (Weyba Tis), we offer high-quality services and products that cater to women’s natural beauty and body care needs. 

</p>
          {/* Button Link to About Us Detail Page */}
          <div className="flex justify-center w-full">
            <Link href="/aboutusdetail">
                <div className="inline-flex items-center text-white bg-[#633466] hover:bg-purple-600 mt-8 px-6 py-3 border-2 border-[#633466] rounded-lg text-lg cursor-pointer transition-colors duration-300">
                Read More
              </div>
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/3 md:w-1/3 w-full flex justify-end">
          <img className="object-cover object-center rounded-2xl w-full h-auto" alt="hero" src="Images/aboutus.png" />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
