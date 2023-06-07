import React, { useState, useEffect } from "react";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulating a user session
    if (loggedIn) {
      fetchUserData();
    }
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    // Replace the below code with your actual login implementation

    // Example: Checking username and password
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    if (username === "example" && password === "password") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const fetchUserData = () => {
    // Fetch user data from the specified endpoint
    fetch("http://127.0.0.1:9292/users")
      .then((response) => response.json())
      .then((data) => {
        // Handle the user data response
        setUserData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during user data fetching
        console.error("Error:", error);
      });
  };

  const handleEditProfile = () => {
    // Handle edit profile logic here
    console.log("Edit profile clicked");
  };

  const handleDeleteProfile = () => {
    // Handle delete profile logic here
    console.log("Delete profile clicked");
  };

  const handlePostJob = () => {
    // Handle post job logic here
    console.log("Post job clicked");
  };

  return (
    <div className="container mt-3">
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      ) : (
        <div>
          {userData ? (
            <div>
              <h1>Welcome, {userData.username}!</h1>
              <div>
                <img
                  src={userData.profileImage || "default-image-url"}
                  alt="Profile"
                  className="img-fluid"
                />
              </div>
              <p>Username: {userData.username}</p>
              <p>Country: {userData.country}</p>
              <p>Skills: {userData.skills}</p>
              {/* Display additional user information */}
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
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
