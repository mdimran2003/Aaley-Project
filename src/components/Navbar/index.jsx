import React, { useState } from "react";
import Item from "./Items";
import style from "./index.module.scss";
import SubMenu from "./SubMenu";
import { useLocation } from "react-router-dom";
import menu from "../../assets/menu.svg";
import MobileNav from "../MobileNav";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const path = location.pathname;

  const onMobileMenuShow = () => {
    setShow(true);
  };

  return (
    <div className={style.navbar}>
      <div className={style.navbar__container}>
        <div className={style.navbar__container__left}>
          <h1 className={style.navbar__container__left__logo}>Astrologer</h1>
        </div>
        <ul className={style.navbar__container__ul}>
          <Item path="/" menuName="home" class={path === "/" ? style.active : ""} />
          <Item path="/about-us" menuName="about us" class={path === "/about-us" ? style.active : ""} />
          <Item menuName="prediction services" class={path === "prediction services" ? style.active : ""} iconClass={style.icon}>
            <SubMenu />
          </Item>
          <Item path="/course" menuName="course" class={path === "/course" ? style.active : ""} />
          <Item menuName="blogging" class={path === "blogging" ? style.active : ""} iconClass={style.icon}>
            <SubMenu />
          </Item>
          <Item menuName="buy our products" class={path === "buy our products" ? style.active : ""} />
          <Item path="/testimonial" menuName="testimonials" class={path === "/testimonial" ? style.active : ""} />
          <Item path="/contact-us" menuName="contact us" class={path === "/contact-us" ? style.active : ""} />
        </ul>
        <div className={style.navbar__container__right} onClick={onMobileMenuShow}>
          <img src={menu} alt="menutab" />
        </div>
      </div>
      {show && <MobileNav show={show} setShow={setShow} />}
    </div>
  );
};

export default Navbar;
