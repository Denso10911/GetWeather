import moment from "moment";
import React from "react";
import Temperature from "../../ResultDay/Tempereture/Temperature";
import style from './TempWeek.module.css'
import "./ResultDayOfWeek.css";
import { Link, NavLink } from "react-router-dom";

const ResultDayOfWeek = (props) => {
  let date = props.day.dt * 1000;
  let weather = props.day.weather[0];
  let temp = props.day.temp.day;
  let feels_like = props.day.feels_like.day;  
  

  return (
    <NavLink to={`/day/${date/1000}`} className='menu__item'>
      <div className='result__information'>         
            <div className='result__data'>
              <span>{moment(date).format("dddd D")}</span>
            </div>
            <Temperature temp={temp} feels_like={feels_like} style={style}/>
            <div className='result__weatherIcon'>
              <img
                src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                alt={`${weather.main}`}
              />
              <div className='result__weatherDescription'>{weather.main}</div>
          </div> 
      </div>
      </NavLink>  
  );
};

export default ResultDayOfWeek;
