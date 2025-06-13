import React, { useState } from 'react';
import Portal from './Portal';

export default function ApplyModal({ jobId, onClose }) {
  const [resume, setResume] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resume) {
      alert('Please upload your resume.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      alert(`Applied to job ${jobId} with resume: ${resume.name}`);
      setSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <Portal>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>Apply to Job</h3>
          <form onSubmit={handleSubmit}>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button type="submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Portal>
  );
}
