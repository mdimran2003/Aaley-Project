import React from "react";
import Styles from "./index.module.scss";
import ganeshPic from "../../../assets/banside.png";
const BigReportCard = () => {
  return (
    <div className={Styles.cardArea}>
      <div className={Styles.cardArea__cardImage}>
        <img src={ganeshPic} alt="error" />
      </div>
      <div className={Styles.cardArea__cardDetail}>
        <p>Kundali Report + Hand Made + 15/30 Year Specific Prediction + Lucky Color+Luckyno + Remidies +Telephonic Consultation</p>
      </div>
    </div>
  );
};

export default BigReportCard;
