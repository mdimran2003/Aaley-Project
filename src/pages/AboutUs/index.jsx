import React from "react";
import About from "./About";
import company from "../../assets/banside.png";
import style from "./index.module.scss";

const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <About />
      <div className={style.aboutUs__right}>
        <div className={style.aboutUs__right__company}>
          <img src={company} alt="company name" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
