import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';
import NET from 'vanta/src/vanta.net';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Coordinator from './Coordinator'; // Assuming you have this component
import '../assets/carousal.css'
import Member1 from '../assets/images/Member1.jpg';
import Member2 from '../assets/images/Member2.jpg';
import Member3 from '../assets/images/Member3.jpg';
import Member4 from '../assets/images/Member4.jpg';
import Member5 from '../assets/images/Member5.jpg';
import Member6 from '../assets/images/Member6.jpg';
import Member7 from '../assets/images/Member7.jpg';
import Member8 from '../assets/images/Member8.jpg';
import Member9 from '../assets/images/Member9.jpg';
import Member10 from '../assets/images/Member10.jpg';
import Member11 from '../assets/images/Member11.jpg';
import Member12 from '../assets/images/Member12.jpeg';
import Member13 from '../assets/images/Member13.jpeg';
import Member14 from '../assets/images/Member14.jpeg';
import Member15 from '../assets/images/Member15.jpg';
import Member16 from '../assets/images/Member16.jpg';
import Member17 from '../assets/images/Member17.jpg';
import Member18 from '../assets/images/Member18.jpeg';
import Member19 from '../assets/images/Member19.jpg';
import Member20 from '../assets/images/Member20.jpg';
import Member21 from '../assets/images/Member21.jpg';
import Member22 from '../assets/images/Member22.jpg';
import Member23 from '../assets/images/Member23.jpg';
import Member24 from '../assets/images/Member24.jpg';
import Member25 from '../assets/images/Member25.jpg';
import Member26 from '../assets/images/Member26.jpg';
import Member27 from '../assets/images/Member27.jpg';
import Member28 from '../assets/images/Member28.jpg';
import Member29 from '../assets/images/Member29.jpg';
import Member30 from '../assets/images/Member30.jpg';
import Member31 from '../assets/images/Member31.jpg';
import Member32 from '../assets/images/Member32.jpg';
import Member33 from '../assets/images/Member33.jpg';
import Member34 from '../assets/images/Member34.jpg';
import Member0 from '../assets/images/Member0.jpg';

const Projectstrying = () => {
  useEffect(() => {
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      points: 16.00,
      maxDistance: 20.00,
      spacing: 12.00,
      color: 0xff,
      showDots: true,
      backgroundColor: 0x240b3f,
    });
  }, []);
  //const Member1="../assets/images/Member1.jpg";
  const coreTeam="Core Team Member"
  const coordi="Coordinator"
  const coCoordi="Co-Coordinator"
  return (
    
    <div id="vanta" className="mem-container">
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Coordinator profile={Member0} kaam={coordi}  naam="Piyush Roy" />
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member1} kaam={coCoordi} naam="Amar"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member22} kaam={coCoordi} naam="Tarun Singh"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member26} kaam={coreTeam} naam="Arka Mukopadhyay"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member27} kaam={coreTeam} naam="Mehul Sharma"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member21} kaam={coreTeam} naam="Akshit Bhola"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member12} kaam={coreTeam} naam="G Vishal"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member2} kaam={coreTeam} naam="Yajesh Chandra"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member3} kaam={coreTeam} naam="Abhinav Choudhary"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member4} kaam={coreTeam} naam="Anamika"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member5} kaam={coreTeam} naam="Ketan Chandra"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member6} kaam={coreTeam} naam="Adit Raj"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member7} kaam={coreTeam} naam="Aditya Kumar Singh"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member8} kaam={coreTeam} naam="Avirup Ghosh"/>
        </SwiperSlide>
                <SwiperSlide>
          <Coordinator profile={Member9} kaam={coreTeam} naam="Sahil Sharma"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member10} kaam={coreTeam} naam="Shwetika"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member11} kaam={coreTeam} naam="Sachit Bhanwala"/>
        </SwiperSlide>

        <SwiperSlide>
          <Coordinator profile={Member13} kaam={coreTeam} naam="Gopika Chauhan"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member14} kaam={coreTeam} naam="Prashasti Singh"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member15} kaam={coreTeam} naam="Aadra Sharma"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member16} kaam={coreTeam} naam="Anmol Kumar"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member17} kaam={coreTeam} naam="Rishang Yadav"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member18} kaam={coreTeam} naam="Lavish Singal"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member19} kaam={coreTeam} naam="Veedhee Channey"/>
        </SwiperSlide>
       
        
        <SwiperSlide>
          <Coordinator profile={Member23} kaam={coreTeam} naam="Yash Patil"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member24} kaam={coreTeam} naam="Dheeraj Balodi"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member25} kaam={coreTeam} naam="Aditya Sharma"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member28} kaam={coreTeam} naam="Saurav Kumar"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member29} kaam={coreTeam} naam="Om Maheshwari"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member30} kaam={coreTeam} naam="Ch Sunil Patel"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member31} kaam={coreTeam} naam="Shubham Jaiswal"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member32} kaam={coreTeam} naam="Abhijeet"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member33} kaam={coreTeam} naam="Karanpreet"/>
        </SwiperSlide>
        <SwiperSlide>
          <Coordinator profile={Member34} kaam={coreTeam} naam="Aayush Bhansali"/>
        </SwiperSlide>
         <SwiperSlide>
          <Coordinator profile={Member20} kaam={coCoordi} naam="Lokesh Yadav"/>
        </SwiperSlide>

      </Swiper>
    </div>
    
  );
};

export default Projectstrying;

