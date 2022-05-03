import React from "react";
import { motion } from "framer-motion";

import WeatherHourlyTimeLapsItem from "./WeatherHourlyTimeLapsItem/WeatherHourlyTimeLapsItem";
import "./WeatherTimeLapse.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
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

const WeatherTimeLapse = (props) => {
  function everyNth(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i += n) result.push(arr[i]);
    return result;
  }
  let weatherHourlyTimeLaps = everyNth(props.weatherHourly, 3).slice(1, 8);

  return (
    <motion.div
      className='result__weatherTimeLapse'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {weatherHourlyTimeLaps.map((h) => {
        return (
          <motion.div
            className='weatherTimeLapse__item'
            variants={childVariants}
          >
            <WeatherHourlyTimeLapsItem weatherData={h} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default WeatherTimeLapse;
