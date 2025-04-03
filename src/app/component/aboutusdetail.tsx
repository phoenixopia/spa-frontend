// pages/index.tsx

import Image from "next/image";
import Aboutusdetail from "../component/detail";
import Services from "./category";
import Blog from "../component/blog";
import Footer from "../component/footer";
import Testimonials from "../component/Testimonials";
import MapPage from "../component/map";




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
