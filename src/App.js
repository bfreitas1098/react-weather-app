import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import axios from "axios";

import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({ loaded: false });

  function showTemperature(response) {
    setWeatherInfo({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      iconUrl: `https://cdn.onlinewebfonts.com/svg/img_154.png`,
      date: "Wednesday 11:00 AM",
      loaded: true,
    });
  }

  if (weatherInfo.loaded) {
    return (
      <div className="App">
        <div className="container">
          <h4 className="mt-4">
            {weatherInfo.city}, {weatherInfo.country}
          </h4>
          <div className="mb-4 date">{weatherInfo.date}</div>
          <Search />
          <img src={weatherInfo.iconUrl} alt="Weather icon" />
          <h1>{weatherInfo.temperature}</h1>
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
        <p className="bottom-line">
          This weather app was coded by{" "}
          <a
            href="https://hopeful-franklin-29cc80.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Barbara Freitas
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/bfreitas1098/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </div>
    );
  } else {
    let city = "Boca Raton, USA";
    const apiKey = "dcc17c3d57640b0236dc66644f1c5237";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemperature);

    return "Loading weather...";
  }
}

export default App;
