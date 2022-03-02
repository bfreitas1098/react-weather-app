import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
// import axios from "axios";

import "./App.css";

function App() {
  // const [weatherInfo, setWeatherInfo] = useState({ loaded: false });

  // let city = "Boca Raton, USA";
  // const apiKey = "ed1ad0d4f5bbf7823ad1cdd74e7abf8c";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  // axios.get(apiUrl).then(showTemperature);

  // function showTemperature(response) {
  //  setWeatherInfo({
  //  city: response.data.name,
  //  country: response.data.sys.country,
  // temperature: Math.round(response.data.main.temp),
  // description: response.data.weather[0].description,
  // wind: Math.round(response.data.wind.speed),
  // humidity: response.data.main.humidity,
  // iconUrl: `https://cdn.onlinewebfonts.com/svg/img_154.png`,
  // date: "Wednesday 11:00 AM",
  // loaded: true,
  // });
  // }

  //  if (weatherInfo.loaded) {
  return (
    <div className="App">
      <div className="container">
        <h4 className="mt-4">Boca Raton, US</h4>
        <div className="mb-4 date">Wednesday 11:00 AM</div>
        <Search />
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_154.png"
          alt="Weather icon"
        />
        <h1>50°</h1>
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
}
// } else {
// return "Loading weather...";
// }

export default App;

// {weatherInfo.city}, {weatherInfo.country}
// {weatherInfo.date}
// {weatherInfo.iconUrl}
// {weatherInfo.temperature}
// {weatherInfo.description}
// {weatherInfo.wind}
// {weatherInfo.humidity}
