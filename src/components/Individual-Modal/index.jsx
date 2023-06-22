import React from "react";
import Styles from "./index.module.scss";
import CommonHeading from "../Common-heading";
import CommonInput from "../Common-Input";
import bigImg from "../../assets/banside.png";
import CommonDateField from "../Common-DateField";
import CalenderIcon from "../../assets/Group 25225.png";
import Button from "../Button";
const IndividualModal = () => {
  return (
    <div className={Styles.modalArea}>
      <div className={Styles.modalArea__modal}>
        <div className={Styles.modalArea__modal__tittle}>
          <CommonHeading tittle="Please Fill The Form" />
        </div>
        <div className={Styles.modalArea__modal__formArea}>
          <div className={Styles.modalArea__modal__formArea__formInput}>
            <CommonInput type="text" placeholder="Name" />
            <CommonInput type="text" placeholder="Email Id" />
            <CommonDateField type="text" placeholder="Date Of Birth" img={CalenderIcon} />
          </div>
          <div className={Styles.modalArea__modal__formArea__formInput}>
            <CommonInput type="text" placeholder="Gender" />
            <CommonInput type="text" placeholder="Time Of Birth" />
            <CommonInput type="text" placeholder="Contact Number" />
          </div>
          <div className={Styles.modalArea__modal__formArea__formInput}>
            <CommonInput type="text" placeholder="Language Of Consultation" />
            <CommonInput type="text" placeholder="Place Of Birth" />
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
