import React, { useState } from "react";
import cl from './App.module.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  const [forecastType, setforecastType] = useState(true)

  return (
    <div className={cl.App}>
       <Header forecastType={forecastType} setforecastType={setforecastType}/>
       <Main forecastType={forecastType}/>
    </div>
  );
}

export default App;
