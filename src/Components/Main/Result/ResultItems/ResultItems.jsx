import React from "react";
import ResultItem from './ResultItem/ResultItem'
import './ResultItems.css'

const ResultItems = (props) => {
    let currentDays = props.cityInfo.list

    return (
        <div className="resultItems">
            {
                currentDays.map((day) => {
                    return (
                        <div className="resultItem" key={day.dt}>
                            <ResultItem day={day}/> 
                        </div>
                    )
                })
            }
            
        </div>
    )
}
export default ResultItems