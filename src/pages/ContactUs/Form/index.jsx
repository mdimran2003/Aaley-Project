import React from "react";
import style from "./index.module.scss";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";

const Form = () => {
  return (
    <div className={style.form}>
      <div className={style.form__left}>
        <h2>Contact Us</h2>
        <InputField border="1px solid #000" type="text" placeholder="Your Name" borderRadius="3px" />
        <InputField border="1px solid #000" type="email" placeholder="Your Email" borderRadius="3px" />
        <InputField border="1px solid #000" type="number" placeholder="Mobile No." borderRadius="3px" />
        <textarea
          className={style.form__left__textarea}
          placeholder="Your Message"
          name="message"
          style={{ border: "1px solid #000" }}
          id=""
          cols="30"
          rows="5"></textarea>
        <div className={style.form__left__buttonWidth}>
          <Button fontSize="20px" btnName="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Form;
