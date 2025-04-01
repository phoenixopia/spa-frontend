// pages/index.tsx

import Image from "next/image";
import Link from "next/link";
import Header from "./(client)/(component)/header/page";
import Slider from "./(client)/(component)/home/home";
import PaymentTool from "./(client)/(component)/home/page";
import Aboutus from "./(client)/(component)/aboutus/page";
import Services from "./(client)/(component)/services/page";
import Blog from "./(client)/(component)/blog/page";
import Footer from "./(client)/(component)/footer/page";
import ContactUs from "./(client)/(component)/contactus/page";  
import Testimonials from "./(client)/(component)/testimonials/page";
import Opening from "./(client)/(component)/opening/page";
import MapPage from "./(client)/(component)/map/page";




export default function Home() {
  return (
    <div suppressHydrationWarning  className="relative bg-cover bg-primary-color bg-center h-screen" style={{ backgroundImage: 'url("/Image/banner-bg.jpg")' }}>
      <PaymentTool />
      <Services />
      <Aboutus />
      <Blog />
      <Testimonials />
      <Opening/>
      <MapPage />
      <Footer />
    </div>
  );
}
