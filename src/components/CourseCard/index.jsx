import React from "react";
import style from "./index.module.scss";
import Button from "../../widgets/Button";

const CourseCard = (props) => {
  return (
    <div className={style.courseCard}>
      <div className={style.courseCard__courseImg}>
        <img src={props.image} alt={props.title} />
      </div>
      <h5 className={style.courseCard__title}>{props.title}</h5>
      <div className={style.courseCard__det}>
        <p className={style.courseCard__det__topic}>{props.topic}</p>
        <div className={style.courseCard__det__btn}>
          <Button
            btnName={props.btnName}
            height={props.height}
            backgroundColor={props.backgroundColor}
            marginTop={props.marginTop}
            textTransform={props.textTransform}
            fontSize={props.fontSize}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
