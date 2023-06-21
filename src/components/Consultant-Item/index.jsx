import React from "react";
import Styles from "./index.module.scss";
const ConsultantItem = ({ id, lable }) => {
  return (
    <div className={Styles.itemArea}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{lable}</label>
    </div>
  );
};

export default ConsultantItem;
