import React from "react";
import TestimonialArea from "../TestimonialArea";
import TestimonialUser from "../TestimonialUser";
import style from "./index.module.scss";

const Card = (props) => {
  return (
    <div className={style.card}>
      <TestimonialArea testimonial={props.testimonial} />
      <TestimonialUser designation={props.designation} user={props.user} src={props.src} />
    </div>
  );
};

export default Card;
