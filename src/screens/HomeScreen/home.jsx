import React, { useEffect, useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { BannerHome } from '../../components/HomeSections/BannerHome/bannerHome';
import { ServiceHome } from '../../components/HomeSections/ServicesHome/serviceHome';
import { PlansHome } from '../../components/HomeSections/PlansHome/plansHome';
import { ContactHome } from '../../components/HomeSections/ContactHome/contactHome.jsx';
import './home.css';

function Home() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = [
        { id: 'bannerHome', offset: 0 },
        { id: 'serviceHome', offset: window.innerHeight * 0.5 }, // Adjust as needed
        { id: 'plansHome', offset: window.innerHeight * 0.5 }, // Adjust as needed
        { id: 'contactHome', offset: window.innerHeight * 0.5 } // Adjust as needed
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= section.offset && rect.bottom >= section.offset) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='homeComponent'  >
      <Element className='elementHomeBanner' name="bannerHome" id="bannerHome" >
        <BannerHome />
      </Element>
      <Element className='elementHome'  name="serviceHome" id="serviceHome">
        <ServiceHome />
      </Element>
      <Element className='elementHome' name="plansHome" id="plansHome">
        <PlansHome />
      </Element>
      <Element className='elementHome' name="contactHome" id="contactHome">
        <ContactHome />
      </Element>

      <nav className='navSection'>
        <Link className={`navLink ${activeSection === 'bannerHome' ? 'active' : ''}`} to="bannerHome" smooth={true} duration={500}>Banner</Link>
        <Link className={`navLink ${activeSection === 'serviceHome' ? 'active' : ''}`} to="serviceHome" smooth={true} duration={500}>Service</Link>
        <Link className={`navLink ${activeSection === 'plansHome' ? 'active' : ''}`} to="plansHome" smooth={true} duration={500}>Plans</Link>
        <Link className={`navLink ${activeSection === 'contactHome' ? 'active' : ''}`} to="contactHome" smooth={true} duration={500}>Contact Us</Link>
      </nav>
    </div>
  );
}

export { Home };