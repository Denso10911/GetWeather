import React from "react";
import cl from './Header.module.css'

const Header = () => {
    return (
      <div className={cl.header}>
        <div className={cl.logo}>
            <a href="/">
                <img src="https://www.pinclipart.com/picdir/big/41-414567_simple-weather-icons-sunny-sunny-weather-icon-png.png" alt="" />
            </a>            
        </div>
        <div className="menu">
          <ul className={cl.menu__list}>
            <li className={cl.menu__item}>
              <a href='/daily'>Daily</a>
            </li>
            <li className="menu__item">
              <a href ='/week'>Week</a>
            </li>
          </ul>
        </div>
    </div> 
    )
}

export default Header