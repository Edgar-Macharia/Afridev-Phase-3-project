import React, { useContext, useEffect } from 'react';
import { JobContext } from '../context/JobContext';

export default function Jobs() {
  const { jobs, fetchJobs, deleteJob } = useContext(JobContext);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleDelete = (id) => {
    deleteJob(id);
  };

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
              <div>
                <button className="btn btn-success btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm " onClick={() => handleDelete(job.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
