import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchJobById } from '../api/api';
import ApplyModal from '../components/ApplyModal';
import withAuth from '../hoc/withAuth';

function JobDetail() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobById(jobId)
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch(() => {
        setJob(null);
        setLoading(false);
      });
  }, [jobId]);

  if (loading) return <p>Loading job details...</p>;
  if (!job)
    return (
      <div className="page-container">
        <p>Job not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );

  return (
    <div className="page-container">
      <h2>{job.title}</h2>
      <p>
        <strong>Company:</strong> {job.companyName}
      </p>
      <p>{job.description}</p>

      <ApplyButtonWithAuth onClick={() => setShowApplyModal(true)} />

      {showApplyModal && (
        <ApplyModal jobId={jobId} onClose={() => setShowApplyModal(false)} />
      )}
    </div>
  );
}

const ApplyButton = ({ onClick }) => (
  <button className="apply-btn" onClick={onClick}>
    Apply Now
  </button>
);

const ApplyButtonWithAuth = withAuth(ApplyButton);

export default JobDetail;
