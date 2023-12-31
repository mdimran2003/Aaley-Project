import React from "react";
import Styles from "./index.module.scss";
import CommonHeading from "../Common-heading";
import CommonInput from "../Common-Input";
import bigImg from "../../assets/banside.png";
import Button from "../Button";
import CommonTittle from "../common-Tittle";
import tittleImg from "../../assets/consulting (1).png";

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
    inputName: "Language Of Consultant",
    inputType: "text",
    plaholder: "Language Of Consultant",
  },
  {
    inputName: "Date Of Birth",
    inputType: "date",
    plaholder: "Date Of Birth",
  },
  {
    inputName: "Time Of Birth",
    inputType: "date",
    plaholder: "Time Of Birth ",
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
const IndividualModal = () => {
  return (
    <div className={Styles.modalArea}>
      <CommonTittle tittle="Individual Consultant" icon={tittleImg} />
      <div className={Styles.modalArea__modal}>
        <div className={Styles.modalArea__modal__tittle}>
          <CommonHeading tittle="Please Fill The Form" />
        </div>
        <div className={Styles.modalArea__modal__formArea}>
          <div className={Styles.modalArea__modal__formArea__formInput}>
            {formObj.map((item) => {
              return <CommonInput type={item.inputType} placeholder={item.plaholder} />;
            })}
          </div>
          <div className={Styles.modalArea__modal__formArea__formImage}>
            <div className={Styles.modalArea__modal__formArea__formImage__image}>
              <img src={bigImg} alt="error" />
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

export default IndividualModal;
