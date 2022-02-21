import React from "react";
import "./Date.css";
import moment from "moment";

const Date = (props) => {
  return (
    <div className='result__day_data'>
      {moment(props.date).format("D MMMM y")}
      <br />
      {moment(props.date).format("dddd ")}
    </div>
  );
};

export default Date;
