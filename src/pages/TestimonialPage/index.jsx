import React from "react";
import Card from "./Card";
import testi1 from "../../assets/testi1.png";
import testi2 from "../../assets/testi2.png";
import testi3 from "../../assets/testi3.png";
import testi4 from "../../assets/testi4.png";
import testi5 from "../../assets/testi5.png";
import testi6 from "../../assets/testi6.png";
import style from "./index.module.scss";
import Banner from "./Banner";

const testimonialObj = [
  {
    id: 1,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    designation: "CEO",
    user: "Dr. Maad Sa'ati",
    src: testi1,
  },
  {
    id: 2,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    designation: "Doctor",
    user: "Vaibhav Valmiki",
    src: testi2,
  },
  {
    id: 3,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    designation: "Doctor",
    user: "Vaibhav Valmiki",
    src: testi3,
  },
  {
    id: 4,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    designation: "Doctor",
    user: "Vaibhav Valmiki",
    src: testi4,
  },
  {
    id: 5,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    designation: "Doctor",
    user: "Vaibhav Valmiki",
    src: testi5,
  },
  {
    id: 6,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    designation: "Doctor",
    user: "Vaibhav Valmiki",
    src: testi6,
  },
];

const TestimonialPage = () => {
  return (
    <>
      <Banner />
      <div className={style.container}>
        {testimonialObj.map((item) => (
          <Card key={item.id} testimonial={item.message} designation={item.designation} user={item.user} src={item.src} />
        ))}
      </div>
    </>
  );
};

export default TestimonialPage;
