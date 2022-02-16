import axios from "axios";
import React, { useState } from "react";
import './Request.css'

const Request = (props) => {
    const [cityName, setCityName] = useState('')


    const cityValue = (e) => {
        setCityName(e.target.value)
    }

    const getCityRequest = (cityName) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9697c16aab527b11399f475e9507ca39`)
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