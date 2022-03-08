import React, { useState } from "react";

import "./TemperatureUnits.css";

function TemperatureUnits(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function Celsius() {
    return Math.round(((props.fahrenheit - 32) * 5) / 9);
  }

  if (unit === `fahrenheit`) {
    return (
      <div className="TemperatureUnits">
        <h1>{props.fahrenheit}°</h1>
        <div className="row mt-2">
          <div className="col-sm">
            <a
              href="/"
              rel="noreferrer"
              className="celsius-link"
              onClick={showCelsius}
            >
              C
            </a>
          </div>
          <div className="col-sm unit-divider">
            <strong>|</strong>
          </div>
          <div className="col-sm">
            <a href="/" rel="noreferrer" className="fahrenheit-link active">
              F
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TemperatureUnits">
        <h1>{Celsius()}°</h1>
        <div className="row mt-2">
          <div className="col-sm">
            <a href="/" rel="noreferrer" className="celsius-link active">
              C
            </a>
          </div>
          <div className="col-sm unit-divider">
            <strong>|</strong>
          </div>
          <div className="col-sm">
            <a
              href="/"
              rel="noreferrer"
              className="fahrenheit-link"
              onClick={showFahrenheit}
            >
              F
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TemperatureUnits;
