import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';
import SeatSelector from '../components/SeatSelector';

export default function BookingPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleBook = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="container">
      <h2>Select Your Seats</h2>
      <SeatSelector selectedSeats={selectedSeats} onChange={setSelectedSeats} />
      <button onClick={handleBook} className="book-btn">Confirm Booking</button>

      {showModal && (
        <BookingModal
          selectedSeats={selectedSeats}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
