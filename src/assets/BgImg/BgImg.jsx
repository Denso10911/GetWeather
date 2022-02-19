import React from "react";
import "./BgImg.css";

const BgImg = (props) => {
  let main;

  props.cityInfo ? (main = props.cityInfo[0].weather[0].main) : (main = null);

  return <div className={`bgImg ${main}`}>{props.children}</div>;
};

export default BgImg;
