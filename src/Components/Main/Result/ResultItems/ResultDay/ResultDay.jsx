import React from "react";
import "./ResultDay.css";
import Temperature from "./Tempereture/Temperature";
import Date from "./Date/Date";
import WeatherNow from "./WeatherNow/WeatherNow";

const ResultDay = (props) => {
  let weatherAtTheMoment = props.weatherHourly[0];
  let date = weatherAtTheMoment.dt * 1000;
  let weather = weatherAtTheMoment.weather[0];
  let temp = weatherAtTheMoment.temp;
  let feels_like = weatherAtTheMoment.feels_like;

  console.log(weatherAtTheMoment);
  return (
    <div className='result__day'>
      <Date date={date} />
      <div className='result__day_temp'>
        <Temperature temp={temp} feels_like={feels_like} />
        <WeatherNow weatherAtTheMoment={weatherAtTheMoment} />
        <div className='time'></div>
      </div>
    </div>
  );
};

export default ResultDay;
