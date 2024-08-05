import { useState, useEffect } from 'react';
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
function App() {
  useEffect(()=>{
    aos.init({duration:1000});
  }, [])
  return (
    <>
    <Hero data-aos = "zoom-in"></Hero>
    <Navbar data-aos ="fade-down"/>
    <About></About>
    <EventTimeline/>
    <Projects/>
    <Main></Main>
    <Main></Main>
    <Main></Main>
    <Main></Main>
    <Main></Main>
    <Main></Main>
    <Main></Main>
    <Main></Main>
    <Main></Main>
    <Main></Main>
    </>
  )
}

export default App;
