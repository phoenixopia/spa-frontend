// pages/index.tsx

import Image from "next/image";
import Slider from "../home/home";
import Aboutusdetail from "../aboutus/detail";
import Services from "../services/page";
import Blog from "../blog/page";
import Footer from "../footer/page";
import Testimonials from "../testimonials/page";
import MapPage from "../map/page";




export default function Aboutusdetailpage() {
  return (
    <div className="relative bg-cover bg-primary-color bg-center h-screen" style={{ backgroundImage: 'url("/Image/banner-bg.jpg")' }}>
      <Aboutusdetail />
      <Testimonials />
      <MapPage/>
      <Footer/>

    </div>
  );
}
