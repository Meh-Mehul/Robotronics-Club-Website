import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollaspsibleExample from './src/components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Navbar data-aos ="fade-down"/>
          <Hero data-aos = "zoom-in"></Hero>
          <About></About>
          <EventTimeline/>
          <Projects/>
          <SocialSidebar/>
          <Gallery/>
          <Footer/></>}>
        </Route>
        <Route path="/members" element={<>
          <Navbar data-aos ="fade-down"/>
          <Projectstrying/>
          <Footer/></>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
