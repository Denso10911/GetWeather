import React from "react";
import "./BgImg.css";

const BgImg = (props) => {
  console.log(props);
  let main;
  let deg
  props.bgLineDeg ? deg='daily' : deg='week'
  props.cityInfo ? (main = props.cityInfo[0].weather[0].main) : (main = null);

  return (
    <div className={`bgImg ${main} `}>
      <div className={`line ${deg}`}></div>
      {props.children}
    </div>
  );
};

export default BgImg;
