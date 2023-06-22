import React from "react";
import Styles from "./index.module.scss";
const CommonDateField = ({ type, placeholder, value, onChange, img }) => {
  return (
    <div className={Styles.fieldArea}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <div className={Styles.fieldArea__img}>
        <img src={img} alt="error" />
      </div>
    </div>
  );
};

export default CommonDateField;
