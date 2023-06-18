import React from "react";
import style from "./index.module.scss";
import h1 from "../../../assets/h1.png";
import h2 from "../../../assets/h2.png";
import h3 from "../../../assets/h3.png";
import h4 from "../../../assets/h4.png";
import h5 from "../../../assets/h5.png";
import h6 from "../../../assets/h6.png";
import h7 from "../../../assets/h7.png";
import h8 from "../../../assets/h8.png";
import h9 from "../../../assets/h9.png";
import h10 from "../../../assets/h10.png";
import Card from "../../../components/Card";

const horoscopeObj = [
  { id: 1, image: h1, name: "aries", date: "mar 21 - apr 19" },
  { id: 2, image: h2, name: "taurus", date: "mar 21 - apr 19" },
  { id: 3, image: h3, name: "gemini", date: "mar 21 - apr 19" },
  { id: 4, image: h4, name: "cancer", date: "mar 21 - apr 19" },
  { id: 5, image: h5, name: "leo", date: "mar 21 - apr 19" },
  { id: 6, image: h6, name: "virgo", date: "mar 21 - apr 19" },
  { id: 7, image: h7, name: "aries", date: "mar 21 - apr 19" },
  { id: 8, image: h8, name: "libra", date: "mar 21 - apr 19" },
  { id: 9, image: h9, name: "scorpio", date: "mar 21 - apr 19" },
  { id: 10, image: h10, name: "saggitarius", date: "mar 21 - apr 19" },
];

const Horoscope = () => {
  return (
    <div className={style.horoscope}>
      <div className={style.horoscope__title}>
        <h1>Horoscope Forecasts</h1>
        <p className={style.arrowTitle}></p>
      </div>
      <div className={style.horoscope__container}>
        {horoscopeObj.map((item) => (
          <Card key={item.id} src={item.image} name={item.name} date={item.date} arrowClass={item.id ? style.arrow : ""} />
        ))}
      </div>
    </div>
  );
};

export default Horoscope;
