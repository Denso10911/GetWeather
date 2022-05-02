import React from "react";
import ResultDayOfWeek from "./ResultDayOfWeek/ResultDayOfWeek";
import "./ResultWeek.css";
import { motion } from "framer-motion";
import Header from "../../../Header/Header";
import City from "../../../City/City";

const ResultWeek = (props) => {
  return (
    <motion.div
      className='result__week'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <City cityName={props.cityName} />
      <div className='result__items'>
        {props.weatherInfoDaily.map((day) => {
          return (
            <div className='result__item' key={day.dt}>
              <ResultDayOfWeek day={day} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
export default ResultWeek;
