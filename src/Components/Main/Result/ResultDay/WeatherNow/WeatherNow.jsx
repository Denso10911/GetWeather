import React from "react";
import { motion } from "framer-motion";

import "./WeatherNow.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {},
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const WeatherNow = (props) => {
  let weather = props.weatherAtTheMoment.weather[0];
  let pressure = props.weatherAtTheMoment.pressure;
  let humidity = props.weatherAtTheMoment.humidity;
  let windSpeed = props.weatherAtTheMoment.wind_speed;

  return (
    <motion.div
      className='result__weatherInfo'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <motion.div className='result__weather' variants={childVariants}>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
          alt={`${weather.main}`}
          className={"result__weather_icon"}
        />
        <div className='result__weather_desc'>{weather.main}</div>
      </motion.div>
      <motion.div className='result__pressure' variants={childVariants}>
        <p className='result__paragraph'>Pressure</p>
        {`${pressure} hPa`}
      </motion.div>
      <motion.div className='result__humidity' variants={childVariants}>
        <p className='result__paragraph'>Humidity</p>
        {`${humidity} %`}
      </motion.div>
      <motion.div className='result__windSpeed' variants={childVariants}>
        <p className='result__paragraph'>Wind</p>
        <div className='windSpeed'>{`${windSpeed} m/s`}</div>
      </motion.div>
    </motion.div>
  );
};

export default WeatherNow;
