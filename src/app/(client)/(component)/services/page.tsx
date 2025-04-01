import React from 'react'
import Testimonials from '@/app/component/Testimonials'
import Footer from "@/app/component/footer";
import MapPage from "@/app/component/map";
import Services from '@/app/component/services'
const page = () => {
  return (
    <div>
      <Services/>
      <MapPage/>
      <Footer/>
    </div>
  )
}

export default page
