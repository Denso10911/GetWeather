import React from "react";
import cl from './Header.module.css'
import './ForecastType.css'

const Header = (props) => {

  

  const handleClick = (e) => {
    e.target.innerHTML == 'Daily' ? props.setforecastType(true) :  props.setforecastType(false)
  }

    return (
      <div className={cl.header}>
        <div className={cl.logo}>
            <a href="/">
                <img src="https://www.pinclipart.com/picdir/big/41-414567_simple-weather-icons-sunny-sunny-weather-icon-png.png" alt="" />
            </a>            
        </div>
        <div className="menu">
          <ul className={cl.menu__list} onClick={(e)=>{handleClick(e)}}>
            <li className={`menu__item ${props.forecastType && 'active'}`}>
               <button href='/daily'>Daily</button>
            </li>
            <li className={`menu__item ${!props.forecastType && 'active'}`}>
              <button href ='/week'>Week</button>
            </li>
          </ul>
        </div>
    </div> 
    )
}

export default Header