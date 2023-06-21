import React from "react";
import Styles from "./index.module.scss";
const CommonTittle = ({ icon, tittle }) => {
  return (
    <div className={Styles.tittle}>
      <img src={icon} alt="error" />
      <h3>{tittle}</h3>
    </div>
  );
};

export default CommonTittle;
