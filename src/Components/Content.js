import React from "react";
import Card from "./Card";
import logo1 from "../images/icon-brand-recognition.svg";
import logo2 from "../images/icon-detailed-records.svg";
import logo3 from "../images/icon-fully-customizable.svg";
import "../Styles/Content.css";
let desc1 =
  "Boost your brand recognition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content.";
let desc2 =
  "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.";
let desc3 =
  "Improve brand awareness and content discoverability through customizable links,supercharging audience engagement.";
function Content() {
  return (
    <div className="content">
      <div className="head">
        <h1 className="head__heading">Advanced Statistics</h1>
        <div className="head__desc">
          Track how your Links are performing across the web with our advanced
          statistics dashboard.
        </div>
      </div>
      <div className="Card__group">
        <Card
          id="one"
          logo={logo1}
          heading="Brand Recognition"
          content={desc1}
        />
        <div className="connector"></div>
        <Card
          id="two"
          logo={logo2}
          heading="Detailed Records"
          content={desc2}
        />
        <div className="connector"></div>
        <Card
          id="three"
          logo={logo3}
          heading="Fully Customizable"
          content={desc3}
        />
      </div>
    </div>
  );
}

export default Content;
