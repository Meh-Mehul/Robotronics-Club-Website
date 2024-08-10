import React from 'react';
import '../assets/About.css';
const About = () => {
  return (
    <div className='about-main' id="about">
      <div className='about-heading'>About Us</div>
      <div className='about-wrapper'>
        <div className='up-about'>
          <div className='about-img' data-aos="fade-left">
            <img src='./src/assets/images/im3.jpg' alt='Robotics Club' />
          </div>
          <div className='up-info' data-aos="fade-right">
            Welcome to the Robotics Club! We are a passionate group of individuals dedicated to exploring and advancing the field of robotics. Our club provides a platform for students and enthusiasts to come together, share knowledge, and work on innovative projects.
          </div>
        </div>
        <div className='line-break'></div>
        <div className='down-about'>
          <div className='left-down' data-aos="fade-right">
            Our club engages in various activities including workshops, seminars, and hands-on projects. We focus on practical learning and encourage our members to participate in competitions and research opportunities to gain real-world experience.
          </div>
          <div className='right-down' data-aos="fade-left">
            We also collaborate with industry experts and organizations to provide valuable insights and mentorship. Join us to be part of a community that is shaping the future of robotics and technology. Together, we strive for excellence and innovation in every endeavor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
