import React from "react";
import WeatherHourlyTimeLapsItem from "./WeatherHourlyTimeLapsItem/WeatherHourlyTimeLapsItem";
import './WeatherTimeLapse.css'

const WeatherTimeLapse = (props) => {
    function everyNth(arr, n) {
      const result = [];
      for (let i=0; i<arr.length; i+=n) result.push(arr[i]);
      return result;
    }
    let weatherHourlyTimeLaps = everyNth(props.weatherHourly, 3).slice(1, 8)
    
    return (
      <div className='result__weatherTimeLapse'>
          {weatherHourlyTimeLaps.map((h) => {
              
              return (
                <div className='weatherTimeLapse__item' >
                    <WeatherHourlyTimeLapsItem weatherData={h}/>
                </div>
              )
        })}
      </div>
    );
  };
  
  export default WeatherTimeLapse;