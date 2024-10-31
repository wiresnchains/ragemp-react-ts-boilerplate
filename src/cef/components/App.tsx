import { useState } from "react";
import logo from "../images/logo.svg";
import "../styles/style.scss";

function App() {
    return (
        <div className="app">
            <img src={logo} className="logo"/>
            <p>Hello, this is a react boilerplate!</p>
        </div>
    );
}

export default App;
