import React, { useState } from "react";
import './Result.css'
import ResultItems from "./ResultItems/ResultItems";

const Result = (props) => {    

    return (
        <div className="result">
            <h1 className="result__city">
                {props.cityInfo.city.name}
            </h1>
            <ResultItems cityInfo={props.cityInfo}/>            
        </div>
    )
}
export default Result