import React from "react";
import Card from "../../../components/Card";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import p4 from "../../../assets/p4.png";
import p5 from "../../../assets/p5.png";
import p6 from "../../../assets/p6.png";
import p7 from "../../../assets/p7.png";
import p8 from "../../../assets/p8.png";
import p9 from "../../../assets/p9.png";
import style from "./index.module.scss";

const PredictionServicesObj = [
  { id: 1, image: p1, name: "astrology" },
  { id: 2, image: p2, name: "tarot card reading" },
  { id: 3, image: p3, name: "palmistry" },
  { id: 4, image: p4, name: "numerology" },
  { id: 5, image: p5, name: "vastu analysis" },
  { id: 6, image: p6, name: "face reading" },
  { id: 7, image: p7, name: "graphology" },
  { id: 8, image: p8, name: "signature analysis" },
  { id: 9, image: p9, name: "book pandit ji" },
];

const PredictionServices = () => {
  return (
    <div className={style.predictionServices}>
      <div className={style.predictionServices__container}>
        {PredictionServicesObj.map((item) => (
          <Card key={item.id} src={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default PredictionServices;
