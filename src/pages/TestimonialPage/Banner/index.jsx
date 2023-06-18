import React from "react";
import style from "./index.module.scss";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.banner__left}>
        <h2>WHAT OUR CLIENTS SAYS</h2>
        <p>These Are Some Testimonials From Professionals Who Love Styleseat.</p>
      </div>
    </div>
  );
};

export default Banner;
