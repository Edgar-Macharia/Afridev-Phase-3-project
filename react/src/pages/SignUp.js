import React, { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic 

    // Reset form fields
    setUsername("");
    setEmail("");
    setCountry("");
    setSkills("");
    setPassword("");
  };

  return (
    <div>
      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

              <div className="form-floating mb-1">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="form-floating mb-1">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-1">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <label htmlFor="country">Country</label>
              </div>
              <div className="form-floating mb-1">
                <input
                  type="text"
                  className="form-control"
                  id="skills"
                  placeholder="Skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
                <label htmlFor="skills">Skills</label>
              </div>
              <div className="form-floating mb-1">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="w-100 btn btn-lg btn-success"
                type="submit"
              >
                Sign Up
              </button>
              <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
