import React from "react";
import "../Styles/Card.css";

function Card({ id, logo, heading, content }) {
  return (
    <div id={id} className="content">
      <div className={`logo__container`}>
        <div className="logo__backdrop">
          <img src={logo} alt="logo" className="logo"></img>
        </div>
      </div>

      <div className="contentArea">
        <h2 className="heading">{heading}</h2>
        <div className="desc">{content}</div>
      </div>
    </div>
  );
}

export default Card;
