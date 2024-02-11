import React, { useState } from 'react'
import { BannerHome } from '../../components/HomeSections/BannerHome/bannerHome'
import "./home.css"
import { ServiceHome } from '../../components/HomeSections/ServicesHome/serviceHome'


function Home() {

  return (
    <div className='homeComponent'>
    <BannerHome />
    <ServiceHome />
    </div>
  )
}

export {Home}
