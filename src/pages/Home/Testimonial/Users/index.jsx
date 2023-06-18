import React from "react";
import style from "./index.module.scss";

const Users = (props) => {
  return (
    <div className={style.users}>
      <div className={style.users__img}>
        <img src={props.src} alt={props.name} />
      </div>

      <div className={style.users__details}>
        <h4>{props.name}</h4>
        <h4>{props.designation}</h4>
      </div>
    </div>
  );
};

export default Users;
