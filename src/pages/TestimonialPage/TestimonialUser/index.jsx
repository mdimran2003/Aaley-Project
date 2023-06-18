import React from "react";
import style from "./index.module.scss";

const TestimonialUser = (props) => {
  return (
    <div className={style.testimonialUser}>
      <div className={style.testimonialUser__profile}>
        <img src={props.src} alt={props.user} />
      </div>
      <div className={style.testimonialUser__det}>
        <h4 className={style.testimonialUser__det__name}>{props.user}</h4>
        <p className={style.testimonialUser__det__designation}>{props.designation}</p>
      </div>
    </div>
  );
};

export default TestimonialUser;
