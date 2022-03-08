import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <ForecastDay data={forecast} />
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    const apiKey = "dcc17c3d57640b0236dc66644f1c5237";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}

export default WeatherForecast;
