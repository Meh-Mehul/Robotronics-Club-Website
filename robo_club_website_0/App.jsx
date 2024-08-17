import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './src/components/Navbar';
import './App.css'
import About from './src/components/About';
import Hero from './src/components/Hero';
import EventTimeline from './src/components/EventTimeline';
import Projects from './src/components/Projects';
import SocialSidebar from './src/components/SocialSidebar';
import Footer from './src/components/Footer';
import Gallery from './src/components/Gallery';
import Projectstrying from './src/components/carousal'
function App() {
  useEffect(()=>{
    aos.init({duration:1000});
  }, [])
  return (
        <>
          <Navbar data-aos ="fade-down"/>
          <Hero data-aos = "zoom-in"></Hero>
          <About></About>
          <EventTimeline/>
          <Projects/>
          <SocialSidebar/>
          <Gallery/>
          <Projectstrying/>
          <Footer/></>
  )
}

export default App;
