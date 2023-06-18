import React from "react";
import style from "./index.module.scss";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={props.src} alt={props.name} />
      </div>
      <p className={props.arrowClass}></p>
      <div className={style.card__name}>
        <h3>{props.name}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Card;
