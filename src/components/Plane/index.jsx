import React from "react";
import Styles from "./index.module.scss";
const Plane = ({ planeNo, plane, width }) => {
  return (
    <div className={Styles.planeArea}>
      <div className={Styles.planeArea__planNumber} style={{ width: `${width}` }}>
        {planeNo}
      </div>
      <div className={Styles.planeArea__plan}>{plane}</div>
    </div>
  );
};

export default Plane;
