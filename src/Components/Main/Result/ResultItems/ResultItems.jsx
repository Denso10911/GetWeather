import React from "react";
import ResultItem from "./ResultItem/ResultItem";
import "./ResultItems.css";

const ResultItems = (props) => {
  return (
    <div className='resultItems'>
      {props.weatherInfoDaily.map((day) => {
        return (
          <div className='resultItem' key={day.dt}>
            <ResultItem day={day} />
          </div>
        );
      })}
    </div>
  );
};
export default ResultItems;
