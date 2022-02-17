import axios from "axios";
import React, { useState } from "react";
import './Request.css'

const Request = (props) => {
    const [cityName, setCityName] = useState('')
    let cnt = props.forecastType ? 1 : 5

    const cityValue = (e) => {
        setCityName(e.target.value)
    }

    const getCityRequest = (cityName) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=5421867f9d50d00be45654af1ffcc8f4&cnt=${cnt}&units=metric`)
       .then((response) => {
            props.setCityInfo(response.data)
       })
    }

    return (
        <div className="request">
            <div className="request__title">
                <h3 >
                    Enter the city:
                </h3>
            </div>
           <div className="request__input">
               <input type="text" onChange={cityValue}/>
           </div>
           <div className="request__button">
               <button onClick={()=>getCityRequest(cityName)}>
                   Get
               </button>
           </div>
        </div>
    )
}
export default Request