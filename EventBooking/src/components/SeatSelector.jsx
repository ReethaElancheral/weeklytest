import React, { useState } from 'react';

export default function SeatSelector({ selectedSeats, onChange }) {
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      onChange(selectedSeats.filter(s => s !== seat));
    } else {
      onChange([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-grid">
      {seats.map(seat => (
        <button
          key={seat}
          className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
          onClick={() => toggleSeat(seat)}
        >
          {seat}
        </button>
      ))}
    </div>
  );
}
