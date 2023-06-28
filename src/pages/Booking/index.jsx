import React from "react";
import Styles from "./index.module.scss";
import CommonHeading from "../../components/Common-heading";
import CommonTab from "../../components/Common-Tabe";
import Search from "../../widgets/Search";
import BookingCard from "../../components/Booking-Card";
import cardImg from "../../assets/user1.png";

const cardObj = [
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
  {
    img: cardImg,
    headig: "Ramrasad",
    astrType: "Astrology",
    details: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    time: "9:45 AM - 2:00 PM",
    date: "0/04/2023",
  },
];
const Booking = () => {
  return (
    <div className={Styles.bookingArea}>
      <div className={Styles.bookingArea__navBar}>
        <span className={Styles.bookingArea__navBar__tittle}>
          <CommonHeading tittle="Booking" />
        </span>
        <span className={Styles.bookingArea__navBar__tab}>
          <CommonTab tabItem="Upcoming" />
          <CommonTab tabItem="Recent" />
        </span>
        <span className={Styles.bookingArea__navBar__searchBar}>
          <Search />
        </span>
      </div>
      <div className={Styles.bookingArea__bookingCardArea}>
        {cardObj.map((item, index) => {
          return (
            <BookingCard
              key={index}
              imgSrc={item.img}
              name={item.headig}
              astroType={item.astrType}
              detail={item.details}
              time={item.time}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
