import React from "react";
import style from "./index.module.scss";

const CourseTitle = () => {
  return (
    <div className={style.courseTitle}>
      <h4 className={style.courseTitle__latest}>Latest Course Videos</h4>
      <p className={style.courseTitle__view}>View All Courses</p>
    </div>
  );
};

export default CourseTitle;
