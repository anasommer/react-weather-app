import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a href="http://anasommer.com" target="_blank" rel="noreferrer">
            Ana Sommer
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/anasommer/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced in Github
          </a>
        </footer>
      </div>
    </div>
  );
}
