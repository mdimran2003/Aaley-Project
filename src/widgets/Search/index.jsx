import React from "react";
import search from "../../assets/search.png";
import style from "./index.module.scss";

const Search = () => {
  return (
    <div className={style.search}>
      <input className={style.search__searchBox} type="text" placeholder="Search..." />
      <div className={style.search__magnifyGlass}>
        <img src={search} alt="search" />
      </div>
    </div>
  );
};

export default Search;
