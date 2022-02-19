import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <NavLink to='/'>GetWeather</NavLink>
      </div>
      <div className='menu'>
        <NavLink to='/' className='menu__item'>
          Daily
        </NavLink>
        <NavLink to='week' className='menu__item'>
          Week
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
