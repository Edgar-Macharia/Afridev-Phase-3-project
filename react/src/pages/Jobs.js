import { Link } from "react-router-dom"
import { useContext } from "react"
import { JobContext } from "../context/JobContext"

export default function Home() 
{
  const {jobs} = useContext(JobContext)
  return (
    <div>
      <h1 className='text-center'>Latest jobs</h1>
      <div className='container-fluid row'>

        {
          jobs && jobs.length<1?
          <div className="text-info">
            There is no jobs at the moment
          </div>:""
        }

      {jobs && jobs.map((post)=>(

      
        <div className='col-6 col-sm-6 col-md-4 mb-5'>
          <div className="card">
            <div className="overflow-hidden" style={{"height":"30vh"}}>
            </div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              <Link to={`/jobs/${jobs.id}`} href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>
        ))
        }



      </div>
    </div>
  )
}



// import React, { useState, useEffect } from 'react';
// import AddJob from './ AddJob';

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state

//   useEffect(() => {
//     // Fetch jobs from the server
//     fetchJobs();
//     // Check if the user is logged in (e.g., by retrieving a token from local storage)
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token); // Update the login state based on the token's presence
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       // Make a GET request to fetch jobs from the server
//       const response = await fetch('/jobs');
//       const data = await response.json();
//       setJobs(data);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const handlePostJob = async () => {
//     if (!isLoggedIn) {
//       // Redirect the user to the login page or show an error message
//       console.log('Please log in to post a job.');
//       return;
//     }

//     try {
//       // Make a POST request to submit a new job
//       const response = await fetch('/jobs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, description }),
//       });
//       const data = await response.json();
//       setJobs([...jobs, data]); // Add the new job to the existing list
//       setTitle('');
//       setDescription('');
//     } catch (error) {
//       console.error('Error posting job:', error);
//     }
//   };

//   const handleDeleteJob = async (id) => {
//     try {
//       // Make a DELETE request to remove a job
//       await fetch(`/jobs/${id}`, {
//         method: 'DELETE',
//       });
//       setJobs(jobs.filter((job) => job.id !== id));
//     } catch (error) {
//       console.error('Error deleting job:', error);
//     }
//   };

//   return (
//     <>
//     <AddJob />
//     <div className="container mt-3">
//       <h1>Jobs</h1>
//       {isLoggedIn && (
//         <div>
//           <div className="mb-3">
//             <label htmlFor="title" className="form-label">
//               Job Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">
//               Job Description
//             </label>
//             <textarea
//               className="form-control"
//               id="description"
//               rows="4"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             ></textarea>
//           </div>
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handlePostJob}
//           >
//             Post Job
//           </button>
//           <hr />
//         </div>
//       )}
//       <h3>Available Jobs</h3>
//       {jobs.length === 0 ? (
//         <p>No jobs available.</p>
//       ) : (
//         <ul className="list-group">
//           {jobs.map((job) => (
//             <li
//               key={job.id}
//               className="list-group-item d-flex justify-content-between align-items-start"
//             >
//               <div>
//                 <h5>{job.title}</h5>
//                 <p>{job.description}</p>
//               </div>
//               {isLoggedIn && (
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => handleDeleteJob(job.id)}
//                 >
//                   Delete
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     </>
//   );
// }

// export default Jobs;
