import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import cl from "./App.module.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [forecastType, setforecastType] = useState(true);

  return (
    <BrowserRouter>
      <div className={cl.App}>
        <Header forecastType={forecastType} />
        <Main setforecastType={setforecastType} />
      </div>
    </BrowserRouter>
  );
}

library.add(faBolt);

export default App;
