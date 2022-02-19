import React, { useState } from "react";
import Request from "./Request/Request";
import Result from "./Result/Result";
import "./Main.css";
import BgImg from "../../assets/BgImg/BgImg";

const Main = (props) => {
  const [cityName, setCityName] = useState("");
  const [cityInfo, setCityInfo] = useState("");

  return (
    <BgImg cityInfo={cityInfo.daily}>
      <div className='main'>
        <Request
          setCityInfo={setCityInfo}
          forecastType={props.forecastType}
          setCityName={setCityName}
        />
        {cityInfo && (
          <Result
            weatherInfoDaily={cityInfo.daily}
            cityName={cityName}
            forecastType={props.forecastType}
          />
        )}
      </div>
    </BgImg>
  );
};
export default Main;
