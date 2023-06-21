import React from "react";
import Styles from "./index.module.scss";
const Plane = ({ planeNo, plane }) => {
  return (
    <div className={Styles.planeArea}>
      <div className={Styles.planeArea__planNumber}>{planeNo}</div>
      <div className={Styles.planeArea__plan}>{plane}</div>
    </div>
  );
};

export default Plane;
