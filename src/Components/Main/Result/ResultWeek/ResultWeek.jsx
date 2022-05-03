// library
import React from "react";
import { motion } from "framer-motion";
// components
import ResultDayOfWeek from "./ResultDayOfWeek/ResultDayOfWeek";
import Header from "../../../Header/Header";
import City from "../../../City/City";
// styles
import "./ResultWeek.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ResultWeek = (props) => {
  return (
    <div className='result__week'>
      <Header />
      <City cityName={props.cityName} />
      <motion.div
        className='result__items'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {props.weatherInfoDaily.map((day) => {
          return (
            <motion.div
              className='result__item'
              key={day.dt}
              variants={childVariants}
            >
              <ResultDayOfWeek day={day} />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className='Go__back' variants={childVariants}></motion.div>
    </div>
  );
};
export default ResultWeek;
