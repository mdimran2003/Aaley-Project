import React from "react";
import style from "./index.module.scss";

const CustomeBanner = (props) => {
  return (
    <div className={style.courseBanner}>
      <div className={style.courseBanner__left}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div className={style.courseBanner__right}>{props.children}</div>
    </div>
  );
};

export default CustomeBanner;
