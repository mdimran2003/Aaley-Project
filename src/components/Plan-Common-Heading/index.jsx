import React from "react";
import Styles from "./index.module.scss";
const PlanCommonHeading = ({ img, leftText, middlText, rightText }) => {
  return (
    <div className={Styles.heading}>
      <span className={Styles.heading__img}>
        <img src={img} alt="error" />
      </span>
      <p className={Styles.heading__orangeText}>{leftText}</p>
      <span className={Styles.heading__blueText}>{middlText}</span>
      <p className={Styles.heading__maroonText}>{rightText}</p>
    </div>
  );
};

export default PlanCommonHeading;
