import React from "react";
import CustomeBanner from "../../components/CustomeBanner";
import pandit from "../../assets/pandit.png";
import style from "./index.module.scss";
import pooja1 from "../../assets/pooja1.png";
import pooja2 from "../../assets/pooja2.png";
import pooja3 from "../../assets/pooja3.png";
import pooja4 from "../../assets/pooja4.png";
import pooja5 from "../../assets/pooja5.png";
import pooja6 from "../../assets/pooja6.png";
import CourseCard from "../../components/CourseCard";
import PoojaTitle from "./PoojaTitle";

const poojaList = [
  { id: 1, image: pooja1, topic: "Rs : 5000", title: "Mahalaxmi Pooja" },
  { id: 2, image: pooja2, topic: "Rs : 5000", title: "Mahalaxmi Pooja" },
  { id: 3, image: pooja3, topic: "Rs : 5000", title: "Mahalaxmi Pooja" },
  { id: 4, image: pooja4, topic: "Rs : 5000", title: "Mahalaxmi Pooja" },
  { id: 5, image: pooja5, topic: "Rs : 5000", title: "Mahalaxmi Pooja" },
  { id: 6, image: pooja6, topic: "Rs : 5000", title: "Mahalaxmi Pooja" },
];

const BookPanditJi = () => {
  return (
    <>
      <CustomeBanner
        title="Book Pandit Ji"
        desc="To book a professional/experienced Pandit online you have to choose the
            puja service and enter your details with us: Full Name, E-mail Address,
            Mobile Number, Date of Puja, Type of puja & Location Address.">
        <div className={style.pandit}>
          <img src={pandit} alt="pandit" />
        </div>
      </CustomeBanner>

      <div className={style.container}>
        <PoojaTitle />
        <div className={style.container__poojaList}>
          {poojaList.map((item) => {
            return (
              <CourseCard
                key={item.id}
                title={item.title}
                topic={item.topic}
                image={item.image}
                btnName="Book Now"
                height="35px"
                backgroundColor="#cd1a1a"
                marginTop="0"
                textTransform="capitalize"
                fontSize="16px"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookPanditJi;
