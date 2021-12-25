import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Oslo" />
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
        </a>{" "}
        and{" "}
        <a
          href="https://optimistic-swirles-e144a4.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
