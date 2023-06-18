import React from "react";
import style from "./index.module.scss";
import TestimonialCards from "./TestimonialCards";
import user1 from "../../../assets/user1.png";
// import user2 from "../../../assets/user2.png";
// import user3 from "../../../assets/user3.png";

const Testimonial = () => {
  return (
    <div className={style.testimonial}>
      <div className={style.testimonial__top}>
        <div className={style.testimonial__top__left}>
          <h2>Testimonial</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className={style.testimonial__top__right}>
          <div className={style.testimonial__top__right__subLeft}>
            <svg>
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <p>84%</p>
          </div>
          <div className={style.testimonial__top__right__subRight}>
            <h3>Happy Patients</h3>
            <p>
              Medical experts presents in
              <br /> the our clinic
            </p>
          </div>
        </div>
      </div>
      <div className={style.testimonial__bottom}>
        <TestimonialCards
          title="quality of service"
          userReview="Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          designation="CEO"
          name="Dr. Maad Sa'ati"
          src={user1}
        />
        {/* <TestimonialCards
          title="About Customer Satisfaction"
          userReview="Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          designation="CMO"
          name="DR. Al Jawhara Hazim"
          src={user2}
        />
        <TestimonialCards
          title="Empowering Our Staff"
          userReview="Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          designation="CHR"
          name="Turki Aldery"
          src={user3}
        /> */}
      </div>
    </div>
  );
};

export default Testimonial;
