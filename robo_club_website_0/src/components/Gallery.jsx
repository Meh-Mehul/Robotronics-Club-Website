import React, { useState } from "react";
import "../assets/Gallery.css"; // Make sure to import your CSS file
import im1 from "../assets/images/g1.jpg";
import im2 from "../assets/images/g2.jpg";
import im3 from "../assets/images/g3.jpg";
import im4 from "../assets/images/g4.jpg";
import im5 from "../assets/images/g5.jpg";

const images = [
  {
    src: im1,
    description: "TIP-Day1",
  },
  {
    src: im2,
    description: "TIP-Day2",
  },
  {
    src: im3,
    description: "TIP-Day2",
  },
  {
    src: im4,
    description: "Miraz-RoboSoccer",
  },
  {
    src: im5,
    description: "Climate Clock",
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

              <div className="gallery-details">{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
