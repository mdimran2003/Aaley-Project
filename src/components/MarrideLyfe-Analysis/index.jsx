import React from "react";
import Styles from "./index.module.scss";
import Button from "../Button/index";
import PlanCommonHeading from "../Plan-Common-Heading";
import CopleImg from "../../assets/wedding.png";
import CommonInput from "../Common-Input";
import CommonTittle from "../common-Tittle";
import womanImg from "../../assets/woman (2).png";
import manImg from "../../assets/Group 939.png";
const formObj = [
  {
    inputName: "Name",
    inputType: "text",
    plaholder: "Name",
  },
  {
    inputName: "Email Id",
    inputType: "text",
    plaholder: "Email Id",
  },
  {
    inputName: "Gender",
    inputType: "text",
    plaholder: "Gender",
  },
  {
    inputName: "Time Of Birth",
    inputType: "date",
    plaholder: "Time Of Birth ",
  },

  {
    inputName: "Date Of Birth",
    inputType: "date",
    plaholder: "Date Of Birth",
  },
  {
    inputName: "Language Of Consultant",
    inputType: "text",
    plaholder: "Language Of Consultant",
  },

  {
    inputName: "Place Of Birth",
    inputType: "text",
    plaholder: "Place Of Birth",
  },
  {
    inputName: "Contact Number",
    inputType: "text",
    plaholder: "Contact Number",
  },
];
const MarrideLyfeAnalysis = () => {
  return (
    <div className={Styles.modalArea}>
      <PlanCommonHeading
        img={CopleImg}
        leftText="Married Life Analysis"
        middlText="Plan 551 :- Married Life Consultation"
        rightText="Telephonic Consultation"
      />
      <div className={Styles.modalArea__modal}>
        <div className={Styles.modalArea__modal__formArea}>
          <div className={Styles.modalArea__modal__formArea__detail}>
            <span>
              <CommonTittle icon={manImg} tittle="Male Details" />
            </span>
            <div className={Styles.modalArea__modal__formArea__detail__formField}>
              {formObj.map((item) => {
                return <CommonInput type={item.inputType} placeholder={item.inputName} />;
              })}
            </div>
          </div>
          <div className={Styles.modalArea__modal__formArea__detail}>
            <span>
              <CommonTittle icon={womanImg} tittle="Female Details" />
            </span>
            <div className={Styles.modalArea__modal__formArea__detail__formField}>
              {formObj.map((item) => {
                return <CommonInput type={item.inputType} placeholder={item.inputName} />;
              })}
            </div>
          </div>
        </div>
        <div className={Styles.modalArea__modal__buttonArea}>
          <div>
            <Button btnName="Cancel" fontSize="20px" backgroundColor="#c4c4c4" borderColor="#c4c4c4" color="#333" />
          </div>
          <div>
            <Button btnName="Submimt" fontSize="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarrideLyfeAnalysis;
