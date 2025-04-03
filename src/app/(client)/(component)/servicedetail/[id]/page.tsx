import React from 'react'
import Testimonials from '@/app/component/Testimonials'
import Footer from "@/app/component/footer";
import MapPage from "@/app/component/map";
import Services from '@/app/component/category'
import Servicedetail from '@/app/component/servicedetail';
const page = () => {
  return (
    <div>
      <Servicedetail/>
      <MapPage/>
      <Footer/>
    </div>
  )
}

export default page
