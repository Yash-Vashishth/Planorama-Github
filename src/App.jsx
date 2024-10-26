import React from 'react';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  React.useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  }, []);
  return (
    <div data-scroll-container>
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Footer />
    </div>
  )
}

export default App
