import React, { useState } from 'react';
import '../assets/Projects.css';
import Modal from './Modal'; // Import the Modal component
import im1 from '../assets/images/p1.jpg';
import im2 from '../assets/images/p2.jpg';
import im3 from '../assets/images/p3.jpg';
import im4 from '../assets/images/p4.jpg';
import im5 from '../assets/images/p5.jpg';

const slides = [
  { image: im1, text: 'BattleBot', description: 'Designing autonomous robots for competitive arena combat.' },
  { image: im2, text: 'MicroMouse', description: 'Developing a high-speed robot for Maze-Solving' },
  { image: im3, text: 'Flipper Ducky', description: 'Portable multi-tool for hacking, security, and exploration.' },
  { image: im4, text: 'RC Plane', description: 'Remote-controlled plane for aerial maneuvers and fun.' },
  { image: im5, text: 'E-yantra', description: 'A robotics outreach program funded by the Ministry of Education and hosted at IIT Bombay.' }
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
