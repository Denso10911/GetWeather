import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Result.css";
import ResultDay from "./ResultItems/ResultDay/ResultDay";
import ResultItems from "./ResultItems/ResultItems";

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
          element={<ResultItems weatherInfoDaily={props.weatherInfoDaily} />}
        />
      </Routes>
    </div>
  );
};
export default Result;
