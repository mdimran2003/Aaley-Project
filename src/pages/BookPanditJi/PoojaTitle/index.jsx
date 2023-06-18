import React from "react";
import Search from "../../../widgets/Search";
import style from "./index.module.scss";

const PoojaTitle = () => {
  return (
    <div className={style.poojaTitle}>
      <h2>Pooja List</h2>
      <div className={style.poojaTitle__search}>
        <Search />
      </div>
    </div>
  );
};

export default PoojaTitle;
