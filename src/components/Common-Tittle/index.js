import React from "react";
import Styles from "./index.module.scss";
const CommonTittle = ({ tittle }) => {
  return <div className={Styles.tittle}>{tittle}</div>;
};

export default CommonTittle;
