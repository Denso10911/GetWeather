import React from "react";
import "./Date.css";
import moment from "moment";

const Date = (props) => {
  return (
    <div className='result__day_data'>
      {moment(props.date).format("dddd D MMMM y")}     
    </div>
  );
};

export default Date;
