import React from "react";
import Styles from "./index.module.scss";
import CommonInput from "../../components/Common-Input/index";
import CommonTittle from "../../components/common-Tittle/index";
import tittleImg from "../../assets/consulting (1).png";
import Button from "../../components/Button/index";

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
const PalmReadingForm = () => {
  return (
    <div className={Styles.modalArea}>
      <CommonTittle tittle="Palm Reading" icon={tittleImg} />
      <div className={Styles.modalArea__modal}>
        <div className={Styles.modalArea__modal__tittle}>
          <h2>Please Fill The Form</h2>
        </div>
        <div className={Styles.modalArea__modal__formArea}>
          <div className={Styles.modalArea__modal__formArea__formInput}>
            {formObj.map((item) => {
              return <CommonInput type={item.inputType} placeholder={item.plaholder} />;
            })}
          </div>
          <div className={Styles.modalArea__modal__formArea__dragAndDrop}>jfdkjfl</div>
        </div>
        <div className={Styles.modalArea__modal__buttonArea}>
          <div>
            <Button btnName="Cancel" backgroundColor="#d4d4d4" color="#444" fontSize="18px" borderColor="#d4d4d4" />
          </div>
          <div>
            <Button btnName="Submit" fontSize="18px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalmReadingForm;
