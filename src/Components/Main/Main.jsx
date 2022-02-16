import React, { useState } from "react";
import Request from "./Request/Request";
import Result from "./Result/Result";

const Main = () => {
    
    const [cityInfo, setCityInfo] = useState('')
    
    return (
        <div className="main">
            <Request setCityInfo={setCityInfo}/>
            {cityInfo && <Result cityInfo={cityInfo} />}
            
        </div>
    )
}
export default Main