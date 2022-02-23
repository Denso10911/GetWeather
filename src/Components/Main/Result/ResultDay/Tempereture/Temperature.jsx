import React from "react";

const Temperature = (props) => {
let {temp, title, value, feels} = props.style

  return (
    <div className={temp}>
      <div className={value}>
        {`${Math.round(props.temp)}`}
        <span className={title}>°C</span>
      </div>
      <div className={feels}>
        Feels like {`${Math.round(props.feels_like)} °C`}
      </div>
    </div>
  );
};

export default Temperature;
