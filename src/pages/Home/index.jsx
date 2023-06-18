import React from "react";
import PredictionServices from "./PredictionServices";
import Horoscope from "./Horoscope";
import Testimonial from "./Testimonial";
import RaiseEnquiry from "./RaiseEnquiry";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <PredictionServices />
      <Testimonial />
      <Horoscope />
      <RaiseEnquiry />
    </>
  );
};

export default Home;
