import React from "react";

const landingInfo = (props) => {
  return (
    <div>
      <h6>
        Lifestyle collection <br /> <span>{props.type}</span>
      </h6>
      <h5>
        Sale Up to <span>{props.number}% Off</span>
      </h5>
      <p>Get Free Shipping on orders over $99.00</p>
      <button>Show Now</button>
    </div>
  );
};

export default landingInfo;
