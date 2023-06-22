import React from "react";
import Styles from "./index.module.scss";
const CommonInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div className={Styles.fieldArea}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default CommonInput;
