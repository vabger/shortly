import React from "react";
import "../Styles/URLComponent.css";

function URLComponent(props) {
  let copyLink = () => {
    navigator.clipboard
      .writeText(props.urlObj.short)
      .then((s) => {
        console.log("copied!!!");
      })
      .catch((e) => {
        console.log(e);
      });
    props.callback(props.id);
  };
  return (
    <div className="Url__comp">
      <div className="Url__wrapper">
        <div className="Url__full">{props.urlObj.url}</div>
        <div className="Url__break"></div>
        <div className="Url__short">
          <a href={props.urlObj.short}>{props.urlObj.short}</a>
        </div>
      </div>
      <button
        className={`${props.urlObj.copied && "Url__copied"} Url__copyButton`}
        onClick={copyLink}
      >
        {props.urlObj.copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default URLComponent;
