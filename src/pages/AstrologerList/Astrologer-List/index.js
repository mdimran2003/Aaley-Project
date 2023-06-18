import React from "react";
import Styles from "./index.module.scss";
import CommonTittle from "../Common-Tittle";
import AstrologerCard from "./Astrologer-Card";
import img from "../../../assets/astrologer.png";
import Search from "../../../widgets/Search";
import PredictionModal from "../../../components/Prediction-Modal";
const astrologerList = [
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
  {
    image: img,
    name: "Vaibhav Valmiki",
    exprience: "Exp : 15 years",
    detail: "(Astrologer/ tarot/ palmist/face reader/ numerologer/ grahologist/signature analysis)",
    ratting: "4.5",
  },
];

const AstrologerList = () => {
  return (
    <>
      <div className={Styles.astroListArea}>
        <div className={Styles.astroListArea__tittleArea}>
          <div className={Styles.astroListArea__tittleArea__tittle}>
            <CommonTittle tittle="Astrologer List" />
          </div>
          <div className={Styles.astroListArea__tittleArea__searchArea}>
            <Search />
          </div>
        </div>
        <div className={Styles.astroListArea__astrologerList}>
          {astrologerList.map((item, index) => {
            return (
              <AstrologerCard
                key={index}
                ratting={item.ratting}
                img={item.image}
                name={item.name}
                exprience={item.exprience}
                detail={item.detail}
              />
            );
          })}
        </div>
      </div>
      {/* <div>
        <PredictionModal />
      </div> */}
    </>
  );
};

export default AstrologerList;
