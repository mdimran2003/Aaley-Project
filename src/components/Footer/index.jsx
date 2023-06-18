import React from "react";
import style from "./index.module.scss";
import UsefulLinks from "./UsefulLinks";
import Contactinfo from "./Contactinfo";
import WorkingHours from "./WorkingHours";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <UsefulLinks />
        <Contactinfo />
        <WorkingHours />
      </div>
      <SubFooter />
    </>
  );
};

export default Footer;
