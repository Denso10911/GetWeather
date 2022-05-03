// library
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// styles
import "./Header.css";

const headerVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      mass: 1,
      damping: 20,
    },
  },
  exit: {
    y: -100,
  },
};
const Header = (props) => {
  return (
    <motion.div
      className='header'
      variants={headerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='logo'>
        <NavLink to='/GetWeather'>GetWeather</NavLink>
      </div>
      <div className='menu'>
        <NavLink to='/day' className='menu__item'>
          Daily
        </NavLink>
        <NavLink to='/week' className='menu__item'>
          Week
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Header;
