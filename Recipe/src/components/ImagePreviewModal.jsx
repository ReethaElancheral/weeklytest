import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function ImageUploadModal({ image, onClose }) {
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>Image Preview</h3>
        {image ? (
          <img src={image} alt="Recipe Preview" style={{ maxWidth: '100%' }} />
        ) : (
          <p>No image URL provided.</p>
        )}
        <button onClick={onClose} className="btn">Close</button>
      </div>
    </div>,
    modalRoot
  );
}

export default ImageUploadModal;
