import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../assets/SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-icons">


        <a href="https://www.youtube.com/@therobotronicsclubiitmandi1378" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/robotronics.iitmandi/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://github.com/RobotronicsClubIITMandi" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/company/the-robotronics-club-iit-mandi/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/robotronicsclub.iitmandi/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
