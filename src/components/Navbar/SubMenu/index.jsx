import React from "react";
import sm1 from "../../../assets/sm1.png";
import sm2 from "../../../assets/sm2.png";
import sm3 from "../../../assets/sm3.png";
import sm4 from "../../../assets/sm4.png";
import sm5 from "../../../assets/sm5.png";
import sm6 from "../../../assets/sm6.png";
import sm7 from "../../../assets/sm7.png";
import sm8 from "../../../assets/sm8.png";
import style from "./index.module.scss";

const subMenuObj = [
  { id: 1, image: sm1, name: "Astrology" },
  { id: 2, image: sm2, name: "Tarot card reading" },
  { id: 3, image: sm3, name: "Palmistry" },
  { id: 4, image: sm4, name: "Numerology" },
  { id: 5, image: sm5, name: "Vastu Analysis" },
  { id: 6, image: sm6, name: "Face Reading" },
  { id: 7, image: sm7, name: "Graphology" },
  { id: 8, image: sm8, name: "Signature Analysis" },
];

const SubMenu = () => {
  return subMenuObj.map((item) => {
    return (
      <li className={style.li} key={item.id}>
        <div className={style.li__img}>
          <img src={item.image} alt={item.name} />
        </div>
        <p>{item.name}</p>
      </li>
    );
  });
};

export default SubMenu;
