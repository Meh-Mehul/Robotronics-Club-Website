import React, { useEffect } from 'react';
import '../assets/Hero.css';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import RINGS from 'vanta/src/vanta.rings';
import HALO from 'vanta/src/vanta.halo';

const Hero = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray('.text-wrapper p');
    const t1 = gsap.timeline({
      repeat: 0, 
      onComplete: () => {
        const splittextLast = new SplitTextJS(titles[2]);
        gsap.set(splittextLast.chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
        });
      },
    });

    titles.forEach((title, index) => {
      const splittext = new SplitTextJS(title);
      if (index < 2) {
        t1.from(splittext.chars, {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        }, "<")
        .to(splittext.chars, {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.02,
        }, "<1");
      } else {
        
        t1.from(splittext.chars, {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        }, "<");
      }
    });

    RINGS({
      el: "#ani",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x240b3f,
      color: 0x240b3f,
      backgroundAlpha: 1
    })
    // HALO({
    //   el: "#ani",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: true,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   xOffset: 0.00,
    //   size: 1.70,
    //   amplitudeFactor: 3.00
    // })
  }, []);

  return (
    <div className='hero-wrapper' id='ani'>
      <div className='cont'>
        <p className='welcome' data-aos='fade-out' data-aos-delay='4000'>Welcome to</p>
        <div className='text-wrapper'>
          <p>Robotics</p>
          <p>Electronics</p>
          <p>Robotronics</p>
        </div>
        <p className='club'>Club</p>
      </div>
      <div className='info' data-aos="fade-down" data-aos-delay='2500'	>
        <p className='info-ele'>30+ <div>members</div></p>
        <div className='line vertical'></div>
        <p className='info-ele'>7+ <div>Ongoing Projects</div></p>
        <div className='line vertical'></div>
        <p className='info-ele'>10+ <div>Sessions</div></p>
      </div>
    </div>
  );
};

export default Hero;
