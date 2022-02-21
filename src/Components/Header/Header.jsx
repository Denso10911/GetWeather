import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  console.log(props);
  return (
    <div className='header'>
      <div className={props.forecastType ? "fullScreenLogo" : "logo"}>
        <NavLink to='GetWeather'>GetWeather</NavLink>
      </div>
      <div className='menu'>
        <NavLink to='GetWeather' className='menu__item' onClick={()=>{
          props.setbgLineDeg(true)
        }}>
          Daily
        </NavLink>
        <NavLink to='week' className='menu__item' onClick={()=>{
          props.setbgLineDeg(false)}}>
          Week
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
