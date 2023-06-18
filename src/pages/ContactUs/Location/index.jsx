import React from "react";
import style from "./index.module.scss";

const Location = () => {
  return (
    <div className={style.iframe}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3170113997176!2d80.95794802531705!3d26.893432476658727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957dc93e468af%3A0x499f807c053f64cd!2sSector%204%2C%20Vikas%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226022!5e0!3m2!1sen!2sin!4v1686649285942!5m2!1sen!2sin"
        style={{ border: "0", height: "500px", width: "100%" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Location;
