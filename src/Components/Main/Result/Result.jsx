import React, { useState } from "react";

const Result = (props) => {
    let date = new Date(props.cityInfo.dt * 1000)
    let options ={
        year: 'numeric',
        day: 'numeric',
        weekday: 'long',
        month: 'long',

    }
    console.log(date.getFullYear() )

    return (
        <div className="result">
            <div className="result__city">
                {props.cityInfo.name}
            </div>
            <div className="result__data">
                 {date.toLocaleString('en', options)}
            </div>
        </div>
    )
}
export default Result