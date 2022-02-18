import axios from "axios";
import React, { useState } from "react";
import './Request.css'

const Request = (props) => {
    const [cityNameInput, setCityNameInput] = useState('')

    const cityValue = (e) => {
        setCityNameInput(e.target.value)
    }

    const getCityRequest = async (cityNameInput) => {
        setCityNameInput('')
        let responseLoc = await axios
            .get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityNameInput}&limit=1&appid=5421867f9d50d00be45654af1ffcc8f4`)
            
        props.setCityName(responseLoc.data[0].name)
        let responseWeather = await axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${responseLoc.data[0].lat}&lon=${responseLoc.data[0].lon}&exclude=minutely&units=metric&appid=5421867f9d50d00be45654af1ffcc8f4`)
        props.setCityInfo(responseWeather.data)
       }    

    return (
        <div className="request">
            <div className="request__title">
                <h3 >
                    Enter the city:
                </h3>
            </div>
           <div className="request__input">
               <input type="text" onChange={cityValue} value={cityNameInput}/>
           </div>
           <div className="request__button">
               <button onClick={()=>getCityRequest(cityNameInput)}>
                   Get
               </button>
           </div>
        </div>
    )
}
export default Request