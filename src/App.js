import React from "react";
import cl from './App.module.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className={cl.App}>
       <Header />
       <Main />
    </div>
  );
}

export default App;
