import React, { useState } from 'react';
import '../assets/EventTimeline.css';
import im1 from '../assets/images/e1.jpg';
import im2 from '../assets/images/e2.jpg';
import im3 from '../assets/images/e3.jpg';
import im4 from '../assets/images/e4.jpg';

const events = [
  {
    title: 'Hands-on with Arduino',
    image: im1,
    stuff: 'Interactive session exploring Arduino basics with hands-on projects and experiments.'

  },
  {
    title: 'Project X',
    image: im2,
    stuff: 'Project X recruits freshers to work on a new Project under our club.'
  },
  {
    title: 'Robo-Soccer',
    image: im3,
    stuff: 'Robo-Soccer: Robots compete in thrilling soccer matches.'
  },
  {
    title: 'An Introduction to ROS',
    image: im4,
    stuff: 'Introduction to ROS: Learn robotics operating system fundamentals and applications.'
  },



];

const EventTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="timeline-background" id="event">
      <div className="timeline-container">
        <h2>Events</h2>
        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-event" data-aos="fade-left" onClick={() => handleOpenModal(event)}>
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-details">
                  <h3>{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedEvent.title}</h3>
                <button className="close-btn" onClick={handleCloseModal}>X</button>
              </div>
              <div className="modal-body">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="modal-image" />
                <p><strong>{selectedEvent.stuff}</strong></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTimeline;
