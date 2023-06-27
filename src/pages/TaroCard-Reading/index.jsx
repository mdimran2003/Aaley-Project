import React from "react";
import Styles from "./index.module.scss";
import CommonTittle from "../../components/common-Tittle";
import tittleImg from "../../assets/Layer_x0020_1.png";
import CommonTab from "../../components/Common-Tabe";
import Plane from "../../components/Plane";
import CommonInput from "../../components/Common-Input";
import PredictionCard from "../../components/Prediction-Modal/Prediction-Card";
import cardImg from "../../assets/p2.png";

const planObj = [
  {
    plan: "( 15 min call session )",
    planeNo: "PLANE 351",
  },
  {
    plan: "25 Min Call Session",
    planeNo: "PLANE 351",
  },
  {
    plan: "45 Min Call Session",
    planeNo: "PLANE 351",
  },
  {
    plan: "65 Min CallSession )",
    planeNo: "PLANE 351",
  },
];
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
    inputName: "Date Of Birth",
    inputType: "date",
    plaholder: "Date Of Birth",
  },
  {
    inputName: "Time Of Birth",
    inputType: "text",
    plaholder: "Time Of Birth ",
  },
  {
    inputName: "Place Of Birth",
    inputType: "text",
    plaholder: "Place Of Birth",
  },
];
const formObj2 = [
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
    inputName: "Date Of Birth",
    inputType: "date",
    plaholder: "Date Of Birth",
  },
  {
    inputName: "Time Of Birth",
    inputType: "text",
    plaholder: "Time Of Birth ",
  },
];
const TaroCardReading = () => {
  return (
    <div className={Styles.readingArea}>
      <div className={Styles.readingArea__tittle}>
        <span>
          <CommonTittle icon={tittleImg} tittle="Tarot Card Reading" />
        </span>
        <div className={Styles.readingArea__tittle__tab}>
          <CommonTab tabItem="Telephonic Consultation" />
          <CommonTab tabItem="Chat Consultation" />
        </div>
      </div>
      <div className={Styles.readingArea__TarroDeatailArea}>
        <div className={Styles.readingArea__TarroDeatailArea__formArea}>
          <h2>Please Fill Some Details</h2>
          <div className={Styles.readingArea__TarroDeatailArea__formArea__requredform}>
            {formObj.map((item) => {
              return <CommonInput type={item.inputType} placeholder={item.inputName} />;
            })}
          </div>
          <h2>Optional If You Want To Ask About Others</h2>
          <div className={Styles.readingArea__TarroDeatailArea__formArea__optinalform}>
            {formObj2.map((item) => {
              return <CommonInput type={item.inputType} placeholder={item.inputName} />;
            })}
          </div>
          <div className={Styles.readingArea__TarroDeatailArea__formArea__cardArea}>
            <PredictionCard name="Tarot Card Reading" src={cardImg} />
          </div>
        </div>
        <div className={Styles.readingArea__TarroDeatailArea__planeAre}>
          {planObj.map((item) => {
            return (
              <div>
                <Plane planeNo={item.planeNo} plane={item.plan} width="34%" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaroCardReading;
