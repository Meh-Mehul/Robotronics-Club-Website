import React, { useState } from 'react';
import '../assets/Projects.css';
import Modal from './Modal'; // Import the Modal component
import im1 from '../assets/images/im1.jpg';
import im2 from '../assets/images/im2.jpg';
import im3 from '../assets/images/im3.jpg';
import im4 from '../assets/images/im4.jpg';
import im5 from '../assets/images/im5.jpg';

const slides = [
  { image: im1, text: 'Project 1: Exploring Robotics', description: 'Add Project Description Here' },
  { image: im2, text: 'Project 2: Advanced AI', description: 'Add Project Description Here' },
  { image: im3, text: 'Project 3: Autonomous Vehicles', description: 'Add Project Description Here' },
  { image: im4, text: 'Project 4: Machine Learning Innovations', description: 'Add Project Description Here' },
  { image: im5, text: 'Project 5: Robotics Competitions', description: 'Add Project Description Here' }
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ image: '', text: '', description: '' });

  const handleOpenModal = (image, text, description) => {
    setModalContent({ image, text, description });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='project-wrapper' id='projects'>
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
              onClick={() => handleOpenModal(slide.image, slide.text, slide.description)} // Pass description
            >
              <div className="carousel__text">
                <span>{slide.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal 
        showModal={showModal} 
        handleClose={handleCloseModal} 
        image={modalContent.image} 
        text={modalContent.text} 
        description={modalContent.description} // Pass description to modal
      />
    </div>
  );
};

export default Projects;
