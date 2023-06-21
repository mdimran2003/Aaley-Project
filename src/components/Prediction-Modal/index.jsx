import React from "react";
import Styles from "./index.module.scss";
import CommonHeading from "../../components/Common-heading";
import wedding from "../../assets/wedding.png";
import consulting from "../../assets/consulting (1).png";
import heart from "../../assets/jigsaw (1).png";
import calender from "../../assets/Layer_x0020_1.png";
import PredictionCard from "./Prediction-Card";
import BigReportCard from "./Big-Report-Card";

const cardObj = [
  {
    image: consulting,
    name: "Individual Consultation",
  },
  {
    image: heart,
    name: "Match Making",
  },
  {
    image: wedding,
    name: "Married Life Analysis",
  },
  {
    image: calender,
    name: "Birth Time Rectification",
  },
];

const PredictionModal = () => {
  return (
    <div className={Styles.modalArea}>
      <div className={Styles.modalArea__modal}>
        <div className={Styles.modalArea__modal__heading}>
          <CommonHeading tittle="Choose Prediction Services" />
        </div>
        <div className={Styles.modalArea__modal__service}>
          {cardObj.map((item, index) => {
            return <PredictionCard src={item.image} name={item.name} key={index} />;
          })}
        </div>
        <div className={Styles.modalArea__modal__reportCard}>
          <BigReportCard />
        </div>
      </div>
    </div>
  );
};

export default PredictionModal;
