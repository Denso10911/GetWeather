import React from "react";
import ResultDayOfWeek from "./ResultDayOfWeek/ResultDayOfWeek";
import "./ResultWeek.css";

const ResultWeek = (props) => {
  return (
    <div className='resultItems'>
      {props.weatherInfoDaily.map((day) => {
        return (
          <div className='resultItem' key={day.dt}>
            <ResultDayOfWeek day={day} />
          </div>
        );
      })}
    </div>
  );
};
export default ResultWeek;
