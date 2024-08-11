import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollaspsibleExample from './components/Navbar';
import Main from './components/Main';
import aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import './App.css'
import About from './components/About';
import Hero from './components/Hero';
import EventTimeline from './components/EventTimeline';
import Projects from './components/Projects';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
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
    <Footer/>

    </>
  )
}

export default App;
