import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../assets/SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
