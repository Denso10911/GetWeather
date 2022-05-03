import React from "react";
import { motion } from "framer-motion";
import moment from "moment";

import "./Date.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      type: "spring",
      mass: 1,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      delay: 0.7,
      type: "spring",
      mass: 1,
      damping: 20,
    },
  },
};

const Date = (props) => {
  return (
    <motion.div
      className='result__day_data'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {moment(props.date).format("dddd D MMMM y")}
    </motion.div>
  );
};

export default Date;
