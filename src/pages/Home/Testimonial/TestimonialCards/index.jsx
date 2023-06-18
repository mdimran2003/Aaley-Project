import React from "react";
import Users from "../Users";
import style from "./index.module.scss";

const TestimonialCards = (props) => {
  return (
    <div className={style.testimonialCards}>
      <h3>{props.title}</h3>
      <p>{props.userReview}</p>

      <Users name={props.name} src={props.src} designation={props.designation} />
    </div>
  );
};

export default TestimonialCards;
