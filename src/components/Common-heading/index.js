import React from "react";
import Styles from "./index.module.scss";
const CommonHeading = ({ tittle }) => {
  return (
    <div className={Styles.tittle}>
      <h3>{tittle}</h3>
    </div>
  );
};

export default CommonHeading;
