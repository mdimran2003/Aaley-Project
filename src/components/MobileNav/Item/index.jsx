import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

const Item = (props) => {
  return (
    <Link to={props.path} onClick={props.onClick} className={`${style.li} ${props.class}`}>
      {props.menuName}
      <p className={props.iconClass}></p>
      <ul className={style.li__subMenu}>{props.children}</ul>
    </Link>
  );
};

export default Item;
