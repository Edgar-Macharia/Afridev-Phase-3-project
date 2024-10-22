import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignUp() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  // const [skills, setSkills] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform signup logic
    setIsLoading(true);

    // Simulating sign-up success
    signup(username, email, country, password);

    // // Perform login
    // login(username, password);

    // Navigate to home page
    navigate("/");
    setIsLoading(false);
  };

  const signUp = async (username, email, skills, country, password) => {
    // Simulating signup logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Reset form fields
        setUsername("");
        setEmail("");
        setCountry("");
        // setSkills("");
        setPassword("");
        resolve();
      }, 2000);
    });
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

              {/* <div className="form-floating mb-1">
                <input
                  type="text"
                  className="form-control"
                  id="skills"
                  placeholder="Country"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
                <label htmlFor="skills">Skills</label>
              </div> */}

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
                disabled={isLoading}
              >
                {isLoading ? "Signing up..." : "Sign Up"}
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
