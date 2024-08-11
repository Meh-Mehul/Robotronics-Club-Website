import React, { useState } from 'react';
import '../assets/EventTimeline.css';

const events = [
  {
    date: '2024-08-01',
    time: '10:00 AM',
    title: 'Robotics',
    venue: 'Auditorium',
    image: '/src/assets/images/im1.jpg',
    stuff: 'example explaination of the event we clicked on '

  },
  {
    date: '2024-08-10',
    time: '02:00 PM',
    title: 'Coding',
    venue: 'Main Hall',
    image: '/src/assets/images/im2.jpg',
    stuff: 'example explaination of the event we clicked on '
  },
  {
    date: '2024-08-15',
    time: '09:00 AM',
    title: 'Robotics Fair',
    venue: 'Expo Center',
    image: '/src/assets/images/im3.jpg',
    stuff: 'example explaination of the event we clicked on '
  },
  {
    date: '2024-09-01',
    time: '11:00 AM',
    title: 'Robot Racing',
    venue: 'Sports Arena',
    image: '/src/assets/images/im4.jpg',
    stuff: 'example explaination of the event we clicked on '
  },
  {
    date: '2024-09-20',
    time: '03:00 PM',
    title: 'Random',
    venue: 'Conference Room',
    image: '/src/assets/images/im5.jpg',
    stuff: 'example explaination of the event we clicked on '
  }
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
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
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
                <p><strong>Venue:</strong> {selectedEvent.venue}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTimeline;
