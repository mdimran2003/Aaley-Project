import React from "react";
import Styles from "./index.module.scss";
import bigImg from "../../assets/banside.png";
import icon from "../../assets/consulting (1).png";
import CommonTab from "../../components/Common-Tabe";
import CommonTittle from "../../components/common-Tittle";
import ConsultantItem from "../../components/Consultant-Item";
import Plane from "../../components/Plane";

const tabObj = [
  {
    tabItem: "Telephonic Consultation",
  },
];
const planObj = [
  {
    plan: "1 Topic Consultation with unlimited questions with remedies.",
    planeNo: "PLANE 351",
  },
  {
    plan: "1 Topic Consultation with unlimited questions with remedies.",
    planeNo: "PLANE 351",
  },
  {
    plan: "1 Topic Consultation with unlimited questions with remedies.",
    planeNo: "PLANE 351",
  },
  {
    plan: "1 Topic Consultation with unlimited questions with remedies.",
    planeNo: "PLANE 351",
  },
  {
    plan: "1 Topic Consultation with unlimited questions with remedies.",
    planeNo: "PLANE 351",
  },
];

const PalmReading = () => {
  return (
    <div className={Styles.mainContaner}>
      <div className={Styles.mainContaner__tittleArea}>
        <span>
          <CommonTittle tittle="Individual Consultation" icon={icon} />
        </span>
        <div className={Styles.mainContaner__tittleArea__tabField}>
          {tabObj.map((item) => {
            return (
              <span>
                <CommonTab tabItem={item.tabItem} />
              </span>
            );
          })}
        </div>
      </div>

      <div className={Styles.mainContaner__consultaintArea}>
        <div className={Styles.mainContaner__consultaintArea__consultaintItem}>
          <div>
            <ConsultantItem id="Marrige" lable="Marrige" />
            <ConsultantItem id="Career" lable="Career" />
            <ConsultantItem id="Personality" lable="Personality" />
            <ConsultantItem id="Foreign settlement" lable="Foreign settlement" />
            <ConsultantItem id="Love Life" lable="Love Life" />
            <ConsultantItem id="Past Life" lable="Past Life" />
            <ConsultantItem id="Stone Recommendations" lable="Stone Recommendations" />
            <ConsultantItem id="Spirituality" lable="Spirituality" />
            <ConsultantItem id="Legal Case" lable="Legal Case" />
            <ConsultantItem id="Family" lable="Family" />
            <ConsultantItem id="Health" lable="Health" />
            <ConsultantItem id="Education" lable="Education" />
          </div>
          <div>
            <ConsultantItem id="Finance" lable="Finance" />
            <ConsultantItem id="Depression" lable="Depression" />
            <ConsultantItem id="Special yoga and their effect in life." lable="Special yoga and their effect in life." />
            <ConsultantItem id="Socital Respect" lable="Socital Respect" />
          </div>
          <div className={Styles.mainContaner__consultaintArea__consultaintItem__bigImg}>
            <img src={bigImg} alt="error" />
          </div>
        </div>
        <div className={Styles.mainContaner__consultaintArea__plan}>
          {planObj.map((item) => {
            return (
              <div>
                <Plane plane={item.plan} planeNo={item.planeNo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PalmReading;
