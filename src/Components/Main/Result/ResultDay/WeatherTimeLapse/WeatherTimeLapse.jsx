import React from "react";
import WeatherHourlyTimeLapsItem from "./WeatherHourlyTimeLapsItem/WeatherHourlyTimeLapsItem";
import './WeatherTimeLapse.css'

const WeatherTimeLapse = (props) => {
    function everyNth(arr, n) {
      const result = [];
      for (let i=0; i<arr.length; i+=n) result.push(arr[i]);
      return result;
    }
    let weatherHourlyTimeLaps = everyNth(props.weatherHourly, 3).slice(1, 6)
    let ml = 0
   
    return (
      <div className='result__weatherTimeLapse'>
          {weatherHourlyTimeLaps.map((h) => {
              ml += 8
              return (
                <div className='weatherTimeLapse__item' style={{marginLeft: `${ml}px`}}>
                    <WeatherHourlyTimeLapsItem weatherData={h}/>
                </div>
              )
        })}
      </div>
    );
  };
  
  export default WeatherTimeLapse;