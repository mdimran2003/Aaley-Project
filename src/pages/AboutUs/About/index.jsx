import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import style from "./index.module.scss";

const socialObj = [
  { id: 1, icon: faTwitter },
  { id: 2, icon: faFacebookF },
  { id: 3, icon: faGooglePlus },
  { id: 4, icon: faInstagram },
  { id: 5, icon: faPinterest },
  { id: 6, icon: faYoutube },
];

const About = () => {
  return (
    <div className={style.about}>
      <h2>About Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, quae velit qui sed laudantium porro libero sequi eaque
        assumenda, ducimus aspernatur maiores amet provident quisquam dolorem voluptate aperiam culpa! Atque? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex nisi culpa ad aut eos eaque, optio dignissimos
        explicabo accusamus sapiente vel pariatur nulla aspernatur neque provident ut repellendus natus. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, illo ratione consequuntur rerum architecto iste officia
        sapiente doloribus voluptate saepe corporis error inventore perspiciatis laboriosam iure totam. Iusto, excepturi est.
      </p>

      <div className={style.about__bottom}>
        <ul className={style.about__bottom__ul}>
          {socialObj.map((item) => {
            return (
              <li key={item.id} className={style.about__bottom__ul__li}>
                <FontAwesomeIcon icon={item.icon} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
