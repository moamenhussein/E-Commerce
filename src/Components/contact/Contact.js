import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="container text-center contactInfo">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 boxInfo">
            <i className="fa-solid fa-mobile"></i>
            <h6>Call Us</h6>
            <p>01024327924</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 boxInfo">
          <i className="fa-solid fa-envelope"></i>
            <h6>Email Address</h6>
            <p>moamenhussein2424@gmail.com</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 boxInfo">
          <i className="fa-solid fa-location-dot"></i>
            <h6>Address</h6>
            <p>Cairo, Egypt</p>
          </div>
        </div>
      </div>
      <div className="comment">
        <h2>Leave a Comment</h2>
        <form>
          <input type="text" placeholder="Name"/><br />
          <input type="email" placeholder="Email"/><br />
          <textarea placeholder="Comment"></textarea><br/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
