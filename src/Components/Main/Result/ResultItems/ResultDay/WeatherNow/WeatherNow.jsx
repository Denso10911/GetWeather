import React from "react";
import "./WeatherNow.css";

const WeatherNow = (props) => {
  let weather = props.weatherAtTheMoment.weather[0];
  let pressure = props.weatherAtTheMoment.pressure;
  let humidity = props.weatherAtTheMoment.humidity;
  let windSpeed = props.weatherAtTheMoment.wind_speed;

  return (
    <div className='result__weatherInfo'>
      <div className='result__weather'>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
          alt={`${weather.main}`}
          className={"result__weather_icon"}
        />
        <div className='result__weather_desc'>{weather.main}</div>
      </div>
      <div className='result__pressure'>
        <p className='result__paragraph'>Pressure</p>
        {`${pressure} hPa`}
      </div>
      <div className='result__humidity'>
        <p className='result__paragraph'>Humidity</p>
        {`${humidity} %`}
      </div>
      <div className='result__windSpeed'>
        <p className='result__paragraph'>Wind</p>
        <div className='windSpeed'>{`${windSpeed} m/s`}</div>
      </div>
    </div>
  );
};

export default WeatherNow;
