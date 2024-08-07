import React, { useState, useEffect } from 'react';
import '../assets/Projects.css';
import im1 from '../assets/images/im1.jpg';
import im2 from '../assets/images/im2.jpg';
import im3 from '../assets/images/im3.jpg';
import im4 from '../assets/images/im4.jpg';
import im5 from '../assets/images/im5.jpg';

const slides = [
  { image: im1, text: 'Project 1: Exploring Robotics' },
  { image: im2, text: 'Project 2: Advanced AI' },
  { image: im3, text: 'Project 3: Autonomous Vehicles' },
  { image: im4, text: 'Project 4: Machine Learning Innovations' },
  { image: im5, text: 'Project 5: Robotics Competitions' }
];

const Projects = () => {

  return (
    <div className='project-wrapper'>
      <div className='project-text' data-aos="fade-up" data-aos-delay='100'>Some of our Ongoing Projects</div>
      <div className="container">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="carousel__face"
              style={{ 
                transform: `rotateY(${index * 72}deg) translateZ(1500px)`, 
                backgroundImage: `url(${slide.image})` 
              }}
            >
              <div className="carousel__text">
                <span >{slide.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
