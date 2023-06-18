import React from "react";
import FooterTitle from "../FooterTitle";
import style from "./index.module.scss";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";

const WorkingHours = () => {
  return (
    <div className={style.workingHours}>
      <FooterTitle title="Working Hours" />
      <div className={style.workingHours__hours}>
        <div className={style.workingHours__hours__left}>
          <p className={style.workingHours__hours__left__link}>Monday To Friday</p>
          <p className={style.workingHours__hours__left__link}>9:00 am to 12:00 pm</p>
        </div>
        <div className={style.workingHours__hours__divider}></div>
        <div className={style.workingHours__hours__right}>
          <p className={style.workingHours__hours__right__link}>Sundays & Saturday</p>
          <p className={style.workingHours__hours__right__link}>11:00 am to 12 pm</p>
        </div>
      </div>
      <div className={style.workingHours__bottom}>
        <InputField type="email" placeholder="Enter your Email Address" height="30px" borderRadius="20px" />
        <Button height="30px" borderRadius="3px" width="120px" marginTop="0" btnName="Submit" />
      </div>
    </div>
  );
};

export default WorkingHours;
