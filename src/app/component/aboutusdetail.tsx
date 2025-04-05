// pages/index.tsx

import Image from "next/image";
import Aboutusdetail from "../component/detail";
import Services from "./category";
import Blog from "../component/blog";
import Footer from "../component/footer";
import Testimonials from "../component/Testimonials";
import MapPage from "../component/map";
import React from "react";
import Link from "next/link"; // Import Link from next/link



export default function Aboutusdetailpage() {
  return (
    <div >
        <section className="text-gray-800 body-font bg-gray-100"> {/* Added bg-white here */}
      <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center gap-10">
        {/* Text Content */}
        <div className="lg:flex-grow lg:ml-30 lg:pr-20 md:w-1/3 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center">
          <h1 className="mb-8 text-gray-800 text-3xl font-bold leading-relaxed max-w-xl text-left mx-auto">
            About Us
          </h1>

          <p className="mb-8 text-[#717171] leading-relaxed max-w-xl text-left mx-auto">
          
Fana Traditional Steam (Weyba Tis) is a premier beauty and body care company founded in 1995 EC by Fana G/Medhin, a passionate entrepreneur with a vision to enhance and celebrate natural beauty. Specializing in the traditional Ethiopian steam (Weyba Tis), we offer high-quality services and products that cater to women’s natural beauty and body care needs. 

From our humble beginnings, Fana Traditional Steam has grown into a leading brand in the beauty industry, committed to sustainability, ethical practices, and customer satisfaction. Our range of services includes body massages, body care treatments, professional hair care, organic nail care, and more, all designed to nurture the body and soul.

At Fana Traditional Steam, we believe in empowering women to embrace their natural beauty and prioritize self-care. Our dedicated team of skilled professionals uses organic and natural products to provide a luxurious and rejuvenating experience. As we continue to expand our presence, we aim to inspire confidence and promote body positivity, helping every woman shine from within.          </p>

          
        </div>

        {/* Image Content */}
        <div className="lg:w-1/3 md:w-1/3 w-full flex justify-end">
          <img className="object-cover object-center rounded-2xl w-full h-auto" alt="hero" src="Images/aboutus.png" />
        </div>
      </div>
    </section>
      <Testimonials />
      <MapPage/>
      <Footer/>

    </div>
  );
}
