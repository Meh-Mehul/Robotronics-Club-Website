import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/Navbar.css'; // Keep your existing CSS

const CustomNavbar = () => {
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
    <Navbar 
      className={`navbar-main ${isVisible ? 'visible' : ''}`} 
      expand="lg" 
      data-aos="fade-down"
    >
      <Navbar.Brand className='main-heading' data-aos="fade-in">Robotronics Club</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-list">
          <Nav.Link href='#about' className='nav-list-ele' data-aos="fade-down">The Club</Nav.Link>
          <Nav.Link href='#event' className='nav-list-ele' data-aos="fade-down">Events</Nav.Link>
          <Nav.Link href='#projects' className='nav-list-ele' data-aos="fade-down">Projects</Nav.Link>
          <Nav.Link href='#members' className='nav-list-ele' data-aos="fade-down">Members</Nav.Link>
          <Nav.Link href='#gallery' className='nav-list-ele' data-aos="fade-down">Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
