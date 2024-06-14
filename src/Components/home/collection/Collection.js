import React from "react";
import "./collection.css";
import imageOne from "../../../Images/collectionImageOne.png";
import imageTwo from "../../../Images/collectionImageTwo.png";
const Collection = () => {
  return (
    <>
      <div className="collectionContainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 flexcollection">
              <img src={imageOne} alt="" />
              <p>Super Sale <br /> New Collection</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 flexcollection flex-two">
              <img src={imageTwo} alt="" />
              <p>New Season <br /> Sale 40% Off</p>
            </div>
            {/* <div className="col-lg-6 col-md-12 col-sm-12"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
