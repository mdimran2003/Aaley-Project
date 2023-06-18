import React from "react";
import FooterTitle from "../FooterTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import style from "./index.module.scss";

const Contactinfo = () => {
  return (
    <div className={style.contactinfo}>
      <FooterTitle title="Contact Info" />
      <div className={style.contactinfo__det}>
        <div className={style.contactinfo__det__add}>
          <FontAwesomeIcon icon={faLocationDot} size="lg" />
          <p>Sector 4, Vikas Nagar, Lucknow</p>
        </div>
        <div className={style.contactinfo__det__phone}>
          <FontAwesomeIcon icon={faPhone} size="lg" />
          <p>(+91) 8960708425</p>
        </div>
        <div className={style.contactinfo__det__email}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <p>adhigyanam@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
