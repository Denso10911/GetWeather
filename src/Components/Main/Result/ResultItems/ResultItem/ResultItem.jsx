import React from "react";


const ResultItem = (props) => {

    let date = new Date(props.day.dt * 1000)
    let options ={
        year: 'numeric',
        day: 'numeric',
        weekday: 'long',
        month: 'long',
    }    
    let weather = props.day.weather[0]
    let temp = props.day.main

    return (
            <>
                <div className="result__data">
                    {date.toLocaleString('en', options)}
                </div>
                <div className="result__information">
                    <div className="result__temperature">
                        <div className="result__temperature_now">
                            {`${Math.round(temp.temp)} °C`}
                        </div>
                        <div className="result__temperature_feels">
                            <p>Feels like</p>
                            <p>
                                {`${Math.round(temp.feels_like)} °C`}
                            </p>
                        </div>
                    </div>       
                    <div className="result__weatherIcon">
                        <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={`${weather.main}`} />
                    </div>     
                    <div className="result__weatherDescription">
                        {weather.main}
                    </div>
                </div>
            </>
    )
}

export default ResultItem