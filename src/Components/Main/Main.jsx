import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Request from "./Request/Request";
import "./Main.css";
import BgImg from "../../assets/BgImg/BgImg";
import ResultDay from "./Result/ResultDay/ResultDay";
import ResultWeek from "./Result/ResultWeek/ResultWeek";

const Main = (props) => {
  const [cityName, setCityName] = useState("");
  const [cityInfo, setCityInfo] = useState("");
  const location = useLocation();

  return (
    <div className='main'>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path='GetWeather'
            element={
              <Request
                setCityInfo={setCityInfo}
                setforecastType={props.setforecastType}
                setCityName={setCityName}
              />
            }
          />
          <Route
            path='day'
            element={
              <ResultDay weatherHourly={cityInfo.hourly} cityName={cityName} />
            }
          />
          <Route
            path='week'
            element={
              <ResultWeek
                weatherInfoDaily={cityInfo.daily}
                cityName={cityName}
              />
            }
          />
          <Route
            path='*'
            element={
              <Request
                setCityInfo={setCityInfo}
                setforecastType={props.setforecastType}
                setCityName={setCityName}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
export default Main;
