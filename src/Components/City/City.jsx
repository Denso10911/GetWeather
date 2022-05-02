// library
import React from "react";
import { motion } from "framer-motion";
// styles
import "./City.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      mass: 1,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      delay: 0.5,
      type: "spring",
      mass: 1,
      damping: 20,
    },
  },
};
const City = (props) => {
  return (
    <motion.div
      className='cityName'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {props.cityName}
    </motion.div>
  );
};

export default City;
