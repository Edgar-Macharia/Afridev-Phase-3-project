import React from "react";

function SignUp() {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form>
              <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
              
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name"
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>

                <div className="form-floating mb-1">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name"
                  />
                  <label htmlFor="floatingInput">Country</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name"
                  />
                  <label htmlFor="floatingInput">Skills</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">
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
