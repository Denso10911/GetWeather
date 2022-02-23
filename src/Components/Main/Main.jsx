import React, { useState } from "react";
import Request from "./Request/Request";
import Result from "./Result/Result";
import "./Main.css";
import BgImg from "../../assets/BgImg/BgImg";

const Main = (props) => {
  const [cityName, setCityName] = useState("");
  const [cityInfo, setCityInfo] = useState("");

  return (
    <BgImg cityInfo={cityInfo.hourly} bgLineDeg={props.bgLineDeg}>
      <div className='main'>
        <Request
          setCityInfo={setCityInfo}
          setforecastType={props.setforecastType}
          setCityName={setCityName}
        />
        {cityInfo && (
          <Result
            weatherInfoDaily={cityInfo.daily}
            weatherInfoHourly={cityInfo.hourly}
            cityName={cityName}
            forecastType={props.forecastType}
            opacityPage={props.opacityPage}
          />
        )}
      </div>
    </BgImg>
  );
};
export default Main;
