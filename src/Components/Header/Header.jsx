import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className={props.forecastType ? "firstStartHeader" : "header"}>
      <div className={props.forecastType ? "firstStartLogo" : "logo"}>
        <NavLink to='/day'>GetWeather</NavLink>
      </div>
      <div className={props.forecastType ? "firstStartMenu" : "menu"}>
        <NavLink to='/day' className='menu__item'>
          Daily
        </NavLink>
        <NavLink to='/week' className='menu__item'>
          Week
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
