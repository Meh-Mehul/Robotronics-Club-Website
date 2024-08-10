import { useState,useEffect } from 'react'
import Membersbackground from './components/membersBackground'
import './App.css'
import aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Ourteam from './components/ourTeam'
import Projectstrying from './components/carousal'
import {Swiper,SwiperSlide} from "swiper/react";

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    aos.init({duration:1000});
  }, [])

  return (
    <>
    <Navbar/>
    <Membersbackground/>
    
   <Projectstrying/>

    </>
  )
}

export default App;
