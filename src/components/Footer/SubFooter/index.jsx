import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const socialObj = [
  { id: 1, icon: faTwitter },
  { id: 2, icon: faFacebookF },
  { id: 3, icon: faGooglePlus },
  { id: 4, icon: faInstagram },
  { id: 5, icon: faPinterest },
  { id: 6, icon: faYoutube },
];

const SubFooter = () => {
  const date = new Date();

  const year = date.getFullYear();
  return (
    <div className={style.subFooter}>
      <p>astrolorem © {year} Copyright All rights reserved.</p>
      <div className={style.subFooter__right}>
        <ul className={style.subFooter__right__ul}>
          {socialObj.map((item) => {
            return (
              <li key={item.id} className={style.subFooter__right__ul__li}>
                <FontAwesomeIcon icon={item.icon} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SubFooter;
