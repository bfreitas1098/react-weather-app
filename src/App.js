import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import axios from "axios";

import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});

  let city = "Boca Raton, USA";
  const apiKey = "def97117db95d1d3d51e5affceff1ce7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);

  function showTemperature(response) {
    setLoaded(true);
    setWeatherInfo({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
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
          <h1>{weatherInfo.temperature}°</h1>
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
          <h5 className="mt-2">{weatherInfo.description}</h5>
          <div className="row">
            <div className="col-sm">
              <h6 className="mt-5">Wind</h6>
              <div className="wind-conditions">{weatherInfo.wind} mph</div>
            </div>
            <div className="col-sm">
              <h6 className="mt-5">Humidity</h6>
              <div className="humidity-conditions">{weatherInfo.humidity}%</div>
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
