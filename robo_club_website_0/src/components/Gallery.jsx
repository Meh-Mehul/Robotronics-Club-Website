import React, { useState } from "react";
import "../assets/Gallery.css"; // Make sure to import your CSS file
import im1 from "../assets/images/im1.jpg";
import im2 from "../assets/images/im2.jpg";
import im3 from "../assets/images/im3.jpg";
import im4 from "../assets/images/im4.jpg";
import im5 from "../assets/images/im5.jpg";

const images = [
  {
    src: im1,
    text: "Project 1: Exploring Robotics",
    description: "Add Project Description Here",
  },
  {
    src: im2,
    text: "Project 2: Advanced AI",
    description: "Add Project Description Here",
  },
  {
    src: im3,
    text: "Project 3: Autonomous Vehicles",
    description: "Add Project Description Here",
  },
  {
    src: im4,
    text: "Project 4: Machine Learning Innovations",
    description: "Add Project Description Here",
  },
  {
    src: im5,
    text: "Project 5: Robotics Competitions",
    description: "Add Project Description Here",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper" id="gallery">
      <div className="gallery-heading" data-aos="fade-down">
        <h2>Gallery</h2>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-card">
            <div className="gallery-item" data-aos="fade-up">
              <img src={image.src} alt={image.text} className="gallery-image" />
              <div className="gallery-text">
                <span>{image.text}</span>
              </div>
              <div className="gallery-details">{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
