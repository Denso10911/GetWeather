import moment from "moment";
import React from "react";
import './WeatherHourlyTimeLapsItem.css'

const WeatherHourlyTimeLapsItem = (props) => {  
    
    console.log(props); 
     let date = props.weatherData.dt * 1000;     
     let weather = props.weatherData.weather[0];
     console.log(weather); 


    return (
      <>
        <div className="weatherTimeLapse__item_time">
            {moment(date).format('LT')}
        </div> 
        <div className="weatherTimeLapse__item_icon">
            <img
                src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                alt={`${weather.main}`}
                className={"result__weather_icon"}
                />
        </div> 
        <div className="weatherTimeLapse__item_temp">
            {`${Math.round(props.weatherData.temp)} °C`}
        </div>
      </>
    );
  };
  
  export default WeatherHourlyTimeLapsItem;