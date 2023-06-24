import React from "react";
import Styles from "./index.module.scss";
import Button from "../Button/index";
import tittleImg from "../../assets/Layer_x0020_1.png";
import CommonInput from "../Common-Input";
import CommonTittle from "../common-Tittle";
import Plane from "../Plane";

const formObj = [
  {
    inputName: "Name",
    inputType: "text",
    plaholder: "Name",
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
    inputName: "Language Of Consultation",
    inputType: "text",
    plaholder: "Language Of Consultation",
  },
  {
    inputName: "Email Id",
    inputType: "text",
    plaholder: "Email Id",
  },
  {
    inputName: "Complete Photo Without Editing",
    inputType: "text",
    plaholder: "Complete Photo Without Editing",
  },
  {
    inputName: "Height In CM",
    inputType: "text",
    plaholder: "Height In CM",
  },
];
const planObj = [
  {
    plan: "0 - 2.00 Hr Time Rectification",
    planeNo: "PLANE 351",
  },
  {
    plan: "2.01 - 4.00 Hr Time Rectification",
    planeNo: "PLANE 351",
  },
  {
    plan: "4.01 - 6.00 Hr Time Rectification",
    planeNo: "PLANE 351",
  },
  {
    plan: "6.01 - 8.00 Hr Time Rectification",
    planeNo: "PLANE 351",
  },
  {
    plan: "8.01 -24 Hr Time Rectification",
    planeNo: "PLANE 351",
  },
];
const BirthTimeRectification = () => {
  return (
    <div className={Styles.modalArea}>
      <CommonTittle tittle="Birth Time Rectification" icon={tittleImg} />
      <div className={Styles.modalArea__modal}>
        <div className={Styles.modalArea__modal__formArea}>
          <div className={Styles.modalArea__modal__formArea__detail}>
            <span>
              <h2>Please Fill Some Details</h2>
            </span>
            <div className={Styles.modalArea__modal__formArea__detail__formField}>
              {formObj.map((item) => {
                return <CommonInput type={item.inputType} placeholder={item.inputName} />;
              })}
            </div>
          </div>
          <div className={Styles.modalArea__modal__formArea__detail__plane}>
            {planObj.map((item) => {
              return (
                <div>
                  <Plane planeNo={item.planeNo} plane={item.plan} width="34%" />
                </div>
              );
            })}
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

export default BirthTimeRectification;
