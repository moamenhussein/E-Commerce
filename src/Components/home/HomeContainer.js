import React from 'react'
import Swiper from "../swiper/Swiper"
import LandingTwo from "../landingPartTwo/LandingTwo";
const HomeContainer = () => {
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
      </div>
    </div>
  )
}

export default HomeContainer
