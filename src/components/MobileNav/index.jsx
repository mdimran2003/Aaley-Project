import React, { useState } from "react";
import Item from "./Item";
import { useLocation } from "react-router-dom";
import style from "./index.module.scss";
import close from "../../assets/close.svg";
import SubMenu from "../Navbar/SubMenu";

const MobileNav = ({ show, setShow }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const onCloseMobileNav = () => {
    setShow(false);
  };

  const onShowSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const onShowSubMenu2 = () => {
    setShowSubMenu2(!showSubMenu2);
  };

  return (
    <div className={style.mobileNav} style={{ transform: show ? "translateX(0)" : "translateX(250px)" }}>
      <p className={style.mobileNav__close} onClick={onCloseMobileNav}>
        <img src={close} alt="closeTab" />
      </p>
      <ul className={style.mobileNav__ul}>
        <Item path="/" menuName="home" class={path === "/" ? style.active : ""} />
        <Item path="/about-us" menuName="about us" class={path === "/about-us" ? style.active : ""} />
        <Item
          onClick={onShowSubMenu}
          menuName="prediction services"
          class={path === "prediction services" ? style.active : ""}
          iconClass={style.icon}
        />
        {showSubMenu && <SubMenu />}
        <Item path="/course" menuName="course" class={path === "/course" ? style.active : ""} />
        <Item
          menuName="blogging"
          class={path === "blogging" ? style.active : ""}
          iconClass={style.icon}
          onClick={onShowSubMenu2}
        />
        {showSubMenu2 && <SubMenu />}
        <Item menuName="buy our products" class={path === "buy our products" ? style.active : ""} />
        <Item path="/testimonial" menuName="testimonials" class={path === "/testimonial" ? style.active : ""} />
        <Item path="/contact-us" menuName="contact us" class={path === "/contact-us" ? style.active : ""} />
      </ul>
    </div>
  );
};

export default MobileNav;
