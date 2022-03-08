import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-sm-4 forecast-day">Tue, Mar 14</div>
        <div className="col-sm-4 icon">
          <WeatherIcon code="01d" />
        </div>
        <div className="col-sm-4">
          <span className="forecast-max">60°</span>
          <span className="forecast-min">52°</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
