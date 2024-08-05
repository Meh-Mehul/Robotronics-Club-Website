import React, { useEffect, useState } from 'react';
import '../assets/Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY < 100) { // Adjust this value based on when you want the navbar to show
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar-main ${isVisible ? 'visible' : ''}`} data-aos="fade-down">
        <h1 className='main-heading' data-aos="fade-in">Robotronics Club</h1>
        <ul className='nav-list'>
          <li className='nav-list-ele' data-aos="fade-down"><a href='#about'>The Club</a></li>
          <li className='nav-list-ele' data-aos="fade-down"><a href='#event'>Events</a></li>
          <li className='nav-list-ele' data-aos="fade-down">Projects</li>
          <li className='nav-list-ele' data-aos="fade-down">Members</li>
          <li className='nav-list-ele' data-aos="fade-down">Gallery</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
