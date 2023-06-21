import React from "react";
import Styles from "./index.module.scss";
const CommonTab = ({ onTabHandler, tabItem }) => {
  return (
    <div className={Styles.tabArea} onClick={onTabHandler}>
      {tabItem}
    </div>
  );
};

export default CommonTab;
