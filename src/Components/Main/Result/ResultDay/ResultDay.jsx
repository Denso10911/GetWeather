// library
import React from "react";
import { motion } from "framer-motion";
// components
import Temperature from "./Tempereture/Temperature";
import WeatherNow from "./WeatherNow/WeatherNow";
import Date from "./Date/Date";
import Header from "../../../Header/Header";
import WeatherTimeLapse from "./WeatherTimeLapse/WeatherTimeLapse";
import City from "../../../City/City";
// styles
import "./ResultDay.css";
import style from "./Tempereture/TempDay.module.css";

const containerVariants = {
  hidden: {
    marginTop: 175,
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 350,
    marginTop: 0,
    opacity: 1,
  },
  exit: {
    marginTop: 200,
    height: 0,
    opacity: 0,
    overflow: "hidden",
  },
};
const tempVariants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.4,
      mass: 0.8,
      damping: 8,
    },
  },
  exit: {
    opacity: 0,
  },
};

const ResultDay = (props) => {
  let weatherAtTheMoment = props.weatherHourly[0];
  let date = weatherAtTheMoment.dt * 1000;
  let temp = weatherAtTheMoment.temp;
  let feels_like = weatherAtTheMoment.feels_like;

  return (
    <div className='result__day'>
      <Header />
      <City cityName={props.cityName} />
      <Date date={date} />

      <motion.div
        className='result__day_temp'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <motion.div variants={tempVariants}>
          <Temperature temp={temp} feels_like={feels_like} style={style} />
        </motion.div>
        <div className='result__day_params'>
          <WeatherNow weatherAtTheMoment={weatherAtTheMoment} />
          <WeatherTimeLapse weatherHourly={props.weatherHourly} />
        </div>
      </motion.div>
    </div>
  );
};

export default ResultDay;
