import React from "react";
import style from "./index.module.scss";

const TestimonialArea = (props) => {
  return (
    <div className={style.testimonialArea}>
      <p>{props.testimonial}</p>
    </div>
  );
};

export default TestimonialArea;
