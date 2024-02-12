import React, { useState } from 'react'
import { BannerHome } from '../../components/HomeSections/BannerHome/bannerHome'
import "./home.css"
import { ServiceHome } from '../../components/HomeSections/ServicesHome/serviceHome'
import { PlansHome } from '../../components/HomeSections/PlansHome/plansHome'


function Home() {

  return (
    <div className='homeComponent'>
    <BannerHome />
    <ServiceHome />
    <PlansHome />
    </div>
  )
}

export {Home}
