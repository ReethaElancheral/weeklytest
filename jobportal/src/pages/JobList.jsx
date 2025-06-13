import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJobs } from '../api/api';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs()
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <h1>Job Listings</h1>
      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job.id} className="job-item">
              <Link to={`/jobs/${job.id}`}>
                <strong>{job.title}</strong> at {job.companyName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
