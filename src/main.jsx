import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import Clients from './components/Clients.jsx';
import Features from './components/Features.jsx';
import Services from './components/Services.jsx';
import CallToAction from './components/CallToAction.jsx';
import './assets/css/main.css';
// import './assets/js/main.js';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
// import './assets/vendor/swiper/swiper-bundle.min.css';
// import './assets/vendor/swiper/swiper-bundle.min.js';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import AOS from 'aos';
import GLightbox from 'glightbox';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <AboutUs />
    <Clients />
    <Features />
    <Services />
    {/* <CallToAction /> */}
    <Footer />
  </StrictMode>
);

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  const glightbox = GLightbox({
    selector: '.glightbox'
  });
});
