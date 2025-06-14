
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
   <img
  src={event.image}
  alt={event.name}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/400x250?text=Image+Unavailable';
  }}
/>
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <Link to={`/events/${event.id}`}>View Details</Link>
    </div>
  );
}
