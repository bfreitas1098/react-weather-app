import React from "react";
import WeatherIcon from "./WeatherIcon";

function ForecastDay(props) {
  return (
    <div className="ForecastDay">
      <div className="col-sm-4 forecast-day">Tue, Mar 8</div>
      <div className="col-sm-4 icon">
        <WeatherIcon code={props[0].weather[0].icon} />
      </div>
      <div className="col-sm-4">
        <span className="forecast-max">{props[0].temp.max}°</span>
        <span className="forecast-min">{props[0].temp.min}°</span>
      </div>
    </div>
  );
}

export default ForecastDay;
