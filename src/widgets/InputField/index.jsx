import React from "react";
import style from "./index.module.scss";

const InputField = (props) => {
  return (
    <input
      style={{ borderRadius: `${props.borderRadius}`, height: `${props.height}`, border: `${props.border}` }}
      className={style.input}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
