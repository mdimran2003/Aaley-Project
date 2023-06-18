import React from "react";
import InputField from "../../../widgets/InputField";
import style from "./index.module.scss";
import Button from "../../../widgets/Button";

const RaiseEnquiry = () => {
  return (
    <div className={style.raiseEnquiry}>
      <div className={style.raiseEnquiry__left}>
        <h2>
          Raise a<br />
          Enquiry
        </h2>
        <InputField type="text" placeholder="Your Name" borderRadius="3px" />
        <InputField type="email" placeholder="Your Email" borderRadius="3px" />
        <InputField type="number" placeholder="Mobile No." borderRadius="3px" />
        <textarea
          className={style.raiseEnquiry__left__textarea}
          placeholder="Your Message"
          name="message"
          id=""
          cols="30"
          rows="5"></textarea>
        <div className={style.raiseEnquiry__left__buttonWidth}>
          <Button fontSize="20px" btnName="Submit" />
        </div>
      </div>
    </div>
  );
};

export default RaiseEnquiry;
