import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherData.css";

function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="icon">
        <WeatherIcon code={props.info.icon} />
      </div>
      <h1>{props.info.temperature}°</h1>
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
      <h5 className="mt-2">{props.info.description}</h5>
      <div className="row">
        <div className="col-sm">
          <h6 className="mt-5">Wind</h6>
          <div className="wind-conditions">{props.info.wind} mph</div>
        </div>
        <div className="col-sm">
          <h6 className="mt-5">Humidity</h6>
          <div className="humidity-conditions">{props.info.humidity}%</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
