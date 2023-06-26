import React from "react";
import Styles from "./index.module.scss";
const KundaliCatagory = ({ label, message }) => {
  return (
    <div className={Styles.catagoryArea}>
      <div className={Styles.catagoryArea__radioButton}>
        <label>{label}</label>
        <input type="radio" />
      </div>
      <p>{message}</p>
    </div>
  );
};

export default KundaliCatagory;
