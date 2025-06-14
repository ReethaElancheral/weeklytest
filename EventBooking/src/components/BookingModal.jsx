import React from 'react';
import ReactDOM from 'react-dom';

export default function BookingModal({ onClose, selectedSeats }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h3>🎉 Booking Confirmed!</h3>
        <p>Email: {user?.email}</p>
        <p>Seats: {selectedSeats.join(', ')}</p>

      
        
        <br />
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>,
    document.body
  );
}
