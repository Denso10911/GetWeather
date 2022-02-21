import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Result.css";
import ResultDay from "./ResultDay/ResultDay";
import ResultWeek from "./ResultWeek/ResultWeek";

const Result = (props) => {
  let weatherInfoDailyOne = new Array(props.weatherInfoDaily[0]);

  return (
    <div className='result'>
      <h1 className='result__city'>{props.cityName}</h1>
      <Routes>
        <Route
          path='GetWeather'
          element={<ResultDay weatherHourly={props.weatherInfoHourly} />}
        />
        <Route
          path='week'
          element={<ResultWeek weatherInfoDaily={props.weatherInfoDaily} />}
        />
      </Routes>
    </div>
  );
};
export default Result;
