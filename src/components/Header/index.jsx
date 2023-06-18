import React from "react";
import Search from "../../widgets/Search";
import style from "./index.module.scss";
import login from "../../assets/login.png";
import translate from "../../assets/language.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__container__left}>
          <div className={style.header__container__left__logo}>
            <h1 className={style.header__container__left__logo__name}>Astrologer</h1>
          </div>
          <div className={style.header__container__left__search}>
            <Search />
          </div>
        </div>
        <div className={style.header__container__right}>
          <div className={style.header__container__right__translate}>
            <div className={style.header__container__right__translate__img}>
              <img src={translate} alt="translate" />
            </div>
            <div className={style.header__container__right__translate__language}>
              <p>Eng</p>
              <FontAwesomeIcon className={style.header__container__right__translate__language__icon} icon={faCaretDown} />
            </div>
          </div>
          <div className={style.header__container__right__divider}></div>
          <div className={style.header__container__right__login}>
            <div className={style.header__container__right__login__img}>
              <img src={login} alt="login" />
            </div>
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
