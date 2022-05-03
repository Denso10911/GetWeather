// library
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
// components
import { weatherAPI } from "../../../API/api";
// styles
import "./Request.css";

const titleVariants = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 1,
      damping: 8,
    },
  },
  exit: {
    y: -200,
    opacity: 0,
  },
};

const formVariants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 1,
      damping: 8,
    },
  },
  exit: {
    y: 200,
    opacity: 0,
  },
};

const Request = (props) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div className='request'>
      <motion.div
        className='request_title'
        variants={titleVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h1>Get Weather</h1>
      </motion.div>
      <motion.div
        variants={formVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <Formik
          initialValues={{
            cityName: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              let responseLoc = await weatherAPI.getLocation(values.cityName);
              props.setCityName(responseLoc.data[0].name);
              let responseWeather = await weatherAPI.getWeather(
                responseLoc.data[0].lat,
                responseLoc.data[0].lon
              );
              props.setCityInfo(responseWeather.data);
              props.setforecastType(false);
              setError("");
              navigate("/day");
              resetForm();
            } catch (err) {
              setError(err);
            }
          }}
        >
          <Form className='request__form'>
            <Field
              id='cityName'
              className='request__input'
              name='cityName'
              placeholder="Let's find some city"
              autocomplete='off'
              autofocus='true'
            />

            <button type='submit' className='request__btn'>
              <FontAwesomeIcon icon='fa-solid fa-bolt' />
            </button>
          </Form>
        </Formik>
      </motion.div>

      <div className={error ? "request__error" : "request__error_none"}>
        we can't find this city, try again
      </div>
    </div>
  );
};
export default Request;
