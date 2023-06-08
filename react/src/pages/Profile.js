import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { current_user, login } = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (loggedIn) {
      fetchUserData();
    }
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    login(username, email, password);
    setLoggedIn(true);
  };

  const fetchUserData = () => {
    fetch("/current_user")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };

  const handleDeleteProfile = () => {
    console.log("Delete profile clicked");
  };

  const handlePostJob = () => {
    console.log("Post job clicked");
  };

  return (
    <div className="container">
      {current_user ? (
        <>
          <h1 className="text-center mt-4">Welcome, {current_user.username}!</h1>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      src={
                        current_user.profileImage ||
                        "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                      }
                      alt="Profile"
                      className="img-fluid rounded-circle"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                  <p className="text-center mt-4">Username: {current_user.username}</p>
                  <p className="text-center">Country: {current_user.country}</p>
                  <p className="text-center">Skills: {current_user.skills}</p>
                  <p className="text-center">Date Joined: {current_user.created_at}</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={handleEditProfile}>
                      Edit Profile
                    </button>
                    <button className="btn btn-danger" onClick={handleDeleteProfile}>
                      Delete Profile
                    </button>
                    <button className="btn btn-success" onClick={handlePostJob}>
                      Post Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-danger text-center mt-4">Login to access this page</div>
      )}
    </div>
  );
}



// import React, { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// function Profile() {
//   const { current_user, login } = useContext(AuthContext);

//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     if (loggedIn) {
//       fetchUserData();
//     }
//   }, [loggedIn]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const username = e.target.elements.username.value;
//     const email = e.target.elements.email.value;
//     const password = e.target.elements.password.value;
//     login(username, email, password);
//     setLoggedIn(true);
//     current_user(true);
//   };

//   const fetchUserData = () => {
//     fetch("/current_user")
//       .then((response) => response.json())
//       .then((data) => {
//         setUserData(data.user);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const handleEditProfile = () => {
//     console.log("Edit profile clicked");
//   };

//   const handleDeleteProfile = () => {
//     console.log("Delete profile clicked");
//   };

//   const handlePostJob = () => {
//     console.log("Post job clicked");
//   };

//   return (
//     <div className="container mt-3">
//       {!loggedIn ? (
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username
//             </label>
//             <input type="text" className="form-control" id="username" required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input type="text" className="form-control" id="email" required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input type="password" className="form-control" id="password" required />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Log In
//           </button>
//         </form>
//       ) : (
//         <div>
//           {userData ? (
//             <div>
//               <h1>Welcome, {userData.username}!</h1>
//               <div>
//                 <img
//                   src={userData.profileImage || "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="}
//                   alt="Profile"
//                   className="img-fluid"
//                 />
//               </div>
//               <p>Username: {userData.username}</p>
//               <p>Country: {userData.country}</p>
//               <p>Skills: {userData.skills}</p>
//               <p>Date Joined: {userData.created_at}</p>
//               <button className="btn btn-primary" onClick={handleEditProfile}>
//                 Edit Profile
//               </button>
//               <button className="btn btn-danger" onClick={handleDeleteProfile}>
//                 Delete Profile
//               </button>
//               <button className="btn btn-success" onClick={handlePostJob}>
//                 Post Job
//               </button>
//             </div>
//           ) : (
//             <p>Loading user data...</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;
