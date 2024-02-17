import React from 'react';
import { Link, Element } from 'react-scroll';
import { BannerHome } from '../../components/HomeSections/BannerHome/bannerHome';
import "./home.css";
import { ServiceHome } from '../../components/HomeSections/ServicesHome/serviceHome';
import { PlansHome } from '../../components/HomeSections/PlansHome/plansHome';
import { ContactHome } from '../../components/HomeSections/ContactHome/contactHome.jsx';

function Home() {
  return (
    <div className='homeComponent'>
      <Element  name="bannerHome">
        <BannerHome />
      </Element>
      <Element className='elementHome' name="serviceHome">
        <ServiceHome />
      </Element>
      <Element className='elementHome' name="plansHome">
        <PlansHome />
      </Element>
      <Element className='elementHome' name="contactHome">
        <ContactHome />
      </Element>
  
      <nav className='navSection'>
        <Link className='navLink' to="bannerHome" smooth={true} duration={500}>Banner</Link>
        <Link className='navLink' to="serviceHome" smooth={true} duration={500}>Service</Link>
        <Link className='navLink' to="plansHome" smooth={true} duration={500}>Plans</Link>
        <Link className='navLink' to="contactHome" smooth={true} duration={500}>Contact Us</Link>
      </nav>
    </div>
  );
}

export { Home };