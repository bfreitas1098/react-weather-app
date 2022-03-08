import React from "react";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnits from "./TemperatureUnits";

import "./WeatherData.css";

function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="icon">
        <WeatherIcon code={props.info.icon} />
      </div>
      <TemperatureUnits fahrenheit={props.info.temperature} />
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
