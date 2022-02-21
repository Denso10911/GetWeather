import React from "react";
import "./Temperature.css";

const Temperature = (props) => {
  return (
    <div className='result__temp'>
      <div className='result__tempTitle'>°C</div>
      <div className='result__tempValue'>{`${Math.round(props.temp)}`}</div>
      <div className='result__tempFeels'>
        Feels like {`${Math.round(props.feels_like)} °C`}
      </div>
    </div>
  );
};

export default Temperature;
