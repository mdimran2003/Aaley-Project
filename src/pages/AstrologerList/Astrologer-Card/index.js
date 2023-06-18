import React from "react";
import Styles from "./index.module.scss";
import CommonButton from "../../../components/Common-Button";
import star from "../../../assets/star (5).png";
const AstrologerCard = ({ ratting, img, name, exprience, detail }) => {
  return (
    <div className={Styles.astroCardArea}>
      <div className={Styles.astroCardArea__ratting}>
        <span>
          <img src={star} alt="error" />
        </span>
        <p>{ratting}</p>
      </div>
      <div className={Styles.astroCardArea__astroImage}>
        <img src={img} alt="error" />
      </div>
      <div className={Styles.astroCardArea__astroDetail}>
        <h3 className={Styles.astroCardArea__astroDetail__name}>{name}</h3>
        <span className={Styles.astroCardArea__astroDetail__exprience}>{exprience}</span>
        <p className={Styles.astroCardArea__astroDetail__details}>{detail}</p>
      </div>
      <div className={Styles.astroCardArea__button}>
        <CommonButton />
      </div>
    </div>
  );
};

export default AstrologerCard;
