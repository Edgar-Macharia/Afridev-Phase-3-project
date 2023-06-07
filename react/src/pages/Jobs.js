import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../context/JobContext';

export default function Jobs() {
  const { jobs, fetchJobs } = useContext(JobContext);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <>
      <h1>Jobs</h1>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <ul className="list-group">
          {jobs.map((job) => (
            <li key={job.id} className="list-group-item d-flex justify-content-between align-items-start">
              <div>
                <h5>{job.title}</h5>
                <p>{job.description}</p>
              </div>
              <Link to={`/jobs/${job.id}`} className="btn btn-success">
                Read More
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}