import React from "react";
import style from "./index.module.scss";

const Button = (props) => {
  return (
    <button
      style={{
        height: `${props.height}`,
        width: `${props.width}`,
        textTransform: `${props.textTransform}`,
        borderRadius: `${props.borderRadius}`,
        marginTop: `${props.marginTop}`,
        fontSize: `${props.fontSize}`,
        backgroundColor: `${props.backgroundColor}`,
      }}
      className={style.button}>
      {props.btnName}
    </button>
  );
};

export default Button;
