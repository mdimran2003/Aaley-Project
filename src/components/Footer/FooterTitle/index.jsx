import React from "react";
import style from "./index.module.scss";

const FooterTitle = (props) => {
  return <h3 className={style.footerTitle}>{props.title}</h3>;
};

export default FooterTitle;
