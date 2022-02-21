import React from "react";
import "./ResultDay.css";
import Temperature from "./Tempereture/Temperature";
import Date from "./Date/Date";
import WeatherNow from "./WeatherNow/WeatherNow";
import WeatherTimeLapse from "./WeatherTimeLapse/WeatherTimeLapse";

const ResultDay = (props) => {
  let weatherAtTheMoment = props.weatherHourly[0];
  let date = weatherAtTheMoment.dt * 1000;
  let temp = weatherAtTheMoment.temp;
  let feels_like = weatherAtTheMoment.feels_like;

  return (
    <div className='result__day'>
      <Date date={date} />
      <div className='result__day_temp'>
        <Temperature temp={temp} feels_like={feels_like} />
        <WeatherNow weatherAtTheMoment={weatherAtTheMoment} />
        <WeatherTimeLapse weatherHourly={props.weatherHourly}/>
      </div>
    </div>
  );
};

export default ResultDay;
