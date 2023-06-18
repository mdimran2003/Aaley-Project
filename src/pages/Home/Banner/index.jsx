import React from "react";
import style from "./index.module.scss";
import fb from "../../../assets/fb.png";
import insta from "../../../assets/insta.png";
import twitter from "../../../assets/twitter.png";
import ban from "../../../assets/ban.png";
import banside from "../../../assets/banside.png";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.banner__top}>
        <div className={style.banner__top__circle}></div>
        <div className={style.banner__top__discount}>
          <div className={style.banner__top__discount__prediction}>
            <h3>PREDICTION SERVICES</h3>
            <p>Kundli / Birth Chart / Kundli Matching / Panchang</p>
          </div>
          <div className={style.banner__top__discount__percent}>
            <p>20% OFF</p>
          </div>
        </div>
        <div className={style.banner__top__fb}>
          <img src={fb} alt="fb" />
        </div>
        <div className={style.banner__top__insta}>
          <img src={insta} alt="insta" />
        </div>
        <div className={style.banner__top__twitter}>
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div className={style.banner__bottom}>
        <div className={style.banner__bottom__banLeft}>
          <img src={ban} alt="banner" />
        </div>
        <div className={style.banner__bottom__banRight}>
          <div className={style.banner__bottom__banRight__left}>
            <h4>Free Services</h4>
            <div className={style.banner__bottom__banRight__left__services}>
              <p>Kundali Matching And</p>
              <p>Birth Chart Analysis</p>
            </div>
          </div>
          <img src={banside} alt="bannerside" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
