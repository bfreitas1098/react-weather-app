import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    const apiKey = "dcc17c3d57640b0236dc66644f1c5237";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return <ForecastDay data={dailyForecast} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();

    return null;
  }
}

export default WeatherForecast;
