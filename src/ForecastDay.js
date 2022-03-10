import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastDay.css";

function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let monthsOfTheYear = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let date = new Date(props.data.dt * 1000);
    let day = daysOfTheWeek[date.getDay()];
    let month = monthsOfTheYear[date.getMonth()];
    let numberDate = date.getDate();
    return `${day}, ${month} ${numberDate}`;
  }

  return (
    <div className="ForecastDay">
      <div className="row">
        <div className="col-4 forecast-day">{day()}</div>
        <div className="col-4 icon">
          <WeatherIcon code={props.data.weather[0].icon} />
        </div>
        <div className="col-4">
          <span className="forecast-max">{maxTemperature()}</span>
          <span className="forecast-min">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}

export default ForecastDay;
