import React from "react";
import "./home.css";
import Swiper from "../swiper/Swiper";
import LandingTwo from "../landingPartTwo/LandingTwo";
import Payment from "./Payment/Payment";
import Collection from "./collection/Collection";
import Products from "../products/Products";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="container landingcontainer">
        <div className="row">
          <div className="col-lg-10 col-md-8 col-sm-8">
            <Swiper />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <LandingTwo />
          </div>
        </div>
        <div className="payment">
          <Payment />
        </div>
        <Collection />
        <Products />
        <div className="footer">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
