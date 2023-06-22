import React from "react";
import Styles from "./index.module.scss";
const CommonTab = ({ onclick, tabItem }) => {
  return (
    <div className={Styles.tabArea} onClick={onclick}>
      {tabItem}
    </div>
  );
};

export default CommonTab;
