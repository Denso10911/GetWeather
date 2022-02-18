import React, { useState } from "react";
import Request from "./Request/Request";
import Result from "./Result/Result";

const Main = (props) => {

    const [cityName, setCityName] = useState('')
    const [cityInfo, setCityInfo] = useState('')

    
    return (
        <div className="main">
            <Request setCityInfo={setCityInfo} forecastType={props.forecastType} setCityName={setCityName}/>
            {cityInfo && <Result weatherInfoDaily={cityInfo.daily} cityName={cityName} forecastType={props.forecastType}/>}
            
        </div>
    )
}
export default Main