import React, { useState } from "react";
import Request from "./Request/Request";
import Result from "./Result/Result";

const Main = (props) => {
    
    const [cityInfo, setCityInfo] = useState('')
    
    return (
        <div className="main">
            <Request setCityInfo={setCityInfo} forecastType={props.forecastType}/>
            {cityInfo && <Result cityInfo={cityInfo} />}
            
        </div>
    )
}
export default Main