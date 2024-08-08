// Modal.jsx
import React from 'react';
import '../assets/Modal.css'; // Create and style this file accordingly

const Modal = ({ showModal, handleClose, image, text, description }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <img src={image} alt="Modal Content" className="modal-image" />
        <div className="modal-text">
          <h2>{text}</h2>
          <p>{description}</p> {/* Description field */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
