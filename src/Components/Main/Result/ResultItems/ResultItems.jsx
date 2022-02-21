import React from "react";
import ResultIWeek from "./ResultIWeek/ResultIWeek";
import "./ResultItems.css";

const ResultItems = (props) => {
  return (
    <div className='resultItems'>
      {props.weatherInfoDaily.map((day) => {
        return (
          <div className='resultItem' key={day.dt}>
            <ResultIWeek day={day} />
          </div>
        );
      })}
    </div>
  );
};
export default ResultItems;
