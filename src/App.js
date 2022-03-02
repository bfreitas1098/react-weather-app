import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import axios from "axios";

import "./App.css";

function App() {
  let city = "Boca Raton, USA";
  const [temperature, setTemperature] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const apiKey = "def97117db95d1d3d51e5affceff1ce7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="App">
        <div className="container">
          <h4 className="mt-4">Boca Raton, USA</h4>
          <div className="mb-4 date">Wednesday 11:00 AM</div>
          <Search />
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_154.png"
            alt="Weather icon"
          />
          <h1>{temperature}°</h1>
          <div className="row mt-2">
            <div className="col-sm">
              <a href="/" rel="noreferrer" className="celsius-link">
                C
              </a>
            </div>
            <div className="col-sm unit-divider">
              <strong>|</strong>
            </div>
            <div className="col-sm">
              <a href="/" rel="noreferrer" className="fahrenheit-link">
                F
              </a>
            </div>
          </div>
          <br />
          <h5 className="mt-2">Partly Cloudy</h5>
          <div className="row">
            <div className="col-sm">
              <h6 className="mt-5">Wind</h6>
              <div className="wind-conditions">5 mph</div>
            </div>
            <div className="col-sm">
              <h6 className="mt-5">Humidity</h6>
              <div className="humidity-conditions">60%</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default App;
