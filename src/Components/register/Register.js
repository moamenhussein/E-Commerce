import React from "react";
import "./register.css"
const Register = () => {
  return (
    <div>
      <div className="homepage container registercontainer">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Your Name
            </label>
            <input
              placeholder="Enter Your Name"
              type="text"
              className="form-control w-75"
              id="exampleInputEmail11"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail2" className="form-label">
              Email address
            </label>
            <input
              placeholder="Enter Your Email"
              type="email"
              className="form-control w-75"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelpp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              placeholder="Enter Your Password"
              type="password"
              className="form-control w-75"
              id="exampleInputPassword1"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              placeholder="Confirm Password"
              type="password"
              className="form-control w-75"
              id="exampleInputPassword2"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input checked"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
