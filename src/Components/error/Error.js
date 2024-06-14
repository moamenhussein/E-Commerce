import React from "react";
import "./error.css";
import error from "../../Images/error.gif";
const Error = () => {
  return (
    <div className="error">
      <h2>Page Not Found</h2>
      <div className="imageError">
        <span>4</span>
        <img src={error} alt="" />
        <span>4</span>
      </div>
      <h5>The Page you were looking for, couldn't be found.</h5>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  );
};

export default Error;
