// pages/index.tsx

import Image from "next/image";
import Link from "next/link";
import Header from "./(component)/header/page";
import Slider from "../app/(component)/home/home";
import PaymentTool from "./(component)/home/page";
import Aboutus from "./(component)/aboutus/page";
import Services from "./(component)/services/page";
import Blog from "./(component)/blog/page";
import Footer from "./(component)/footer/page";
import ContactUs from "./(component)/contactus/page";  
import Testimonials from "./(component)/testimonials/page";




export default function Home() {
  return (
    <div className="relative bg-cover bg-primary-color bg-center h-screen" style={{ backgroundImage: 'url("/Image/banner-bg.jpg")' }}>
      <PaymentTool />
      <Aboutus />
      <Services />
      <Blog />
      <Testimonials />
      <ContactUs/>
      <Footer />
    </div>
  );
}
