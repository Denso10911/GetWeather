import React from "react";
import { weatherAPI } from "../../../API/api";
import "./Request.css";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Request = (props) => {
  return (
    <div className='request'>
      <Formik
        initialValues={{
          cityName: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          let responseLoc = await weatherAPI.getLocation(values.cityName);
          props.setCityName(responseLoc.data[0].name);
          let responseWeather = await weatherAPI.getWeather(
            responseLoc.data[0].lat,
            responseLoc.data[0].lon
          );
          props.setCityInfo(responseWeather.data);
          resetForm();
        }}
      >
        <Form className='request__form'>
          <Field
            id='cityName'
            className='request__input'
            name='cityName'
            placeholder='Writte city name'
            autocomplete='off'
          />
          <button type='submit' className='request__btn'>
            <FontAwesomeIcon icon='fa-solid fa-bolt' />
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default Request;
