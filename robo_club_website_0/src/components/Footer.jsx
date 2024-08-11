import React from 'react';
import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h2>Robotronics Club</h2>
        <div className='footer-info'>
          <div className='footer-item'>
            <h3>Address</h3>
            <p>Club Room, A-19<br />
               IIT Mandi, North Campus<br />
               Kamand, Himachal Pradesh, India<br />
            </p>
          </div>
          <div className='footer-item'>
            <h3>Contact</h3>
            <p>Email: <a href="mailto:coordiki@mail">coordi_ki@mail</a></p>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Robotronics Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
