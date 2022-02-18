import React from "react";
import './Result.css'
import ResultItems from "./ResultItems/ResultItems";

const Result = (props) => {
    
    let weatherInfoDailyOne = new Array(props.weatherInfoDaily[0])



    return (
        <div className="result">
            <h1 className="result__city">
                {props.cityName}
            </h1>
            {props.forecastType && <ResultItems weatherInfoDaily={weatherInfoDailyOne}/>}
            {!props.forecastType && <ResultItems weatherInfoDaily={props.weatherInfoDaily}/>}
        </div>
    )
}
export default Result