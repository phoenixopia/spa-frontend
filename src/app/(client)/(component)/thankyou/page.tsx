import React from 'react'
import Testimonials from '@/app/component/Testimonials'
import Footer from "@/app/component/footer";
import MapPage from "@/app/component/map";
import SuccessPage from '@/app/component/thankyou';
const page = () => {
  return (
    <div>
      <SuccessPage/>
      <MapPage/>
      <Footer/>
    </div>
  )
}

export default page
