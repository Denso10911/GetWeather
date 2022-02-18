import moment from "moment";
import React from "react";


const ResultItem = (props) => {

    console.log(moment(props.day.dt).format('dddd Do MMMM'));

    let date = props.day.dt * 1000      
    let weather = props.day.weather[0]
    let temp = props.day.temp.day
    let feels_like = props.day.feels_like.day

    return (
            <>
                <div className="result__data">
                    <span>
                        {moment(date).format('dddd')}
                    </span>
                    <br/> 
                    <span>
                        {moment(date).format(' D MMMM')}
                    </span>
                </div>
                <div className="result__information">
                    <div className="result__temperature">
                        <div className="result__temperature_now">
                            {`${Math.round(temp)} °C`}
                        </div>
                        <div className="result__temperature_feels">
                            <p>Feels like</p>
                            <p>
                                {`${Math.round(feels_like)} °C`}
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