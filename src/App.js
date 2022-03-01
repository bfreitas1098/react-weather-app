import React from "react";
import Conditions from "./Conditions";
import Search from "./Search";

import "./App.css";

export default function App() {
  let weatherData = {
    city: "Miami",
    date: "Wednesday 02:30 PM",
    temperature: "80",
  };
  return (
    <div className="App">
      <div className="page">
        <div className="row main-temp">
          <div className="col-6 col-sm-1 temperature">
            <h1>{weatherData.temperature}°</h1>
          </div>
          <div className="col-6 col-sm-1 units">
            <ul>
              <li className="celsius">
                <button id="celsius-link" className="active color">
                  C°
                </button>
              </li>
              <li className="fahrenheit">
                <button id="fahrenheit-link" className="active color">
                  F°
                </button>
              </li>
            </ul>
          </div>
          <Search />
        </div>
        <ul>
          <li>
            <h3>in {weatherData.city}</h3>
          </li>
          <li>
            <h6>{weatherData.date}</h6>
          </li>
        </ul>
        <Conditions />
      </div>
      <br />
      <div className="forecast"></div>
      <p className="bottom-line">
        <a
          href="https://github.com/bfreitas1098/weather-app"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Open-source code
        </a>{" "}
        by Barbara Freitas
      </p>
    </div>
  );
}
