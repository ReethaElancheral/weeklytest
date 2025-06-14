import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function EventDetail() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get('/mock-events.json').then(res => {
      const found = res.data.find(ev => ev.id === eventId);
      setEvent(found);
    });
  }, [eventId]);

  if (!event) return <p>Loading event...</p>;

  return (
    <div className="container">
      <h2>{event.name}</h2>
    <img
  src={event.image}
  alt={event.name}
  className="event-img"
/>
      <p>{event.description}</p>
      <Link to={`/events/${event.id}/book`} className="book-btn">Book Now</Link>
    </div>
  );
}
