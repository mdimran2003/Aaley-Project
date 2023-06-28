import React from "react";
import Styles from "./index.module.scss";
import phoneImg from "../../assets/Group 25224.png";
const BookingCard = ({ imgSrc, name, astroType, detail, time, date }) => {
  return (
    <div className={Styles.cardArea}>
      <span className={Styles.cardArea__cardImg}>
        <img src={imgSrc} alt="error" />
      </span>
      <h3>{name}</h3>
      <p className={Styles.cardArea__serviceType}>
        Service type : <span>{astroType}</span>
      </p>
      <p className={Styles.cardArea__detail}>{detail}</p>
      <div className={Styles.cardArea__cardDateTime}>
        <p>{time}</p>
        <span>{date}</span>
      </div>
      <span className={Styles.cardArea__contact}>
        <img src={phoneImg} alt="error" />
      </span>
    </div>
  );
};

export default BookingCard;
