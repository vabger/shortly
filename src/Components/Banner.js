import React from "react";
import image from "../images/illustration-working.svg";
import "../Styles/banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__head">More than just shorter links</h1>
        <p className="banner__desc">
          build your brand's recognition and get detailed information on how
          your links are performing.
        </p>
        <button className="banner__button">Get Started</button>
      </div>
      <img src={image} alt="Illustration" className="banner__image" />
    </div>
  );
}

export default Banner;
