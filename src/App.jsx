import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import StartProject from './components/StartProject';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import './styles/index.css';


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