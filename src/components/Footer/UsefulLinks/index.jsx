import React from "react";
import FooterTitle from "../FooterTitle";
import style from "./index.module.scss";

const leftObj = [
  { id: 1, name: "rasifal 2023" },
  { id: 2, name: "Festivals 2018" },
  { id: 3, name: "Ekadashi 2018" },
  { id: 4, name: "Transits 2018" },
  { id: 5, name: "Grahan 2018" },
  { id: 6, name: "Navratri 2018" },
];

const rightObj = [
  { id: 1, name: "Transits 2019" },
  { id: 2, name: "Grahan 2019" },
  { id: 3, name: "Navratri 2019" },
  { id: 4, name: "Vedic Pooja" },
  { id: 5, name: "Yantras" },
  { id: 6, name: "Rudraksh" },
];

const UsefulLinks = () => {
  return (
    <div className={style.usefulLinks}>
      <FooterTitle title="Useful Links" />
      <div className={style.usefulLinks__links}>
        <div className={style.usefulLinks__links__left}>
          {leftObj.map((item) => (
            <p className={style.usefulLinks__links__left__link} key={item.id}>
              {item.name}
            </p>
          ))}
        </div>
        <div className={style.usefulLinks__links__divider}></div>
        <div className={style.usefulLinks__links__right}>
          {rightObj.map((item) => (
            <p className={style.usefulLinks__links__right__link} key={item.id}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
