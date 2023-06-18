import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className={style.contactinfo}>
      <div className={style.contactinfo__det}>
        <div className={style.contactinfo__det__add}>
          <FontAwesomeIcon color="#ff7800" icon={faLocationDot} size="lg" />
          <p>Sector 4, Vikas Nagar, Lucknow</p>
        </div>
        <div className={style.contactinfo__det__phone}>
          <FontAwesomeIcon color="#ff7800" icon={faPhone} size="lg" />
          <p>(+91) 8960708425</p>
        </div>
        <div className={style.contactinfo__det__email}>
          <FontAwesomeIcon color="#ff7800" icon={faEnvelope} size="lg" />
          <p>adhigyanam@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
