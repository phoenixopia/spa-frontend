// pages/index.tsx

import Image from "next/image";
import Link from "next/link";
import Slider from "../home/home";
import Aboutus from "../aboutus/page";
import Services from "../services/page";
import Blog from "../blog/page";
import Footer from "../footer/page";
import Testimonials from "../testimonials/page";




export default function Home() {
  return (
    <div className="relative bg-cover bg-primary-color bg-center h-screen" style={{ backgroundImage: 'url("/Image/banner-bg.jpg")' }}>
      <Aboutus />
      <Testimonials />
    </div>
  );
}
