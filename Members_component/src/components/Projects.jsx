import React, { useState, useEffect } from 'react';
import '../assets/Projects.css';
import im1 from '../assets/images/im1.jpg';
import im2 from '../assets/images/im2.jpg';
import im3 from '../assets/images/im3.jpg';
import im4 from '../assets/images/im4.jpg';
import im5 from '../assets/images/im5.jpg';

const slides = [
  {
    image: im1,
    text: 'Project 1: Exploring Robotics'
  },
  {
    image: im2,
    text: 'Project 2: Advanced AI'
  },
  {
    image: im3,
    text: 'Project 3: Autonomous Vehicles'
  },
  {
    image: im4,
    text: 'Project 4: Machine Learning Innovations'
  },
  {
    image: im5,
    text: 'Project 5: Robotics Competitions'
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  return (
    // <div className="projects-background">
    //   <div className="projects-container">
    //     <div className="carousel-slide">
    //       <div className="carousel-image-wrapper">
    //         <img src={slides[prevIndex].image} alt="Previous Project" className="carousel-image carousel-image-prev" />
    //         <img src={slides[currentIndex].image} alt="Current Project" className="carousel-image carousel-image-current" />
    //         <img src={slides[nextIndex].image} alt="Next Project" className="carousel-image carousel-image-next" />
    //       </div>
    //       <div className="carousel-text">
    //         <h2>{slides[currentIndex].text}</h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="container">
    <div class="carousel">
        <div class="carousel__face"><span>Our Projects</span></div>
        <div class="carousel__face"><span>Very special</span></div>
        <div class="carousel__face"><span>Special is the key</span></div>
        <div class="carousel__face"><span>For you</span></div>
        <div class="carousel__face"><span>Just give it</span></div>
        <div class="carousel__face"><span>A try</span></div>
        <div class="carousel__face"><span>And see</span></div>
        <div class="carousel__face"><span>How IT Works</span></div>
        <div class="carousel__face"><span>Woow</span></div>
    </div>
    </div>
  );
};

export default Projects;
