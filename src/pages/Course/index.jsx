import React from "react";
import CourseTitle from "./CourseTitle";
import style from "./index.module.scss";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import c7 from "../../assets/c7.png";
import c8 from "../../assets/c8.png";
import CustomeBanner from "../../components/CustomeBanner";
import CourseCard from "../../components/CourseCard";

const courseObj = [
  { id: 1, image: c1, topic: "6 TOPIC COVERS", title: "Introduction To Basic Astrology Course" },
  { id: 2, image: c2, topic: "1 TOPIC COVERS", title: "Vision Of Planets And Types Of Neech Bhang Rajyog" },
  { id: 3, image: c3, topic: "1 TOPIC COVERS", title: "Extra Vision Of Planets And Particular Prediction" },
  { id: 4, image: c4, topic: "4 TOPIC COVERS", title: "Timing Of Particular Event  Marrige, Job, Etc )" },
  { id: 5, image: c5, topic: "1 TOPIC COVERS", title: "Significance Of D9 Navmansha Chart)" },
  { id: 6, image: c6, topic: "1 TOPIC COVERS", title: "Understand The Nature Of Planet Of Planet, Remedies & Gemstone" },
  { id: 7, image: c7, topic: "4 TOPIC COVERS", title: "Continue The Friends And Ememies Among Planet" },
  { id: 8, image: c8, topic: "1 TOPIC COVERS", title: "Shani Sadhe Sati And Its Effect, Chandrasha Chart Saturn" },
];

const Course = () => {
  return (
    <>
      <CustomeBanner
        title="Learn Astrology"
        desc=" According To A Statistical Report, For The Year 2022, PHP Is The Most Popular Programming Language, With A 45.43% Market
          Share. Thus, With The Advent Of Popular Languages Like JavaScript, Python, Golang, Etc., There Has Been No Decline In
          The Requirement For PHP. Over 70% Of Websites Are Still Made From PHP"
      />
      <div className={style.container}>
        <CourseTitle />
        <div className={style.container__courses}>
          {courseObj.map((item) => (
            <CourseCard
              key={item.id}
              title={item.title}
              topic={item.topic}
              image={item.image}
              btnName="View All"
              height="35px"
              backgroundColor="#cd1a1a"
              marginTop="0"
              textTransform="capitalize"
              fontSize="16px"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
