import React from "react";
import Styles from "./index.module.scss";
const PredictionCard = ({ src, name }) => {
  return (
    <div className={Styles.cardArea}>
      <div className={Styles.cardArea__cardImage}>
        <img src={src} alt="error" />
      </div>
      <div className={Styles.cardArea__cardName}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default PredictionCard;
