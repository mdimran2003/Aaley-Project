import React from "react";
import Styles from "./index.module.scss";
import PlanCommonHeading from "../../components/Plan-Common-Heading";
import tittleImg from "../../assets/sm8.png";
import bigImg from "../../assets/banside.png";
import Button from "../../components/Button";
import CommonInput from "../../components/Common-Input";
import KundaliCatagory from "./Kundli-Catagory";
const kundaliData = [
  "Marrige",
  "Career",
  "Personality",
  "foreign settlement",
  "Love Life",
  "Past Life",
  "Stone Recommendation",
  "Sperituality",
  "Legal Case",
  "Falily",
  "Health",
  "Education",
];
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
  {
    inputName: "Paternal Grandparents Female",
    inputType: "text",
    plaholder: "Paternal Grandparents Female",
  },
  {
    inputName: "Paternal Grandparents Male",
    inputType: "text",
    plaholder: "Paternal Grandparents Male",
  },
];
const kundaliData2 = ["Finance", "Depression", "Special yoga and their effect in life.", "Socital Respect"];
const KundliReport = () => {
  return (
    <div className={Styles.kundaliArea}>
      <PlanCommonHeading img={tittleImg} leftText="Kundali Report" middlText="PLAN 2101" />
      <div className={Styles.kundaliArea__formArea}>
        <div className={Styles.kundaliArea__formArea__bigContainer}>
          <div className={Styles.kundaliArea__formArea__bigContainer__consultaintItem}>
            <div>
              <ul>
                {kundaliData.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <ul>
                {kundaliData2.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div className={Styles.kundaliArea__formArea__bigContainer__consultaintItem__bigImg}>
              <img src={bigImg} alt="error" />
            </div>
          </div>
          <span>Note</span>
          <p>KUNDALI REPORT (To Be Designed) </p>
          <p>Kundali Report Will Be Hand Made And Will Have 2 Options:</p>
        </div>
        <div className={Styles.kundaliArea__formArea__formField}>
          <h2>Please Fill The Form</h2>
          <div className={Styles.kundaliArea__formArea__formField__form}>
            {formObj.map((item) => {
              return <CommonInput type={item.inputType} placeholder={item.plaholder} />;
            })}
          </div>
          <div className={Styles.kundaliArea__formArea__formField__buttonArea}>
            <Button btnName="Cancel" backgroundColor="#d4d4d4" color="#444" fontSize="18px" borderColor="#d4d4d4" />
            <Button btnName="Submit" fontSize="18px" />
          </div>
        </div>
      </div>
      <div className={Styles.kundaliArea__kundaliType}>
        <KundaliCatagory
          label="A"
          message=" 15 Year Specific Prediction + 17 Topics For General Prediction + Lucky Colour + Lucky Number + Remedies + Telephonic Consultation
        PLAN 2501"
        />
        <KundaliCatagory
          label="B"
          message="30 Year Specific Prediction + 17 Topics For GeneralPrediction Lifetime + Lucky Colour + Lucky Number +Remedies + Telephonic Consultation PLAN 3501"
        />
      </div>
    </div>
  );
};

export default KundliReport;
