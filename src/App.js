import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherData from "./WeatherData";
import CurrentDate from "./CurrentDate";
import WeatherForecast from "./WeatherForecast";

import "./App.css";

function App(props) {
  const [weatherInfo, setWeatherInfo] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherInfo({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      loaded: true,
    });
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  function handlePosition(response) {
    let latitude = response.data.coord.lat;
    let longitude = response.data.coord.lon;
    const apiKey = "dcc17c3d57640b0236dc66644f1c5237";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemperature);
  }

  function Search() {
    const apiKey = "dcc17c3d57640b0236dc66644f1c5237";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleSearch(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.loaded) {
    return (
      <div className="App" onLoad={getCurrentLocation()}>
        <div className="container">
          <h4 className="mt-4">
            {weatherInfo.city}, {weatherInfo.country}
          </h4>
          <div className="mb-4 date">
            <CurrentDate date={weatherInfo.date} />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a location"
              autoFocus="on"
              className="search-box"
              onChange={handleSearch}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <WeatherData info={weatherInfo} />
        </div>
        <WeatherForecast coordinates={weatherInfo.coordinates} />
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
    Search();
    return "Loading weather...";
  }
}

export default App;
