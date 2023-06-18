import React from "react";
import Location from "./Location";
import style from "./index.module.scss";
import Form from "./Form";
import Info from "./Info";

const ContactUs = () => {
  return (
    <div className={style.contactUs}>
      <div className={style.contactUs__top}>
        <Form />
        <Location />
      </div>
      <Info />
    </div>
  );
};

export default ContactUs;
