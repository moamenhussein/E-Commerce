import React from "react";
import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import landing from "../../Images/landing.jpg";
import landingTwo from "../../Images/landing2.jpg";
import LandingInfo from "./LandingInformation";
const Swipper = () => {
  return (
    <div className="landingPage">
      <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide className="parentContainer">
            <SwiperSlide>
              <div className="childContainer">
                <LandingInfo number={"30"} type="Man"/>
              </div>
              <img src={landing} alt="" />
            </SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlide className="parentContainer">
              <div className="childContainer">
                <LandingInfo number={"35"} type="Women"/>
              </div>
              <img src={landingTwo} alt="" />
            </SwiperSlide>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Swipper;
