import  { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    
    axios.get('/mock-events.json').then(res => {
      setEvents(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Upcoming Events</h2>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
